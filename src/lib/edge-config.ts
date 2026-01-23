import { get } from "@vercel/edge-config";
import { type Region } from "@/middleware";

export type RegionPrices = {
  EU: number;
  US: number;
};

export type DynamicServiceInfo = {
  prices: RegionPrices;
  spots: number;
};

export type ServiceInfo = {
  webapp: DynamicServiceInfo;
  website: DynamicServiceInfo;
};

const getDefaultServiceInfo = (): ServiceInfo => {
  return {
    webapp: {
      prices: {
        EU: Number(process.env.WEBAPP_PRICE_EU),
        US: Number(process.env.WEBAPP_PRICE_US),
      },
      spots: 0,
    },
    website: {
      prices: {
        EU: Number(process.env.WEBSITE_PRICE_EU),
        US: Number(process.env.WEBSITE_PRICE_US),
      },
      spots: 0,
    },
  };
};

export const getServiceInfo = async (): Promise<ServiceInfo> => {
  try {
    const info = await get<ServiceInfo>("serviceInfo");
    if (info) {
      return info;
    }
    return getDefaultServiceInfo();
  } catch {
    return getDefaultServiceInfo();
  }
};

const REGION_CURRENCY: Record<Region, string> = {
  EU: "EUR",
  US: "USD",
};

const REGION_LOCALE: Record<Region, string> = {
  EU: "de-DE",
  US: "en-US",
};

export const formatPrice = (amount: number, region: Region): string => {
  const currency = REGION_CURRENCY[region];
  const locale = REGION_LOCALE[region];

  return new Intl.NumberFormat(locale, {
    currency,
    maximumFractionDigits: 0,
    style: "currency",
  }).format(amount);
};
