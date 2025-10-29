'use client'
import FeatureCard from '@/components/Cards/FeatureCard'
import Footer from '@/components/Footer'
import GamesCards from '@/components/Cards/GamesCard'
import GlowCards from '@/components/Cards/GlowCards'
import Header from '@/components/Header'
import ThemeButton from '@/components/ThemeButton'
import Image from 'next/image'
import React from 'react'
import NavigationMob from '@/components/NavigationMob'
import Link from 'next/link'

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


const HomePage = () => {
    return (
        <>
            <Header />
            <main className='pt-6 md:px-0 px-4'>
                {/* <!-- Hero Section --> */}
                <section className="md:px-12 relative ">
                    <div className='flex flex-col items-center justify-center'>
                        <div className='bg-[url(/home/glow-home-l.svg)] left-0 bottom-10 absolute md:w-[500px] w-[70%] md:h-[700px] bg-cover z-0'></div>
                        <div className='bg-[url(/home/glow-home-r.svg)] right-0 bottom-10 absolute md:w-[500px] w-[70%] md:h-[700px] bg-cover z-0'></div>
                        <div className="max-w-[100rem] h-full w-full rounded-3xl p-[1px] bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] overflow-hidden">
                            <div className='relative'>
                                <div className='bg-black/70 absolute h-full w-full'></div>
                                <div className='absolute px-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full'>
                                    <h4 className='text-2xl md:text-5xl text text-border hero-font'>Step into the Digital Stadium</h4>
                                    <p className='font-semiboldtext-md md:text-xl text-white pt-2'>Play, connect, and own your experience—powered by Whuups.</p>
                                    <div className='pt-8 flex md:flex-row flex-col items-center gap-6 justify-center'>
                                        <Link href="/stadium">
                                            <ThemeButton title='Explore the Stadium' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0' />
                                        </Link>
                                        <Link href="/social">
                                            <ThemeButton title='Join Whuups Social' btnStyle='bg-[#03006040] hover:bg-[#040079] bg-none' />
                                        </Link>
                                    </div>
                                </div>
                                <div className='bg-[url(/home/Home-hero.png)] h-[440px] bg-center w-full bg-cover rounded-3xl'></div>
                            </div>
                        </div>
                    </div>
                    <div className='md:h-[220px]'>
                        <div className='py-6 flex md:flex-row flex-col gap-6'>
                            <div className='relative z-40 bg-gradient-to-b rounded-2xl from-[#C400F5] to-[#02FFFF] p-[1px] h-fit w-fit overflow-hidden'>
                                <Image src={"/home/man.jpg"} height={100} width={200} alt='Image' className='h-[120px] w-[140px] object-cover rounded-2xl' />
                            </div>
                            <div className={`relative rounded-2xl md:h-[120px] h-[180px] text-white w-full max-w-md bg-gradient-to-b from-[#C400F5] to-[#02FFFF]`}>
                                <div
                                    className="absolute z-30 flex md:flex-row flex-col items-center justify-between rounded-xl inset-[1px] bg-[#0f0e27] px-6 py-4"
                                >
                                    <div>
                                        <h4 className='font-bold font-poppins text-white md:text-left text-center py-3'>LIVE NOW</h4>
                                        <div className='flex gap-8'>
                                            <p>Match A</p>
                                            <p>32K watching</p>
                                        </div>
                                    </div>
                                    <ThemeButton title='Join' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 !w-32 text-base md:h-12 h-10 md:text-lg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature section */}
                {/* <section className='flex flex-col gap-4 md:h-screen bg-black items-center justify-center text-white relative'>
                    <div className='bg-[url(/glow.png)] left-0 absolute w-[300px] h-[800px] -translate-y-40 bg-cover z-10 md:block hidden'></div>
                    <div className='bg-[url(/glow-r.png)] right-0 absolute w-[300px] h-[800px] -translate-y-40 bg-cover z-10 md:block hidden'></div>
                    <h1 className='font-bold text-2xl md:text-5xl text-center leading-10 heading-font'>Enter the Digital Stadium</h1>
                    <p className='text-[#D2FFFF] text-lg md:text-2xl font-semibold tracking-wider text-center max-w-4xl md:py-6 mt-2'>Experience real-time matches, virtual fan events, and exclusive creator moments — all in one interactive arena.</p>
                    <div className='flex md:flex-row flex-col justify-center items-center gap-12 md:mt-20 mt-6'>
                        <FeatureCard title="Panoramic Stadium View" para="A futuristic, metallic-render panoramic of a digital arena with AR overlays." cta="Go to Stadium" isBtnNedded={true} />
                        <FeatureCard title="Live Events & Fan Zones" para="Attend virtual matches, live creator streams, and interactive cheering zones." cta="View Events" isBtnNedded={true} />
                        <FeatureCard title="Player Stats" para="Holographic player cards and live stats  above the field during matches." cta="Explore" isBtnNedded={true} />
                    </div>
                </section> */}

                <section className='md:pl-10 mx-auto'>
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
                        breakpoints={{
                            400: {
                                slidesPerView: 1
                            }
                        }}
                    >
                        {trending.map((ticket, index) => (
                            <SwiperSlide key={index} className='!p-0 !w-fit'>
                                <BorderCard cardStyles='w-fit !p-0'>
                                    <div>
                                        <Image src={ticket.image} height={200} width={300} alt='wallet' className='object-cover h-[160px] md:w-full rounded-t-2xl' />
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

                {/* section */}
                <section className='flex flex-col gap-4 md:h-screen bg-black items-center justify-center text-white relative md:py-0 py-10 md:mt-0 mt-10'>
                    <div className='bg-[url(/home/mid-glow-home.svg)] -translate-x-44 absolute w-[600px] h-[600px] bg-cover z-10 md:block hidden'></div>
                    <div className='bg-[url(/home/mid-glow-home.svg)] translate-x-44 absolute w-[600px] h-[600px] bg-cover z-10 md:block hidden'></div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        <GlowCards title="Earn" para="Earn rewards by joining games, quests, and fan events." imageUrl="/home/earn.jpg" />
                        <GlowCards title="Play" para="Play tournaments and arcade games with friends and fans." imageUrl="/home/play.jpg" />
                        <GlowCards title="Social" para="Join clubs, connect with fans, and share your moments." imageUrl="/home/social.jpg" />
                        <GlowCards title="Shop" para="Shop for collectibles, merch, and passes." imageUrl="/home/shop.jpg" />
                    </div>
                </section>


                <section>
                    <div className='flex md:flex-row flex-col items-center justify-center md:gap-28 gap-10 md:mb-48 md:py-0 py-20'>
                        <GamesCards title="Quests" imageUrl="/home/quests.jpg" />
                        <GamesCards title="Leaderboard" imageUrl="/home/leaderboard.png" />
                        <GamesCards title="Daily Rewards" imageUrl="/home/rewards.jpg" />
                    </div>
                </section>
            </main>
            <Footer />
            <NavigationMob />
        </>
    )
}

export default HomePage