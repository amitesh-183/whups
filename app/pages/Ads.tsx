'use client'
import BorderCard from '@/components/Cards/BorderCard'
import Footer from '@/components/Footer'
import GradientBorderCard from '@/components/Cards/GradientBorderCard'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, BadgeCheck, ChartNoAxesCombined, CircleCheck, CirclePlus, CloudUpload, History, Monitor, Radio, Target } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import { SliderProgress } from '@/components/SlideProgress'

// Dummy wrappers for styling

const Ads = () => {

    const [choosePlacements, setChoosePlacements] = useState(false);
    const [isReviewAd, setIsReviewAd] = useState(false);

    const steps = [
        { title: 'Choose Placements', icon: <Monitor /> },
        { title: 'Target Event or Section', icon: <Target /> },
        { title: 'Upload Creatives & Campaign Details', icon: <CloudUpload /> },
        { title: 'Confirm Payment', icon: <CircleCheck /> },
        { title: 'Go-Live & Analytics', icon: <Radio /> },
    ]

    const [activeStep, setActiveStep] = useState(0)

    // Calculate slider progress dynamically
    const progress = ((activeStep + 1) / steps.length) * 100

    // Handle navigation
    const handleNext = () => {
        if (activeStep < steps.length - 1) setActiveStep(activeStep + 1)
    }

    const handleBack = () => {
        if (activeStep > 0) setActiveStep(activeStep - 1)
    }
    return (
        <>
            <Header />
            {isReviewAd ?
                <>
                    <div className='text-center'>
                        <h3 className={`text-[#FFF799] font-bold text-2xl pt-6`}>
                            Review Your Ad
                        </h3>
                        <p>Here's how your ad will appear on the stadium jumbotron</p>
                    </div>
                    <div className='max-w-4xl mx-auto mt-6'>
                        <GradientBorderCard outerStyles='rounded-none bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]' borderStyles='rounded-none bg-none bg-[#030131]'>
                            <div className='flex'>
                                <div className='w-[60%]'>
                                    <Image src={'/ads/juice.png'} height={400} width={500} alt='Product-image' className='h-[600px] object-cover' />
                                    <div className='flex justify-center items-center'>
                                        <Button
                                            className=" hover:underline bg-none bg-transparent cursor-pointer flex items-center gap-2 my-4"
                                        >
                                            Re-Upload <CloudUpload />
                                        </Button>
                                    </div>
                                </div>
                                <div className='py-20 px-8 w-[50%]'>
                                    <p>File name</p>
                                    <h4 className='font-bold text-lg text-[#02FFFF]'>ad_banner _final.png </h4>
                                    <p className='text-sm'>Brand awareness campaign for sports drink.</p>
                                    <div className='w-full h-[0.8px] bg-[#D9D9D94D] mt-4'></div>
                                    <div>
                                        <div className='py-2 flex justify-between'>
                                            <p>Uploaded Size</p>
                                            <p>1920 * 1080 px</p>
                                        </div>
                                        <div className='py-2 flex justify-between'>
                                            <p>Format</p>
                                            <p>PNG</p>
                                        </div>
                                        <div className='py-2 flex justify-between'>
                                            <p>Placement</p>
                                            <p>North Jumbotron</p>
                                        </div>
                                    </div>
                                    <div className='w-full h-[0.8px] bg-[#D9D9D94D] mt-4'></div>
                                    <div className='py-2 flex justify-between'>
                                        <p>Total Price</p>
                                        <p className='text-md font-bold text-[#02FFFF]'>700 WHU</p>
                                    </div>
                                    <div className='flex justify-center flex-col gap-2'>
                                        <Button
                                            onClick={handleNext}
                                            className="mt-4 mx-auto cursor-pointer bg-gradient-to-r from-[#FF00C7] to-[#0022FF] rounded-xl px-8 py-2 text-white font-semibold"
                                        >
                                            Confirm & Proceed to Payment
                                        </Button>
                                        <Button
                                            onClick={handleBack}
                                            className="text-[#02FFFF] w-fit mx-auto hover:underline bg-none bg-transparent flex items-center gap-2"
                                        >
                                            <ArrowLeft /> Back
                                        </Button>
                                    </div>
                                    <p className='text-xs mt-8'>Once confirmed , your ad will be scheduled for display as per
                                        your chosen event.</p>
                                </div>
                            </div>
                        </GradientBorderCard>
                    </div>
                </>
                :
                <div className='max-w-5xl mx-auto flex flex-col items-center'>
                    <div className='flex justify-center flex-col items-center mt-20'>
                        <Image src={'/ads/ads-manager.png'} height={540} width={540} alt='ads' className='md:w-[540px] w-[260px]' />
                    </div>
                    {choosePlacements ?
                        (
                            <>
                                {/* Step Navigation */}
                                <div className='md:block hidden'>
                                    <ul className="flex gap-6 justify-center mt-10 flex-wrap mx-auto">
                                        {steps.map((step, index) => {
                                            const isCompleted = index < activeStep
                                            const isActive = index === activeStep

                                            return (
                                                <li key={index}>
                                                    <Button
                                                        onClick={() => setActiveStep(index)}
                                                        className={`w-40 md:w-80 border border-[#A4A0A0] rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all
                    ${isActive || isCompleted
                                                                ? 'bg-gradient-to-r from-[#A9005D] to-[#0098C6] text-white'
                                                                : 'bg-transparent text-[#A4A0A0] hover:border-[#02FFFF]'
                                                            }`}
                                                    >
                                                        {step.icon}
                                                        {step.title}
                                                    </Button>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>

                                {/* Slider */}
                                <div className="w-full mt-10 px-10 md:block hidden">
                                    <SliderProgress
                                        value={[progress]}
                                        max={100}
                                        step={1}
                                        className="[&>[data-slider-track]]:bg-gradient-to-r [&>[data-slider-track]]:from-[#A9005D] [&>[data-slider-track]]:to-[#0098C6] transition-all duration-500"
                                    />
                                </div>

                                {/* Step Content */}
                                <BorderCard cardStyles="md:mt-20 mt-10 h-full md:px-16 md:py-10 py-4 md:w-full w-[94%] mx-auto">
                                    <h3 className={`text-[#FFF799] font-bold text-2xl pt-6 text-center md:text-start ${activeStep === 3 ? 'text-center' : activeStep === 4 ? 'hidden' : ''}`}>
                                        {steps[activeStep].title}
                                    </h3>

                                    {/* Dynamic Step Content */}
                                    {activeStep === 0 && (
                                        <div>
                                            <p className="text-sm md:text-start text-center">
                                                Select where your ad will appear in the metaverse stadium:
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                                <GradientBorderCard borderStyles='w-full h-full broder group-hover:border-transparent' outerStyles=' group group-hover:bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]'>
                                                    <div className='flex flex-col border group-hover:border-transparent bg-[#020617] group-hover:bg-gradient-to-br from-pink-800 to-blue-800 px-6 md:py-10 py-6 rounded-2xl'>
                                                        <h4 className='py-2 font-bold text-xl text-[#FFEF3F]'>
                                                            🏟️ Fieldside Banners
                                                        </h4>
                                                        <p className='md:block hidden'>Prime visibility right along the pitch, ensuring
                                                            your brand is constantly in view during gameplay.</p>
                                                    </div>
                                                </GradientBorderCard>
                                                <GradientBorderCard borderStyles='w-full h-full broder group-hover:border-transparent' outerStyles=' group group-hover:bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]'>
                                                    <div className='flex flex-col border group-hover:border-transparent bg-[#020617] group-hover:bg-gradient-to-br from-pink-800 to-blue-800 px-6 md:py-10 py-6 rounded-2xl'>
                                                        <h4 className='py-2 font-bold text-xl'>
                                                            🎥 Concourse Screens
                                                        </h4>
                                                        <p className='md:block hidden'>Catch fans attention as they move around the stadium with dynamic, eye-level digital ads.</p>
                                                    </div>
                                                </GradientBorderCard>
                                                <GradientBorderCard borderStyles='w-full h-full broder group-hover:border-transparent' outerStyles=' group group-hover:bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]'>
                                                    <div className='flex flex-col border group-hover:border-transparent bg-[#020617] group-hover:bg-gradient-to-br from-pink-800 to-blue-800 px-6 md:py-10 py-6 rounded-2xl'>
                                                        <h4 className='py-2 font-bold text-xl'>
                                                            📢 Jumbotrons
                                                        </h4>
                                                        <p className='md:block hidden'>Massive impact with ads displayed on giant screens, visible to the entire stadium audience.</p>
                                                    </div>
                                                </GradientBorderCard>
                                                <GradientBorderCard borderStyles='w-full h-full broder group-hover:border-transparent' outerStyles=' group group-hover:bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]'>
                                                    <div className='flex flex-col border group-hover:border-transparent bg-[#020617] group-hover:bg-gradient-to-br from-pink-800 to-blue-800 px-6 md:py-10 py-6 rounded-2xl'>
                                                        <h4 className='py-2 font-bold text-xl'>
                                                            🚪 Entrance Arches
                                                        </h4>
                                                        <p className='md:block hidden'>First impression branding — greet fans as they enter the stadium with high-impact visuals.</p>
                                                    </div>
                                                </GradientBorderCard>
                                            </div>
                                        </div>
                                    )}

                                    {activeStep === 1 && (
                                        <div>
                                            <p className="text-sm">
                                                Choose which event or section of the stadium your ad targets.
                                            </p>
                                            <div>
                                                <Select>
                                                    <SelectTrigger className="w-full mt-6">
                                                        <SelectValue placeholder="Select Event" />
                                                    </SelectTrigger>
                                                    <SelectContent className='bg-[#03022b] text-white'>
                                                        <SelectGroup>
                                                            <SelectLabel>Choose Event type</SelectLabel>
                                                            <SelectItem value="apple">Championship Final</SelectItem>
                                                            <SelectItem value="banana">Creators Meetup</SelectItem>
                                                            <SelectItem value="blueberry">Football Match</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    )}

                                    {activeStep === 2 && (
                                        <div className="mt-10 flex flex-col gap-4">
                                            <div className="relative w-full">
                                                <input id="picture" type="file" className="hidden" />
                                                <Input
                                                    placeholder="Choose File"
                                                    readOnly
                                                    className="bg-[#03006059] py-6 border border-[#D9D9D9] text-white"
                                                />
                                                <label htmlFor="picture">
                                                    <CloudUpload className="absolute top-4 right-4 cursor-pointer" />
                                                </label>
                                            </div>

                                            <Input className='bg-[#03006059] border py-6 border-[#D9D9D9]' placeholder='Campaign Name' />
                                            <Textarea className='bg-[#03006059] border py-6 border-[#D9D9D9] resize-none h-40' placeholder='Description' />
                                        </div>
                                    )}

                                    {activeStep === 3 && (
                                        <div className='flex flex-col items-center justify-center'>
                                            <p className="text-sm mt-2">
                                                Pay securely using your WHU token balance.
                                            </p>
                                            <p className='text-sm mt-2'>Available Balance: 1200 WHU</p>
                                            <div className='flex justify-between w-full max-w-md mt-6'>
                                                <p>Total Amount : </p>
                                                <h4 className='font-bold text-[#02FFFF]'>700 WHU</h4>
                                            </div>
                                        </div>
                                    )}

                                    {activeStep === 4 && (
                                        <div className='flex justify-center items-center flex-col'>
                                            <BadgeCheck className="text-[#00D35F]" size={48} />
                                            <h4 className='text-3xl font-bold text-[#00D35F] mt-6' >
                                                Campaign is Live! 🚀
                                            </h4>
                                            <p className="text-sm mt-4">
                                                Your ad is now running in the stadium.
                                            </p>
                                        </div>
                                    )}

                                    {/* Navigation Buttons */}
                                    <div className="flex flex-col mt-8 justify-center gap-2 items-center">
                                        {activeStep < steps.length - 1 ? (
                                            <>
                                                <Button
                                                    onClick={handleNext}
                                                    className="mt-4 w-28 mx-auto cursor-pointer bg-gradient-to-r from-[#FF00C7] to-[#0022FF] rounded-xl px-8 py-2 text-white font-semibold"
                                                >
                                                    Next <ArrowRight />
                                                </Button>
                                                <Button
                                                    onClick={handleBack}
                                                    className="text-[#02FFFF] hover:underline cursor-pointer bg-none bg-transparent flex items-center gap-2"
                                                >
                                                    <ArrowLeft /> Back
                                                </Button>
                                            </>
                                        ) : (
                                            <Link href={'/analytics'}>
                                                <Button
                                                    onClick={handleBack}
                                                    className="text-[#02FFFF] hover:underline bg-none bg-transparent flex items-center gap-2"
                                                >
                                                    Track Analytics <ArrowRight />
                                                </Button>
                                            </Link>

                                        )}
                                    </div>
                                </BorderCard>
                            </>
                        ) :
                        (
                            <>
                                <div className='text-center'>
                                    <h4 className='text-2xl md:text-3xl text-[#FFF799] md:mt-24 mt-10 md:my-6 my-1 font-bold'>👋 Welcome, Lorem Ipsum!</h4>
                                    <p className='text-sm md:text-2xl font-semibold text-center'>What would you like to do today?</p>
                                </div>
                                <div className='grid grid-cols-3 md:mt-20 mt-6 md:gap-12 gap-4 md:px-0 px-4'>
                                    <GradientBorderCard borderStyles='w-full h-full border group-hover:border-transparent' outerStyles='p-[2px] cursor-pointer duration-500 ease-linear transition-all group bg-none text-mdnmd:e group-hover:bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]'>
                                        <div className='flex flex-col items-center justify-center text-center group-hover:bg-gradient-to-br from-pink-700 to-blue-800 bg-[#020617] duration-500 ease-linear transition-all w-full rounded-2xl h-full px-6 md:py-10 py-6' onClick={() => setChoosePlacements(true)}>
                                            <CirclePlus size={52} className='text-[#FFEF3F] md:size-[53px] size-[40px]' />
                                            <h4 className='md:py-6 pt-6 font-bold text-md md:text-xl text-[#FFEF3F]'>
                                                Buy Ad Space
                                            </h4>
                                            <p className='md:block hidden'>Launch a new campaign in the
                                                stadium with WHU tokens.</p>
                                        </div>
                                    </GradientBorderCard>
                                    <GradientBorderCard borderStyles='w-full h-full border group-hover:border-transparent' outerStyles='p-[2px] cursor-pointer duration-500 ease-linear transition-all group bg-none group-hover:bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]'>
                                        <div className='flex flex-col items-center justify-center text-center group-hover:bg-gradient-to-br from-pink-700 to-blue-800 bg-[#020617] duration-500 ease-linear transition-all w-full rounded-2xl h-full px-6 md:py-10 py-6' onClick={() => setChoosePlacements(true)}>
                                            <ChartNoAxesCombined size={52} className='text-[#02FFFF] md:size-[53px] size-[40px]' />
                                            <h4 className='md:py-6 pt-6 font-bold text-md md:text-xl'>
                                                View Analytics
                                            </h4>
                                            <p className='md:block hidden'>Check performance stats: impressions, clicks, engagement.</p>
                                        </div>
                                    </GradientBorderCard>
                                    <GradientBorderCard borderStyles='w-full h-full border group-hover:border-transparent' outerStyles='p-[2px] cursor-pointer duration-500 ease-linear transition-all group bg-none group-hover:bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]'>
                                        <div className='flex flex-col items-center justify-center text-center group-hover:bg-gradient-to-br from-pink-700 to-blue-800 bg-[#020617] duration-500 ease-linear transition-all w-full rounded-2xl h-full px-6 md:py-10 py-6' onClick={() => setChoosePlacements(true)}>
                                            <History size={52} className='text-[#02FFFF] md:size-[53px] size-[40px]' />
                                            <h4 className='md:py-6 pt-6 font-bold text-md md:text-xl'>
                                                Previous Ads
                                            </h4>
                                            <p className='md:block hidden'>Review and manage your past campaigns easily.</p>
                                        </div>
                                    </GradientBorderCard>
                                </div>

                                <div className='grid grid-cols-3 md:gap-12 gap-4 mt-20 md:px-0 px-4'>
                                    <BorderCard cardStyles='md:!px-10 !px-2 py-4 !border-[#00D35F]'>
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <h4 className='font-bold text-md md:text-xl'>
                                                Active Campaigns
                                            </h4>
                                            <p className='pt-4 text-[#00D35F] font-bold'>12</p>
                                        </div>
                                    </BorderCard>
                                    <BorderCard cardStyles='md:!px-10 !px-2 py-4 border-[#FFA600]'>
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <h4 className='font-bold text-md md:text-xl'>
                                                Total Spend (WHU)
                                            </h4>
                                            <p className='pt-4 text-[#FFA600] font-bold'>4,350</p>
                                        </div>
                                    </BorderCard>
                                    <BorderCard cardStyles='md:!px-10 !px-2 py-4 border-[#C400F5]' >
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <h4 className='font-bold text-md md:text-xl'>
                                                Impressions Today
                                            </h4>
                                            <p className='pt-4 text-[#C400F5] font-bold'>58.2K</p>
                                        </div>
                                    </BorderCard>
                                </div>

                                <div>
                                    <BorderCard cardStyles='mt-20 h-full md:px-16 md:py-10 md:border border-0'>
                                        <h3 className='text-[#FFF799] font-bold text-2xl text-center py-6'>Quality & Safety Overview</h3>
                                        <div className='flex flex-col gap-8'>
                                            <div className='bg-[#03006059] px-10 md:py-8 py-4 rounded-2xl'>
                                                <div>
                                                    <h3 className='font-semibold text-xl md:text-2xl'>✅ Brand Safety Reviews</h3>
                                                    <p className='mt-6 text-sm tracking-wider md:block hidden'>We ensure every creative meets the highest safety and quality standards before going live.</p>
                                                    <ul className='mt-2 list-disc pl-6 text-sm tracking-wider pr-40 md:block hidden md:block hidden'>
                                                        <li>Dual Review Process - Each creative is automatically screened by AI and then manually
                                                            reviewed by our team.</li>
                                                        <li>No Harmful Content - Strict checks to prevent offensive, misleading, or inappropriate material.</li>
                                                        <li>Policy Compliance - Full alignment with advertising regulations and community guidelines.</li>
                                                        <li>Audience Safety - Guaranteed safe experience across all audience segments and platforms.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='bg-[#03006059] px-10 md:py-8 py-4 rounded-2xl'>
                                                <div>
                                                    <h3 className='font-semibold text-xl md:text-2xl'>📊 Frequency Caps</h3>
                                                    <p className='mt-6 text-sm tracking-wider md:block hidden'>We protect users from ad fatigue by controlling how often the same ad is shown, ensuring a fair and engaging experience.</p>
                                                    <ul className='mt-2 list-disc pl-6 text-sm tracking-wider pr-40 md:block hidden'>
                                                        <li>Balanced Exposure - Prevents spamming with repetitive ads.</li>
                                                        <li>Flexible Controls - Custom caps adjustable for each campaign.</li>
                                                        <li>Smart Delivery - Adaptive AI optimizes frequency to reduce overexposure.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='bg-[#03006059] px-10 md:py-8 py-4 rounded-2xl'>
                                                <div>
                                                    <h3 className='font-semibold text-xl md:text-2xl'>📈 Performance Analytics</h3>
                                                    <p className='mt-6 text-sm tracking-wider md:block hidden'>Track, measure, and optimize campaigns with real-time insights. Our dashboards provide clear visibility into performance and ROI across all placements and audience segments.</p>
                                                    <ul className='mt-2 list-disc pl-6 text-sm tracking-wider pr-40 md:block hidden'>
                                                        <li>Key Metrics - Impressions, clicks, CTR, conversions, and ROI tracking.</li>
                                                        <li>Audience Insights - Heatmaps and behavioral analytics for deeper engagement analysis.</li>
                                                        <li>Data-Driven Decisions - Optimize campaigns instantly with live performance reports.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </BorderCard>
                                </div>
                            </>
                        )
                    }
                </div>
            }
            <Footer />
        </>
    )
}

export default Ads