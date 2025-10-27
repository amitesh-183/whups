'use client'
import React, { useState } from 'react'
import { ChevronDown, CloudUpload, Lock, Megaphone, ShoppingCart, Upload, Video } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import BorderCard from '@/components/Cards/BorderCard'
import ThemeButton from '@/components/ThemeButton'
import Header from '@/components/Header'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Calendar } from '@/components/ui/calendar'

const trending = [
    {
        id: 0,
        name: "Skin Pack",
        onChain: true,
        whu: 200,
        image: "/store/dg1.png",
        description: "Exclusive in-game skins for your avatar.",
    },
    {
        id: 1,
        name: "Event Pass",
        onChain: true,
        whu: 200,
        image: "/store/dg2.jpg",
        description: "Access to special community events and perks.",
    },
    {
        id: 2,
        name: "Event Pass",
        onChain: true,
        whu: 200,
        image: "/store/dg3.jpg",
        description: "Exclusive in-game skins for your avatar.",
    },
    {
        id: 3,
        name: "Skin Pack",
        onChain: true,
        whu: 200,
        image: "/store/dg4.jpg",
        description: "Exclusive in-game skins for your avatar.",
    },
    {
        id: 4,
        name: "Championship Final",
        onChain: true,
        whu: 200,
        image: "/profile/general-pass.jpg",
        description: "Meet creators + collectibles + early acces",
    }
]

