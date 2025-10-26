'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Calendar, Drum, Gamepad2, Handbag, House, LogOut, Menu, Search, ShoppingCart, Tv, Users, Wallet, X } from 'lucide-react'

const Header = () => {
    const [open, setOpen] = React.useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    // 👇 Disable scroll when menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [open])

    // 👇 Close when clicking outside the menu
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }

        if (open) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [open])

    return (
        <>
            <header className='flex items-center justify-between md:px-16 px-4 md:py-6 py-3'>
                {/* Mobile Menu Icon */}
                <div className='md:hidden flex' onClick={() => setOpen(!open)}>
                    <Menu />
                </div>
                <Link href={'/'}>
                    <Image
                        src={'/main-logo.svg'}
                        height={200}
                        width={200}
                        alt='Whuups'
                        className='w-36 md:w-48 md:block hidden'
                    />
                    <Image
                        src={'/social/logo.svg'}
                        height={12}
                        width={13}
                        alt='Whuups'
                        className='w-12 md:hidden block ml-14'
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className='md:flex gap-10 items-center hidden'>
                    <ul className='text-white flex gap-8'>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/stadium'}>Stadium</Link>
                        <Link href={'/play'}>Play</Link>
                        <Link href={'/social'}>Social</Link>
                        <Link href={'/store'}>Store</Link>
                        <Link href={'/events'}>Events</Link>
                        <Link href={'/ads'}>Ads</Link>
                        <Link href={'/wallet'}>Wallet</Link>
                        <Link href={'/search'}>Search</Link>
                    </ul>
                    <Link href={'/profile'}>
                        <Avatar>
                            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Link>
                </nav>
                {/* Mobile Menu Icon */}
                <div className='md:hidden flex gap-2'>
                    <Link href={'/'}><Search /></Link>
                    <Link href={'/'}><Image src={'/Wallet.svg'} height={24} width={24} alt='Whu' /></Link>
                    <Link href={'/cart'}><ShoppingCart /></Link>
                </div>

                {/* Overlay */}
                {open && (
                    <div className='fixed inset-0 bg-black/40 z-50 transition-all duration-300'></div>
                )}

                {/* Sidebar Menu */}
                <div
                    ref={menuRef}
                    className={`fixed top-0 left-0 w-[60%] h-dvh bg-[#03006080] backdrop-blur-2xl z-50 
                    ${open ? 'translate-x-0' : '-translate-x-full'} duration-300 ease-linear transition-all flex flex-col justify-between py-6`}
                >
                    <div>

                        <div className=' px-6'>
                            <Link href={'/profile'} className='flex gap-4 justify-center items-center'>
                                <Avatar>
                                    <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <h5>Hello James</h5>
                            </Link>
                        </div>

                        <div className='h-[1px] w-[80%] mx-auto bg-[#D9D9D9] mt-4 px-9'></div>

                        <nav className='mt-8'>
                            <ul className='text-white flex flex-col gap-8 pl-8'>
                                <Link href={'/'} className='flex gap-4 items-center'><House />Home</Link>
                                <Link href={'/stadium'} className='flex gap-4 items-center'><Drum />Stadium</Link>
                                <Link href={'/play'} className='flex gap-4 items-center'><Gamepad2 />Play</Link>
                                <Link href={'/social'} className='flex gap-4 items-center'><Users />Social</Link>
                                <Link href={'/store'} className='flex gap-4 items-center'><Handbag />Store</Link>
                                <Link href={'/events'} className='flex gap-4 items-center'><Calendar />Events</Link>
                                <Link href={'/ads'} className='flex gap-4 items-center'><Tv />Ads</Link>
                                <Link href={'/wallet'} className='flex gap-4 items-center'><Wallet />Wallet</Link>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <div className='h-[1px] w-[80%] mx-auto bg-[#D9D9D9] mb-4 px-9'></div>
                        <div className='pl-10'>
                            <Link href={'/wallet'} className='flex gap-4 items-center'><LogOut />Logout</Link>
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header
