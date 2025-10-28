import FeatureCard from '@/components/Cards/FeatureCard'
import ThemeButton from '@/components/ThemeButton'
import Link from 'next/link'
import React from 'react'

const MainPage = () => {
    return (
        <main>
            {/* hero section */}
            <section className='flex flex-col gap-4 h-dvh items-center justify-center text-white'>
                <div className='bg-[url(/home.png)] absolute h-screen w-full bg-cover -z-10'></div>
                <h1 className='font-bold text-4xl md:text-6xl leading-10 heading-font'>Whuups</h1>
                <h6 className='font-semibold text-[#0098C6] text-2xl md:text-3xl heading-font tracking-widest text-center'>United by Sports</h6>
                <p className='text-[#D2FFFF] text-lg md:text-2xl font-semibold tracking-wider text-center max-w-4xl py-6 md:mt-6 md:px-0 px-4'>Step into the digital world of Whuups , compete , connect and celebrate the spirit of sports.</p>
                <div className='flex md:gap-12 gap-4 md:flex-row flex-col'>
                    <Link href="/home">
                        <ThemeButton title='Explore the Stadium' btnStyle='' />
                    </Link>
                    <Link href="/home">
                        <ThemeButton title='Join Whuups Social' btnStyle='bg-transparent bg-none' />
                    </Link>
                </div>
            </section>
            {/* feature section */}
            <section className='flex flex-col gap-4 min-h-dvh bg-black items-center justify-center text-white md:mb-0 mb-20'>
                <div className='bg-[url(/glow.png)] left-0 absolute w-[300px] h-[800px] -translate-y-40 bg-cover z-10 md:block hidden'></div>
                <div className='bg-[url(/glow-r.png)] right-0 absolute w-[300px] h-[800px] -translate-y-40 bg-cover z-10 md:block hidden'></div>
                <h1 className='font-bold text-3xl md:text-5xl leading-10 heading-font text-center'>Enter the Digital Stadium</h1>
                <p className='text-[#0098C6] text-lg md:text-2xl font-semibold tracking-wider text-center max-w-4xl py-6 md:mt-2 md:px-0 px-4'>Experience real-time matches, virtual fan events, and exclusive creator moments — all in one interactive arena.</p>
                <div className='flex md:flex-row flex-col md:gap-12 gap-6 md:mt-20'>
                    <FeatureCard title="Panoramic Stadium View" para="A futuristic, metallic-render panoramic of a digital arena with AR overlays." cta="Go to Stadium" isBtnNedded={true} />
                    <FeatureCard title="Live Events & Fan Zones" para="Attend virtual matches, live creator streams, and interactive cheering zones." cta="View Events" isBtnNedded={true} />
                    <FeatureCard title="Player Stats" para="Holographic player cards and live stats  above the field during matches." cta="Explore" isBtnNedded={true} />
                </div>
            </section>
            {/* digital section */}
            <section className='flex flex-col gap-4 min-h-dvh bg-black items-center justify-center text-white md:mb-0 mb-20'>
                <div className='bg-[url(/glow.png)] left-0 absolute w-[300px] h-[800px] -translate-y-40 bg-cover z-10 md:block hidden'></div>
                <div className='bg-[url(/glow-r.png)] right-0 absolute w-[300px] h-[800px] -translate-y-40 bg-cover z-10 md:block hidden'></div>
                <h1 className='font-bold text-3xl md:text-5xl leading-10 heading-font text-center md:px-0 px-4'>Join the Whuups Digital Economy</h1>
                <p className='text-[#0098C6] text-lg md:text-2xl font-semibold tracking-wider text-center max-w-4xl py-6 md:mt-2 md:px-0 px-4'>Step into a new era where fans, creators, and clubs connect through Blockchain, VR, and token-powered experiences creating real rewards and opportunities.</p>
                <div className='flex md:flex-row flex-col md:gap-12 gap-6 md:mt-20'>
                    <FeatureCard title="Tokenised Rewards" para="Tokenised assets from stadiums to fan rewards. Step into a metaverse where you can stake, earn, and trade in a real blockchain-powered sports economy." borderHeight='h-[270px]' />
                    <FeatureCard title="Immersive Metaverse" para="Step into the Whuups Stadium — a futuristic space to connect with fans, experience matches in VR, and explore exclusive digital collectibles." borderHeight='h-[270px]' />
                    <FeatureCard title="Blockchain Transparency" para="Enjoy secure transactions, NFT ownership, and a fair, transparent economy powered by blockchain innovation within Whuups." borderHeight='h-[270px]' />
                </div>
            </section>
            {/* sports section */}
            <section className='flex flex-col gap-4 min-h-dvh bg-black items-center justify-center text-white md:mb-0 mb-20'>
                <div className='bg-[url(/glow.png)] left-0 absolute w-[300px] h-[800px] -translate-y-40 bg-cover z-10 md:block hidden'></div>
                <div className='bg-[url(/glow-r.png)] right-0 absolute w-[300px] h-[800px] -translate-y-40 bg-cover z-10 md:block hidden'></div>
                <h1 className='font-bold text-3xl md:text-5xl leading-10 heading-font text-center md:px-0 px-4'>Join the Whuups Sports Network</h1>
                <p className='text-[#0098C6] text-lg md:text-2xl font-semibold tracking-wider text-center max-w-4xl py-6 mt-2 md:px-0 px-4'>A dedicated sports social platform where fans post flips, talks, highlights, and connect with people in real time.</p>
                <div className='flex md:flex-row flex-col md:gap-12 gap-6 md:mt-20'>
                    <FeatureCard title="Social Feed" para="Flips, highlights, and fan posts in a real-time feed." borderHeight='h-[200px]' />
                    <FeatureCard title="Creator Spaces" para="Creators publish exclusive content and interactive challenges." borderHeight='h-[200px]' />
                    <FeatureCard title="Fan Leaderboards" para="Earn points, badges, and rank up with your fandom." borderHeight='h-[200px]' />
                </div>
                <Link href="/home">
                    <ThemeButton title='Join Whuups Social App' btnStyle='mt-10 from-blue-700 to-blue-400' />
                </Link>
            </section>
            {/* why section */}
            <section className='flex flex-col gap-4 bg-black items-center justify-center text-white py-10'>
                <div className='bg-[url(/glow.png)] left-0 absolute w-[300px] h-[800px] -translate-y-40 bg-cover z-10 md:block hidden'></div>
                <div className='bg-[url(/glow-r.png)] right-0 absolute w-[300px] h-[800px] -translate-y-40 bg-cover z-10 md:block hidden'></div>
                <h1 className='font-bold text-2xl md:text-4xl leading-10 heading-font text-center'>Why join WHUUPS ?</h1>
                <p className='text-[#0098C6] text-base md:text-xl font-semibold tracking-wider text-center max-w-5xl py-6 mt-2 md:px-0 px-4'>Join a next-gen sports ecosystem where your passion meets technology. Experience growth, ownership, and rewards , all powered by the future of digital interaction.</p>
                <div className='flex md:flex-row flex-col items-center justify-center md:gap-12 gap-4 mt-6'>
                    <Link href="/home">
                        <ThemeButton title='Explore Benefits' btnStyle='from-blue-700 to-blue-400' />
                    </Link>
                    <Link href="/home">
                        <ThemeButton title='Join Whuups Now' btnStyle='bg-transparent bg-none' />
                    </Link>
                </div>
            </section>
            <footer className='bg-black text-white text-center flex items-center justify-center py-4 md:text-base text-sm'>
                <p className='font-semibold'>&copy; 2020 - 2025 Whuups. All rights reserved.</p>
            </footer>
        </main>
    )
}

export default MainPage