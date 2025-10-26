import GradientBorderCard from '@/components/Cards/GradientBorderCard'
import Footer from '@/components/Footer'
import ThemeButton from '@/components/ThemeButton'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Heart, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AuctionDetails = () => {
    return (
        <>
            <header className='flex justify-between w-[80%] mx-auto pt-8'>
                <Link href='/store'>
                    <Button className='text-[#02FFFF] hover:underline bg-none bg-transparent flex items-center gap-2'><ArrowLeft />Back</Button>
                </Link>
                <Link href={'/cart'} className='relative'><ShoppingCart size={"36"} /> <span className='absolute top-2 right-1 translate-x-1/2 -translate-y-1/2 bg-red-600 text-white w-4 h-4 text-xs flex items-center justify-center rounded-full'>0</span></Link>
            </header>
            <main>
                <section className='w-[80%] mx-auto my-10'>
                    <GradientBorderCard outerStyles='rounded-none bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]' borderStyles='rounded-none bg-none bg-[#030131]'>
                        <div className='flex items-center'>
                            <div className='w-[60%] relative'>
                                <Image src={'/ads/juice.png'} height={400} width={500} alt='Product-image' className='h-[700px] w-full object-cover' />
                                <div className='flex flex-col items-center justify-center gap-4 absolute bottom-6 left-0'>
                                    <Image src={'/ads/juice.png'} height={400} width={500} alt='Product-image' className='h-[120px] w-[100px] object-cover' />
                                    <Image src={'/ads/juice.png'} height={400} width={500} alt='Product-image' className='h-[120px] w-[100px] object-cover' />
                                    <Image src={'/ads/juice.png'} height={400} width={500} alt='Product-image' className='h-[120px] w-[100px] object-cover' />
                                </div>
                            </div>
                            <div className='py-10 px-8 w-[50%] mx-auto'>
                                <h4 className='font-black text-2xl'>Signed Jersey</h4>
                                <p className='text-sm'>Autographed collector jersey by top player.</p>

                                <h4 className='text-xl font-bold flex items-center gap-2 mt-4 py-3'>Current Bid: 120 WHU</h4>
                                <p className='text-sm'>126h 22m left</p>

                                <div className='py-4'>
                                    <Input className='bg-[#03006066] border-0 focus-visible:ring-0' placeholder='Enter your bid' />

                                </div>
                                <div className='flex gap-2 items-center mt-4'>
                                    <ThemeButton title='Place Bid' btnStyle='border-0 h-10 from-[#C400F5] to-[#FF008C]' />
                                    <Heart size={30} />
                                </div>
                                <h5 className='text-xl font-semibold mt-6'>Auction Details</h5>
                                <ul className='list-disc py-8 pl-4'>
                                    <li>
                                        Resale royalties apply on NFT auctions
                                    </li>
                                    <li>
                                        Winner notified instantly after close
                                    </li>
                                    <li>
                                        Supports WHU
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </GradientBorderCard>
                </section>
            </main >
            <Footer />
        </>
    )
}

export default AuctionDetails