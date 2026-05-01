import { CircleFill } from "@gravity-ui/icons";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TilesCard = ({ tile, className }) => {
    const { id, title, description, image, category } = tile;
    // console.log("TilesCard : server/client")
    return (
        <Card className={`space-y-2 shadow-md border border-black/20 ${className}`}>
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
            <Chip className="absolute top-6 right-6 bg-blue-200">
                <CircleFill width={6} />
                <Chip.Label className="font-semibold">{category[0].toUpperCase() + category.slice(1)}</Chip.Label>
            </Chip>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="line-clamp-2 text-muted font-medium">{description}</p>
            <Link href={`/tiles-details/${id}`}>
                <Button variant="outline" className="w-full border border-gray-500/30 shadow-sm font-semibold text-[16px]">View Details</Button>
            </Link>
        </Card>
    );
};

export default TilesCard;