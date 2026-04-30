import { TilesData } from "@/lib/dataFetch";
import TilesCard from "../shared/TilesCard";

const FeaturedTiles = async () => {

    const tiles = await TilesData()
    // console.log(tiles)

    return (
        <section className="max-w-7xl mx-auto">
            <h2 className="mt-15 text-4xl font-bold text-center">Featured Tiles</h2>

            <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    tiles.slice(0, 4).map(tile => <TilesCard key={tile.id} tile={tile}></TilesCard>)
                }
            </div>
        </section>
    );
};

export default FeaturedTiles;