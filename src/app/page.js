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
