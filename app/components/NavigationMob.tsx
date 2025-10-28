import React from 'react'

import { Calendar, Drum, Gamepad2, Handbag, House, Tv, Users, Wallet } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'


const navItems = [
    { href: '/home', label: 'Home', icon: <House /> },
    { href: '/stadium', label: 'Stadium', icon: <Drum /> },
    { href: '/store', label: 'Store', icon: <Handbag /> },
    { href: '/play', label: 'Play', icon: <Gamepad2 /> },
    { href: '/social', label: 'Social', icon: <Users /> },
    {
        href: '/profile', label: 'Profile', icon: <Avatar className='w-6 h-6'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    },
]

const NavigationMob = () => {
    return (
        <>
            <div className='sticky bottom-0 left-0 z-50 w-full bg-[#030060] md:hidden block'>
                <div className='w-full h-[2px] bg-gradient-to-r from-blue-800 to-pink-800'></div>

                <div className='flex gap-2 justify-evenly pt-2 pb-1'>
                    {navItems.map((item, index) => (
                        <Link href={item.href} key={index}>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <div>{item.icon}</div>
                                <div className='text-xs'>{item.label}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NavigationMob