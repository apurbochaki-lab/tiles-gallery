import SearchFeatures from "@/components/all-tiles-page/SearchFeatures";
import TilesCard from "@/components/shared/TilesCard";
import { TilesData } from "@/lib/dataFetch";

const AllTilesPage = async () => {
    const tiles = await TilesData()

    return (
        <div className='max-w-7xl mx-auto'>
            <div className="">
                {/* <div></div> */}
                <h2 className="text-3xl font-bold text-center mt-7">All Tiles</h2>

                <SearchFeatures tiles={tiles}></SearchFeatures>
            </div>

            {/* <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    tiles.map(tile => <TilesCard key={tile.id} tile={tile}></TilesCard>)
                }
            </div> */}
        </div>
    );
};

export default AllTilesPage;