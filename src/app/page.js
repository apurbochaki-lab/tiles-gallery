import Banner from "@/components/homepage/Banner";
import FeaturedTiles from "@/components/homepage/FeaturedTiles";
import MarqueeText from "@/components/homepage/Marquee";

export default function Home() {
  return (
    <div className="py-10 bg-sky-50">
      <Banner></Banner>
      <MarqueeText></MarqueeText>
      <FeaturedTiles></FeaturedTiles>
    </div>
  );
}
