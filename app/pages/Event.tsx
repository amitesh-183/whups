'use client'
import BorderCard from '@/components/Cards/BorderCard'
import GradientBorderCard from '@/components/Cards/GradientBorderCard'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ThemeButton from '@/components/ThemeButton'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { ArrowLeft, ArrowRight, ChevronRight, WalletCards } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


const events = [
    {
        name: "Championship Final",
        date: "May 17th, 2023",
        image: "/profile/champion-final.jpg",
        description: "Grand finale match with VIP lounges & token-gated seats.",
    },
    {
        name: "Championship Final",
        date: "May 17th, 2023",
        image: "/profile/champion-final.jpg",
        description: "Grand finale match with VIP lounges & token-gated seats.",
    },
    {
        name: "Championship Final",
        date: "May 17th, 2023",
        image: "/profile/champion-final.jpg",
        description: "Grand finale match with VIP lounges & token-gated seats.",
    },
    {
        name: "Championship Final",
        date: "May 17th, 2023",
        image: "/profile/champion-final.jpg",
        description: "Grand finale match with VIP lounges & token-gated seats.",
    },
    {
        name: "Championship Final",
        date: "May 17th, 2023",
        image: "/profile/champion-final.jpg",
        description: "Grand finale match with VIP lounges & token-gated seats.",
    },
    {
        name: "Championship Final",
        date: "May 17th, 2023",
        image: "/profile/champion-final.jpg",
        description: "Grand finale match with VIP lounges & token-gated seats.",
    }
]

const tickets = [
    {
        id: 0,
        name: "🎟️General (Free)",
        tokens: "",
        whu: 0,
        image: "/profile/general-pass.jpg",
        description: "Access to event stream with community chat",
    },
    {
        id: 1,
        name: "🌟VIP Lounge (NFT)",
        tokens: "Not enough tokens",
        whu: 200,
        image: "/events/vip.jpg",
        description: "Exclusive lounge  + premium seats + perks",
    },
    {
        id: 2,
        name: "👑Ultra VIP Meet",
        tokens: "Not enough tokens",
        whu: 200,
        image: "/events/ultra-vip.jpg",
        description: "Meet creators + collectibles + early acces",
    }
]

const trending = [
    {
        id: 0,
        name: "Championship Final",
        image: "/profile/general-pass.jpg",
        description: "Access to event stream with community chat",
    },
    {
        id: 1,
        name: "Championship Final",
        tokens: "Not enough tokens",
        whu: 200,
        image: "/events/vip.jpg",
        description: "Exclusive lounge  + premium seats + perks",
    },
    {
        id: 2,
        name: "Championship Final",
        tokens: "Not enough tokens",
        whu: 200,
        image: "/events/ultra-vip.jpg",
        description: "Meet creators + collectibles + early acces",
    },
    {
        id: 3,
        name: "Championship Final",
        tokens: "Not enough tokens",
        whu: 200,
        image: "/events/ultra-vip.jpg",
        description: "Meet creators + collectibles + early acces",
    },
    {
        id: 4,
        name: "Championship Final",
        tokens: "Not enough tokens",
        whu: 200,
        image: "/events/ultra-vip.jpg",
        description: "Meet creators + collectibles + early acces",
    }
]

