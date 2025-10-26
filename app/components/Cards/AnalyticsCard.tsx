import React from 'react'
import GradientBorderCard from './GradientBorderCard'
import Image from 'next/image'
import ThemeButton from '../ThemeButton'
import { Eye, MousePointer } from 'lucide-react';


interface AnalyticsCardProps {
    imageUrl: string;
    title: string;
    date: string;
    views: number;
    clicks: number;
    whu: number;
    action: () => void;
}

const AnalyticsCard = ({ imageUrl, title, date, views, clicks, whu, action }: AnalyticsCardProps) => {
    return (
        <>
            <div className='w-fit'>
                <GradientBorderCard borderStyles='' outerStyles='relative w-fit bg-none border group group-hover:border-transparent p-1 border border-[#A4A0A0] bg-none hover:bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] duration-300 ease-in-out transition-all cursor-pointer '>
                    <div className=''>
                        <Image src={imageUrl} height={100} width={100} alt='Image' className='w-[280px] md:h-[350px] h-[260px] rounded-2xl object-fill' />
                    </div>
                    <div className='absolute bottom-0 left-0 w-full md:h-[38%] backdrop-blur-[1px] bg-blue-800/10 rounded-2xl md:p-4 py-4 px-2 md:px-8 group-hover:text-[#02FFFF]'>
                        <div className='flex justify-between items-center'>
                            <h4 className='text-sm font-semibold'>{title}</h4>
                            <p className='text-xs'>{date}</p>
                        </div>
                        <div className='flex items-center justify-around gap-2 mt-4'>
                            <div className='flex items-center justify-center flex-col bg-black/30 w-full h-14 rounded-2xl'>
                                <Eye size={"20"} />
                                <p className='text-xs mt-1'>{views}k</p>
                            </div>
                            <div className='flex items-center justify-center flex-col bg-black/30 w-full h-14 rounded-2xl'>
                                <MousePointer size={"20"} />
                                <p className='text-xs mt-1'>{clicks}k</p>
                            </div>
                            <div className='flex items-center justify-center flex-col bg-black/30 w-full h-14 rounded-2xl'>
                                <h6 className='text-sm'>WHU</h6>
                                <p className='text-xs mt-1'>{whu}k</p>
                            </div>
                        </div>
                    </div>
                </GradientBorderCard>
                <div className='flex justify-center mt-2'>
                    <ThemeButton btnStyle='h-10 w-40 text-sm bg-none hover:bg-gradient-to-r from-[#A9005D] to-[#0098C6]' title='View Campaign' onClick={action} />
                </div>
            </div>
        </>
    )
}

export default AnalyticsCard