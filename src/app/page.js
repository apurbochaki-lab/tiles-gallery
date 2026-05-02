import dns from "node:dns/promises"; 
dns.setServers(["1.1.1.1", "8.8.8.8"]); 

import Banner from "@/components/homepage/Banner";
import FeaturedTiles from "@/components/homepage/FeaturedTiles";

export default function Home() {
  return (
    <div className=" py-10">
      <Banner></Banner>
      <FeaturedTiles></FeaturedTiles>
    </div>
  );
}