const Event = () => {
    const [currentStep, setCurrentStep] = React.useState(0);
    const [isReminder, setIsReminder] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [eventReminder, setEventReminder] = React.useState([
        {
            name: "Championship Final",
            date: "May 17th, 2023",
            time: 12,
        },
        {
            name: "Championship Final",
            date: "May 17th, 2023",
            time: 12,
        },
        {
            name: "Championship Final",
            date: "May 17th, 2023",
            time: 12,
        }
    ])

    const steps = [
        { id: 0, label: "Home" },
        { id: 1, label: "Ticket" },
        { id: 2, label: "Payment" },
        { id: 3, label: "Success" },
    ];

    const handleNext = () => {
        if (currentStep < steps.length) setCurrentStep(currentStep + 1)
    }

    const handleBack = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1)
    }


    if (isReminder) {
        return (

            <>
                <Header />
                <main className='my-20'>
                    <GradientBorderCard outerStyles='md:w-[70%] w-[90%] mx-auto bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]'>
                        <div className='bg-[#020617] rounded-2xl py-8 md:px-16 px-4 md:min-h-[300px]'>
                            <h4 className='text-xl md:text-2xl font-bold text-[#00C559]'>🔔 My Reminders</h4>
                            {eventReminder.length > 0 ? (
                                <>
                                    <p className='mt-3'>Here are your upcoming events</p>
                                    <div className='flex justify-between items-center gap-10'>
                                        <div className='md:w-[50%] w-full'>

                                            {eventReminder.map((reminder, index) => (
                                                <GradientBorderCard key={index} outerStyles='mt-6 bg-gradient-to-r !p-[0.8px] from-[#00FA08] to-[#C400F5]'>
                                                    <div className='p-6 bg-[#020617] rounded-2xl'>
                                                        <div className='flex justify-between items-center gap-8'>
                                                            <div className='w-1/2'>
                                                                <p className='text-sm font-semibold'>{reminder.name}</p>
                                                                <div className='flex justify-between mt-2'>
                                                                    <p className='text-sm'>{reminder.date}</p>
                                                                    <p className='text-sm'>{reminder.time}:0:00</p>
                                                                </div>
                                                            </div>
                                                            <ThemeButton btnStyle=' from-red-500 to-red-500 border-none h-10 w-fit px-6' title="Remove" />
                                                        </div>
                                                    </div>
                                                </GradientBorderCard>
                                            ))
                                            }
                                        </div>
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            className="rounded-lg border w-[36%] bg-transparent md:block hidden"
                                        />
                                    </div>
                                </>
                            ) : (

                                <p className='mt-3'>No Upcoming events yet.</p>
                            )
                            }
                        </div>
                    </GradientBorderCard>
                    <div className='mt-4 flex justify-center'>
                        <Button
                            onClick={() => {
                                setIsReminder(false)
                                setCurrentStep(0)
                            }}
                            className="text-[#02FFFF] cursor-pointer hover:underline bg-none bg-transparent flex items-center gap-2"
                        >
                            <ArrowLeft /> Back to Events
                        </Button>
                    </div>
                </main>
                <Footer />
            </>)
    }

    return (
        <>
            <Header />
            {currentStep === 0 &&
                <main>
                    <section className='md:px-0 px-4'>
                        <div className='flex justify-center mt-16'>
                            <Image src={'/events/Stadium-Events.svg'} height={120} width={120} alt='hero' className='md:w-[260px] h-8 scale-[2]' />
                        </div>
                        <div className='flex md:hidden justify-end'>
                            <ThemeButton
                                onClick={() => {
                                    setIsReminder(!isReminder)
                                }}
                                btnStyle='mt-4 border-none w-fit px-8 h-12 from-[#0022FF] to-[#0022FF]' title='View Reminders' />
                        </div>
                        <div className='flex flex-col items-center justify-center md:mt-16 mt-6 md:px-20'>
                            <div className="h-full w-full rounded-2xl p-[1px] bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] overflow-hidden">
                                <div className='relative'>
                                    <div className='bg-black/70 absolute h-full w-full'></div>
                                    <div className='absolute px-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full'>
                                        <p className='text-[#D2FFFF] font-semibold text-3xl'>Mega Event</p>
                                        <h4 className='text-2xl md:text-5xl text-border-2 hero-font mt-2'>Championship Final</h4>
                                        <p className='font-semiboldtext-md md:text-xl text-[#00FFEA] py-4 w-[60%] mx-auto md:block hidden'>Don't miss the ultimate showdown  with VIP lounges , exclusive content , and unforgettable experiences.</p>
                                        <div className='flex items-center gap-6 justify-center mt-6'>
                                            <Button onClick={handleNext} className='font-semibold cursor-pointer rounded-2xl bg-gradient-to-r from-[#0022FF] to-[#FF008C] border-0 h-[52px] w-[170px] md:w-[300px] '><Image src={'/profile/ticket.svg'} height={28} width={28} alt='wallet' /> Get Tickets Now</Button>
                                        </div>
                                    </div>
                                    <div className='bg-[url(/events/hero.jpg)] md:h-[440px] h-[380px] bg-center w-full bg-cover rounded-2xl'></div>
                                </div>
                            </div>
                        </div>
                        <div className='hidden md:flex justify-end px-20'>
                            <ThemeButton
                                onClick={() => {
                                    setIsReminder(!isReminder)
                                }}
                                btnStyle='mt-4 border-none w-fit px-8 h-12 from-[#0022FF] to-[#0022FF]' title='View Reminders' />
                        </div>
                    </section>
                    <section className='md:pl-20 pl-4 ml-auto my-10'>
                        <div>
                            <h4 className='text-2xl md:text-3xl font-bold py-4'>Trending Now 🔥</h4>
                        </div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            freeMode={true}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            {trending.map((ticket, index) => (
                                <SwiperSlide key={index} className='!p-0 !w-fit'>
                                    <BorderCard cardStyles='w-[260px] !p-0 '>
                                        <div>
                                            <Image src={ticket.image} height={200} width={300} alt='wallet' className='object-cover h-[160px] w-full rounded-t-2xl' />
                                            <div className='px-6 py-4'>
                                                <h6 className='text-2xl font-semibold text-center'>{ticket.name}</h6>
                                                <div className='flex justify-center'>
                                                    <ThemeButton btnStyle='mt-4 border-[#02FFFF] px-8 h-12 md:w-auto w-fit bg-transparent bg-none' title='View Event' />
                                                </div>
                                            </div>
                                        </div>
                                    </BorderCard>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>
                    <section className='py-20 md:px-0 px-4'>
                        <h3 className='text-2xl md:text-3xl font-bold text-center py-4'>🚀 Upcoming Events</h3>
                        <div className='grid md:grid-cols-2 md:grid-cols-3 place-items-center max-w-7xl mx-auto md:gap-8 gap-4 mt-4 gap-y-10'>
                            {events.map((event, index) => (
                                <div key={index} className='border relative border-[#0088FF] px-8 py-5 rounded-2xl bg-[#03006040] md:h-[600px] h-[300px] md:w-[420px] w-full'>
                                    <div className='flex items-center gap-4'>
                                        <div className='absolute inset-0 bg-[url(/profile/champion-final.jpg)] rounded-2xl bg-cover bg-center'>
                                            {/* <Image src={'/profile/Trophy.svg'} height={40} width={40} alt='wallet' /> */}
                                        </div>
                                        <div className='absolute left-0 md:pl-6 md:px-0 px-2 bottom-0 backdrop-blur-[1px] w-full bg-black/40 py-2 rounded-2xl md:pb-6'>
                                            <h5 className='font-bold text-lg md:text-xl mt-1'>Championship Final</h5>
                                            <p className='text-xs md:text-sm md:py-6 py-3 md:w-72'>Grand finale match with VIP lounges & token-
                                                gated seats.</p>
                                            <p className='pt-3 md:block hidden'>
                                                <em>20/10/2025</em>
                                            </p>
                                            <div className='flex justify-between items-center'>
                                                <p className=' text-[8px] md:hidden block'>
                                                    <em>20/10/2025</em>
                                                </p>
                                                <Button className='font-semibold rounded-2xl md:text-base text-xs bg-gradient-to-r from-[#0022FF] to-[#FF008C] border-0 md:h-[48px] w-[100px] md:w-[170px] md:mt-6'><Image src={'/profile/ticket.svg'} height={16} width={16} alt='wallet' /> Get Tickets</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            }
            {currentStep === 1 && (
                <main className='my-20 max-w-7xl mx-auto md:px-0 px-4'>
                    <div>
                        <h4 className='text-xl md:text-3xl font-bold md:text-center'>🎟️ Ticket for eSports Live Event</h4>
                    </div>
                    <div className='flex justify-end'>
                        <ThemeButton btnStyle='mt-4 border-[#02FFFF] px-8 h-14 md:w-[400px] from-[#000] to-[#000]' title='200 WHU' />
                    </div>
                    <GradientBorderCard outerStyles='bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] mt-10'>
                        <div className='rounded-2xl bg-[#020617] md:px-16 px-4 py-8'>
                            <div className='flex flex-col justify-center items-center'>
                                <h4 className='text-2xl font-semibold'>eSports Live Event</h4>
                                <p className='py-3 md:text-start text-center'>22/11/25  ,  19:00:00   - Join thousands of fan in our virtual stadium.</p>
                            </div>
                            <div className='flex md:flex-row flex-col items-center justify-center gap-4'>
                                {tickets.map((ticket, index) => (
                                    <BorderCard key={index} cardStyles='w-fit !p-0 '>
                                        <div>
                                            <Image src={ticket.image} height={200} width={300} alt='wallet' className='object-cover h-[160px] rounded-t-2xl' />
                                            <div className='px-6 py-4'>
                                                <h6 className='text-2xl font-semibold'>{ticket.name}</h6>
                                                <p className='w-60 mt-2'>{ticket.description}</p>
                                                <p className={`${ticket.whu === 0 ? "hidden" : ""} text-sm text-[#FFA600]`}>{ticket.whu} WHU</p>
                                                <p className={`${ticket.whu === 0 ? "hidden" : ""} text-sm text-[#FA1500]`}>{ticket.tokens}</p>
                                            </div>
                                        </div>
                                    </BorderCard>
                                ))}
                            </div>
                            <div className=' p-6 flex flex-col justify-between items-center gap-2'>
                                <Button
                                    onClick={handleNext}
                                    className="w-[300px] cursor-pointer bg-gradient-to-r from-[#FF00C7] to-[#0022FF] rounded-xl px-8 py-6 text-white font-semibold"
                                >
                                    Continue
                                </Button>
                                <Button
                                    onClick={handleBack}
                                    className="text-[#02FFFF] hover:underline bg-none bg-transparent flex items-center gap-2"
                                >
                                    <ArrowLeft /> Back to Events
                                </Button>
                            </div>
                        </div>
                    </GradientBorderCard>
                </main>
            )}
            {currentStep === 2 && (
                <main className='max-w-5xl mx-auto md:px-0 px-4'>
                    <GradientBorderCard outerStyles='md:bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]'>
                        <div className='bg-[#020617] rounded-2xl px-16 py-8'>
                            <div className='flex flex-col gap-3'>
                                <h4 className='text-xl font-bold mb-2'>💳 Payment Method</h4>
                                <div className='bg-[#03006040] p-6 rounded-2xl md:flex hidden gap-4'>
                                    <Label className="flex items-start justify-center gap-3 rounded-lg p-3">
                                        <Checkbox
                                            id="toggle-2"
                                            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700 mr-4 mt-3"
                                        />
                                        <div className="grid gap-1.5 font-normal">
                                            <p className="leading-none text-lg font-semibold flex items-center gap-2">
                                                🌐 Crypto (WalletConnect) <Image src={'/cart/metamask.png'} height={30} width={30} alt='metamask' />
                                            </p>
                                            <p className="text-[#D9D9D9] text-sm pr-40">
                                                Connect your wallet (e.g. MetaMask) with WalletConnect and pay using WHU tokens or
                                                other supported cryptocurrencies.
                                            </p>
                                        </div>
                                    </Label>
                                </div>
                                <div className='md:hidden flex flex-col items-center gap-4'>
                                    <div className='bg-[#03006040] p-6 rounded-2xl flex gap-4 w-full'>
                                        <div className='flex items-center gap-4'>
                                            <Image src={'/cart/metamask.png'} height={30} width={30} alt='metamask' />
                                            <p>MetaMask</p>
                                        </div>
                                    </div>
                                    <div className='bg-[#03006040] p-6 rounded-2xl flex gap-4 w-full'>
                                        <div className='flex items-center gap-4'>
                                            <Image src={'/cart/coinbase.svg'} height={30} width={30} alt='metamask' />
                                            <p>Coinbase Wallet</p>
                                        </div>
                                    </div>
                                    <div className='bg-[#03006040] p-6 rounded-2xl flex gap-4 w-full'>
                                        <div className='flex items-center gap-4'>
                                            <Image src={'/cart/base.svg'} height={30} width={30} alt='metamask' />
                                            <p>Base</p>
                                        </div>
                                    </div>
                                    <div className='bg-[#03006040] p-6 rounded-2xl flex gap-4 w-full justify-between'>
                                        <div className='flex items-center gap-4'>
                                            <WalletCards />
                                            <p>Other wallets</p>
                                        </div>
                                        <ChevronRight />
                                    </div>
                                    <div className='flex justify-center flex-col items-center my-6'>
                                        <p className='text-gray-400'>I have a passkey</p>
                                        <div className='flex items-center gap-2 text-gray-500'>Protected by <p className='w-3 h-3 rounded-full bg-gray-800'></p> privy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GradientBorderCard>
                    <div className='md:p-6 flex justify-between items-center'>
                        <Button
                            onClick={handleBack}
                            className="text-[#02FFFF] hover:underline bg-none bg-transparent flex items-center gap-2"
                        >
                            <ArrowLeft /> Back
                        </Button>
                        <Button
                            onClick={handleNext}
                            className="md:w-[300px] w-[200px] cursor-pointer bg-gradient-to-r from-[#FF00C7] to-[#0022FF] rounded-xl px-8 md:py-6 py-3 text-white font-semibold"
                        >
                            Proceed to payment <ArrowRight />
                        </Button>
                    </div>
                </main>
            )}
            {currentStep === 3 && (
                <main className='my-20'>
                    <div className="relative md:mt-20 mt-16 rounded-2xl p-[0.8px] h-[280px] md:w-[40%] w-[80%] mx-auto bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] shadow-lg">
                        <div className="absolute -inset-2 z-0 rounded-lg bg-gradient-to-r from-[#C400F5] to-[#02FFFF] opacity-50 blur-[50px]" />
                        <div className="relative rounded-2xl bg-[#000000] md:p-20 flex flex-col justify-center items-center h-full">
                            <h5 className='font-bold text-xl md:text-3xl mt-8 text-[#00D35F]'>✅ Thank You!</h5>
                            <h5 className='py-6 text-center px-8'>Your ticket has been confirmed. A reminder has been
                                added to your events list.</h5>
                            <div className='mb-8 flex justify-center'>
                                <Button
                                    onClick={handleBack}
                                    className="text-[#02FFFF] cursor-pointer hover:underline bg-none bg-transparent flex items-center gap-2"
                                >
                                    <ArrowLeft /> Back to Events
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>
            )}
            <Footer />
        </>
    )
}

export default Event