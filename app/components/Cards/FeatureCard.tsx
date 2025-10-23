import React from 'react'
import { Button } from '../ui/button'

interface FeatureCardProps {
    title: string
    para: string
    cta?: string
    isBtnNedded?: boolean
    borderHeight?: string
}

const FeatureCard = ({ title, para, cta, isBtnNedded = false, borderHeight }: FeatureCardProps) => {
    return (
        <>
            <div className={`relative rounded-2xl p-[0.8px] h-fit md:w-80 w-60 bg-gradient-to-b from-[#D2FFFF] to-[#030060a1] shadow-lg ${borderHeight}`}>
                <div className={`rounded-2xl bg-[#020617] p-6 md:px-12 text-center py-12 ${borderHeight}`}>
                    <h2 className="text-cyan-300 font-bold text-lg mb-2">{title}</h2>
                    <p className=" text-sm mb-4 font-semibold max-w-[190px] mx-auto py-4 mt-4">
                        {para}
                    </p>
                    {isBtnNedded &&
                        <Button className="bg-[#030060] hover:bg-[#040079] cursor-pointer w-[200px] text-white font-bold tracking-wider px-5 py-2 rounded-full transition">
                            {cta}
                        </Button>
                    }
                </div>
            </div>
        </>
    )
}

export default FeatureCard