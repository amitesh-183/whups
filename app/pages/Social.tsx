import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ThemeButton from '@/components/ThemeButton'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'
import { Search, PenLine, Menu, MessageSquare, Users, Mic2, Zap, User, Users2, Trophy, SquarePen } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const creators = [
    {
        name: "Liam Crossfield",
        role: "Pro Striker",
        image: "/social/leanardo.jpg",
    },
    {
        name: 'Ava “HoopQueen”',
        role: "Basketball Creator",
        image: "/social/avya.jpg",
    },
    {
        name: "Zane Prodigy",
        role: "Esports & Sports Fusion",
        image: "/social/maike.jpg",
    },
];

const Social = () => {
    return (
        <>
            <Header />
            <main>
                <section className="md:px-12 px-4 relative">
                    <div className='flex flex-col items-center justify-center py-6'>
                        <div className="max-w-[100rem] h-full w-full rounded-3xl p-[1px] bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] drop-shadow-xl drop-shadow-[#02ffffa6] overflow-hidden">
                            <div className='relative'>
                                <div className='bg-black/60 absolute h-full w-full'></div>
                                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full'>
                                    <h4 className='text-4xl md:text-6xl text text-border hero-font'>Your Stadium <br />
                                        <span className='text-3xl md:text-5xl'>Always Alive</span>
                                    </h4>
                                    <p className='max-w-xl mx-auto py-10 text-md md:text-xl text-white'>Watch highlights, share clips, chat with fans, and join the action-
                                        all at one place.</p>
                                    <div className=' flex gap-6 justify-center'>
                                        <ThemeButton title='Get Started' btnStyle='bg-linear-to-r from-[#FF008C] to-[#0022FF] border-0 md:w-[300px] w-fit' />
                                    </div>
                                </div>
                                <div className='bg-[url(/social/hero.jpg)] h-[600px] bg-bottom w-full bg-cover rounded-3xl'></div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="flex min-h-screen p-8 md:px-12 px-4">
                    {/* ===== Sidebar ===== */}
                    <aside className="w-[220px] h-fit bg-[#0B0B24] border border-[#A4A0A0] pr-5 md:flex flex-col justify-between rounded-2xl hidden">
                        <div>
                            <div className='flex items-center justify-center my-3'>
                                <Image src={'/social/logo.svg'} height={50} width={50} alt='whuups' />
                            </div>

                            <nav className="flex flex-col gap-4 my-8">
                                {[
                                    { icon: <Zap className="h-4 w-4" />, label: 'Feed', active: true },
                                    { icon: <Trophy className="h-4 w-4" />, label: 'Clubs' },
                                    { icon: <Users className="h-4 w-4" />, label: 'Friends' },
                                    { icon: <MessageSquare className="h-4 w-4" />, label: 'Messages' },
                                    { icon: <Mic2 className="h-4 w-4" />, label: 'Voice Rooms' },
                                ].map((item, i) => (
                                    <Button
                                        key={i}
                                        variant={item.active ? 'default' : 'ghost'}
                                        className={`flex justify-start items-center rounded-none gap-3 ${item.active
                                            ? 'bg-gradient-to-r from-[#0022FF] to-[#0022FF]'
                                            : 'hover:bg-[#111132] hover:text-white'
                                            }`}
                                    >
                                        {item.icon}
                                        {item.label}
                                    </Button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* ===== Main Feed ===== */}
                    <main className=" md:px-8 overflow-hidden">
                        {/* Top Bar */}
                        <div className="flex justify-between items-center mb-6">
                            <div className='flex items-center gap-3'>

                                <div className="flex items-center gap-3 bg-[#03006040] border border-[#A4A0A0] rounded-xl px-4 py-1.5 md:w-[300px]">
                                    <Input
                                        placeholder="What's on your mind ?"
                                        className="bg-transparent border-none text-sm focus-visible:ring-0 text-white"
                                    />
                                    <Search className="h-4 w-4" />
                                </div>

                                <Button className='md:w-40 h-12 border rounded-2xl bg-[#03006040] border-[#A4A0A0] font-semibold cursor-pointer'>Create <SquarePen className='!w-5 !h-5' /></Button>
                            </div>
                        </div>

                        {/* Feed Title */}
                        <h2 className="text-2xl font-bold text-[#02FFFF] mb-6">Global Feed</h2>

                        {/* Feed Card */}
                        <div className='relative h-fit w-full rounded-2xl p-[1px] bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] overflow-hidden'>
                            <div className="bg-[#0B0B24] border border-[#1E1E3A] rounded-2xl p-6 shadow-md">
                                {/* User Info */}
                                <div className="flex items-center gap-3 mb-4">
                                    <Image
                                        src="/social/rohit.jpg"
                                        alt="Rohan Sharma"
                                        width={50}
                                        height={50}
                                        className="rounded-full w-28 h-28 object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-lg">Rohan Sharma</h3>
                                        <p className=" text-sm">5 min ago</p>
                                    </div>
                                </div>

                                {/* Post Content */}
                                <p className="text-sm mb-3">
                                    🔥 That final goal still gives me goosebumps! Breaking down how it happened in
                                    my new highlight reel.🚀
                                </p>

                                {/* Hashtags */}
                                <div className="text-[#00C4F5] text-sm mb-4 space-x-2">
                                    #GoalOfTheSeason #SportsHighlights #MatchDayMagic #ArenaReplays #Football
                                    #Community
                                </div>

                                {/* Post Image */}
                                <div className="relative rounded-xl overflow-hidden border border-[#1E1E3A]">
                                    <Image
                                        src="/social/football.jpg"
                                        alt="Football highlight"
                                        width={800}
                                        height={450}
                                        className="object-cover w-full h-[280px]"
                                    />
                                </div>

                                {/* Actions */}
                                <div className="flex justify-between items-center mt-4 text-gray-400">
                                    <div className="flex gap-4">
                                        <button>❤️</button>
                                        <button>💬</button>
                                        <button>🔗</button>
                                    </div>
                                    <button>🔊</button>
                                </div>
                            </div>
                        </div>
                        <div className='relative mt-4 h-fit w-full rounded-2xl p-[1px] bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] overflow-hidden'>
                            <div className="bg-[#0B0B24] border border-[#1E1E3A] rounded-2xl p-6 shadow-md">
                                {/* User Info */}
                                <div className="flex items-center gap-3 mb-4">
                                    <Image
                                        src="/social/rohit.jpg"
                                        alt="Rohan Sharma"
                                        width={50}
                                        height={50}
                                        className="rounded-full w-28 h-28 object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-lg">Rohan Sharma</h3>
                                        <p className=" text-sm">5 min ago</p>
                                    </div>
                                </div>

                                {/* Post Content */}
                                <p className="text-sm mb-3">
                                    🔥 That final goal still gives me goosebumps! Breaking down how it happened in
                                    my new highlight reel.🚀
                                </p>

                                {/* Hashtags */}
                                <div className="text-[#00C4F5] text-sm mb-4 space-x-2">
                                    #GoalOfTheSeason #SportsHighlights #MatchDayMagic #ArenaReplays #Football
                                    #Community
                                </div>

                                {/* Post Image */}
                                <div className="relative rounded-xl overflow-hidden border border-[#1E1E3A]">
                                    <Image
                                        src="/social/football.jpg"
                                        alt="Football highlight"
                                        width={800}
                                        height={450}
                                        className="object-cover w-full h-[280px]"
                                    />
                                </div>

                                {/* Actions */}
                                <div className="flex justify-between items-center mt-4 text-gray-400">
                                    <div className="flex gap-4">
                                        <button>❤️</button>
                                        <button>💬</button>
                                        <button>🔗</button>
                                    </div>
                                    <button>🔊</button>
                                </div>
                            </div>
                        </div>
                        <Carousel className='py-8 px-6'>
                            <CarouselContent>
                                <CarouselItem>
                                    {/* scroll 1 */}
                                    <div className='relative h-fit w-full rounded-2xl p-[1px] bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] overflow-hidden'>
                                        <div className="bg-[#0B0B24] border border-[#1E1E3A] rounded-2xl p-6 shadow-md">
                                            {/* User Info */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <Image
                                                    src="/social/rohit.jpg"
                                                    alt="Rohan Sharma"
                                                    width={50}
                                                    height={50}
                                                    className="rounded-full w-28 h-28 object-cover"
                                                />
                                                <div>
                                                    <h3 className="font-semibold text-lg">Rohan Sharma</h3>
                                                    <p className=" text-sm">5 min ago</p>
                                                </div>
                                            </div>

                                            {/* Post Content */}
                                            <p className="text-sm mb-3">
                                                🔥 That final goal still gives me goosebumps! Breaking down how it happened in
                                                my new highlight reel.🚀
                                            </p>

                                            {/* Hashtags */}
                                            <div className="text-[#00C4F5] text-sm mb-4 space-x-2">
                                                #GoalOfTheSeason #SportsHighlights #MatchDayMagic #ArenaReplays #Football
                                                #Community
                                            </div>

                                            {/* Post Image */}
                                            <div className="relative rounded-xl overflow-hidden border border-[#1E1E3A]">
                                                <Image
                                                    src="/social/football.jpg"
                                                    alt="Football highlight"
                                                    width={800}
                                                    height={450}
                                                    className="object-cover w-full h-[280px]"
                                                />
                                            </div>

                                            {/* Actions */}
                                            <div className="flex justify-between items-center mt-4 text-gray-400">
                                                <div className="flex gap-4">
                                                    <button>❤️</button>
                                                    <button>💬</button>
                                                    <button>🔗</button>
                                                </div>
                                                <button>🔊</button>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>{
                                /* scroll 2 */}
                                    <div className='relative h-fit w-full rounded-2xl p-[1px] bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] overflow-hidden'>
                                        <div className="bg-[#0B0B24] border border-[#1E1E3A] rounded-2xl p-6 shadow-md">
                                            {/* User Info */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <Image
                                                    src="/social/rohit.jpg"
                                                    alt="Rohan Sharma"
                                                    width={50}
                                                    height={50}
                                                    className="rounded-full w-28 h-28 object-cover"
                                                />
                                                <div>
                                                    <h3 className="font-semibold text-lg">Rohan Sharma</h3>
                                                    <p className=" text-sm">5 min ago</p>
                                                </div>
                                            </div>

                                            {/* Post Content */}
                                            <p className="text-sm mb-3">
                                                🔥 That final goal still gives me goosebumps! Breaking down how it happened in
                                                my new highlight reel.🚀
                                            </p>

                                            {/* Hashtags */}
                                            <div className="text-[#00C4F5] text-sm mb-4 space-x-2">
                                                #GoalOfTheSeason #SportsHighlights #MatchDayMagic #ArenaReplays #Football
                                                #Community
                                            </div>

                                            {/* Post Image */}
                                            <div className="relative rounded-xl overflow-hidden border border-[#1E1E3A]">
                                                <Image
                                                    src="/social/football.jpg"
                                                    alt="Football highlight"
                                                    width={800}
                                                    height={450}
                                                    className="object-cover w-full h-[280px]"
                                                />
                                            </div>

                                            {/* Actions */}
                                            <div className="flex justify-between items-center mt-4 text-gray-400">
                                                <div className="flex gap-4">
                                                    <button>❤️</button>
                                                    <button>💬</button>
                                                    <button>🔗</button>
                                                </div>
                                                <button>🔊</button>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className='border bg-black ml-14' />
                            <CarouselNext className='border bg-black mr-14' />
                        </Carousel>
                    </main>
                    <div className='md:block hidden'>

                        <Button
                            variant="ghost"
                            className="flex items-center justify-center gap-2 mt-auto hover:bg-[#111132]"
                        >
                            <Menu className="!h-7 !w-7" />
                        </Button>
                    </div>
                </div>


                <div className="flex flex-col items-center py-10 text-white px-4">
                    {/* ===== Section Title ===== */}
                    <h2 className="text-2xl font-semibold mb-8">Suggested Creators</h2>

                    {/* ===== Creators List ===== */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {creators.map((creator, index) => (
                            <div
                                key={index}
                                className="bg-[#0B0B24]/70 rounded-2xl 
                       hover:scale-[1.02] transition-all duration-300 relative mt-12 p-[1px] bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #00C4F5 0%, #6A00FF 50%, #FF00C7 100%)",
                                }}
                            >

                                <div className="bg-[#0B0B24]/90 rounded-2xl p-5 flex flex-col items-center">
                                    <div className='relative p-[1px] bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] w-32 h-32 rounded-full -mt-20'>
                                        <Image
                                            src={creator.image}
                                            alt={creator.name}
                                            width={100}
                                            height={100}
                                            className="rounded-full mb-4 border-2 border-[#1E1E3A] h-32 w-32 object-cover absolute"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold">{creator.name}</h3>
                                    <p className="text-[#00C4F5] text-sm mb-4">{creator.role}</p>

                                    <Button
                                        className="rounded-xl bg-gradient-to-r from-[#0022FF] to-[#00C4F5] px-5 py-2 text-white font-medium"
                                        variant="ghost"
                                    >
                                        👤 Follow
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ===== Poll Card ===== */}
                    <div
                        className="relative mt-12 p-[1px] rounded-2xl bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] hover:scale-[1.01] transition-all duration-300"
                    >
                        <div className="bg-[#0B0B24] rounded-2xl p-6 flex flex-col gap-5">
                            <div className="flex md:flex-row flex-col gap-6">
                                <div className='max-w-md'>
                                    {/* User Header */}
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src="/social/girl.jpg"
                                            alt="user"
                                            width={40}
                                            height={40}
                                            className="rounded-full h-20 w-20 object-cover"
                                        />
                                        <p className="font-semibold text-xl">
                                            Which team will win the championship ?
                                        </p>
                                    </div>

                                    {/* Teams */}
                                    <div className="flex justify-around items-center">
                                        <div className="flex flex-col items-center">
                                            <Image
                                                src="/social/king.jpg"
                                                alt="Titan Warriors"
                                                width={60}
                                                height={60}
                                                className="rounded-full w-16 h-16 object-cover"
                                            />
                                            <p className="mt-2 text-sm">Titan Warriors</p>
                                            <input type="radio" name="team" className="mt-1 accent-[#00C4F5]" />
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Image
                                                src="/social/phantom.jpg"
                                                alt="Phantom Strikers"
                                                width={60}
                                                height={60}
                                                className="rounded-full w-16 h-16 object-cover"
                                            />
                                            <p className="mt-2 text-sm">Phantom Strikers</p>
                                            <input type="radio" name="team" className="mt-1 accent-[#00C4F5]" />
                                        </div>
                                    </div>

                                    {/* Vote Button */}
                                    <div className='flex justify-center'>
                                        <Button className="mt-4 w-fit mx-auto bg-gradient-to-r from-[#FF00C7] to-[#0022FF] rounded-xl px-8 py-2 text-white font-semibold">
                                            Vote
                                        </Button>
                                    </div>
                                </div>

                                {/* Illustration */}
                                <div className="flex justify-center mt-2">
                                    <Image
                                        src="/social/support.svg"
                                        alt="Vote"
                                        width={180}
                                        height={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Social