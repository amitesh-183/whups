import React from 'react'
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
    return (
        <>
            <Header />
            <main className='max-w-7xl mx-auto'>
                <Tabs defaultValue="digital-goods" className="flex-row items-start gap-6">
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