const CreatorTools = () => {

    const [date, setDate] = React.useState<Date | undefined>(
        new Date(2025, 5, 12)
    )

    const steps = [
        { title: 'Upload' },
        { title: 'Price' },
        { title: 'Gate' },
        { title: 'Schedule' },
        { title: 'Promo' },
        { title: 'Approval' },
    ]

    const [activeStep, setActiveStep] = useState(0)

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
            <main className='max-w-7xl mx-auto'>
                <Tabs defaultValue="start-live" className="flex-row items-start gap-6">
                    <div>
                        <h4 className='text-xl font-semibold py-2'>Creator Tools</h4>
                        <TabsList className='flex-col h-full bg-[#03006040] gap-6'>
                            <TabsTrigger className='data-[state=active]:bg-[#03006040] data-[state=active]:text-white text-white py-4 px-6 w-full !text-sm' value="start-live"><Video /> Start Live</TabsTrigger>
                            <TabsTrigger className='data-[state=active]:bg-[#03006040] data-[state=active]:text-white text-white py-4 px-6 w-full !text-sm' value="upload"><Upload /> Upload</TabsTrigger>
                            <TabsTrigger className='data-[state=active]:bg-[#03006040] data-[state=active]:text-white text-white py-4 px-6 w-full !text-sm' value="drop"><span className='font-black text-xs'>WHU</span>Set up Drop</TabsTrigger>
                            <TabsTrigger className='data-[state=active]:bg-[#03006040] data-[state=active]:text-white text-white py-4 px-6 w-full !text-sm' value="promote"><Megaphone />Promote</TabsTrigger>
                            <TabsTrigger className='data-[state=active]:bg-[#03006040] data-[state=active]:text-white text-white py-4 px-6 w-full !text-sm' value="room"><Lock />Create Gated Room</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="start-live">
                        <div>
                            <div>
                                <h4 className='text-2xl font-black text-[#02FFFF] pt-2 pb-2.5'>Start Live</h4>
                            </div>

                            <BorderCard cardStyles='!px-8 py-8 my-4 shadow-md shadow-[#02FFFF]/50'>
                                <div>
                                    <h3 className='font-semibold text-lg'>Go live directly from your dashboard.</h3>
                                    <Input className='bg-[#03006066] focus-visible:ring-0 py-6 px-3 border-0 mt-4' placeholder='Stream Title' />
                                    <Textarea className='bg-[#03006066] focus-visible:ring-0 py-4 px-3 border-0 resize-none mt-3 h-40' placeholder=' Description(optional)' />
                                    <ThemeButton title='Start Stream' btnStyle='mt-6 from-pink-600 to-blue-600 border-0' />
                                </div>
                            </BorderCard>
                        </div>
                    </TabsContent>
                    <TabsContent value="upload">
                        <div>
                            <div>
                                <h4 className='text-2xl font-black text-[#02FFFF] pt-2 pb-2.5'>Start Live</h4>
                            </div>

                            <BorderCard cardStyles='!px-8 py-8 my-4 shadow-md shadow-[#02FFFF]/50'>
                                <div>
                                    <h3 className='font-semibold text-lg'>Go live directly from your dashboard.</h3>
                                    <div className="relative w-full mt-6">
                                        <input id="picture" type="file" className="hidden" />
                                        <Input
                                            placeholder="Choose File"
                                            readOnly
                                            className="bg-[#03006059] py-6 border-0 focus-visible:ring-0 text-white"
                                        />
                                        <label htmlFor="picture">
                                            <CloudUpload className="absolute top-4 right-4 cursor-pointer" />
                                        </label>
                                    </div>
                                    <Input className='bg-[#03006066] focus-visible:ring-0 py-6 px-3 border-0 mt-3' placeholder='Title' />
                                    <Textarea className='bg-[#03006066] focus-visible:ring-0 py-4 px-3 border-0 resize-none mt-3 h-40' placeholder=' Description(optional)' />
                                    <ThemeButton title='Upload' btnStyle='mt-6 from-pink-600 to-blue-600 border-0' />
                                </div>
                            </BorderCard>
                        </div>
                    </TabsContent>
                    <TabsContent value="drop">
                        <div>
                            <div>
                                <h4 className='text-2xl font-black text-[#02FFFF] pt-2 pb-2.5'>Launch Your Drop</h4>
                            </div>
                            <div className='md:block hidden'>
                                <ul className="flex gap-6 mt-4 flex-wrap mx-auto">
                                    {steps.map((step, index) => {
                                        const isActive = index === activeStep

                                        return (
                                            <li key={index}>
                                                <Button
                                                    onClick={() => setActiveStep(index)}
                                                    className={`rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all
                    ${isActive
                                                            ? 'bg-blue-800 text-white'
                                                            : 'bg-transparent text-[#A4A0A0] hover:border-[#02FFFF]'
                                                        }`}
                                                >
                                                    {step.title}
                                                </Button>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            {activeStep === 0 && (
                                <>
                                    <BorderCard cardStyles='!px-8 py-8 my-4 shadow-md shadow-[#02FFFF]/50'>
                                        <div>
                                            <h3 className='font-semibold text-xl text-center'>Step 1 of 6 - Upload Assets</h3>
                                            <div className="relative w-full mt-6">
                                                <input id="picture" type="file" className="hidden" />
                                                <div>
                                                    <label htmlFor="picture" className='bg-[#03006059] rounded-2xl border border-[#02FFFF] py-6 flex flex-col items-center gap-4 justify-center'>
                                                        <p>Drag & Drop here or browse file</p>
                                                        <CloudUpload className="cursor-pointer" size={'30'} />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </BorderCard>
                                    <div className='flex justify-between'>
                                        <ThemeButton onClick={handleBack} title='Back' btnStyle='mt-6 from-transparent to-transparent w-fit h-10 px-6' />
                                        <ThemeButton onClick={handleNext} title='Continue' btnStyle='mt-6 from-pink-600 to-blue-600 border-0 h-10' />
                                    </div>
                                </>
                            )}
                            {activeStep === 1 && (
                                <>
                                    <BorderCard cardStyles='!px-8 py-8 my-4 shadow-md shadow-[#02FFFF]/50'>
                                        <div>
                                            <h3 className='font-semibold text-xl text-center'>Step 2 of 6 - Price & Supply</h3>

                                            <div className='bg-[#03006059] rounded-2xl border border-[#02FFFF] mt-6 p-10'>
                                                <Label className='flex items-center gap-4'>
                                                    <p className='w-40'>Set Price</p>
                                                    <Input className='bg-[#03006066] focus-visible:ring-0 py-4 px-3 border-0 w-10' defaultValue='50' />
                                                    <span>WHU</span><Image src={'/wallet/whu.svg'} alt='whu' width={30} height={30} />
                                                </Label>
                                                <Label className='flex items-center gap-4 mt-4'>
                                                    <p className='w-40'>Max Supply</p>
                                                    <Input className='bg-[#03006066] focus-visible:ring-0 py-4 px-3 border-0 w-10' defaultValue='80' />
                                                </Label>
                                            </div>


                                        </div>
                                    </BorderCard>
                                    <div className='flex justify-between'>
                                        <ThemeButton onClick={handleBack} title='Back' btnStyle='mt-6 from-transparent to-transparent w-fit h-10 px-6' />
                                        <ThemeButton onClick={handleNext} title='Continue' btnStyle='mt-6 from-pink-600 to-blue-600 border-0 h-10' />
                                    </div>
                                </>
                            )}
                            {activeStep === 2 && (
                                <>
                                    <BorderCard cardStyles='!px-8 py-8 my-4 shadow-md shadow-[#02FFFF]/50'>
                                        <div>
                                            <h3 className='font-semibold text-xl text-center'>Step 3 of 6 - Gate Access</h3>
                                            <div>
                                                <div className="flex flex-col gap-6">
                                                    <div className="flex items-center gap-3">
                                                        <Checkbox id="followers" defaultChecked />
                                                        <Label htmlFor="followers">Followers</Label>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <Checkbox id="clubs" />
                                                        <Label htmlFor="clubs">Clubs</Label>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <Checkbox id="token" />
                                                        <Label htmlFor="token">Token Holders</Label>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <Checkbox id="everyone" />
                                                        <Label htmlFor="everyone">Everyone</Label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </BorderCard>
                                    <div className='flex justify-between'>
                                        <ThemeButton onClick={handleBack} title='Back' btnStyle='mt-6 from-transparent to-transparent w-fit h-10 px-6' />
                                        <ThemeButton onClick={handleNext} title='Continue' btnStyle='mt-6 from-pink-600 to-blue-600 border-0 h-10' />
                                    </div>
                                </>
                            )}
                            {activeStep === 3 && (
                                <>
                                    <BorderCard cardStyles='!px-8 py-8 my-4 shadow-md shadow-[#02FFFF]/50 h-[480px]'>
                                        <div>
                                            <h3 className='font-semibold text-xl'>Step 4 of 6 - Schedule</h3>
                                            <div className='flex gap-10 items-center justify-center'>
                                                <div className='scale-[0.8]'>
                                                    <Calendar
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={setDate}
                                                        className="rounded-lg border [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)] bg-transparent"
                                                        buttonVariant="ghost"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className='font-black text-3xl'>20 April 2025</h4>
                                                    <p>Sunday</p>
                                                </div>
                                            </div>
                                        </div>
                                    </BorderCard>
                                    <div className='flex justify-between mb-10'>
                                        <ThemeButton onClick={handleBack} title='Back' btnStyle='mt-6 from-transparent to-transparent w-fit h-10 px-6' />
                                        <ThemeButton onClick={handleNext} title='Continue' btnStyle='mt-6 from-pink-600 to-blue-600 border-0 h-10' />
                                    </div>
                                </>
                            )}
                            {activeStep === 4 && (
                                <>
                                    <BorderCard cardStyles='!px-8 py-8 my-4 shadow-md shadow-[#02FFFF]/50'>
                                        <div>
                                            <h3 className='font-semibold text-xl'>Step 5 of 6 - Promo Creatives</h3>
                                            <div className='flex flex-col mt-10 justify-center'>
                                                <div className="flex items-center gap-3">
                                                    <Checkbox id="followers" />
                                                    <Label htmlFor="followers">Auto-generate banners & social posts</Label>
                                                </div>
                                                <ThemeButton onClick={handleBack} title='Generate Preview' btnStyle='mt-8 from-blue-800 to-blue-800 border-0 w-fit h-10 px-6' />
                                            </div>
                                        </div>
                                    </BorderCard>
                                    <div className='flex justify-between mb-10'>
                                        <ThemeButton onClick={handleBack} title='Back' btnStyle='mt-6 from-transparent to-transparent w-fit h-10 px-6' />
                                        <ThemeButton onClick={handleNext} title='Continue' btnStyle='mt-6 from-pink-600 to-blue-600 border-0 h-10' />
                                    </div>
                                </>
                            )}
                            {activeStep === 5 && (
                                <>
                                    <BorderCard cardStyles='!px-8 py-8 my-4 shadow-md shadow-[#02FFFF]/50'>
                                        <div>
                                            <h3 className='font-semibold text-xl'>Step 6 of 6 - Request Approval</h3>
                                            <div className='flex flex-col mt-10 justify-center bg-[#03006066] p-8'>
                                                <div className="">
                                                    <Label htmlFor="followers">If you are a Pro Creator, Famous personality, or Institution, please
                                                        submit for approval before publishing.</Label>
                                                    <div>
                                                        <Select>
                                                            <SelectTrigger className="w-full mt-4 border-0 bg-[#03006066] py-5">
                                                                <SelectValue placeholder="Select Creator type" />
                                                            </SelectTrigger>
                                                            <SelectContent className='bg-[#03022b] text-white'>
                                                                <SelectGroup>
                                                                    <SelectLabel>Select Creator type</SelectLabel>
                                                                    <SelectItem value="apple">Pro Creator</SelectItem>
                                                                    <SelectItem value="banana">Famous Personality</SelectItem>
                                                                    <SelectItem value="blueberry">Clubs & Institutions</SelectItem>
                                                                </SelectGroup>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                </div>
                                                <ThemeButton onClick={handleBack} title='Submit Request' btnStyle='mt-8 from-green-400 to-green-400 border-0 w-fit h-10 px-6' />
                                            </div>
                                        </div>
                                    </BorderCard>
                                    <div className='flex justify-between mb-10'>
                                        <ThemeButton onClick={handleBack} title='Back' btnStyle='mt-6 from-transparent to-transparent w-fit h-10 px-6' />
                                        <ThemeButton title='Publish' btnStyle='mt-6 from-pink-600 to-blue-600 border-0 h-10' />
                                    </div>
                                </>
                            )}
                        </div>
                    </TabsContent>
                    <TabsContent value="promote">
                        <div>
                            <div>
                                <h4 className='text-2xl font-black text-[#02FFFF] pt-2 pb-2.5'>Promote</h4>
                            </div>

                            <BorderCard cardStyles='!px-8 py-8 my-4 shadow-md shadow-[#02FFFF]/50'>
                                <div>
                                    <h3 className='font-semibold text-lg'>Generate promo banners, social share assets, and highlights.</h3>
                                    <div className='flex flex-col items-center justify-center'>
                                        <ThemeButton title='Generate Banners' btnStyle='mt-6 from-blue-900/40 to-blue-900/40 border-0 w-full' />
                                        <ThemeButton title='Create Post' btnStyle='mt-6 from-blue-900/40 to-blue-900/40 border-0 w-full' />
                                    </div>
                                </div>
                            </BorderCard>
                        </div>
                    </TabsContent>
                    <TabsContent value="room">
                        <div>
                            <div>
                                <h4 className='text-2xl font-black text-[#02FFFF] pt-2 pb-2.5'>Create Gated Room</h4>
                            </div>

                            <BorderCard cardStyles='!px-8 py-8 my-4 shadow-md shadow-[#02FFFF]/50'>
                                <div>
                                    <h3 className='font-semibold text-lg'>Set up private or exclusive rooms.</h3>
                                    <div>
                                        <p className="text-sm">
                                            Choose which event or section of the stadium your ad targets.
                                        </p>
                                        <Input className='bg-[#03006066] focus-visible:ring-0 py-6 px-3 border-0 mt-4' placeholder='Room Name' />
                                        <Input className='bg-[#03006066] focus-visible:ring-0 py-6 px-3 border-0 mt-4' placeholder='Description' />
                                        <div>
                                            <Select>
                                                <SelectTrigger className="w-full mt-4 border-0 bg-[#03006066] py-5">
                                                    <SelectValue placeholder="Access type" />
                                                </SelectTrigger>
                                                <SelectContent className='bg-[#03022b] text-white'>
                                                    <SelectGroup>
                                                        <SelectLabel>Choose Access type</SelectLabel>
                                                        <SelectItem value="apple">Pro Creator</SelectItem>
                                                        <SelectItem value="banana">Famous Personality</SelectItem>
                                                        <SelectItem value="blueberry">Clubs & Institutions</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <ThemeButton title='Create Room' btnStyle='mt-6 from-pink-600 to-blue-600 border-0' />
                                </div>
                            </BorderCard>
                        </div>
                    </TabsContent>
                </Tabs>
            </main>
        </>
    )
}

export default CreatorTools