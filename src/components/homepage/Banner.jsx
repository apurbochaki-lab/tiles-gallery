"use client"

import { Button } from "@heroui/react";
import Link from "next/link";
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {

    return (
        <section className="max-w-7xl mx-auto">
            {/* Banner */}
            <Swiper className='mt-10'
                navigation={true}
                pagination={true}
                autoplay={true}
                modules={[Navigation, Pagination, Autoplay]}>
                <SwiperSlide>
                    <div className="bg-[url('https://i.ibb.co.com/Kv9ZCx6/dreamina-2026-04-30-1595-A-modern-and-luxurious-hero-banner-for-a.jpg')] h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center justify-center rounded-lg shadow-md relative">

                        {/* Main Content */}
                        <div className="absolute m-3 md:top-[35%] md:left-[15%] z-10 text-white text-center backdrop-blur-md bg-white/20 px-8 py-6 rounded-xl border border-white/30">
                            <h2 className="text-[#3A312B] text-3xl font-bold">Discover Your Perfect Aesthetic</h2>

                            <Link href={"/all-tiles"}>
                                <Button size="lg" className="mt-5 bg-[#0F2A44] text-white hover:text-black">Browse Now</Button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[url('https://i.ibb.co.com/HfzwJkP4/Tiles-2.jpg')] h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center justify-center rounded-lg shadow-md relative">

                        {/* Main Content */}
                        <div className="absolute m-3 md:top-[35%] md:left-[50%] z-10 text-white text-center backdrop-blur-md bg-black/20 px-8 py-6 rounded-xl border border-white/30">
                            <h2 className="text-white text-3xl font-bold">Discover Your Perfect Aesthetic</h2>

                            <Link href={"/all-tiles"}>
                                <Button size="lg" className="mt-5 bg-[#F3F0E9] text-black font-bold hover:text-black">Browse Now</Button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[url('https://i.ibb.co.com/fd1r8PKk/Tiles-3.jpg')] h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center justify-center rounded-lg shadow-md relative">

                        {/* Main Content */}
                        <div className="absolute m-3 md:top-[35%] md:left-[5%] z-10 text-white text-center backdrop-blur-md bg-[#D4B86D]/20 px-8 py-6 rounded-xl border border-white/30">
                            <h2 className="text-white text-3xl font-bold">Discover Your <span className='text-black'>Perfect</span> Aesthetic</h2>

                            <Link href={"/all-tiles"}>
                                <Button size="lg" className="mt-5 bg-[#0F2A44] text-white hover:text-black">Browse Now</Button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[url('https://i.ibb.co.com/sp75vnF7/Tiles-4.jpg')] h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center justify-center rounded-lg shadow-md relative">

                        {/* Main Content */}
                        <div className="absolute m-3 md:top-[60%] md:left-[30%] z-10 text-white text-center backdrop-blur-md bg-white/20 px-8 py-6 rounded-xl border border-white/30">
                            <h2 className="text-white text-3xl font-bold">Discover Your <span className='text-[#1D2D41]'>Perfect Aesthetic</span></h2>

                            <Link href={"/all-tiles"}>
                                <Button size="lg" className="mt-5 bg-[#0F2A44] text-white hover:text-black">Browse Now</Button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[url('https://i.ibb.co.com/TDWQTzyX/Tiles-5.jpg')] h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center justify-center rounded-lg shadow-md relative">

                        {/* Main Content */}
                        <div className="absolute m-3 md:top-[40%] md:left-[30%] z-10 text-white text-center backdrop-blur-md bg-white/20 px-8 py-6 rounded-xl border border-white/30">
                            <h2 className="text-[#3A312B] text-3xl font-bold">Discover Your Perfect Aesthetic</h2>

                            <Link href={"/all-tiles"}>
                                <Button size="lg" className="mt-5 bg-[#0F2A44] text-white hover:text-black">Browse Now</Button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            
        </section>
    );
};

export default Banner;