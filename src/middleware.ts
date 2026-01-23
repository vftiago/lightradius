import { type NextRequest, NextResponse } from "next/server";

const EU_COUNTRIES = new Set([
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
]);

export type Region = "US" | "EU";

const getRegion = (country: string | null): Region => {
  if (country && EU_COUNTRIES.has(country)) {
    return "EU";
  }

  return "US";
};

export const middleware = (request: NextRequest) => {
  // Vercel provides geolocation via X-Vercel-IP-Country header (not available in dev)
  const country =
    process.env.NODE_ENV === "development"
      ? "DE"
      : request.headers.get("x-vercel-ip-country");
  const region = getRegion(country);

  const response = NextResponse.next();
  response.headers.set("x-region", region);

  return response;
};

export const config = {
  matcher: ["/"],
};
