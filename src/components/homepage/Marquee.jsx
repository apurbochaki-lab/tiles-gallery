import { TilesData } from "@/lib/dataFetch";
import Marquee from "react-fast-marquee";

const MarqueeText = async () => {
    const tiles = await TilesData()

    return (
        <section className="max-w-7xl mx-auto">
            <div className="mt-10 m-5 border border-blue-500/30 shadow-md bg-[#E8BD81]/25 p-5 rounded-lg">
                <Marquee pauseOnHover="true" speed={100} className="font-normal text-xl font-semibold">
                    {
                        tiles.map((tile, ind) => <span key={ind} className="mr-15">
                            New Arrivals: {tile.title} | Weekly Feature: Modern Geometric Patterns | Join the Community...
                        </span>)
                    }
                </Marquee>
            </div>
        </section>
    );
};

export default MarqueeText;