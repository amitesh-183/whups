'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ThemeButton from '@/components/ThemeButton'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'
import { Search, Menu, MessageSquare, Users, Mic2, Zap, Trophy, SquarePen, X, Mic, AudioLines, UserPlus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import GlobalFeed from '@/components/GlobalFeed'
import NavigationMob from '@/components/NavigationMob'


const creators = [
    {
        name: "Liam Crossfield",
        role: "Pro Striker",
        image: "/social/leanardo.jpg",
    },
    {
        name: 'Ava “HoopQueen”',
        role: "Basketball Creator",
        image: "/social/avya.jpg",
    },
    {
        name: "Zane Prodigy",
        role: "Esports & Sports Fusion",
        image: "/social/maike.jpg",
    },
    {
        name: "Liam Crossfield",
        role: "Pro Striker",
        image: "/social/leanardo.jpg",
    },
    {
        name: 'Ava “HoopQueen”',
        role: "Basketball Creator",
        image: "/social/avya.jpg",
    },
    {
        name: "Liam Crossfield",
        role: "Pro Striker",
        image: "/social/leanardo.jpg",
    },
    {
        name: 'Ava “HoopQueen”',
        role: "Basketball Creator",
        image: "/social/avya.jpg",
    },
];

const socialTabs = [
    { icon: <Zap className="h-4 w-4" />, label: 'Feed', active: true, value: 'feed' },
    { icon: <Trophy className="h-4 w-4" />, label: 'Clubs', value: 'clubs' },
    { icon: <Users className="h-4 w-4" />, label: 'Friends', value: 'friends' },
    { icon: <MessageSquare className="h-4 w-4" />, label: 'Messages', value: 'messages' },
    { icon: <Mic2 className="h-4 w-4" />, label: 'Voice Rooms', value: 'voice-rooms' },
]

const Social = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Header />
            <main>
                <section className="md:px-12 px-4 relative">
                    <div className='flex flex-col items-center justify-center py-6'>
                        <div className="max-w-[100rem] h-full w-full rounded-3xl p-[1px] bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] drop-shadow-xl drop-shadow-[#02ffffa6] overflow-hidden">
                            <div className='relative'>
                                <div className='bg-black/60 absolute h-full w-full'></div>
                                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -translate-1/4 text-center w-full'>
                                    <h4 className='text-4xl md:text-6xl text text-border hero-font'>Your Stadium <br />
                                        <span className='text-3xl md:text-5xl'>Always Alive</span>
                                    </h4>
                                    <p className='max-w-xl mx-auto md:py-10 py-4 text-base md:text-xl text-white'>Watch highlights, share clips, chat with fans, and join the action-
                                        all at one place.</p>
                                    <div className=' flex gap-6 justify-center'>
                                        <ThemeButton title='Get Started' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 md:w-[300px] w-fit md:block hidden ' />
                                        <ThemeButton title='Get Started Now' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 md:hidden block w-[200px] h-10' />
                                    </div>
                                </div>
                                <div className='bg-[url(/social/hero.jpg)] h-[340px] md:h-[600px] bg-bottom w-full bg-cover rounded-3xl'></div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className='md:hidden flex items-center gap-2 justify-center pt-4 relative px-4'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        freeMode={true}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper mb-4"
                    >
                        <SwiperSlide className='!w-fit'>
                            <Button className='bg-blue-800 border-0 text-xs rounded-2xl font-semibold'>Feed</Button>
                        </SwiperSlide>
                        <SwiperSlide className='!w-fit'>
                            <Button className='bg-[#03006040] border-0 text-xs rounded-2xl font-semibold'>Clubs</Button>
                        </SwiperSlide>
                        <SwiperSlide className='!w-fit'>
                            <Button className='bg-[#03006040] border-0 text-xs rounded-2xl font-semibold'>Friends</Button>
                        </SwiperSlide>
                        <SwiperSlide className='!w-fit'>
                            <Button className='bg-[#03006040] border-0 text-xs rounded-2xl font-semibold'>Messages</Button>
                        </SwiperSlide>
                        <SwiperSlide className='!w-fit'>
                            <Button className='bg-[#03006040] border-0 text-xs rounded-2xl font-semibold'>Voice Rooms</Button>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="hidden md:flex min-h-screen p-8 md:px-12 px-4 ">
                    {/* ===== Sidebar ===== */}
                    {/* <div className="w-[220px] h-fit bg-[#0B0B24] pr-5 md:flex flex-col justify-between rounded-2xl hidden"> */}
                    <Tabs defaultValue='feed' className='flex-row gap-4 w-full'>
                        <div className='flex flex-col w-[230px] bg-[#0B0B24] pr-4 pt-6 sticky top-0 items-center h-[400px]'>
                            <Image src={'/social/logo.svg'} height={50} width={50} alt='whuups' />
                            <TabsList className="flex-col gap-4 my-4 h-fit p-0 w-full bg-transparent">
                                {socialTabs.map((item, i) => (
                                    <TabsTrigger
                                        value={item.value}
                                        key={i}
                                        className={`flex justify-start h-fit items-center rounded-none gap-3 w-full py-3 
                                            data-[state=active]:bg-[#0022FF] hover:bg-[#111132] text-white
                                            }`}
                                    >
                                        {item.icon}
                                        {item.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>
                        <TabsContent value='feed'>
                            {/* ===== Main Feed ===== */}
                            <GlobalFeed open={open} setOpen={setOpen} />
                        </TabsContent>
                    </Tabs>
                </div>

                <div className='md:hidden block'>
                    <GlobalFeed open={open} setOpen={setOpen} />
                </div>


                <div className="flex flex-col items-center py-10 text-white px-4">
                    {/* ===== Section Title ===== */}
                    <h2 className="text-2xl font-semibold mb-8">Suggested Creators</h2>

                    {/* ===== Creators List ===== */}
                    <div className="flex justify-center max-w-6xl md:ml-auto gap-6">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            freeMode={true}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper !p-6"
                            breakpoints={{
                                400: {
                                    slidesPerView: 1
                                }
                            }}
                        >
                            {creators.map((creator, index) => (
                                <SwiperSlide className='!w-auto'>
                                    <div
                                        key={index}
                                        className="bg-[#0B0B24]/70 rounded-2xl 
                            hover:scale-[1.02] transition-all duration-300 relative mt-12 p-[1px] bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, #00C4F5 0%, #6A00FF 50%, #FF00C7 100%)",
                                        }}
                                    >

                                        <div className="bg-[#0B0B24]/90 rounded-2xl p-5 flex flex-col items-center">
                                            <div className='relative p-[1px] bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] w-32 h-32 rounded-full -mt-20'>
                                                <Image
                                                    src={creator.image}
                                                    alt={creator.name}
                                                    width={100}
                                                    height={100}
                                                    className="rounded-full mb-4 border-2 border-[#1E1E3A] h-32 w-32 object-cover absolute"
                                                />
                                            </div>
                                            <h3 className="text-lg font-semibold">{creator.name}</h3>
                                            <p className="text-[#00C4F5] text-sm mb-4">{creator.role}</p>

                                            <Button
                                                className="rounded-xl bg-gradient-to-r from-pink-600 to-blue-800 px-5 py-2 text-white font-medium"
                                                variant="ghost"
                                            >
                                                <UserPlus /> Follow
                                            </Button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* ===== Poll Card ===== */}
                    <div
                        className="relative mt-12 p-[1px] rounded-2xl bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] hover:scale-[1.01] transition-all duration-300"
                    >
                        <div className="bg-[#0B0B24] rounded-2xl p-6 flex flex-col gap-5">
                            <div className="flex md:flex-row flex-col gap-6">
                                <div className='max-w-md'>
                                    {/* User Header */}
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src="/social/girl.jpg"
                                            alt="user"
                                            width={40}
                                            height={40}
                                            className="rounded-full h-20 w-20 object-cover"
                                        />
                                        <p className="font-semibold text-xl">
                                            Which team will win the championship ?
                                        </p>
                                    </div>

                                    {/* Teams */}
                                    <div className="flex justify-around items-center">
                                        <div className="flex flex-col items-center">
                                            <Image
                                                src="/social/king.jpg"
                                                alt="Titan Warriors"
                                                width={60}
                                                height={60}
                                                className="rounded-full w-16 h-16 object-cover"
                                            />
                                            <p className="mt-2 text-sm">Titan Warriors</p>
                                            <input type="radio" name="team" className="mt-1 accent-[#00C4F5]" />
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Image
                                                src="/social/phantom.jpg"
                                                alt="Phantom Strikers"
                                                width={60}
                                                height={60}
                                                className="rounded-full w-16 h-16 object-cover"
                                            />
                                            <p className="mt-2 text-sm">Phantom Strikers</p>
                                            <input type="radio" name="team" className="mt-1 accent-[#00C4F5]" />
                                        </div>
                                    </div>

                                    {/* Vote Button */}
                                    <div className='flex justify-center'>
                                        <Button className="mt-4 w-fit mx-auto bg-gradient-to-r from-[#FF00C7] to-[#0022FF] rounded-xl px-8 py-2 text-white font-semibold">
                                            Vote
                                        </Button>
                                    </div>
                                </div>

                                {/* Illustration */}
                                <div className="flex justify-center mt-2">
                                    <Image
                                        src="/social/support.svg"
                                        alt="Vote"
                                        width={180}
                                        height={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
            <Footer />
            <NavigationMob />
        </>
    )
}

export default Social