import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            {/* footer */}
            <footer className='bg-black px-4'>
                <div className='relative md:mt-20 mt-16'>
                    <Image src={"./home/footer-color.svg"} height={200} width={200} alt='Whuups' className='w-full h-full absolute z-10 md:block hidden' />
                    <Image src={"./home/footer-black.svg"} height={200} width={200} alt='Whuups' className='w-full h-full -translate-y-8 md:block hidden' />
                    <div className='md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 text-center w-full z-20'>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={"./home/footer-logo.svg"} height={200} width={200} alt='Whuups' className='md:w-40 h-32 w-28' />
                            <nav>
                                <ul className='flex md:gap-16 gap-3 text-white font-bold text-sm md:text-lg'>
                                    <Link href={'/'} className='active text-[#C400F5]'>About</Link>
                                    <Link href={'/'}>Career</Link>
                                    <Link href={'/'}>Terms</Link>
                                    <Link href={'/'}>Privacy</Link>
                                    <Link href={'/'}>Support</Link>
                                </ul>
                            </nav>
                            <div className='flex gap-6 pt-6'>
                                <div className='border p-2 rounded-full border-[#C400F5] shadow-md shadow-[#6C90FF]'>
                                    <Image src={"./home/fb.svg"} height={26} width={26} alt='fb' />
                                </div>
                                <div className='border p-2 rounded-full border-[#C400F5] shadow-md shadow-[#6C90FF]'>
                                    <Image src={"./home/insta.svg"} height={26} width={26} alt='fb' />
                                </div>
                                <div className='border p-2 rounded-full border-[#C400F5] shadow-md shadow-[#6C90FF]'>
                                    <Image src={"./home/linkedin.svg"} height={26} width={26} alt='fb' />
                                </div>
                                <div className='border p-2 rounded-full border-[#C400F5] shadow-md shadow-[#6C90FF]'>
                                    <Image src={"./home/yt.svg"} height={26} width={26} alt='fb' />
                                </div>
                            </div>
                        </div>
                        <p className='md:pt-20 pt-10 pb-2 text-center w-full z-20 text-white md:text-base text-xs'>&copy; Whuups Inc 2025. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer