import { headers } from "next/headers";
import { HomeClient } from "@/components/home-client";
import { getServiceInfo } from "@/lib/edge-config";
import { type Region } from "@/middleware";

const Home = async () => {
  const headersList = await headers();
  const region = (headersList.get("x-region") || "US") as Region;
  const serviceInfo = await getServiceInfo();

  return <HomeClient region={region} serviceInfo={serviceInfo} />;
};

export default Home;
