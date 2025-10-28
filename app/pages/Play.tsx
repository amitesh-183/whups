'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NavigationMob from '@/components/NavigationMob'
import ThemeButton from '@/components/ThemeButton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { title } from 'process'
import React, { useState } from 'react'

const casualArena = [
    {
        title: "Gladiator's Arena",
        time: "15",
        place: "NA",
        Exp: "2x",
        imageUrl: "/play/gladiator.jpg",
        players: "2,847",
    },
    {
        title: "Space Battle",
        time: "15",
        place: "EU",
        Exp: "2x",
        imageUrl: "/play/space-battle.jpg",
        players: "2,847",
    },
    {
        title: "Cyber Strike Arena",
        time: "15",
        place: "Asia",
        Exp: "2x",
        imageUrl: "/play/cyber.jpg",
        players: "2,847",
    },
    {
        title: "Soccer Clash",
        time: "15",
        place: "SA",
        Exp: "2x",
        imageUrl: "/play/soccer.jpg",
        players: "2,847",
    }
];

const competitionArena = [
    {
        title: "Cyber Strike Arena",
        time: "15",
        place: "Asia",
        Exp: "2x",
        imageUrl: "/play/cyber.jpg",
        players: "2,847",
    },
    {
        title: "Gladiator's Arena",
        time: "15",
        place: "NA",
        Exp: "2x",
        imageUrl: "/play/gladiator.jpg",
        players: "2,847",
    },
    {
        title: "Space Battle",
        time: "15",
        place: "EU",
        Exp: "2x",
        imageUrl: "/play/space-battle.jpg",
        players: "2,847",
    },
    {
        title: "Soccer Clash",
        time: "15",
        place: "SA",
        Exp: "2x",
        imageUrl: "/play/soccer.jpg",
        players: "2,847",
    }
];

const tournamentArena = [
    {
        title: "Space Battle",
        time: "15",
        place: "EU",
        Exp: "2x",
        imageUrl: "/play/space-battle.jpg",
        players: "2,847",
    },
    {
        title: "Gladiator's Arena",
        time: "15",
        place: "NA",
        Exp: "2x",
        imageUrl: "/play/gladiator.jpg",
        players: "2,847",
    },
    {
        title: "Cyber Strike Arena",
        time: "15",
        place: "Asia",
        Exp: "2x",
        imageUrl: "/play/cyber.jpg",
        players: "2,847",
    },
    {
        title: "Soccer Clash",
        time: "15",
        place: "SA",
        Exp: "2x",
        imageUrl: "/play/soccer.jpg",
        players: "2,847",
    }
];


