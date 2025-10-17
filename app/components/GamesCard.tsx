import Image from 'next/image'
import React from 'react'


interface GamesCardsProps {
    title: string
    borderStyle?: string
    imageUrl: string
}

const GamesCards = ({ title, borderStyle, imageUrl }: GamesCardsProps) => {
    return (
        <>

            <div className={`relative rounded-2xl py-6 px-12 h-64 w-64 bg-gradient-to-b from-[#C400F5] to-[#02FFFF]`}>
                <div className='relative z-40 bg-gradient-to-b from-[#C400F5] to-[#02FFFF] p-[1px] h-fit w-fit mx-auto overflow-hidden'>
                    <Image src={imageUrl} height={100} width={200} alt='Image' className='h-[150px] w-[160px] object-cover' />
                </div>
                <div
                    className="absolute z-30 flex flex-col items-center justify-center pt-48 rounded-xl inset-[1px] bg-[#0f0e27] px-1"
                >
                    <h4 className='font-bold text-xl font-poppins text-white py-3'>{title}</h4>
                </div>
            </div>
        </>
    )
}

export default GamesCards