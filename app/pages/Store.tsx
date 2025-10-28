'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ThemeButton from '@/components/ThemeButton'
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ShoppingCart } from 'lucide-react'
import MarketPlace from '@/components/MarketPlace'
import { Button } from '@/components/ui/button'
import NavigationMob from '@/components/NavigationMob'

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

const Store = () => {
    return (
        <>
            <Header />
            <main>
                <div className='md:hidden flex items-center gap-2 px-4 pt-4 relative'>
                    <Button className='bg-blue-800 border-0 h-10 w-[70px] rounded-2xl font-semibold'>All</Button>
                    <Button className='bg-[#03006040] border-0 h-10 w-[70px] rounded-2xl font-semibold'>New</Button>
                    <Button className='bg-[#03006040] border-0 h-10 w-[70px] rounded-2xl font-semibold'>Popular</Button>
                    <Button className='bg-[#03006040] border-0 h-10 w-[70px] rounded-2xl font-semibold'>On sale</Button>
                </div>
                <section className='max-w-7xl mx-auto md:hidden block'>
                    <div className='flex items-center justify-between px-4'>
                        <h4 className='text-xl md:text-3xl font-bold py-4'>Category</h4>
                        <p className='text-sm'>View all</p>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper h-[160px]"
                    >
                        {trending.map((ticket, index) => (
                            <SwiperSlide key={index} className='!p-0 !w-[120px]'>
                                <BorderCard cardStyles=' !p-0'>
                                    <div>
                                        <Image src={ticket.image} height={200} width={180} alt='wallet' className='object-cover h-[80px] w-full rounded-2xl' />
                                    </div>
                                </BorderCard>
                                <h6 className='text-sm font-semibold text-center py-2'>{ticket.name}</h6>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
                <section className="md:px-12 relativet md:my-20 my-10">
                    <div className='flex flex-col items-center justify-center'>
                        <div className="max-w-[100rem] h-full w-full rounded-3xl p-[1px] bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] overflow-hidden">
                            <div className='relative'>
                                <div className='bg-black/70 absolute h-full w-full'></div>
                                <div className='absolute px-4 top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 -translate-y-[40%] text-center w-full'>
                                    <h4 className='text-2xl md:text-5xl text text-border hero-font'>🔥Big Sale This Week</h4>
                                    <p className='font-semibold text-sm md:text-2xl pt-2 md:w-auto w-60 mx-auto text-border hero-font'>Exclusive drops, bundles & merch with up to 50% off</p>
                                    <div className='md:pt-8 pt-4 flex md:flex-row flex-col items-center gap-6 justify-center'>
                                        <ThemeButton title='Shop Now' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0' />
                                    </div>
                                </div>
                                <div className='bg-[url(/home/Home-hero.png)] h-[220px] md:h-[440px] bg-center w-full bg-cover rounded-3xl'></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='max-w-7xl mx-auto my-10 md:hidden block'>
                    <div>
                        <h4 className='text-xl md:text-3xl font-bold py-4 px-4'>Trending Now 🔥</h4>
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
                        className="mySwiper h-[320px]"
                    >
                        {trending.map((ticket, index) => (
                            <SwiperSlide key={index} className='!p-0 !w-[200px]'>
                                <BorderCard cardStyles=' px-4 py-4 h-[280px]'>
                                    <div>
                                        <div className='flex justify-center'>
                                            <Image src={ticket.image} height={200} width={180} alt='wallet' className='object-cover h-[160px] rounded-2xl' />
                                        </div>
                                        <div className='px-1 pt-4 flex flex-col justify-center items-center'>
                                            <h6 className='text-md font-semibold text-center'>{ticket.name}</h6>
                                            {ticket.whu && <p className='flex gap-2 text-sm items-center pt-1'>{ticket.whu} WHU <Image src='/wallet/whu.svg' height={20} width={20} alt='wallet' /></p>}
                                        </div>
                                    </div>
                                </BorderCard>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
                <section className='max-w-7xl mx-auto my-10 md:block hidden'>
                    <div>
                        <h4 className='text-xl md:text-3xl font-bold py-4'>Trending Now 🔥</h4>
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
                        className="mySwiper h-[330px]"
                    >
                        {trending.map((ticket, index) => (
                            <SwiperSlide key={index} className='!p-0 !w-fit'>
                                <BorderCard cardStyles='w-fit !p-0'>
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
                <section className='max-w-7xl mx-auto my-10 md:hidden block'>
                    <div>
                        <h4 className='text-xl md:text-3xl font-bold py-4 px-4'>Suggestion For You</h4>
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
                        className="mySwiper h-[320px]"
                    >
                        {trending.map((ticket, index) => (
                            <SwiperSlide key={index} className='!p-0 !w-[200px]'>
                                <BorderCard cardStyles=' px-4 py-4 h-[260px]'>
                                    <div>
                                        <div className='flex justify-center'>
                                            <Image src={ticket.image} height={200} width={180} alt='wallet' className='object-cover h-[160px] rounded-2xl' />
                                        </div>
                                        <div className='px-1 pt-4 flex flex-col justify-center items-center'>
                                            <h6 className='text-md font-semibold text-center'>{ticket.name}</h6>
                                            {ticket.whu && <p className='flex gap-2 text-sm items-center pt-1'>{ticket.whu} WHU <Image src='/wallet/whu.svg' height={20} width={20} alt='wallet' /></p>}
                                        </div>
                                    </div>
                                </BorderCard>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
                <MarketPlace />
            </main >
            <Footer />
            <NavigationMob />
        </>
    )
}

export default Store