'use client'
import GradientBorderCard from '@/components/Cards/GradientBorderCard'
import Footer from '@/components/Footer'
import ThemeButton from '@/components/ThemeButton'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Heart, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import BorderCard from '@/components/Cards/BorderCard'

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


const BundleDetails = () => {
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
                    <GradientBorderCard outerStyles='rounded-none bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]' borderStyles='rounded-none bg-none bg-[#000]'>
                        <div className='flex items-center'>
                            <div className='w-[60%]'>
                                <Image src={'/ads/juice.png'} height={400} width={500} alt='Product-image' className='h-[700px] w-full object-cover' />
                            </div>
                            <div className='py-10 px-8 w-[50%] mx-auto'>
                                <h4 className='font-black text-2xl'>Esports Premium Pack</h4>
                                <p className='text-sm'>Includes pro team jersey, gaming headset, and
                                    limited NFT badge.</p>

                                <h4 className='text-xl font-bold flex items-center gap-2 py-3'>120 WHU <span><Image src={'/wallet/whu.svg'} height={20} width={20} alt='wallet' /></span></h4>
                                <div className='flex gap-2 items-center mt-4'>
                                    <ThemeButton title='Add to Cart' btnStyle='border-0 h-12 from-[#C400F5] to-[#FF008C]' />
                                    <Heart size={30} />
                                </div>
                                <h4 className='mt-6 text-xl font-bold'>Items Included</h4>
                                <div className='flex items-center gap-4 py-4'>
                                    <div>
                                        <Image src={'/ads/juice.png'} height={400} width={500} alt='Product-image' className='h-[100px] w-[140px] object-cover' />
                                        <p className='text-center'>Pro-Jersey</p>
                                    </div>
                                    <div>
                                        <Image src={'/ads/juice.png'} height={400} width={500} alt='Product-image' className='h-[100px] w-[140px] object-cover' />
                                        <p className='text-center'>Headset</p>
                                    </div>
                                    <div>
                                        <Image src={'/ads/juice.png'} height={400} width={500} alt='Product-image' className='h-[100px] w-[140px] object-cover' />
                                        <p className='text-center'>NFT Badge</p>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <ThemeButton title='Buy Now' btnStyle='border-[#A4A0A0] w-[80%] from-[#03006040] to-[#03006040]' />
                                </div>
                            </div>
                        </div>
                    </GradientBorderCard>
                </section>
                <section className='w-[90%] ml-auto my-10'>
                    <div>
                        <h4 className='text-2xl font-bold py-4'>Similar</h4>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        freeMode={true}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        {trending.map((ticket, index) => (
                            <SwiperSlide key={index} className='!p-0 w-fit'>
                                <BorderCard cardStyles='w-fit !p-0 '>
                                    <div>
                                        <Image src={ticket.image} height={200} width={300} alt='wallet' className='object-cover h-[160px] w-full rounded-t-2xl' />
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

export default BundleDetails