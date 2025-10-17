import Image from 'next/image'
import React from 'react'


interface GlowCardsProps {
    title: string
    para: string
    borderStyle?: string
    imageUrl: string
}

const GlowCards = ({ title, para, borderStyle, imageUrl }: GlowCardsProps) => {
    return (
        <>
            <div className="relative drop-shadow-xl md:w-80 w-60 md:h-72 h-80 overflow-hidden rounded-2xl bg-[#1b2647] p-4">
                <div className='relative z-40 bg-gradient-to-b from-[#C400F5] to-[#02FFFF] h-fit w-fit mx-auto p-[1px] overflow-hidden'>
                    <Image src={imageUrl} height={100} width={200} alt='Image' className='h-[150px] w-[160px] object-cover' />
                </div>
                <div
                    className="absolute z-30 flex flex-col items-center justify-center pt-40 rounded-xl inset-0.5 bg-[#1b2647] px-5"
                >
                    <h4 className='font-bold text-xl font-poppins text-[#02FFFF] py-3'>{title}</h4>
                    <p className='text-center font-bold md:text-base text-sm text-white'>{para}</p>
                </div>
                <div className="absolute w-56 h-48 bg-[#C400F5] blur-[50px] top-0 right-0 -translate-x-[20%]"></div>
                <div className="absolute w-56 h-48 bg-[#02FFFF] blur-[50px] right-0 bottom-0 -translate-x-[25%]"></div>
            </div>

        </>
    )
}

export default GlowCards