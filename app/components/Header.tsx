import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Menu } from 'lucide-react'

const Header = () => {
    return (
        <>
            <header className='flex items-center justify-between md:px-16 px-4 py-6'>
                <Link href={'/'}>
                    <Image src={"./main-logo.svg"} height={200} width={200} alt='Whuups' className='w-36 md:w-48' />
                </Link>
                <nav className='md:flex gap-10 items-center hidden'>
                    <ul className='text-white flex gap-8'>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/'}>Stadium</Link>
                        <Link href={'/play'}>Play</Link>
                        <Link href={'/social'}>Social</Link>
                        <Link href={'/'}>Store</Link>
                        <Link href={'/'}>Events</Link>
                        <Link href={'/'}>Ads</Link>
                        <Link href={'/wallet'}>Wallet</Link>
                        <Link href={'/'}>Search</Link>
                    </ul>
                    <Link href={'/profile'}>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Link>
                </nav>
                <div className='md:hidden flex'>
                    <Menu />
                </div>
            </header>
        </>
    )
}

export default Header