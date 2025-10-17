'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ThemeButton from '@/components/ThemeButton'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Settings, SquarePen } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <>
            <Header />
            <main className='md:px-20 px-4 mt-10'>
                {isEditing ?
                    <>
                        <div className='max-w-5xl mx-auto'>
                            <div className='flex justify-between items-center'>
                                <Button onClick={() => setIsEditing(!isEditing)} className='text-[#02FFFF] hover:underline bg-none bg-transparent flex items-center gap-2'><ArrowLeft />Back</Button>
                                <p
                                    className="bg-gradient-to-r from-[#02FFFF] via-[#0088FF] to-[#02FFFF] bg-clip-text text-transparent font-black text-xl">
                                    Edit Profile
                                </p>
                            </div>
                            <div className={`relative rounded-2xl mt-8 p-[0.8px] mb-52 h-full w-full bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] shadow-lg`}>
                                <div className={`rounded-2xl bg-[#020617] p-6 px-12 py-12 flex flex-col justify-center items-center`}>
                                    <div className='border-3 rounded-full w-fit overflow-hidden'>
                                        <Image src={'/profile/profile.png'} height={150} width={150} alt='Image' className='h-[150px] w-[160px] rounded-full object-cover' />
                                    </div>
                                    <ThemeButton title='Change Avatar' btnStyle='border-0 h-10 w-40 mt-4 to-[#0098C6] from-[#0098C6]' />
                                    <form action="" className='w-full mt-6'>
                                        <div className=''>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="name" className='text-md'>Full Name</label>
                                                <input type="text" name="fullname" id="fullname" className='rounded-lg px-6 py-3 text-sm bg-[#03006066]' placeholder='Enter Your Name' />
                                            </div>
                                            <div className='flex flex-col gap-2 mt-4'>
                                                <label htmlFor="name" className='text-md'>Username</label>
                                                <input type="text" name="username" id="username" className='rounded-lg px-6 py-3 text-sm bg-[#03006066]' placeholder='Enter Your Username' />
                                            </div>
                                            <div className='flex flex-col gap-2 mt-4'>
                                                <label htmlFor="name" className='text-md'>Email</label>
                                                <input type="text" name="name" id="name" className='rounded-lg px-6 py-3 text-sm bg-[#03006066]' placeholder='Enter Your Email id' />
                                            </div>
                                            <div className='flex flex-col gap-2 mt-4'>
                                                <label htmlFor="name" className='text-md'>Email</label>
                                                <textarea title='bio' name="bio" id="bio" className='rounded-lg px-6 py-3 text-sm bg-[#03006066] resize-none' placeholder='Enter Your Email id' rows={4}></textarea>
                                            </div>
                                        </div>
                                        <div className='flex justify-center mt-5'>
                                            <ThemeButton title='Save Changes' btnStyle='from-[#FF008C] to-[#0022FF] w-40 h-10' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </> :
                    <>
                        <div className='flex md:flex-row flex-col items-center justify-between'>
                            <div className='flex md:flex-row flex-col justify-center gap-8 items-center'>
                                <div className='bg-gradient-to-b rounded-full from-[#C400F5] to-[#02FFFF] w-fit p-[3px] overflow-hidden'>
                                    <Image src={'/profile/profile.png'} height={150} width={150} alt='Image' className='md:h-[150px] md:w-[160px] w-[100px] h-[100px] rounded-full object-cover' />
                                </div>
                                <div className='flex md:items-start items-center flex-col'>
                                    <h4 className='font-bold text-xl md:text-3xl'>David Smith</h4>
                                    <p>✨ 2500 XP collected</p>
                                </div>

                            </div>
                            <div className='flex gap-4 md:mt-0 mt-4'>
                                <Button onClick={() => { setIsEditing(!isEditing) }} className='w-40 border rounded-2xl bg-none bg-transparent font-semibold cursor-pointer'>Edit Profile <SquarePen className='!w-5 !h-5' /></Button>
                                <Button className='w-fit border rounded-full bg-none bg-transparent cursor-pointer !px-2'><Settings className='!w-5 !h-5' /></Button>
                            </div>
                        </div>
                        <section className='border border-[#A4A0A0] px-6 py-2 rounded-2xl bg-[#03006040] flex md:flex-row flex-col justify-between items-center md:h-[128px] mt-20'>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <Image src={'/profile/wallet.svg'} height={40} width={40} alt='wallet' />
                                </div>
                                <div>
                                    <p className='text-sm'>Available Balance</p>
                                    <h5 className='font-bold text-xl text-[#02FFFF] mt-1'>1240.75 WHU</h5>
                                </div>
                            </div>
                            <ThemeButton title='Open Wallet' btnStyle='from-[#0098C6] to-[#0098C6] border-0 h-[40px] w-[170px] md:mt-0 mt-4' />
                        </section>
                        <section>
                            <h3 className='font-semibold text-2xl mt-10'>Achievements</h3>
                            <div className='border border-[#A4A0A0] px-8 py-5 rounded-2xl bg-[#03006040] h-fit mt-4'>
                                <div className='flex items-center gap-4'>
                                    <div>
                                        <Image src={'/profile/Trophy.svg'} height={40} width={40} alt='wallet' />
                                    </div>
                                    <div>
                                        <h5 className='font-bold text-xl mt-1'>Top Fan</h5>
                                        <p className='text-sm'>Attended 10 live events</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h3 className='font-semibold text-2xl mt-10'>Season Pass</h3>
                            <div className='border relative border-[#A4A0A0] px-8 py-5 rounded-2xl bg-[#03006040] h-[340px] mt-4'>
                                <div className='flex items-center gap-4'>
                                    <div className='absolute inset-0 bg-[url(/profile/season-pass.jpg)] rounded-2xl bg-cover md:bg-[0px_460px]'>
                                        {/* <Image src={'/profile/Trophy.svg'} height={40} width={40} alt='wallet' /> */}
                                    </div>
                                    <div className='absolute left-6 bottom-8'>
                                        <h5 className='font-bold text-xl mt-1'>Season Pass S2</h5>
                                        <p className='text-sm'>Active • Expires: 30 Dec 2025</p>
                                        <ThemeButton title='View Benefits' btnStyle='from-[#0022FF] to-[#FF008C] border-0 h-[40px] w-[170px] mt-6' />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h3 className='font-semibold text-2xl mt-10'>Inventory</h3>
                            <div className='flex gap-4'>

                                <div className='border relative overflow-hidden border-[#A4A0A0] px-8 py-5 rounded-2xl bg-[#03006040] h-[250px] w-[250px] mt-4'>
                                    <div className='flex items-center gap-4'>
                                        <div className='absolute inset-0 bg-[url(/profile/vip-lounge.jpg)] rounded-2xl bg-cover bg-center'>
                                            {/* <Image src={'/profile/Trophy.svg'} height={40} width={40} alt='wallet' /> */}
                                        </div>
                                        <div className='absolute left-0 pl-6 bottom-0 backdrop-blur-[1px] w-full bg-transparent py-2'>
                                            <h5 className='font-bold text-lg'>VIP Lounge Access</h5>
                                            <p className='text-sm font-semibold'>NFT Pass</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='border relative border-[#A4A0A0] px-8 py-5 rounded-2xl bg-[#03006040] h-[250px] w-[250px] mt-4'>
                                    <div className='flex items-center gap-4'>
                                        <div className='absolute inset-0 bg-[url(/profile/general-pass.jpg)] rounded-2xl bg-cover'>
                                            {/* <Image src={'/profile/Trophy.svg'} height={40} width={40} alt='wallet' /> */}
                                        </div>
                                        <div className='absolute left-0 pl-6 bottom-0 backdrop-blur-[1px] w-full bg-transparent py-2'>
                                            <h5 className='font-bold text-lg'>VIP Lounge Access</h5>
                                            <p className='text-sm font-semibold'>NFT Pass</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                        <section className='mb-20'>
                            <h3 className='font-semibold text-2xl mt-10'>Upcoming Events</h3>
                            <div className='flex md:flex-row flex-col items-center md:gap-20 gap-6'>
                                <div className='border relative border-[#0088FF] px-8 py-5 rounded-2xl bg-[#03006040] md:h-[500px] h-[400px] md:w-[500px] w-full mt-4'>
                                    <div className='flex items-center gap-4'>
                                        <div className='absolute inset-0 bg-[url(/profile/champion-final.jpg)] rounded-2xl bg-cover bg-center'>
                                            {/* <Image src={'/profile/Trophy.svg'} height={40} width={40} alt='wallet' /> */}
                                        </div>
                                        <div className='absolute left-0 pl-6 bottom-0 backdrop-blur-[1px] w-full bg-black/40 py-2 rounded-2xl pb-6'>
                                            <h5 className='font-bold text-xl mt-1'>Championship Final</h5>
                                            <p className='text-sm py-6 md:w-72'>Grand finale match with VIP lounges & token-
                                                gated seats.</p>
                                            <p className='pt-3'>
                                                <em>20/10/2025</em>
                                            </p>
                                            <Button className='font-semibold rounded-2xl bg-gradient-to-r from-[#0022FF] to-[#FF008C] border-0 h-[48px] w-[170px] mt-6'><Image src={'/profile/ticket.svg'} height={28} width={28} alt='wallet' /> Get Tickets</Button>
                                        </div>
                                    </div>
                                </div>

                                <div className='border relative border-[#00FA08] px-8 py-5 rounded-2xl bg-[#03006040] md:h-[500px] h-[400px] md:w-[500px] w-full mt-4'>
                                    <div className='flex items-center gap-4'>
                                        <div className='absolute inset-0 bg-[url(/profile/creator-watch-party.png)] rounded-2xl bg-cover'>
                                            {/* <Image src={'/profile/Trophy.svg'} height={40} width={40} alt='wallet' /> */}
                                        </div>
                                        <div className='absolute left-0 pl-6 bottom-0 backdrop-blur-[1px] w-full py-2 bg-black/40 rounded-2xl pb-6'>
                                            <h5 className='font-bold text-xl mt-1'>Creator Watch Party</h5>
                                            <p className='text-sm py-6 md:w-72'>Co-watch with creators in private lounges.</p>
                                            <p className='pt-3'>
                                                <em>12/11/2025</em>
                                            </p>
                                            <Button className='font-semibold rounded-2xl bg-gradient-to-r from-[#0022FF] to-[#FF008C] border-0 h-[48px] w-[170px] mt-6'><Image src={'/profile/ticket.svg'} height={28} width={28} alt='wallet' /> Get Tickets</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center mt-8'>
                                <Button className='w-40 border rounded-2xl bg-none bg-transparent font-semibold cursor-pointer'>View All Events <ArrowRight /></Button>
                            </div>
                        </section>
                    </>
                }
            </main>
            <Footer />
        </>
    )
}

export default Profile