const Play = () => {

    // ---- 2️⃣ State for selected arena ----
    const [selectedArena, setSelectedArena] = useState<'casual' | 'competition' | 'tournament'>('casual')

    // ---- 3️⃣ Function to get current data ----
    const getArenaData = () => {
        switch (selectedArena) {
            case 'competition':
                return competitionArena
            case 'tournament':
                return tournamentArena
            default:
                return casualArena
        }
    }

    const currentArenaData = getArenaData()
    return (
        <>
            <Header />
            <main className='overflow-hidden'>
                <section className="md:px-12 px-4 relative">
                    <div className='flex flex-col items-center justify-center py-6'>
                        <div className='bg-[url(/home/glow-home-l.svg)] left-0 -bottom-[60%] absolute w-[500px] h-[700px] bg-cover z-0'></div>
                        <div className='bg-[url(/home/glow-home-r.svg)] right-0 -bottom-[60%] absolute w-[500px] h-[700px] bg-cover z-0'></div>
                        <div className="max-w-[100rem] h-full w-full md:mt-0 mt-10 rounded-3xl p-[1px] bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] overflow-hidden">
                            <div className='relative'>
                                <div className='bg-black/70 absolute h-full w-full'></div>
                                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full'>
                                    <h4 className='text-2xl md:text-5xl text text-border hero-font'>Play. Connect. Compete.</h4>
                                    <p className='max-w-2xl mx-auto py-10 text-md md:text-xl text-white md:block hidden'>Jump into casual lobbies , competitive queus,or tournaments with fairplay , rewards and real-time action.</p>
                                    <p className='max-w-2xl mx-auto py-6 text-md md:text-xl text-white md:hidden block'>Jump into lobbies , queus,or tournaments ,
                                        earn rewards and real-time action.</p>
                                    <div className='flex md:flex-row flex-col items-center gap-6 justify-center'>
                                        <Button className='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0  md:text-lg h-14 md:w-[320px] w-[200px] rounded-2xl font-semibold'><Image src={'/play/target.svg'} height={20} width={20} alt='Image' />Enter Lobby</Button>
                                        <Button className='bg-[#03006040] hover:bg-[#040079] border text-lg h-14 md:w-[320px] w-[200px] rounded-2xl font-semibold md:flex hidden'><Image src={'/play/chess.svg'} height={20} width={20} alt='Image' />View Tournament</Button>
                                    </div>
                                </div>
                                <div className='bg-[url(/play/hero-bg.jpg)] md:h-[580px] h-[300px] bg-bottom w-full bg-cover rounded-3xl'></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='px-4'>
                    <div className='text-center mt-10 py-6'>
                        <h3 className='font-black text-2xl md:text-3xl'>Choose Your Arena</h3>
                        <p className='text-[#E991FF] text-lg tracking-wider md:block hidden'>Step through the gates of competition</p>
                        <div className='md:hidden flex items-center gap-2 justify-center pt-10 relative'>
                            <Button
                                onClick={() => setSelectedArena('casual')}
                                className={`${selectedArena === 'casual' ? 'bg-[#0022FF]' : 'bg-[#03006040]'} border-0 text-sm h-10 rounded-2xl font-semibold`}>Casual</Button>
                            <Button
                                onClick={() => setSelectedArena('competition')}
                                className={`${selectedArena === 'competition' ? 'bg-[#0022FF]' : 'bg-[#03006040]'} border-0 text-sm h-10 rounded-2xl font-semibold`}>Competition</Button>
                            <Button
                                onClick={() => setSelectedArena('tournament')}
                                className={`${selectedArena === 'tournament' ? 'bg-[#0022FF]' : 'bg-[#03006040]'} border-0 text-sm h-10 rounded-2xl font-semibold`}>Tournament</Button>
                        </div>
                    </div>
                    <div className="max-w-6xl relative mt-10 mx-auto h-full w-full rounded-3xl p-[1px] bg-gradient-to-b from-[#C400F5] to-[#02FFFF] overflow-hidden">
                        <div className='absolute top-4 right-4 backdrop-blur-[5px] bg-[#03006040] border border-[#A4A0A0] p-2 py-1 w-20 justify-center rounded-full flex items-center gap-2'>
                            <span className='h-2.5 w-2.5 rounded-full bg-green-500'></span>
                            Live
                        </div>
                        <div className='absolute md:top-1/2 bottom-4 left-1/2 -translate-x-[46%] md:-translate-y-[40%] w-full'>
                            <h4 className='font-black text-2xl md:text-4xl py-1'>Battle Arena</h4>
                            <p className='font-semibold md:text-base text-sm'>12,067 Players online</p>
                            <p className='md:text-base text-xs'>Global</p>
                            <ThemeButton title='Play Now' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 md:mt-28 mt-2 md:w-[320px] w-[160px] md:h-14 h-10 rounded-2xl' />
                        </div>
                        <div className='bg-[url(/play/man.jpg)] h-[200px] md:h-[500px] w-full bg-no-repeat bg-cover bg-top rounded-3xl'></div>
                    </div>
                </section>
                {/* <!-- Arena Selection */}
                <section className='py-6'>
                    <div className='md:flex hidden md:flex-row flex-col items-center md:gap-10 gap-6 justify-center py-10 relative'>
                        <div className='bg-[url(/home/glow-home-l.svg)] left-0 -bottom-[160%] absolute w-[500px] h-[700px] bg-cover z-0'></div>
                        <div className='bg-[url(/home/glow-home-r.svg)] right-0 -bottom-[160%] absolute w-[500px] h-[700px] bg-cover z-0'></div>
                        <Button
                            onClick={() => setSelectedArena('casual')}
                            className={` ${selectedArena === 'casual' ? 'bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0' : 'bg-[#03006040] border'} text-lg h-14 w-[320px] rounded-2xl relative font-semibold`}><Image src={'/play/fast_forward.svg'} height={28} width={28} alt='Image' />Casual Arena</Button>
                        <Button
                            onClick={() => setSelectedArena('competition')}
                            className={` ${selectedArena === 'competition' ? 'bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0' : 'bg-[#03006040] border'} text-lg h-14 w-[320px] rounded-2xl relative font-semibold`}><Image src={'/play/swords.svg'} height={28} width={28} alt='Image' />Competition Arena</Button>
                        <Button
                            onClick={() => setSelectedArena('tournament')}
                            className={` ${selectedArena === 'tournament' ? 'bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0' : 'bg-[#03006040] border'} text-lg h-14 w-[320px] rounded-2xl relative font-semibold`}><Image src={'/play/social_leaderboard.svg'} height={28} width={28} alt='Image' />Tournament Arena</Button>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center max-w-5xl mx-auto px-4'>
                        {currentArenaData.map((item, index) => (
                            <div key={index}>
                                <div className="relative md:mt-10 mt-3 h-fit w-fit rounded-2xl p-[1px] bg-gradient-to-b from-[#C400F5] to-[#02FFFF] overflow-hidden flex flex-col items-center">
                                    <div className='h-full md:w-full bg-[#01011d] rounded-2xl px-3 py-4'>
                                        <div>
                                            <Image src={item.imageUrl} height={200} width={200} alt='Image' className='md:w-[640px] md:h-[300px] h-[140px] rounded-2xl' />
                                        </div>
                                        <div className='px-10 py-6 md:block hidden'>
                                            <h4 className='text-[#02FFFF] text-md md:text-xl pb-6'>{item.title}</h4>
                                            <p className='flex items-center gap-2 text-sm'><Image src={'/play/mode_heat.svg'} height={18} width={18} alt='Image' />{item.players} Players</p>
                                            <div className='flex items-center gap-2 text-sm mt-3'>
                                                <p className='flex items-center gap-2'><Image src={'/play/electric_bolt.svg'} height={18} width={18} alt='Image' />{item.time} ms</p>
                                                <p>{item.place}</p>
                                            </div>
                                            <p className='flex items-center gap-2 mt-3'><Image src={'/play/moving.svg'} height={18} width={18} className='mt-1' alt='Image' />rising</p>
                                            <div className='flex justify-center'>
                                                <ThemeButton title='Join Lobby' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 mt-6' />
                                            </div>
                                        </div>
                                        <div className='mt-4 md:hidden block'>
                                            <h4 className='text-[#02FFFF] pb-2'>{item.title}</h4>
                                            <div className='flex items-center gap-4'>
                                                <p className='flex items-center gap-2 text-sm'>{item.players} Players</p>
                                                <p>{item.place}</p>
                                            </div>
                                            <div className='flex justify-center'>
                                                <ThemeButton title='Join Lobby' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 mt-6 w-[120px] rounded-xl' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                {/* friends online */}
                <section className='relative py-10 px-2'>
                    <div className='bg-[url(/home/glow-home-l.svg)] left-0 -bottom-[160%] absolute w-[500px] h-[700px] bg-cover z-0'></div>
                    <div className='bg-[url(/home/glow-home-r.svg)] right-0 -bottom-[160%] absolute w-[500px] h-[700px] bg-cover z-0'></div>
                    <div className='max-w-5xl mx-auto'>
                        <h2 className='text-2xl font-bold text-[#02FFFF]'>Friends Online</h2>
                        <div className='flex md:flex-row flex-col gap-6 items-center justify-between'>
                            <div className="flex flex-row justify-center items-center gap-12">
                                <div className="*:data-[slot=avatar]:ring-background flex md:gap-6 gap-3 *:data-[slot=avatar]:ring-2 md:mt-0 mt-6">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Avatar>
                                        <AvatarImage
                                            src="https://github.com/maxleiter.png"
                                            alt="@maxleiter"
                                        />
                                        <AvatarFallback>LR</AvatarFallback>
                                    </Avatar>
                                    <Avatar>
                                        <AvatarImage
                                            src="https://github.com/evilrabbit.png"
                                            alt="@evilrabbit"
                                        />
                                        <AvatarFallback>ER</AvatarFallback>
                                    </Avatar>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Avatar>
                                        <AvatarImage
                                            src="https://github.com/maxleiter.png"
                                            alt="@maxleiter"
                                        />
                                        <AvatarFallback>LR</AvatarFallback>
                                    </Avatar>
                                    <Avatar>
                                        <AvatarImage
                                            src="https://github.com/evilrabbit.png"
                                            alt="@evilrabbit"
                                        />
                                        <AvatarFallback>ER</AvatarFallback>
                                    </Avatar>
                                </div>
                            </div>
                            <ThemeButton title='Invite' btnStyle='from-[#03006040] to-[#03006040] rounded-2xl w-40' />
                        </div>
                    </div>
                </section>
                {/* Live Interaction Dashboard */}
                <section>
                    <div className='text-center mt-10 py-6'>
                        <h3 className='font-black text-3xl'>Live Interaction Dashboard</h3>
                        <p className='text-[#E991FF] text-lg tracking-wider max-w-lg mx-auto'>Everything you need to play fair, earn XP, and grow with your squad.</p>
                    </div>
                    <div className='max-w-5xl mx-auto py-10 px-4'>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Matchmaking */}
                            <div className="md:row-span-5 relative bg-gradient-to-b p-[0.8px] from-[#C400F5] to-[#02FFFF] rounded-2xl overflow-hidden">
                                <div className={`rounded-2xl bg-[#020617] h-full p-6 px-6 py-12 flex flex-col justify-center items-center`}>
                                    <div className='flex justify-center'>
                                        <Image src={'/play/autorenew.svg'} height={30} width={30} alt='Image' />
                                    </div>
                                    <h5 className='text-[#02FFFF] text-2xl font-black mt-4'>Matchmaking</h5>
                                    <div className='h-[0.8px] w-full bg-[#FFFFFF] mt-4'></div>
                                    <div className='flex justify-between mt-4 w-full'>
                                        <ul className='font-semibold'>
                                            <li>Sahil-Raptors</li>
                                            <li>Rank -Lorem Ipsum</li>
                                            <li>Queue-Casual</li>
                                            <li>Reward-XP 150</li>
                                        </ul>
                                        <p>Searching</p>
                                    </div>
                                    <div className='h-[0.8px] w-full bg-[#FFFFFF] mt-4'></div>
                                    <div className='flex justify-between mt-4 w-full'>
                                        <ul className='font-semibold h-24'>
                                            <li>Sahil-Raptors</li>
                                            <li>Rank -Lorem Ipsum</li>
                                            <li>Queue-Casual</li>
                                            <li>Reward-XP 150</li>
                                        </ul>
                                        <p>Matched</p>
                                    </div>
                                </div>
                            </div>
                            {/* --- Teams & Clan --- */}
                            <div className="md:row-span-5 relative bg-gradient-to-b p-[0.8px] from-[#C400F5] to-[#02FFFF] rounded-2xl overflow-hidden">
                                <div className={`rounded-2xl bg-[#020617] h-full p-6 px-12 py-12 flex flex-col justify-start items-center`}>
                                    <div className='flex justify-center'>
                                        <Image src={'/play/Users.svg'} height={30} width={30} alt='Image' />
                                    </div>
                                    <h5 className='text-[#02FFFF] text-2xl font-black mt-4'>Teams & Clan</h5>
                                    <div className='h-[0.8px] w-full bg-[#FFFFFF] mt-4'></div>
                                    <div className='flex justify-between mt-4 w-full'>
                                        <ul className='font-semibold h-24'>
                                            <li>Sahil-Raptors</li>
                                            <li>Rank -Lorem Ipsum</li>
                                        </ul>
                                        <p>In-Game</p>
                                    </div>
                                    <div className='h-[0.8px] w-full bg-[#FFFFFF] mt-4'></div>
                                    <div className='flex justify-between mt-4 w-full'>
                                        <ul className='font-semibold h-24'>
                                            <li>Sahil-Raptors</li>
                                            <li>Rank -Lorem Ipsum</li>
                                        </ul>
                                        <p>Online</p>
                                    </div>
                                </div>
                            </div>
                            {/* --- Let's Play Together --- */}
                            <div className="md:row-span-3 relative bg-gradient-to-b p-[0.8px] from-[#C400F5] to-[#02FFFF] rounded-2xl overflow-hidden">
                                <div className={`rounded-2xl bg-[#020617] h-full p-6 px-4 flex flex-col justify-center`}>
                                    <h4 className='text-lg font-bold'>Let's Play Together</h4>
                                    <div className='flex justify-between items-center w-full mt-6'>
                                        <div className="flex flex-col">
                                            <h6 className='font-semibold'>Solo Queue</h6>
                                            <p className='text-sm'>Find a match quickly</p>
                                        </div>
                                        <ThemeButton title='Play' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 h-8 w-24' />
                                    </div>
                                    <div className='flex justify-between items-center w-full mt-4'>
                                        <div className="flex flex-col">
                                            <h6 className='font-semibold'>Party Queue</h6>
                                            <p className='text-sm'>Invite friends</p>
                                        </div>
                                        <ThemeButton title='Create' btnStyle='bg-linear-to-r from-[#03006040] to-[#03006040] border h-8 w-24' />
                                    </div>
                                    <p className='text-xs mt-6'>Anti-cheat status : Active </p>
                                </div>
                            </div>
                            {/* --- Social Feed --- */}
                            <div className="md:row-span-6 md:col-start-3 row-start-4 relative bg-gradient-to-b p-[0.8px] from-[#C400F5] to-[#02FFFF] rounded-2xl overflow-hidden">
                                <div className={`rounded-2xl bg-[#020617] h-full p-6 px-4 py-4 flex flex-col justify-center items-center`}>
                                    <div className='flex justify-between w-full items-center'>
                                        <h4 className='text-lg font-bold'>Social Feed</h4>
                                        <p className='text-sm'>Feeds Comments DMs</p>
                                    </div>
                                    <div className='bg-[#03006066] rounded-2xl px-4 py-2 mt-6'>
                                        <h6 className='font-semibold text-md'>Sahil</h6>
                                        <p className=''>Watch party at 7pm-halftime surprise drop !</p>
                                    </div>
                                    <div className='bg-[#03006066] rounded-2xl px-4 py-2 mt-6'>
                                        <h6 className='font-semibold text-md'>James</h6>
                                        <p className=''>Hosting a casual lobby for new players, join us ;</p>
                                    </div>
                                    <div className='bg-[#03006066] rounded-2xl px-4 py-2 mt-6'>
                                        <h6 className='font-semibold text-md'>Club Raptors for football</h6>
                                        <p className=''>Brand collab is coming-Exclusive merch !</p>
                                    </div>
                                    <div className='flex items-center gap-2 mt-8'>
                                        <input className='bg-[#03006066] rounded-2xl px-4 py-3 w-full outline-none' placeholder='Share an update.....' />
                                        <Button className='bg-transparent h-10'><Image src={'/play/send.svg'} height={28} width={28} alt='Image' /></Button>
                                    </div>
                                </div>
                            </div>
                            {/* --- Ranks & Rewards --- */}
                            <div className="md:row-span-5 md:row-start-6 relative bg-gradient-to-b p-[0.8px] from-[#C400F5] to-[#02FFFF] rounded-2xl overflow-hidden">
                                <div className={`rounded-2xl bg-[#020617] h-full p-6 px-12 py-12 flex flex-col justify-center items-center`}>
                                    <div className='flex justify-center'>
                                        <Image src={'/play/autorenew.svg'} height={30} width={30} alt='Image' />
                                    </div>
                                    <h5 className='text-[#02FFFF] text-2xl font-black mt-4'>Ranks & Rewards</h5>
                                    <div className='h-[0.8px] w-full bg-[#FFFFFF] mt-4'></div>
                                    <div className='flex justify-between mt-4 w-full'>
                                        <ul className='font-semibold h-24'>
                                            <li>Sahil-Raptors</li>
                                            <li>Rank -Lorem Ipsum</li>
                                            <li>Queue-Casual</li>
                                            <li>Reward-XP 150</li>
                                        </ul>
                                        <p>Matched</p>
                                    </div>
                                    <div className='h-[0.8px] w-full bg-[#FFFFFF] mt-4'></div>
                                    <div className='flex justify-between mt-4 w-full'>
                                        <ul className='font-semibold h-24'>
                                            <li>Sahil-Raptors</li>
                                            <li>Rank -Lorem Ipsum</li>
                                            <li>Queue-Casual</li>
                                            <li>Reward-XP 150</li>
                                        </ul>
                                        <p>Matched</p>
                                    </div>
                                </div>
                            </div>
                            {/* Matchmaking */}
                            <div className="md:row-span-5 md:row-start-6 relative  bg-gradient-to-b p-[0.8px] from-[#C400F5] to-[#02FFFF] rounded-2xl overflow-hidden">
                                <div className={`rounded-2xl bg-[#020617] h-full p-6 px-12 py-12 flex flex-col justify-center items-center`}>
                                    <div className='flex justify-center'>
                                        <Image src={'/play/autorenew.svg'} height={30} width={30} alt='Image' />
                                    </div>
                                    <h5 className='text-[#02FFFF] text-2xl font-black mt-4'>Matchmaking</h5>
                                    <div className='h-[0.8px] w-full bg-[#FFFFFF] mt-4'></div>
                                    <div className='flex justify-between mt-4 w-full'>
                                        <ul className='font-semibold h-24'>
                                            <li>Sahil-Raptors</li>
                                            <li>Rank -Lorem Ipsum</li>
                                            <li>Queue-Casual</li>
                                            <li>Reward-XP 150</li>
                                        </ul>
                                        <p>Matched</p>
                                    </div>
                                    <div className='h-[0.8px] w-full bg-[#FFFFFF] mt-4'></div>
                                    <div className='flex justify-between mt-4 w-full'>
                                        <ul className='font-semibold h-24'>
                                            <li>Sahil-Raptors</li>
                                            <li>Rank -Lorem Ipsum</li>
                                            <li>Queue-Casual</li>
                                            <li>Reward-XP 150</li>
                                        </ul>
                                        <p>Matched</p>
                                    </div>
                                </div>
                            </div>
                            {/* Party Chat */}
                            <div className="md:row-span-3 md:col-start-3 md:row-start-10 relative bg-gradient-to-b p-[0.8px] from-[#C400F5] to-[#02FFFF] rounded-2xl overflow-hidden">
                                <div className={`rounded-2xl bg-[#020617] h-full p-6 px-4 py-3 flex flex-col justify-center`}>
                                    <h4 className='text-lg font-bold'>Party Chat</h4>
                                    <div className='flex justify-between w-full text-sm mt-4'>
                                        <p>Lobby - Casual Championship</p>
                                        <p>6/8</p>
                                    </div>
                                    <div className='flex justify-between items-center w-full text-sm'>
                                        <div className='flex items-center gap-3 py-6'>
                                            <Avatar className='h-16 w-16'>
                                                <AvatarImage
                                                    src="https://github.com/maxleiter.png"
                                                    alt="@maxleiter"
                                                />
                                                <AvatarFallback>LR</AvatarFallback>
                                            </Avatar>
                                            <h6 className='text-lg font-semibold'>Oliver</h6>
                                        </div>
                                        <p>Voice ON</p>
                                    </div>
                                    <div className='flex sm:flex-row flex-col items-center justify-center gap-4'>
                                        <ThemeButton title='Join Voice' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 h-12 w-32 rounded-xl' />
                                        <ThemeButton title='Send $WHU' btnStyle='bg-linear-to-r from-[#03006040] to-[#03006040] border h-12 w-32 rounded-xl' />
                                    </div>
                                </div>
                            </div>
                            {/* Tournaments & Ranked Queue */}
                            <div className="md:col-span-2 md:row-span-2 md:row-start-11 relative bg-gradient-to-b p-[0.8px] from-[#C400F5] to-[#02FFFF] rounded-2xl overflow-hidden">
                                <div className={`rounded-2xl bg-[#020617] h-full p-6 px-4 py-4 flex flex-col justify-center items-center`}>
                                    <h4 className='text-lg font-bold'>Tournaments & Ranked Queue</h4>
                                    <p className='py-4'>Compete in official tournaments, climb leaderboards, and unlock rewards.</p>
                                    <div className='flex sm:flex-row flex-col items-center justify-center gap-4'>
                                        <ThemeButton title='Host Tournament' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 h-12 w-36 md:w-48 rounded-2xl' />
                                        <ThemeButton title='View Leaderboard' btnStyle='bg-linear-to-r from-[#03006040] to-[#03006040] border h-12 w-36 md:w-48 rounded-2xl' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* AntiCheat */}
                <section className=' md:px-0 px-4'>

                    <div className="row-span-3 relative max-w-sm mx-auto bg-gradient-to-r md:mb-72 mt-10 p-[0.8px] from-[#C400F5] via-[#02FFFF] to-[#FA1500] rounded-2xl overflow-hidden">
                        <div className={`rounded-2xl bg-[#020617] h-full md:p-6 p-3 px-4 flex gap-2 items-center justify-center`}>
                            <Image src={'/play/front_hand.svg'} height={30} width={30} alt='Whuups' />
                            <h2>
                                Anti Cheat Monitoring Status - Active
                            </h2>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <NavigationMob />
        </>
    )
}

export default Play