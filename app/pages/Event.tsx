'use client'
import GradientBorderCard from '@/components/Cards/GradientBorderCard'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ThemeButton from '@/components/ThemeButton'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


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

const Event = () => {
    const [isReminder, setIsReminder] = React.useState(false);
    const [isHome, setIsHome] = React.useState(true);
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
    return (
        <>
            <Header />
            {isReminder && (
                <main className=' my-20'>
                    <GradientBorderCard outerStyles='w-[70%] mx-auto bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]'>
                        <div className='bg-[#020617] rounded-2xl py-8 px-16 min-h-[300px]'>
                            <h4 className='text-2xl font-bold text-[#00C559]'>🔔 My Reminders</h4>
                            {eventReminder.length > 0 ? (
                                <>
                                    <p className='mt-3'>Here are your upcoming events</p>
                                    <div className='flex justify-between items-center gap-10'>
                                        <div className='w-[50%]'>

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
                                            className="rounded-lg border w-[36%] bg-transparent"
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
                                setIsHome(true)
                            }}
                            className="text-[#02FFFF] cursor-pointer hover:underline bg-none bg-transparent flex items-center gap-2"
                        >
                            <ArrowLeft /> Back to Events
                        </Button>
                    </div>
                </main>
            )}
            {isHome &&
                <main>
                    <section>
                        <div className='flex justify-center mt-16'>
                            <Image src={'/events/Stadium-Events.svg'} height={120} width={120} alt='hero' className='w-[260px] h-8 scale-[2]' />
                        </div>
                        <div className='flex flex-col items-center justify-center mt-16 px-20'>
                            <div className="h-full w-full rounded-3xl p-[1px] bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] overflow-hidden">
                                <div className='relative'>
                                    <div className='bg-black/70 absolute h-full w-full'></div>
                                    <div className='absolute px-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full'>
                                        <p className='text-[#D2FFFF] font-semibold text-3xl'>Mega Event</p>
                                        <h4 className='text-2xl md:text-5xl text-border-2 hero-font mt-2'>Championship Final</h4>
                                        <p className='font-semiboldtext-md md:text-xl text-[#00FFEA] py-4 w-[60%] mx-auto'>Don't miss the ultimate showdown  with VIP lounges , exclusive content , and unforgettable experiences.</p>
                                        <div className='flex items-center gap-6 justify-center'>
                                            <Button className='font-semibold cursor-pointer rounded-2xl bg-gradient-to-r from-[#0022FF] to-[#FF008C] border-0 h-[52px] w-[170px] md:w-[300px] '><Image src={'/profile/ticket.svg'} height={28} width={28} alt='wallet' /> Get Tickets Now</Button>
                                        </div>
                                    </div>
                                    <div className='bg-[url(/events/hero.jpg)] h-[440px] bg-center w-full bg-cover rounded-3xl'></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end px-20'>
                            <ThemeButton
                                onClick={() => {
                                    setIsReminder(!isReminder)
                                    setIsHome(false)
                                }}
                                btnStyle='mt-4 border-none w-fit px-8 h-12 from-[#0022FF] to-[#0022FF]' title='View Reminders' />
                        </div>
                    </section>
                    <section className='py-20'>
                        <h3 className='text-3xl font-bold text-center py-4'>🚀 Upcoming Events</h3>
                        <div className='flex flex-wrap justify-center gap-4 mt-4 gap-y-10'>
                            {events.map((event, index) => (
                                <div key={index} className='border relative border-[#0088FF] px-8 py-5 rounded-2xl bg-[#03006040] md:h-[600px] h-[400px] md:w-[420px] w-full'>
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
                                            <div className='flex justify-center'>
                                                <Button className='font-semibold rounded-2xl bg-gradient-to-r from-[#0022FF] to-[#FF008C] border-0 h-[48px] w-[170px] mt-6'><Image src={'/profile/ticket.svg'} height={28} width={28} alt='wallet' /> Get Tickets</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            }
            <Footer />
        </>
    )
}

export default Event