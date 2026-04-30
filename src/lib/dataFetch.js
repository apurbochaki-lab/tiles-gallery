export const TilesData = async() => {
    const res = await fetch("https://tiles-gallery-rust.vercel.app/data.json");
    const tiles = await res.json();
    return tiles;
}