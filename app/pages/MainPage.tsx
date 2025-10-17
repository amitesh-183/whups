import FeatureCard from '@/components/FeatureCard'
import ThemeButton from '@/components/ThemeButton'
import { Button } from '@/components/ui/button'
import React from 'react'

const MainPage = () => {
    return (
        <main>
            {/* hero section */}
            <section className='flex flex-col gap-4 h-screen items-center justify-center text-white'>
                <div className='bg-[url(/home.png)] absolute h-screen w-full bg-cover -z-10'></div>
                <h1 className='font-bold text-6xl leading-10 heading-font'>Whuups</h1>
                <h6 className='font-semibold text-3xl heading-font tracking-widest'>United by Sports</h6>
                <p className='text-[#D2FFFF] text-2xl font-semibold tracking-wider text-center max-w-4xl py-6 mt-6'>Step into the digital world of Whuups , compete , connect and celebrate the spirit of sports.</p>
                <div className='flex gap-12'>
                    <ThemeButton title='Explore the Stadium' />
                    <ThemeButton title='Join Whuups Social' btnStyle='bg-transparent bg-none' />
                </div>
            </section>
            {/* feature section */}
            <section className='flex flex-col gap-4 h-screen bg-black items-center justify-center text-white'>
                <div className='bg-[url(/glow.png)] left-0 absolute w-[300px] h-[800px] -translate-y-40 bg-cover z-10'></div>
                <div className='bg-[url(/glow-r.png)] right-0 absolute w-[300px] h-[800px] -translate-y-40 bg-cover z-10'></div>
                <h1 className='font-bold text-5xl leading-10 heading-font'>Enter the Digital Stadium</h1>
                <p className='text-[#D2FFFF] text-2xl font-semibold tracking-wider text-center max-w-4xl py-6 mt-2'>Experience real-time matches, virtual fan events, and exclusive creator moments — all in one interactive arena.</p>
                <div className='flex gap-12 mt-20'>
                    <FeatureCard title="Panoramic Stadium View" para="A futuristic, metallic-render panoramic of a digital arena with AR overlays." cta="Go to Stadium" isBtnNedded={true} />
                    <FeatureCard title="Live Events & Fan Zones" para="Attend virtual matches, live creator streams, and interactive cheering zones." cta="View Events" isBtnNedded={true} />
                    <FeatureCard title="Player Stats" para="Holographic player cards and live stats  above the field during matches." cta="Explore" isBtnNedded={true} />
                </div>
            </section>
            {/* community section */}
            <section className='flex flex-col gap-4 h-screen bg-black items-center justify-center text-white'>
                <div className='bg-[url(/glow.png)] left-0 absolute w-[300px] h-[800px] -translate-y-40 bg-cover z-10'></div>
                <div className='bg-[url(/glow-r.png)] right-0 absolute w-[300px] h-[800px] -translate-y-40 bg-cover z-10'></div>
                <h1 className='font-bold text-5xl leading-10 heading-font'>Join the Whuups Community</h1>
                <p className='text-[#D2FFFF] text-2xl font-semibold tracking-wider text-center max-w-4xl py-6 mt-2'>A space where fans, creators, and clubs unite. Share highlights, follow teams, and climb the leaderboards.</p>
                <div className='flex gap-12 mt-20'>
                    <FeatureCard title="Social Feed" para="Reels, highlights, and fan posts in a real-time feed." borderHeight='h-[200px]' />
                    <FeatureCard title="Creator Spaces" para="Creators publish exclusive content and interactive challenges." borderHeight='h-[200px]' />
                    <FeatureCard title="Fan Leaderboards" para="Earn points, badges, and rank up with your fandom." borderHeight='h-[200px]' />
                </div>
                <ThemeButton title='Join Whuups Social App' btnStyle='mt-10' />
            </section>
            <footer className='bg-black text-white flex items-center justify-center py-4'>
                <p className='font-semibold'>&copy; 2020 - 2025 Whuups. All rights reserved.</p>
            </footer>
        </main>
    )
}

export default MainPage