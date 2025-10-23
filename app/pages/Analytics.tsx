'use client'
import AnalyticsCard from '@/components/Cards/AnalyticsCard'
import BorderCard from '@/components/Cards/BorderCard'
import LineChart from '@/components/Charts/LineChart'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Eye, Funnel, MousePointer, Plus, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const Analytics = () => {

    const [campaign, setCampaign] = useState(false);

    return (
        <>
            <Header />
            {campaign ?
                (<>
                    <main className='max-w-7xl mx-auto'>
                        <div>
                            <div className='flex mt-10'>
                                <Image src={"/ads/Campaign-Dashboard.png"} height={460} width={460} alt='analytics' className='' />
                            </div>
                            <p className='py-4 max-w-xl'>Analytics for “Final Match Day Ad” , posted on - 12 Sept 2025</p>
                            <BorderCard cardStyles='!px-3 my-4'>
                                <div className='flex items-center gap-4'>
                                    <div>
                                        <Image src={'/ads/juice.jpg'} height={120} width={120} alt='Image' className='rounded-2xl w-[200px] h-[170px] object-cover' />
                                    </div>
                                    <div>
                                        <h3 className='font-semibold text-lg'>Final Match Day Ad</h3>
                                        <p className='text-sm tracking-wider pt-2'>Format: Image Banner</p>
                                        <p className='text-sm tracking-wider pt-2'>Resolution: 1200x600</p>
                                    </div>
                                </div>
                            </BorderCard>
                        </div>

                        <div className='flex items-center justify-center w-full gap-12 mt-20'>
                            <BorderCard cardStyles='w-60 h-full px-16 py-8 !border-[#02FFFF]'>
                                <div className='flex flex-col items-center justify-center text-center'>
                                    <Eye size={"20"} />
                                    <h4 className='mt-2'>
                                        Impressions
                                    </h4>
                                    <p className='pt-4 text-xl text-[#02FFFF] font-bold'>120.4k</p>
                                </div>
                            </BorderCard>
                            <BorderCard cardStyles='w-60 h-full px-16 py-8 border-[#C400F5]'>
                                <div className='flex flex-col items-center justify-center text-center'>
                                    <MousePointer size={"20"} />
                                    <h4 className='mt-2'>
                                        Clicks
                                    </h4>
                                    <p className='pt-4 text-xl text-[#C400F5] font-bold'>5.4k</p>
                                </div>
                            </BorderCard>
                            <BorderCard cardStyles='w-60 h-full px-16 py-8 border-[#FFA600]' >
                                <div className='flex flex-col items-center justify-center text-center'>
                                    <TrendingUp size={"20"} />
                                    <h4 className='mt-2'>
                                        CTR
                                    </h4>
                                    <p className='pt-4 text-xl text-[#FFA600] font-bold'>4.7%</p>
                                </div>
                            </BorderCard>
                            <BorderCard cardStyles='w-60 h-full px-16 py-8 !border-[#00D35F]' >
                                <div className='flex flex-col items-center justify-center text-center'>
                                    <h6 className='text-sm font-black'>WHU</h6>
                                    <h4 className='mt-2'>
                                        Spend
                                    </h4>
                                    <p className='pt-4 text-xl text-[#00D35F] font-bold'>800</p>
                                </div>
                            </BorderCard>
                        </div>

                        {/* Chart section */}

                        <BorderCard cardStyles='mt-20'>
                            <div>
                                <h4 className='text-2xl font-bold text-[#FFEF3F] text-center my-6 '>📊 Performance Over Time</h4>

                                <LineChart />
                            </div>
                        </BorderCard>


                        {/* other section */}
                        <div className='flex justify-center items-center gap-10'>
                            <BorderCard cardStyles='mt-20 w-full px-10 py-6'>
                                <div>
                                    <h4 className='text-[#E991FF] text-2xl font-bold text-center'>Top Performing Placements</h4>
                                    <div className='mt-6'>
                                        <div className='bg-[#03006059] flex justify-between items-center py-2 px-10 rounded-2xl'>
                                            <p>🏟️ Jumbotrons</p>
                                            <p>45K</p>
                                        </div>
                                        <div className='bg-[#03006059] mt-3 flex justify-between items-center py-2 px-10 rounded-2xl'>
                                            <p>🎟️ Entrance Arches</p>
                                            <p>35K</p>
                                        </div>
                                    </div>
                                </div>
                            </BorderCard>
                            <BorderCard cardStyles='mt-20 w-full px-10 py-6'>
                                <div>
                                    <h4 className='text-[#91C9FA] text-2xl font-bold text-center'>Top Performing Placements</h4>
                                    <div className='mt-6'>
                                        <div className='bg-[#03006059] flex justify-between items-center py-2 px-10 rounded-2xl'>
                                            <p>🌍 Geo</p>
                                            <p>40% Asia, 30% Europe, 20% NA, 10% Other</p>
                                        </div>
                                        <div className='bg-[#03006059] mt-3 flex justify-between items-center py-2 px-10 rounded-2xl'>
                                            <p>⏱️ Peak Engagement</p>
                                            <p>7-9 PM IST</p>
                                        </div>
                                    </div>
                                </div>
                            </BorderCard>
                        </div>
                        <div className='flex justify-center mt-6'>
                            <Button
                                onClick={() => setCampaign(false)}
                                className="text-[#02FFFF] hover:underline cursor-pointer bg-none bg-transparent flex items-center text-lg gap-2"
                            >
                                <ArrowLeft /> Back
                            </Button>
                        </div>
                    </main>
                </>) :
                <main className='max-w-5xl mx-auto'>
                    <div className='flex items-center justify-between gap-20'>
                        <div>
                            <div className='flex mt-10'>
                                <Image src={"/ads/Campaign-Dashboard.png"} height={460} width={460} alt='analytics' className='' />
                            </div>
                            <p className='py-4 max-w-xl'>Manage all your ad campaigns in one place. Select a campaign card to view
                                detailed insights and performance analytics.</p>
                            <Button className='w-40 border rounded-2xl bg-none bg-transparent font-semibold cursor-pointer'><Funnel /> Filter</Button>
                        </div>
                        <Button className='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 w-[200px] rounded-2xl font-semibold'><Plus className='!h-5 !w-5' /> New Campaign</Button>
                    </div>

                    <div className='grid grid-cols-3 gap-6'>
                        <AnalyticsCard imageUrl='/ads/final-match.jpg' title='Final Match Day Ad' date='2/9/25' views={12.6} clicks={6.5} whu={6.5} action={() => setCampaign(!campaign)} />
                        <AnalyticsCard imageUrl='/ads/concert.jpg' title='Concert Promo' date='2/9/25' views={12.6} clicks={6.5} whu={6.5} action={() => setCampaign(!campaign)} />
                        <AnalyticsCard imageUrl='/ads/merch.jpg' title='Merchandise Sale' date='2/9/25' views={12.6} clicks={6.5} whu={6.5} action={() => setCampaign(!campaign)} />
                        <AnalyticsCard imageUrl='/ads/final-ad.jpg' title='Final Match Day Ad' date='2/9/25' views={12.6} clicks={6.5} whu={6.5} action={() => setCampaign(!campaign)} />
                        <AnalyticsCard imageUrl='/ads/promo.jpg' title='Concert Promo' date='2/9/25' views={12.6} clicks={6.5} whu={6.5} action={() => setCampaign(!campaign)} />
                        <AnalyticsCard imageUrl='/ads/rise.jpg' title='Merchandise Sale' date='2/9/25' views={12.6} clicks={6.5} whu={6.5} action={() => setCampaign(!campaign)} />
                    </div>
                    <div className='text-center mt-8'>
                        <p className='font-semibold text-lg'>Load Previous...</p>
                    </div>
                </main>
            }
            <Footer />
        </>
    )
}

export default Analytics