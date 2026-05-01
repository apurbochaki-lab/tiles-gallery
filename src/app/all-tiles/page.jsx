import SearchFeatures from "@/components/all-tiles-page/SearchFeatures";
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
        </div>
    );
};

export default AllTilesPage;