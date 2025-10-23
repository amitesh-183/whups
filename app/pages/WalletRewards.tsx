import BorderCard from '@/components/Cards/BorderCard'
import GradientBorderCard from '@/components/Cards/GradientBorderCard'
import { BarChartComp } from '@/components/Charts/BarChart'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ThemeButton from '@/components/ThemeButton'
import { Slider } from '@/components/ui/slider'
import Image from 'next/image'
import React from 'react'

const leaderboard = [
    { rank: 1, exp: 1500, imageUrl: "/wallet/user1.jpg", user: "Alice", amount: -80, rewards: "120", gradient: "[&>[data-slider-track]]:bg-gradient-to-r [&>[data-slider-track]]:from-[#A9005D] [&>[data-slider-track]]:via-[#FF82C7] [&>[data-slider-track]]:to-[#FFFFFF00]" },
    { rank: 2, exp: 1200, imageUrl: "/wallet/user2.jpg", user: "Rohan", amount: 60, rewards: "120", gradient: "[&>[data-slider-track]]:bg-gradient-to-r [&>[data-slider-track]]:from-[#1434CB] [&>[data-slider-track]]:to-[#0098C6]" },
    { rank: 3, exp: 900, imageUrl: "/wallet/user3.jpg", user: "Charlie", amount: -100, rewards: "120", gradient: "[&>[data-slider-track]]:bg-gradient-to-r [&>[data-slider-track]]:from-[#A9005D] [&>[data-slider-track]]:to-[#0098C6]" },
    { rank: 4, exp: 750, imageUrl: "/wallet/user4.jpg", user: "David", amount: 40, rewards: "120", gradient: "[&>[data-slider-track]]:bg-gradient-to-r [&>[data-slider-track]]:from-[#A9005D] [&>[data-slider-track]]:to-[#0098C6]" },
    { rank: 4, exp: 500, imageUrl: "/wallet/user5.jpg", user: "Priya", amount: 40, rewards: "120", gradient: "[&>[data-slider-track]]:bg-gradient-to-r [&>[data-slider-track]]:from-[#A9005D] [&>[data-slider-track]]:to-[#0098C6]" },
]

