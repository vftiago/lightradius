import { HomeClient } from "@/components/home-client";
import { getServiceSpots } from "@/lib/edge-config";

const Home = async () => {
  const serviceSpots = await getServiceSpots();

  return <HomeClient serviceSpots={serviceSpots} />;
};

export default Home;
