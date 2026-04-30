'use client'

import { Label, SearchField } from "@heroui/react";
import { useState } from "react";
import TilesCard from "../shared/TilesCard";

const SearchFeatures = ({ tiles }) => {
    // console.log(tiles)

    const [search, setSearch] = useState("")
    // console.log(search)

    // Filter Logic
    const filteredTiles = tiles.filter(t => t.title.toLowerCase().includes(search.toLowerCase()))
    // console.log(filteredTiles)

    return (
        <div className="m-5 max-w-7xl mx-auto">
            <div className="">
                <SearchField
                    className="max-w-70 mx-auto"
                    isRequired
                    name="search"
                    // value={search}
                    onChange={(value) => setSearch(value)}>
                    <Label>Search our best products</Label>
                    <SearchField.Group className={"bg-blue-100"}>
                        <SearchField.SearchIcon />
                        <SearchField.Input className="w-[280px]" placeholder="Search tiles..." />
                        <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>

            </div>

            {filteredTiles.length === 0 && <h2 className="text-3xl text-center py-20">No Items Found!</h2>}

            <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                {
                    filteredTiles.map(tile => <TilesCard key={tile.id} tile={tile}></TilesCard>)
                }
            </div>
        </div>
    );
};

export default SearchFeatures;