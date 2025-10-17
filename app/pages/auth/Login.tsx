import ThemeButton from '@/components/ThemeButton'
import Image from 'next/image'
import React from 'react'

const Login = () => {
    return (
        <div className='flex items-center justify-center h-screen relative overflow-hidden'>
            <div className='absolute inset-0'>
                <video autoPlay loop muted width={"100%"} height={"100%"} className='object-fill opacity-90'>
                    <source src="/login.mp4" />
                </video>
            </div>
            <div className='absolute inset-0 bg-radial from-black/60 to-black to-80% backdrop-blur-sm'></div>
            <div className='relative flex flex-col items-center justify-center text-white'>
                <div className=''>
                    <Image src={"/logo.svg"} height={120} width={120} alt='Whuups' />
                </div>
                <div className='mt-12 flex justify-center flex-col items-center'>
                    <h3 className='text-border-login text-3xl font-bold drop-shadow-2xl drop-shadow-black'>Welcome to the Whuups Stadium</h3>
                    <p className='text-sm pt-2'>Step into the future of sports, entertainment, and experiences. Choose your journey below and get started.</p>
                </div>
                <div className=' h-[300px] py-6 mt-10 flex'>
                    <div className='relative  w-[300px] h-[300px]'>
                        <div className='absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[60%] z-10 flex flex-col items-center justify-center'>
                            <div>
                                <Image src={"/login/User.svg"} height={50} width={50} alt='User' />
                            </div>
                            <h4 className='font-bold text-lg mt-3'>Fan/User</h4>
                            <p className='text-center text-sm w-[12rem] py-3'>Access events, buy tickets, interact with creators</p>
                            <ThemeButton title='Enter' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 w-32 h-10' />
                        </div>
                        <div className='absolute z-0 bg-[url(/login/Polygon.svg)] inset-0 w-[300px] h-[300px] bg-no-repeat'></div>
                    </div>
                    <div className='relative w-[300px] h-[300px]'>
                        <div className='absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[60%] z-10 flex flex-col items-center justify-center'>
                            <div>
                                <Image src={"/login/recruiter-network.svg"} height={50} width={50} alt='recruiter-network' />
                            </div>
                            <h4 className='font-bold text-lg mt-3'>Advertiser</h4>
                            <p className='text-center text-sm w-[12rem] py-3'>Run ad campaigns, manage & view analytics</p>
                            <ThemeButton title='Enter' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 w-32 h-10' />
                        </div>
                        <div className='absolute bg-[url(/login/Polygon.svg)] inset-0 w-[300px] h-[300px] bg-no-repeat'></div>
                    </div>
                    <div className='relative  w-[300px] h-[300px]'>
                        <div className='absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[60%] z-10 flex flex-col items-center justify-center'>
                            <div>
                                <Image src={"/login/users.svg"} height={50} width={50} alt='recruiter-network' />
                            </div>
                            <h4 className='font-bold text-lg mt-3'>Guest</h4>
                            <p className='text-center text-sm w-[12rem] py-3'>Explore the platform with limited access</p>
                            <ThemeButton title='Enter' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 w-32 h-10' />
                        </div>
                        <div className='absolute bg-[url(/login/Polygon.svg)] inset-0 w-[300px] h-[300px] bg-no-repeat'></div>
                    </div>

                </div>
                <p className='text-sm pt-6'>✨ Exciting adventures await you inside! ✨</p>
            </div>
        </div>
    )
}

export default Login