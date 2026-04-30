import TilesCard from "@/components/shared/TilesCard";
import { TilesData } from "@/lib/dataFetch";
import { Label, SearchField } from "@heroui/react";

const AllTilesPage = async () => {
    const tiles = await TilesData()

    return (
        <div className='max-w-7xl mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div></div>
                <h2 className="text-3xl font-bold text-center mt-7">All Tiles</h2>

                <div className="m-5">
                    <SearchField isRequired name="search">
                        <Label>Search Here</Label>
                        <SearchField.Group className={"bg-blue-100"}>
                            <SearchField.SearchIcon />
                            <SearchField.Input className="w-[280px] " placeholder="Search tiles..." />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField>
                </div>
            </div>

            <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    tiles.map(tile => <TilesCard key={tile.id} tile={tile}></TilesCard>)
                }
            </div>
        </div>
    );
};

export default AllTilesPage;