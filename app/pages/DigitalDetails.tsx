'use client'
import Footer from '@/components/Footer'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import BorderCard from '@/components/Cards/BorderCard';
import Image from 'next/image';
import ThemeButton from '@/components/ThemeButton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, CloudUpload, Heart, ShoppingCart } from 'lucide-react';
import GradientBorderCard from '@/components/Cards/GradientBorderCard';

const trending = [
    {
        id: 0,
        name: "Championship Final",
        image: "/profile/general-pass.jpg",
        description: "Access to event stream with community chat",
    },
    {
        id: 1,
        name: "Championship Final",
        tokens: "Not enough tokens",
        whu: 200,
        image: "/events/vip.jpg",
        description: "Exclusive lounge  + premium seats + perks",
    },
    {
        id: 2,
        name: "Championship Final",
        tokens: "Not enough tokens",
        whu: 200,
        image: "/events/ultra-vip.jpg",
        description: "Meet creators + collectibles + early acces",
    },
    {
        id: 3,
        name: "Championship Final",
        tokens: "Not enough tokens",
        whu: 200,
        image: "/events/ultra-vip.jpg",
        description: "Meet creators + collectibles + early acces",
    },
    {
        id: 4,
        name: "Championship Final",
        tokens: "Not enough tokens",
        whu: 200,
        image: "/events/ultra-vip.jpg",
        description: "Meet creators + collectibles + early acces",
    }
]

const DigitalDetails = () => {
    return (
        <>
            <header className='flex justify-between w-[80%] mx-auto pt-8'>
                <Link href='/store'>
                    <Button className='text-[#02FFFF] hover:underline bg-none bg-transparent flex items-center gap-2'><ArrowLeft />Back</Button>
                </Link>
                <Link href={'/cart'} className='relative'><ShoppingCart size={"36"} /> <span className='absolute top-2 right-1 translate-x-1/2 -translate-y-1/2 bg-red-600 text-white w-4 h-4 text-xs flex items-center justify-center rounded-full'>0</span></Link>
            </header>
            <main>
                <section className='w-[80%] mx-auto my-10'>
                    <GradientBorderCard outerStyles='rounded-none bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]' borderStyles='rounded-none bg-none bg-[#030131]'>
                        <div className='flex'>
                            <div className='w-[60%]'>
                                <Image src={'/ads/juice.png'} height={400} width={500} alt='Product-image' className='h-[620px] w-full object-cover' />
                            </div>
                            <div className='py-20 px-8 w-[50%] mx-auto'>
                                <h4 className='font-black text-lg'>Limited NFT Pass</h4>
                                <p className='text-sm'>Grants VIP access to digital events and special perks.</p>

                                <h4 className='text-xl font-bold flex items-center gap-2 mt-6 py-4'>700 WHU <span><Image src={'/wallet/whu.svg'} height={20} width={20} alt='wallet' /></span></h4>
                                <div className='flex gap-2 items-center'>
                                    <ThemeButton title='Add to Cart' btnStyle='border-0 h-10 from-[#C400F5] to-[#FF008C]' />
                                    <Heart size={30} />
                                </div>
                                <h5 className='text-xl font-semibold mt-6'>Product Details</h5>
                                <ul className='list-disc py-8'>
                                    <li>High quality and durable
                                    </li>
                                    <li>
                                        Free shipping
                                    </li>
                                    <li>
                                        Easy returns available
                                    </li>
                                </ul>
                                <ThemeButton title='Buy Now' btnStyle='mt-3 border-0 h-10 from-[#C400F5] to-[#FF008C]' />

                            </div>
                        </div>
                    </GradientBorderCard>
                </section>
                <section className='w-[90%] ml-auto my-10'>
                    <div>
                        <h4 className='text-3xl font-bold py-4'>Trending Now 🔥</h4>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        freeMode={true}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        {trending.map((ticket, index) => (
                            <SwiperSlide key={index} className='!p-0 !w-fit'>
                                <BorderCard cardStyles='w-fit !p-0 '>
                                    <div>
                                        <Image src={ticket.image} height={200} width={300} alt='wallet' className='object-cover h-[160px] rounded-t-2xl' />
                                        <div className='px-6 py-4'>
                                            <h6 className='text-2xl font-semibold text-center'>{ticket.name}</h6>
                                            <div className='flex justify-center'>
                                                <ThemeButton btnStyle='mt-4 border-[#02FFFF] px-8 h-12 bg-transparent bg-none' title='View Event' />
                                            </div>
                                        </div>
                                    </div>
                                </BorderCard>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default DigitalDetails