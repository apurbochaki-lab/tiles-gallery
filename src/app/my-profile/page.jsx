'use client'

import TilesCard from '@/components/shared/TilesCard';
import React, { useState } from 'react';

const MyProfilePage = () => {
    const [search, setSearch] = useState("")
    console.log(search)

    const products = [
        {
            id: "tile_001",
            title: "Ceramic Blue Tile",
            description: "This premium-grade ceramic tile features a refined blue glaze finish that adds a calm and elegant touch to modern interiors. Manufactured through high-temperature firing, it offers excellent durability and resistance against moisture and stains. The smooth surface is easy to clean while maintaining a luxurious look. Ideal for bathrooms, kitchens, and feature walls, this tile blends functionality with aesthetic appeal. Its rich tone is inspired by Mediterranean design, making it suitable for both classic and contemporary spaces.",
            image: "https://d3hdqda5v86kzc.cloudfront.net/media/products/tiles/images/series/marakkesh/ambience/high-res/MARAKKESH%20Blue%20copy.jpg",
            category: "ceramic",
            price: 45.99,
            currency: "USD",
            dimensions: "60x60 cm",
            material: "Ceramic",
            inStock: true
        },
        {
            id: "tile_002",
            title: "Marble White Gloss Tile",
            description: "A high-gloss ceramic tile designed to replicate natural marble, featuring soft grey veining on a bright white base. The polished finish enhances light reflection, making rooms feel more spacious and luxurious. Built with advanced digital printing, it ensures consistency and durability. Perfect for living rooms, lobbies, and upscale interiors where elegance is a priority.",
            image: "https://d3hdqda5v86kzc.cloudfront.net/media/products/tiles/images/series/__sized__/classicsuper/ambience/high-res/Classicsuperamb-crop-c0-5__0-5-1600x775-70.jpg",
            category: "marble",
            price: 62.50,
            currency: "USD",
            dimensions: "60x120 cm",
            material: "Ceramic (Marble Finish)",
            inStock: true
        },
        {
            id: "tile_003",
            title: "Matte Grey Porcelain Tile",
            description: "This matte grey porcelain tile offers a sleek and modern aesthetic with high durability. The anti-slip surface makes it suitable for both indoor and outdoor use. Its neutral tone pairs well with industrial and minimalist designs, while its high-density composition ensures long-term performance.",
            image: "https://d3hdqda5v86kzc.cloudfront.net/media/products/tiles/images/series/__sized__/elegantalphaseries/ambience/high-res/ElegantAlphaSeries-crop-c0-5__0-5-1600x775-70.jpg",
            category: "porcelain",
            price: 55.00,
            currency: "USD",
            dimensions: "80x80 cm",
            material: "Porcelain",
            inStock: true
        },
        {
            id: "tile_004",
            title: "Beige Stone Texture Tile",
            description: "Inspired by natural sandstone, this tile features a warm beige tone with subtle grain patterns. It provides a natural, earthy feel while offering the durability of ceramic material. Suitable for both indoor and outdoor applications, including patios and bathrooms.",
            image: "https://d3hdqda5v86kzc.cloudfront.net/media/products/tiles/images/series/__sized__/elegantslab/ambience/high-res/elegantslab-crop-c0-5__0-5-1600x775.png",
            category: "stone",
            price: 48.75,
            currency: "USD",
            dimensions: "60x60 cm",
            material: "Ceramic (Stone Finish)",
            inStock: false
        },
        {
            id: "tile_005",
            title: "Dark Onyx Luxury Tile",
            description: "A bold luxury tile featuring deep black tones with golden veining inspired by natural onyx stone. Its polished surface adds a premium touch to high-end interiors. Perfect for feature walls and luxury spaces.",
            image: "https://d3hdqda5v86kzc.cloudfront.net/media/products/tiles/images/series/__sized__/hdtseries/ambience/high-res/HDTAmb-crop-c0-5__0-5-1600x775-70.jpg",
            category: "luxury",
            price: 85.99,
            currency: "USD",
            dimensions: "120x120 cm",
            material: "Porcelain (Onyx Finish)",
            inStock: true
        },
        {
            id: "tile_006",
            title: "Wood Finish Brown Tile",
            description: "A wood-look tile that replicates natural timber textures with high precision. It offers the warmth of wood with the durability and water resistance of ceramic, making it ideal for living rooms and bedrooms.",
            image: "https://d3hdqda5v86kzc.cloudfront.net/media/products/tiles/images/series/__sized__/woodartcollection/ambience/high-res/WoodArtCollectionamb-crop-c0-5__0-5-1600x775-70.jpg",
            category: "wood",
            price: 52.30,
            currency: "USD",
            dimensions: "20x120 cm",
            material: "Porcelain (Wood Finish)",
            inStock: true
        },
        {
            id: "tile_007",
            title: "Glossy Black Tile",
            description: "A sleek black tile with a mirror-like glossy finish that adds depth and drama to interiors. Highly reflective and easy to clean, perfect for modern kitchens and accent walls.",
            image: "https://i.ibb.co.com/rRCZXjTB/2298.jpg",
            category: "ceramic",
            price: 49.99,
            currency: "USD",
            dimensions: "60x60 cm",
            material: "Ceramic",
            inStock: true
        },
        {
            id: "tile_008",
            title: "Textured Outdoor Tile",
            description: "Engineered for outdoor durability, this tile features a rough texture that provides excellent grip. Resistant to weather, moisture, and heavy usage, ideal for terraces and pathways.",
            image: "https://d3hdqda5v86kzc.cloudfront.net/media/products/tiles/images/series/__sized__/stoneartcollections/ambience/high-res/STONEARTCOLLECTION1-crop-c0-5__0-5-1600x775-70.jpg",
            category: "outdoor",
            price: 58.20,
            currency: "USD",
            dimensions: "60x60 cm",
            material: "Porcelain",
            inStock: true
        },
        {
            id: "tile_009",
            title: "Carrara Marble Tile",
            description: "Inspired by Italian Carrara marble, this tile offers elegant white tones with soft grey veining. It provides a timeless and luxurious appearance suitable for premium interiors.",
            image: "https://d3hdqda5v86kzc.cloudfront.net/media/products/tiles/images/series/__sized__/astonseries/ambience/high-res/ASTONSERIESAMB-crop-c0-5__0-5-1600x775-70.jpg",
            category: "marble",
            price: 70.00,
            currency: "USD",
            dimensions: "60x120 cm",
            material: "Porcelain",
            inStock: true
        },
        {
            id: "tile_010",
            title: "Patterned Mosaic Tile",
            description: "A decorative tile featuring intricate geometric patterns. Ideal for backsplashes and accent areas, it adds character and artistic flair to interiors.",
            image: "https://d3hdqda5v86kzc.cloudfront.net/media/products/tiles/images/series/__sized__/cladding/ambience/high-res/cladingamb-crop-c0-5__0-5-1600x775-70.jpg",
            category: "decorative",
            price: 65.00,
            currency: "USD",
            dimensions: "30x30 cm",
            material: "Ceramic",
            inStock: true
        }
    ];

    const filteredItems = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    // console.log(filteredItems)

    return (
        <div className='py-10'>
            <h2 className='text-4xl font-bold text-center'>My Profile (Test Only)</h2>

            {/* Test Only */}
            <input
                className='border m-5 p-2 rounded-lg shadow-md'
                type='text'
                placeholder='Search here...'
                // value={search}
                name='search'
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn">Search</button>

            <div className='grid grid-cols-3'>
                {filteredItems.length === 0 && <h2 className='text-center text-4xl'>No Items Found!</h2>}

                {
                    filteredItems.map(p => <TilesCard key={p.id} tile={p}></TilesCard>)
                }
            </div>

        </div>
    );
};

export default MyProfilePage;