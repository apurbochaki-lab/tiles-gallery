import { Card } from "@heroui/react";

const TilesCard = ({ tile }) => {
    const {title, category, currency, description, dimensions, image, inStock, material, price} = tile;
    console.log(tile)
    return (
        <Card>
            <h2>{title}</h2>
        </Card>
    );
};

export default TilesCard;