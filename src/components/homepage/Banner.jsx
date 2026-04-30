import { Button } from "@heroui/react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <section className="max-w-7xl mx-auto">
            {/* Banner */}
            <div className="bg-[url('https://i.ibb.co.com/Kv9ZCx6/dreamina-2026-04-30-1595-A-modern-and-luxurious-hero-banner-for-a.jpg')] h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center justify-center rounded-lg shadow-md relative">

                {/* Main Content */}
                <div className="absolute m-3 md:top-[35%] md:left-[15%] z-10 text-white text-center backdrop-blur-md bg-white/20 px-8 py-6 rounded-xl border border-white/30">
                    <h2 className="text-[#3A312B] text-3xl font-bold">Discover Your Perfect Aesthetic</h2>

                    <Link href={"/all-tiles"}>
                        <Button size="lg" className="mt-5 bg-[#0F2A44] text-white hover:text-black">Browse Now</Button>
                    </Link>
                </div>
            </div>

            {/* Marquee */}
            <div className="mt-10 border border-blue-500/30 shadow-md bg-[#E8BD81]/25 p-5 rounded-lg">
                <Marquee pauseOnHover="true" speed={100} className="font-normal text-xl font-semibold">
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </section>
    );
};

export default Banner;