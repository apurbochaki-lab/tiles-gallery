import { TilesData } from '@/lib/dataFetch';
import { CircleFill } from '@gravity-ui/icons';
import { Card, Chip } from '@heroui/react';
import Image from 'next/image';

const tilesDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id)

    const tiles = await TilesData()
    // console.log(tiles)

    const tileDetails = tiles.find(tile => tile.id == id);
    const { title, category, currency, description, dimensions, image, inStock, price, material } = tileDetails;
    // console.log(tileDetails)

    return (
        <section className='bg-base-200'>
            <div className='max-w-7xl mx-auto'>

                <div className="hero py-20">
                    <div className="hero-content flex-col lg:flex-row gap-8">
                        <div className='relative'>
                            <Image
                                className=' rounded-lg shadow-md border-2 border-blue-500/30'
                                src={image}
                                width={2000} height={500}
                                // fill
                                alt={title}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw">
                            </Image>
                            <Chip size='lg' className="absolute top-4 right-4 bg-green-200 shadow-md">
                                <CircleFill width={6} />
                                <Chip.Label className="font-semibold">{category[0].toUpperCase() + category.slice(1)}</Chip.Label>
                            </Chip>
                        </div>


                        <div className='z-10 space-y-2'>

                            <Card className='bg-blue-50 shadow-md'>
                                <h1 className="text-5xl font-bold mb-5 text-blue-400">Tiles Information</h1>
                                <h2 className='text-2xl font-bold'>Type : {title}</h2>

                                <h2 className='text-lg font-semibold'>Material : {material}</h2>
                                <div className='text-lg font-semibold'>
                                    {inStock
                                        ? <h2 className='text-green-600'>inStock</h2>
                                        : <h2 className='text-red-600'>out-Of-Stock</h2>
                                    }
                                </div>
                                <h2 className='text-lg font-semibold'>Dimensions : {dimensions}</h2>
                                <h2 className='text-lg font-semibold'>Price : {price} {currency}</h2>
                                <p className="max-w-[1000px] font-medium">
                                    {description}
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default tilesDetailsPage;