import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            {/* footer */}
            <footer className='bg-black'>
                <div className='relative md:mt-20 mt-16'>
                    <div className='bg-[#C400F5] absolute h-[2px] -top-10 w-full '></div>
                    <div className='bg-[#02FFFF] absolute h-[2px] -top-0 w-full '></div>
                    {/* <Image src={"./home/footer-color.svg"} height={200} width={200} alt='Whuups' className='w-full inset-0 absolute z-10 md:block hidden' />
                    <Image src={"./home/footer-black.svg"} height={200} width={200} alt='Whuups' className='w-full inset-0 -translate-y-8 md:block hidden' /> */}
                    <div className=' text-center w-full z-20 bg-gradient-to-r from-pink-900 via-blue-900 to-blue-900'>
                        <div className='flex flex-col items-center justify-center md:pt-10'>
                            <Image src={"./home/footer-logo.svg"} height={200} width={200} alt='Whuups' className='md:w-40 h-32 w-28' />
                            <nav>
                                <ul className='flex md:gap-16 gap-3 text-white font-bold text-sm md:text-lg'>
                                    <Link href={'/'} className='active text-[#C400F5]'>About</Link>
                                    <Link href={'/'}>Career</Link>
                                    <Link href={'/terms-and-conditions'}>Terms</Link>
                                    <Link href={'/'}>Privacy</Link>
                                    <Link href={'/'}>Support</Link>
                                </ul>
                            </nav>
                            <div className='flex gap-6 pt-6'>
                                <Link href={'https://www.facebook.com/Whuupsapp'} className='border p-2 rounded-full border-[#C400F5] shadow-md shadow-[#6C90FF]'>
                                    <Image src={"./home/fb.svg"} height={26} width={26} alt='fb' />
                                </Link>
                                <Link href={'https://www.instagram.com/whuups_sports'} className='border p-2 rounded-full border-[#C400F5] shadow-md shadow-[#6C90FF]'>
                                    <Image src={"./home/insta.svg"} height={26} width={26} alt='insta' />
                                </Link>
                                <Link href={'https://www.linkedin.com/company/whuups/'} className='border p-2 rounded-full border-[#C400F5] shadow-md shadow-[#6C90FF]'>
                                    <Image src={"./home/linkedin.svg"} height={26} width={26} alt='linkedin' />
                                </Link>
                                <Link href={'/'} className='border p-2 rounded-full border-[#C400F5] shadow-md shadow-[#6C90FF]'>
                                    <Image src={"./home/yt.svg"} height={26} width={26} alt='fb' />
                                </Link>
                            </div>
                        </div>
                        <p className=' pt-10 pb-2 text-center w-full z-20 text-white md:text-base text-xs'>&copy; Whuups Inc 2025. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
