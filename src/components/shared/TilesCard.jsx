import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TilesCard = ({ tile }) => {
    const { title, category, currency, description, dimensions, image, inStock, material, price } = tile;
    // console.log(tile)
    return (
        <Card className="mt-5 m-5 space-y-2 shadow-md">
            <div className="relative w-full aspect-square">
                <Image
                    src={image}
                    alt={title}
                    fill={true}
                    className="object-cover rounded-lg shadow-md"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                >
                </Image>
            </div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="line-clamp-2 text-muted font-medium">{description}</p>
            <Link href={"/view-details"}>
                <Button variant="outline" className="w-full border border-gray-500/30 shadow-sm font-semibold text-[16px]">View Details</Button>
            </Link>
        </Card>
    );
};

export default TilesCard;