import { get } from "@vercel/edge-config";

export type ServiceSpots = {
  custom: null;
  webapp: number;
  website: number;
};

const DEFAULT_SPOTS: ServiceSpots = {
  custom: null,
  webapp: 0,
  website: 0,
};

export async function getServiceSpots(): Promise<ServiceSpots> {
  try {
    const spots = await get<ServiceSpots>("serviceSpots");
    if (spots) {
      return spots;
    }
    return DEFAULT_SPOTS;
  } catch {
    return DEFAULT_SPOTS;
  }
}
