'use client'
import GradientBorderCard from '@/components/Cards/GradientBorderCard'
import Footer from '@/components/Footer'
import ThemeButton from '@/components/ThemeButton'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const StoreAllowlist = () => {
    const [isPending, setIsPending] = React.useState(false);
    const [isRejected, setIsRejected] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    return (
        <>
            <header className='flex justify-between w-[90%] mx-auto pt-8'>
                <Link href='/store'>
                    <Button className='text-[#02FFFF] hover:underline bg-none bg-transparent flex items-center gap-2'><ArrowLeft />Back</Button>
                </Link>
                <Link href={'/cart'} className='relative'><ShoppingCart size={"36"} /> <span className='absolute top-2 right-1 translate-x-1/2 -translate-y-1/2 bg-red-600 text-white w-4 h-4 text-xs flex items-center justify-center rounded-full'>0</span></Link>
            </header>
            <main className='w-[60%] mx-auto mb-52 mt-20'>
                <GradientBorderCard outerStyles='bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]'>
                    <div className='bg-[#020617] rounded-2xl py-8 px-8 flex flex-col items-center'>
                        <h2 className='font-bold text-3xl'>Token Holder Access</h2>
                        <p className='py-4'>Exclusive drops only for WHU token holders.</p>
                        <h4 className='text-2xl font-semibold py-3'>Requirements</h4>
                        <ul className='list-disc'>
                            <li>Hold at least 50 WHU tokens</li>
                            <li className='mt-2'>Wallet must be connected</li>
                        </ul>
                        {isPending ? (
                            <p className='py-4 text-[#FFA600]'>⏳Request approval pending.....</p>
                        ) : isRejected ? (
                            <p className='py-4 text-[#FA1500]'>❌ Rejected. Please try again .</p>
                        ) : isSuccess ? (
                            <p className='py-4 text-[#00AF4F]'>✅ Approved! You now have access.</p>
                        ) : (
                            <ThemeButton title='Connect Wallet' btnStyle='mt-6 bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 w-[284px] rounded-[20px] font-semibold h-[52px] cursor-pointer' />
                        )
                        }
                    </div>
                </GradientBorderCard>
            </main>
            <Footer />
        </>
    )
}

export default StoreAllowlist