const WalletRewards = () => {
    return (
        <>
            <Header />
            <main className='max-w-7xl mx-auto'>
                <div className='flex justify-center mt-20'>
                    <Image src={"/wallet/Rewards-Center.png"} height={200} width={200} alt='Whuups' className='md:w-96 md:h-12 w-40' />
                </div>
                <div className='mt-10 flex justify-center gap-6'>
                    <GradientBorderCard borderStyles='' outerStyles='relative w-full bg-none border group group-hover:border-transparent p-[1px] border border-[#A4A0A0] hover:bg-gradient-to-b from-[#C400F5] to-[#FA1500] duration-300 ease-in-out transition-all cursor-pointer '>
                        <div className='flex flex-col justify-between items-center bg-[#020617] rounded-2xl group-hover:bg-gradient-to-br from-[#9800BE] to-[#0600C6] p-6'>
                            <p className='text-sm font-semibold'>This week</p>
                            <h4 className='text-xl py-3 font-bold text-[#00FA08]'>+10 WHU</h4>
                            <p className='text-xs'>Earned from staking & activity</p>
                        </div>
                    </GradientBorderCard>
                    <GradientBorderCard borderStyles='' outerStyles='relative w-full bg-none border group group-hover:border-transparent p-[1px] border border-[#A4A0A0] hover:bg-gradient-to-b from-[#C400F5] to-[#FA1500] duration-300 ease-in-out transition-all cursor-pointer '>
                        <div className='flex flex-col justify-between items-center bg-[#020617] rounded-2xl group-hover:bg-gradient-to-br from-[#02FFFF] via-[#1DA1FF] to-[#3844FF] p-6'>
                            <p className='text-sm font-semibold'>Lifetime Rewards</p>
                            <h4 className='text-xl py-3 font-bold text-[#00FA08]'>+250 WHU</h4>
                            <p className='text-xs'>Since joining the platform</p>
                        </div>
                    </GradientBorderCard>
                    <GradientBorderCard borderStyles='' outerStyles='relative w-full bg-none border group group-hover:border-transparent p-[1px] border border-[#A4A0A0] hover:bg-gradient-to-b from-[#C400F5] to-[#FA1500] duration-300 ease-in-out transition-all cursor-pointer '>
                        <div className='flex flex-col justify-between items-center bg-[#020617] rounded-2xl group-hover:bg-gradient-to-br from-[#00D35F] to-[#016904] p-6'>
                            <p className='text-sm font-semibold'>Pending Rewards</p>
                            <h4 className='text-xl py-3 font-bold text-[#00FA08]'>+20 WHU</h4>
                            <p className='text-xs'>Waiting to be claimed</p>
                        </div>
                    </GradientBorderCard>
                </div>
                <div className='my-10'>
                    <GradientBorderCard outerStyles='bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]'>
                        <div className='bg-[#020617] rounded-2xl py-10'>
                            <div>
                                <h4 className='text-2xl font-bold text-center pb-6'>Claim Your Rewards</h4>
                                <div className='flex justify-center items-center gap-10 max-w-3xl mx-auto py-10'>
                                    <BorderCard cardStyles='w-full py-6'>
                                        <div className='flex flex-col justify-between items-center'>
                                            <p className='text-sm font-semibold text-[#FFFF96]'>Staking Bonus</p>
                                            <h4 className='text-xl py-3 font-bold'>+6 WHU</h4>
                                            <p className='text-xs'>Earned for staking tokens</p>
                                        </div>
                                    </BorderCard>
                                    <BorderCard cardStyles='w-full py-6'>
                                        <div className='flex flex-col justify-between items-center'>
                                            <p className='text-sm font-semibold text-[#FFFF96]'>Activity Rewards</p>
                                            <h4 className='text-xl py-3 font-bold'>+5 WHU</h4>
                                            <p className='text-xs'>Earned from engagement</p>
                                        </div>
                                    </BorderCard>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <ThemeButton btnStyle='mt-10 bg-gradient-to-r from-[#FF008C] to-[#0022FF]' title='✨ Claim All Rewards' />
                            </div>
                        </div>
                    </GradientBorderCard >
                </div>
                <div>
                    <GradientBorderCard outerStyles='bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]'>
                        <div className='bg-[#020617] rounded-2xl'>
                            <BarChartComp />
                        </div>
                    </GradientBorderCard>
                </div>
                <div className={`relative rounded-2xl mt-20 w-full mx-auto p-[0.8px] md:mb-52 h-full bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] 
                    shadow-lg`}>
                    <div className={`rounded-2xl bg-[#020617] md:px-10 px-4 py-6 flex flex-col justify-center`}>
                        <h4 className='font-bold text-2xl md:text-2xl text-center'>🏅 Top Earners Leaderboard</h4>
                        <div className='mt-4'>
                            <>
                                <div className='flex justify-between gap-6 items-center border-b border-[#A4A0A0] px-6 py-5'>
                                    <p className=''>Rank</p>
                                    <p className='w-40'>User</p>
                                    <p className='w-40'>Total Rewards</p>
                                    <p className='w-40'>XP/Level</p>
                                </div>
                                {leaderboard.map((item, index) => (
                                    <div key={index} className="flex md:flex-row flex-col justify-between gap-6 items-center border-b border-[#02FFFF33] px-6 py-5">
                                        <p className="font-bold text-lg ">#{item.rank}</p>
                                        <div className="text-md md:w-40 flex items-center gap-3">
                                            <Image src={item.imageUrl} height={50} width={50} alt='user-profile' className='rounded-full' />
                                            {item.user}
                                        </div>
                                        <p className="md:w-40 text-left">
                                            <span className={`text-green-400`}>
                                                {item.rewards} WHU
                                            </span>
                                        </p>
                                        <div className={`flex flex-col text-sm w-40`}>
                                            <p>{item.exp} XP</p>
                                            {/* Slider */}
                                            <div className=" mt-2">
                                                <Slider
                                                    value={[item.exp]}
                                                    max={2000}
                                                    step={1}
                                                    className={`${item.gradient} transition-all duration-500  `}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        </div>
                    </div>
                </div>
            </main >
            <Footer />
        </>
    )
}

export default WalletRewards