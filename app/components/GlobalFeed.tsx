'use client'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { Input } from './ui/input';
import { AudioLines, Menu, Mic, Search, SquarePen, X } from 'lucide-react';
import { Button } from './ui/button';
import GradientBorderCard from './Cards/GradientBorderCard';
import BorderCard from './Cards/BorderCard';
import Image from 'next/image';
import ThemeButton from './ThemeButton';

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const GlobalFeed = ({ open, setOpen }: Props) => {
    return (
        <>
            <main className=" md:px-8 px-4 overflow-hidden">
                {/* Top Bar */}
                <div className="flex justify-between items-center mb-6 relative">
                    <div className='flex items-center gap-3 w-full'>
                        <div className="flex items-center gap-3 bg-[#03006040] border border-[#A4A0A0] rounded-2xl md:rounded-xl px-4 md:py-1.5 md:w-[300px] w-full">
                            <Input
                                placeholder="What's on your mind ?"
                                className="bg-transparent border-none text-sm focus-visible:ring-0 text-white"
                            />
                            <Search className="h-4 w-4" />
                        </div>
                        <Button className='hidden md:flex md:w-40 h-12 border rounded-2xl bg-[#03006040] border-[#A4A0A0] font-semibold cursor-pointer'>Create <SquarePen className='!w-5 !h-5' /></Button>
                        <div className='md:hidden block' onClick={() => setOpen(!open)}>
                            <Button
                                variant="ghost"
                                className="flex items-center justify-center gap-2 mt-auto hover:bg-[#111132]"
                            >
                                <Menu className="!h-7 !w-7" />
                            </Button>
                        </div>
                    </div>
                    <div className='md:block hidden' onClick={() => setOpen(!open)}>
                        <Button
                            variant="ghost"
                            className="flex items-center justify-center gap-2 mt-auto hover:bg-[#111132] hover:text-white"
                        >
                            <Menu className="!h-7 !w-7" />
                        </Button>
                    </div>
                    {/* menu bar */}
                    <div className={`${open ? 'h-[500px]' : 'h-0'} overflow-hidden absolute right-0 z-10 top-12 duration-500 ease-in-out transition-all w-[400px]`}>
                        <BorderCard cardStyles='!p-0 overflow-hidden'>
                            <X className='absolute top-2 right-3 z-20 cursor-pointer' size={'28'} onClick={() => setOpen(!open)} />
                            <div className=' bg-[#03006040] backdrop-blur-[2px] rounded-2xl p-8 px-12 h-[500px] overflow-y-scroll custom-scroll'>
                                {/* Online Friends */}
                                <div>
                                    <h4 className='text-xl font-bold'>Friend Online</h4>
                                    <GradientBorderCard outerStyles='bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] mt-3'>
                                        <div className='rounded-2xl bg-[#020617] px-2 py-4'>
                                            <div className='flex items-center gap-4'>
                                                <div className='relative p-[2px] bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] min-w-16 h-16 rounded-full'>
                                                    <span className='bg-green-500 h-3 w-3 rounded-full absolute bottom-1 right-1'></span>
                                                    <Image
                                                        src={'/social/avya.jpg'}
                                                        alt='Emma'
                                                        width={100}
                                                        height={100}
                                                        className="rounded-full h-full w-full"
                                                    />
                                                </div>
                                                <div>
                                                    <h6 className='font-semibold'>Eva Mathew</h6>
                                                    <p className='text-xs'>Hii ,Are you watching
                                                        finals ?</p>
                                                </div>
                                                <ThemeButton title='Reply' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 h-8 w-16 md:block hidden text-xs' />
                                            </div>
                                            <div className='flex items-center gap-4 mt-4'>
                                                <div className='relative p-[2px] bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] min-w-16 h-16 rounded-full'>
                                                    <Image
                                                        src={'/social/avya.jpg'}
                                                        alt='Emma'
                                                        width={100}
                                                        height={100}
                                                        className="rounded-full h-full w-full"
                                                    />
                                                </div>
                                                <div>
                                                    <h6 className='font-semibold'>Eva Mathew</h6>
                                                    <p className='text-xs'>Hii ,Are you watching
                                                        finals ?</p>
                                                </div>
                                                <ThemeButton title='Chat' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 h-8 w-16 md:block hidden text-xs' />
                                            </div>
                                        </div>
                                    </GradientBorderCard>
                                </div>
                                {/* Live stream */}
                                <div>
                                    <h4 className='text-xl font-bold mt-6'>Live Streaming</h4>
                                    <GradientBorderCard outerStyles='bg-gradient-to-b from-[#C400F5] via-[#02FFFF]] to-[#FA1500] mt-3'>
                                        <div className='rounded-2xl bg-[#020617] px-2 py-4'>
                                            <div className='shadow-md px-2 py-2 shadow-[#02FFFF] rounded-2xl'>

                                                <div className='flex items-center gap-4'>
                                                    <div className='relative p-[2px] bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] min-w-12 h-12 rounded-full'>
                                                        <span className='bg-green-500 h-3 w-3 rounded-full absolute bottom-1 right-1'></span>
                                                        <Image
                                                            src={'/social/avya.jpg'}
                                                            alt='Emma'
                                                            width={100}
                                                            height={100}
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h6 className='font-semibold'>Eva Mathew</h6>
                                                        <p className='text-xs'>245 watching</p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-center pt-1'>
                                                    <ThemeButton title='Join' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 h-8 w-fit md:block hidden text-xs' />
                                                </div>
                                            </div>
                                            <div className='shadow-md px-2 py-2 shadow-[#02FFFF] rounded-2xl mt-4'>

                                                <div className='flex items-center gap-4'>
                                                    <div className='relative p-[2px] bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] min-w-12 h-12 rounded-full'>
                                                        <Image
                                                            src={'/social/avya.jpg'}
                                                            alt='Emma'
                                                            width={100}
                                                            height={100}
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h6 className='font-semibold'>Eva Mathew</h6>
                                                        <p className='text-xs'>Live streaming scheduled at 7pm</p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-center pt-1'>
                                                    <ThemeButton title='Notify' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 h-8 w-fit md:block hidden text-xs' />
                                                </div>
                                            </div>
                                        </div>
                                    </GradientBorderCard>
                                </div>
                                {/* My party */}
                                <div>
                                    <h4 className='text-xl font-bold mt-6'>Trending Clubs</h4>
                                    <GradientBorderCard outerStyles='bg-gradient-to-b from-[#C400F5] via-[#02FFFF]] to-[#FA1500] mt-3'>
                                        <div className='rounded-2xl bg-[#020617] px-2 py-4 flex items-center justify-center gap-4'>
                                            <div className=' py-2'>
                                                <div className='flex items-center gap-4'>
                                                    <div className='relative p-[1px] bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] min-w-14 h-14 rounded-full'>
                                                        <Image
                                                            src={'/social/avya.jpg'}
                                                            alt='Emma'
                                                            width={100}
                                                            height={100}
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className=''>
                                                        <h6 className='font-semibold'>Phantom Soccer Group</h6>
                                                        <p className='text-xs'>Hey everyone let's watch soccer
                                                            match together</p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-center gap-4 py-6'>
                                                    <div className='relative p-[1px] bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] min-w-16 h-16 rounded-full'>
                                                        <Image
                                                            src={'/social/avya.jpg'}
                                                            alt='Emma'
                                                            width={100}
                                                            height={100}
                                                            className="rounded-full h-full w-full"
                                                        />
                                                        <span className='absolute top-0 -right-2'><AudioLines size={'20'} /></span>
                                                        <p className='flex justify-center mt-2'><Mic size={'20'} /></p>
                                                    </div>
                                                    <div className='relative p-[1px] bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] min-w-16 h-16 rounded-full'>
                                                        <Image
                                                            src={'/social/avya.jpg'}
                                                            alt='Emma'
                                                            width={100}
                                                            height={100}
                                                            className="rounded-full h-full w-full"
                                                        />
                                                        <span className='absolute top-0 -right-2'><AudioLines size={'20'} /></span>
                                                        <p className='flex justify-center mt-2'><Mic size={'20'} /></p>
                                                    </div>
                                                    <div className='relative p-[1px] bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] min-w-16 h-16 rounded-full'>
                                                        <Image
                                                            src={'/social/avya.jpg'}
                                                            alt='Emma'
                                                            width={100}
                                                            height={100}
                                                            className="rounded-full h-full w-full"
                                                        />
                                                        <span className='absolute top-0 -right-2'><AudioLines size={'20'} /></span>
                                                        <p className='flex justify-center mt-2'><Mic size={'20'} /></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </GradientBorderCard>
                                </div>
                                {/* Trending clubs */}
                                <div>
                                    <h4 className='text-xl font-bold mt-6'>Trending Clubs</h4>
                                    <GradientBorderCard outerStyles='bg-gradient-to-b from-[#C400F5] via-[#02FFFF]] to-[#FA1500] mt-3'>
                                        <div className='rounded-2xl bg-[#020617] px-2 py-4 flex items-center justify-center gap-4 pt-10'>
                                            <div className='shadow-md px-4 py-2 shadow-[#02FFFF] rounded-2xl relative '>
                                                <div className='flex items-center gap-4'>
                                                    <div className='absolute -top-6 left-1/2 -translate-x-1/2 p-[2px] bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] min-w-20 h-20 rounded-full'>
                                                        <Image
                                                            src={'/social/avya.jpg'}
                                                            alt='Emma'
                                                            width={100}
                                                            height={100}
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className='pt-14'>
                                                        <h6 className='font-semibold'>Eva Mathew</h6>
                                                        <p className='text-xs text-center'>245 watching</p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-center pt-1'>
                                                    <ThemeButton title='Join' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 h-8 w-fit md:block hidden text-xs' />
                                                </div>
                                            </div>
                                            <div className='shadow-md px-4 py-2 shadow-[#02FFFF] rounded-2xl relative '>
                                                <div className='flex items-center gap-4'>
                                                    <div className='absolute -top-6 left-1/2 -translate-x-1/2 p-[2px] bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] min-w-20 h-20 rounded-full'>
                                                        <Image
                                                            src={'/social/avya.jpg'}
                                                            alt='Emma'
                                                            width={100}
                                                            height={100}
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className='pt-14'>
                                                        <h6 className='font-semibold'>Eva Mathew</h6>
                                                        <p className='text-xs text-center'>245 watching</p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-center pt-1'>
                                                    <ThemeButton title='Join' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 h-8 w-fit md:block hidden text-xs' />
                                                </div>
                                            </div>
                                        </div>
                                    </GradientBorderCard>
                                </div>
                                {/* Watch Party */}
                                <div>
                                    <h4 className='text-xl font-bold mt-6'>Watch Party</h4>
                                    <GradientBorderCard outerStyles='bg-gradient-to-b from-[#C400F5] via-[#02FFFF]] to-[#FA1500] mt-3'>
                                        <div className='rounded-2xl bg-[#020617] px-2 py-4'>
                                            <div className='shadow-md px-2 py-2 shadow-[#02FFFF] rounded-2xl'>

                                                <div className='flex items-center gap-4'>
                                                    <div className='relative p-[2px] bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] min-w-12 h-12 rounded-full'>
                                                        <Image
                                                            src={'/social/avya.jpg'}
                                                            alt='Emma'
                                                            width={100}
                                                            height={100}
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h6 className='font-semibold'>Eva Mathew</h6>
                                                        <p className='text-xs'>245 watching</p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-center pt-1'>
                                                    <ThemeButton title='Join' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 h-8 w-fit md:block hidden text-xs' />
                                                </div>
                                            </div>
                                            <div className='shadow-md px-2 py-2 shadow-[#02FFFF] rounded-2xl mt-4'>

                                                <div className='flex items-center gap-4'>
                                                    <div className='relative p-[2px] bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] min-w-12 h-12 rounded-full'>
                                                        <Image
                                                            src={'/social/avya.jpg'}
                                                            alt='Emma'
                                                            width={100}
                                                            height={100}
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h6 className='font-semibold'>Eva Mathew</h6>
                                                        <p className='text-xs'>Live streaming scheduled at 7pm</p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-center pt-1'>
                                                    <ThemeButton title='Join' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 h-8 w-fit md:block hidden text-xs' />
                                                </div>
                                            </div>
                                        </div>
                                    </GradientBorderCard>
                                </div>
                            </div>
                        </BorderCard>
                    </div>
                </div>

                {/* Feed Title */}
                <h2 className="text-xl md:text-2xl font-bold text-[#02FFFF] md:mb-6 mb-4">Global Feed</h2>

                {/* Feed Card */}
                <div className='relative h-fit w-full rounded-2xl p-[1px] md:bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] overflow-hidden'>
                    <div className="bg-[#0B0B24] border border-[#1E1E3A] rounded-2xl p-6 shadow-md">
                        {/* User Info */}
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/social/rohit.jpg"
                                alt="Rohan Sharma"
                                width={50}
                                height={50}
                                className="rounded-full w-16 md:w-28 h-16 md:h-28 object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-lg">Rohan Sharma</h3>
                                <p className=" text-sm">5 min ago</p>
                            </div>
                        </div>

                        {/* Post Content */}
                        <p className="text-sm mb-3">
                            🔥 That final goal still gives me goosebumps! Breaking down how it happened in
                            my new highlight reel.🚀
                        </p>

                        {/* Hashtags */}
                        <div className="text-[#00C4F5] text-sm mb-4 space-x-2">
                            #GoalOfTheSeason #SportsHighlights #MatchDayMagic #ArenaReplays #Football
                            #Community
                        </div>

                        {/* Post Image */}
                        <div className="relative rounded-xl overflow-hidden border border-[#1E1E3A]">
                            <Image
                                src="/social/football.jpg"
                                alt="Football highlight"
                                width={800}
                                height={450}
                                className="object-cover w-full md:h-[280px] h-[160px]"
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex justify-between items-center mt-4 text-gray-400">
                            <div className="flex gap-4">
                                <button>❤️</button>
                                <button>💬</button>
                                <button>🔗</button>
                            </div>
                            <button>🔊</button>
                        </div>
                    </div>
                </div>
                <div className='relative mt-4 h-fit w-full rounded-2xl p-[1px] md:bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] overflow-hidden'>
                    <div className="bg-[#0B0B24] border border-[#1E1E3A] rounded-2xl p-6 shadow-md">
                        {/* User Info */}
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/social/rohit.jpg"
                                alt="Rohan Sharma"
                                width={50}
                                height={50}
                                className="rounded-full w-16 md:w-28 h-16 md:h-28 object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-lg">Rohan Sharma</h3>
                                <p className=" text-sm">5 min ago</p>
                            </div>
                        </div>

                        {/* Post Content */}
                        <p className="text-sm mb-3">
                            🔥 That final goal still gives me goosebumps! Breaking down how it happened in
                            my new highlight reel.🚀
                        </p>

                        {/* Hashtags */}
                        <div className="text-[#00C4F5] text-xs md:text-sm mb-4 space-x-2">
                            #GoalOfTheSeason #SportsHighlights #MatchDayMagic #ArenaReplays #Football
                            #Community
                        </div>

                        {/* Post Image */}
                        <div className="relative rounded-xl overflow-hidden border border-[#1E1E3A]">
                            <Image
                                src="/social/football.jpg"
                                alt="Football highlight"
                                width={800}
                                height={450}
                                className="object-cover w-full md:h-[280px] h-[160px]"
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex justify-between items-center mt-4 text-gray-400">
                            <div className="flex gap-4">
                                <button>❤️</button>
                                <button>💬</button>
                                <button>🔗</button>
                            </div>
                            <button>🔊</button>
                        </div>
                    </div>
                </div>
                <div className='py-10 pr-6'>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={10}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper !px-3"
                        breakpoints={{
                            400: {
                                slidesPerView: 1
                            }
                        }}
                    >
                        <SwiperSlide className='!w-full md:!w-1/2'>
                            {/* scroll 1 */}
                            <div className='relative h-fit w-full rounded-2xl p-[1px] bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] overflow-hidden'>
                                <div className="bg-[#0B0B24] border border-[#1E1E3A] rounded-2xl md:p-6 p-3 shadow-md">
                                    {/* User Info */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <Image
                                            src="/social/rohit.jpg"
                                            alt="Rohan Sharma"
                                            width={50}
                                            height={50}
                                            className="rounded-full md:w-28 w-16 h-16 md:h-28 object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-lg">Rohan Sharma</h3>
                                            <p className=" text-sm">5 min ago</p>
                                        </div>
                                    </div>

                                    {/* Post Content */}
                                    <p className="text-xs md:text-sm mb-3">
                                        🔥 That final goal still gives me goosebumps! Breaking down how it happened in
                                        my new highlight reel.🚀
                                    </p>

                                    {/* Hashtags */}
                                    <div className="text-[#00C4F5] text-sm mb-4 space-x-2">
                                        #GoalOfTheSeason #SportsHighlights #MatchDayMagic #ArenaReplays #Football
                                        #Community
                                    </div>

                                    {/* Post Image */}
                                    <div className="relative rounded-xl overflow-hidden border border-[#1E1E3A]">
                                        <Image
                                            src="/social/football.jpg"
                                            alt="Football highlight"
                                            width={800}
                                            height={450}
                                            className="object-cover w-full md:h-[280px] h-[140px]"
                                        />
                                    </div>

                                    {/* Actions */}
                                    <div className="hidden md:flex justify-between items-center mt-4 text-gray-400">
                                        <div className="flex gap-4">
                                            <button>❤️</button>
                                            <button>💬</button>
                                            <button>🔗</button>
                                        </div>
                                        <button>🔊</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='!w-full md:!w-1/2'>
                            { /* scroll 2 */}
                            <div className='relative h-fit w-full rounded-2xl p-[1px] bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] overflow-hidden'>
                                <div className="bg-[#0B0B24] border border-[#1E1E3A] rounded-2xl md:p-6 p-3 shadow-md">
                                    {/* User Info */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <Image
                                            src="/social/rohit.jpg"
                                            alt="Rohan Sharma"
                                            width={50}
                                            height={50}
                                            className="rounded-full md:w-28 w-16 h-16 md:h-28 object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-lg">Rohan Sharma</h3>
                                            <p className=" text-sm">5 min ago</p>
                                        </div>
                                    </div>

                                    {/* Post Content */}
                                    <p className="text-xs md:text-sm mb-3">
                                        🔥 That final goal still gives me goosebumps! Breaking down how it happened in
                                        my new highlight reel.🚀
                                    </p>

                                    {/* Hashtags */}
                                    <div className="text-[#00C4F5] text-sm mb-4 space-x-2">
                                        #GoalOfTheSeason #SportsHighlights #MatchDayMagic #ArenaReplays #Football
                                        #Community
                                    </div>

                                    {/* Post Image */}
                                    <div className="relative rounded-xl overflow-hidden border border-[#1E1E3A]">
                                        <Image
                                            src="/social/football.jpg"
                                            alt="Football highlight"
                                            width={800}
                                            height={450}
                                            className="object-cover w-full md:h-[280px] h-[140px]"
                                        />
                                    </div>

                                    {/* Actions */}
                                    <div className="hidden md:flex justify-between items-center mt-4 text-gray-400">
                                        <div className="flex gap-4">
                                            <button>❤️</button>
                                            <button>💬</button>
                                            <button>🔗</button>
                                        </div>
                                        <button>🔊</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </main>
        </>
    )
}

export default GlobalFeed