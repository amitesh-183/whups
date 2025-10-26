import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { ChevronDown, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import BorderCard from './Cards/BorderCard'
import Image from 'next/image'
import ThemeButton from './ThemeButton'

const trending = [
    {
        id: 0,
        name: "Skin Pack",
        onChain: true,
        whu: 200,
        image: "/store/dg1.png",
        description: "Exclusive in-game skins for your avatar.",
    },
    {
        id: 1,
        name: "Event Pass",
        onChain: true,
        whu: 200,
        image: "/store/dg2.jpg",
        description: "Access to special community events and perks.",
    },
    {
        id: 2,
        name: "Event Pass",
        onChain: true,
        whu: 200,
        image: "/store/dg3.jpg",
        description: "Exclusive in-game skins for your avatar.",
    },
    {
        id: 3,
        name: "Skin Pack",
        onChain: true,
        whu: 200,
        image: "/store/dg4.jpg",
        description: "Exclusive in-game skins for your avatar.",
    },
    {
        id: 4,
        name: "Championship Final",
        onChain: true,
        whu: 200,
        image: "/profile/general-pass.jpg",
        description: "Meet creators + collectibles + early acces",
    }
]

const MarketPlace = () => {
    return (
        <>
            <section className='max-w-7xl mx-auto md:block hidden'>
                <Tabs defaultValue="digital-goods" className="flex-row items-start gap-6">
                    <div>
                        <h4 className='text-md font-semibold py-2'>Marketplace</h4>
                        <TabsList className='flex-col h-full bg-transparent gap-10'>
                            <TabsTrigger className='data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white bg-[#03006040] py-4 px-6 w-full !text-sm' value="digital-goods">Digital Goods</TabsTrigger>
                            <TabsTrigger className='data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white bg-[#03006040] py-4 px-6 w-full !text-sm' value="physical-merch">Physical Merch</TabsTrigger>
                            <TabsTrigger className='data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white bg-[#03006040] py-4 px-6 w-full !text-sm' value="auctions">Auctions</TabsTrigger>
                            <TabsTrigger className='data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white bg-[#03006040] py-4 px-6 w-full !text-sm' value="bundles">Bundles</TabsTrigger>
                            <TabsTrigger className='data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white bg-[#03006040] py-4 px-6 w-full !text-sm' value="drops">Drops</TabsTrigger>
                            <TabsTrigger className='data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white bg-[#03006040] py-4 px-6 w-full !text-sm' value="allowlist">Allowlist</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="digital-goods">
                        <div>
                            <div>
                                <h4 className='text-2xl font-black pt-2 pb-2.5'>Digital Goods</h4>
                            </div>

                            <Tabs defaultValue="new">
                                <div className='flex justify-between items-center'>
                                    <TabsList className='bg-transparent gap-8'>
                                        <TabsTrigger className='data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white px-4 py-4 text-lg bg-[#03006040]' value="all">All</TabsTrigger>
                                        <TabsTrigger className='data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white px-4 py-4 text-lg bg-[#03006040]' value="new">New</TabsTrigger>
                                        <TabsTrigger className='data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white px-4 py-4 text-lg bg-[#03006040]' value="popular">Popular</TabsTrigger>
                                        <TabsTrigger className='data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white px-4 py-4 text-lg bg-[#03006040]' value="on-sale">On Sale</TabsTrigger>
                                    </TabsList>
                                    <Link href={'/cart'} className='relative'><ShoppingCart size={"36"} /> <span className='absolute top-2 right-1 translate-x-1/2 -translate-y-1/2 bg-red-600 text-white w-4 h-4 text-xs flex items-center justify-center rounded-full'>0</span></Link>
                                </div>
                                <TabsContent value="all">
                                    <div className='grid grid-cols-2 gap-8 mt-4'>
                                        {trending.slice(0, 4).map((ticket, index) => (
                                            <BorderCard key={index} cardStyles='w-full !p-0 border-none relative'>
                                                <Image src={ticket.image} height={200} width={500} alt='wallet' className='object-cover h-[420px] w-full rounded-t-2xl' />
                                                <div className='bg-[#000000] rounded-t-2xl absolute bottom-0 w-full'>
                                                    <div className='px-6 py-4 relative'>
                                                        <h6 className='text-2xl font-semibold'>{ticket.name}</h6>
                                                        <p className='py-1'>{ticket.description}</p>
                                                        <p className='flex gap-1 items-center'>{ticket.whu} WHU <span><Image src={'/wallet/whu.svg'} height={20} width={20} alt='wallet' /></span></p>
                                                        <div className='flex justify-center'>
                                                            <ThemeButton btnStyle='mt-4 px-8 h-12 w-full text-xl bg-transparent bg-none' title='View Details' />
                                                        </div>
                                                        {ticket.onChain && <p className='absolute top-2 right-3 text-sm'>On Chain</p>}
                                                    </div>
                                                </div>
                                            </BorderCard>
                                        ))}
                                    </div>
                                    <div className='flex flex-col items-center my-8'>
                                        <p className='text-xl'>View more</p>
                                        <ChevronDown size={"40"} />
                                    </div>
                                </TabsContent>
                                <TabsContent value="new">
                                    <div className='grid grid-cols-2 gap-8 mt-4'>
                                        {trending.slice(0, 4).map((ticket, index) => (
                                            <BorderCard key={index} cardStyles='w-full !p-0 border-none relative'>
                                                <Image src={ticket.image} height={200} width={500} alt='wallet' className='object-cover h-[420px] w-full rounded-t-2xl' />
                                                <div className='bg-[#000000] rounded-t-2xl absolute bottom-0 w-full'>
                                                    <div className='px-6 py-4 relative'>
                                                        <h6 className='text-2xl font-semibold'>{ticket.name}</h6>
                                                        <p className='py-1'>{ticket.description}</p>
                                                        <p className='flex gap-1 items-center'>{ticket.whu} WHU <span><Image src={'/wallet/whu.svg'} height={20} width={20} alt='wallet' /></span></p>
                                                        <div className='flex justify-center'>
                                                            <ThemeButton btnStyle='mt-4 px-8 h-12 w-full text-xl bg-transparent bg-none' title='View Details' />
                                                        </div>
                                                        {ticket.onChain && <p className='absolute top-2 right-3 text-sm'>On Chain</p>}
                                                    </div>
                                                </div>
                                            </BorderCard>
                                        ))}
                                    </div>
                                    <div className='flex flex-col items-center my-8'>
                                        <p className='text-xl'>View more</p>
                                        <ChevronDown size={"40"} />
                                    </div>
                                </TabsContent>
                                <TabsContent value="popular">
                                    <div className='grid grid-cols-2 gap-8 mt-4'>
                                        {trending.slice(0, 4).map((ticket, index) => (
                                            <BorderCard key={index} cardStyles='w-full !p-0 border-none relative'>
                                                <Image src={ticket.image} height={200} width={500} alt='wallet' className='object-cover h-[420px] w-full rounded-t-2xl' />
                                                <div className='bg-[#000000] rounded-t-2xl absolute bottom-0 w-full'>
                                                    <div className='px-6 py-4 relative'>
                                                        <h6 className='text-2xl font-semibold'>{ticket.name}</h6>
                                                        <p className='py-1'>{ticket.description}</p>
                                                        <p className='flex gap-1 items-center'>{ticket.whu} WHU <span><Image src={'/wallet/whu.svg'} height={20} width={20} alt='wallet' /></span></p>
                                                        <div className='flex justify-center'>
                                                            <ThemeButton btnStyle='mt-4 px-8 h-12 w-full text-xl bg-transparent bg-none' title='View Details' />
                                                        </div>
                                                        {ticket.onChain && <p className='absolute top-2 right-3 text-sm'>On Chain</p>}
                                                    </div>
                                                </div>
                                            </BorderCard>
                                        ))}
                                    </div>
                                    <div className='flex flex-col items-center my-8'>
                                        <p className='text-xl'>View more</p>
                                        <ChevronDown size={"40"} />
                                    </div>
                                </TabsContent>
                                <TabsContent value="on-sale">
                                    <div className='grid grid-cols-2 gap-8 mt-4'>
                                        {trending.slice(0, 4).map((ticket, index) => (
                                            <BorderCard key={index} cardStyles='w-full !p-0 border-none relative'>
                                                <Image src={ticket.image} height={200} width={500} alt='wallet' className='object-cover h-[420px] w-full rounded-t-2xl' />
                                                <div className='bg-[#000000] rounded-t-2xl absolute bottom-0 w-full'>
                                                    <div className='px-6 py-4 relative'>
                                                        <h6 className='text-2xl font-semibold'>{ticket.name}</h6>
                                                        <p className='py-1'>{ticket.description}</p>
                                                        <p className='flex gap-1 items-center'>{ticket.whu} WHU <span><Image src={'/wallet/whu.svg'} height={20} width={20} alt='wallet' /></span></p>
                                                        <div className='flex justify-center'>
                                                            <ThemeButton btnStyle='mt-4 px-8 h-12 w-full text-xl bg-transparent bg-none' title='View Details' />
                                                        </div>
                                                        {ticket.onChain && <p className='absolute top-2 right-3 text-sm'>On Chain</p>}
                                                    </div>
                                                </div>
                                            </BorderCard>
                                        ))}
                                    </div>
                                    <div className='flex flex-col items-center my-8'>
                                        <p className='text-xl'>View more</p>
                                        <ChevronDown size={"40"} />
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </TabsContent>
                    <TabsContent value="physical-merch">
                        <div>
                            <div>
                                <h4 className='text-2xl font-black pt-2 pb-2.5'>Physical Merch</h4>
                            </div>
                            <Tabs defaultValue="new">
                                <div className='flex justify-between items-center'>
                                    <TabsList className='bg-transparent gap-8'>
                                        <TabsTrigger className='data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white px-4 py-4 text-lg bg-[#03006040]' value="all">All</TabsTrigger>
                                        <TabsTrigger className='data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white px-4 py-4 text-lg bg-[#03006040]' value="new">New</TabsTrigger>
                                        <TabsTrigger className='data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white px-4 py-4 text-lg bg-[#03006040]' value="popular">Popular</TabsTrigger>
                                        <TabsTrigger className='data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white px-4 py-4 text-lg bg-[#03006040]' value="on-sale">On Sale</TabsTrigger>
                                    </TabsList>
                                    <Link href={'/cart'} className='relative'><ShoppingCart size={"36"} /> <span className='absolute top-2 right-1 translate-x-1/2 -translate-y-1/2 bg-red-600 text-white w-4 h-4 text-xs flex items-center justify-center rounded-full'>0</span></Link>
                                </div>
                                <TabsContent value="all">
                                    <div className='grid grid-cols-2 gap-8 mt-4'>
                                        {trending.slice(0, 4).map((ticket, index) => (
                                            <BorderCard key={index} cardStyles='w-full !p-0 border-none relative'>
                                                <Image src={ticket.image} height={200} width={500} alt='wallet' className='object-cover h-[420px] w-full rounded-2xl' />
                                                <div className='bg-[#000000] w-full'>
                                                    <div className='px-6 py-4 relative'>
                                                        <h6 className='text-2xl font-semibold'>{ticket.name}</h6>
                                                        <p className='py-1'>{ticket.description}</p>
                                                        <p className='flex gap-1 items-center'>{ticket.whu} WHU <span><Image src={'/wallet/whu.svg'} height={20} width={20} alt='wallet' /></span></p>
                                                        <div className='flex justify-center'>
                                                            <ThemeButton btnStyle='mt-4 px-8 h-12 w-full text-xl bg-transparent bg-none' title='View Details' />
                                                        </div>
                                                        {ticket.onChain && <p className='absolute top-2 right-3 text-sm'>On Chain</p>}
                                                    </div>
                                                </div>
                                            </BorderCard>
                                        ))}
                                    </div>
                                    <div className='flex flex-col items-center my-8'>
                                        <p className='text-xl'>View more</p>
                                        <ChevronDown size={"40"} />
                                    </div>
                                </TabsContent>
                                <TabsContent value="new">
                                    <div className='grid grid-cols-2 gap-8 mt-4'>
                                        {trending.slice(0, 4).map((ticket, index) => (
                                            <BorderCard key={index} cardStyles='w-full !p-0 border-none relative'>
                                                <Image src={ticket.image} height={200} width={500} alt='wallet' className='object-cover h-[420px] w-full rounded-2xl' />
                                                <div className='bg-[#000000] w-full'>
                                                    <div className='px-6 py-4 relative'>
                                                        <h6 className='text-2xl font-semibold'>{ticket.name}</h6>
                                                        <p className='py-1'>{ticket.description}</p>
                                                        <p className='flex gap-1 items-center'>{ticket.whu} WHU <span><Image src={'/wallet/whu.svg'} height={20} width={20} alt='wallet' /></span></p>
                                                        <div className='flex justify-center'>
                                                            <ThemeButton btnStyle='mt-4 px-8 h-12 w-full text-xl bg-transparent bg-none' title='View Details' />
                                                        </div>
                                                        {ticket.onChain && <p className='absolute top-2 right-3 text-sm'>On Chain</p>}
                                                    </div>
                                                </div>
                                            </BorderCard>
                                        ))}
                                    </div>
                                    <div className='flex flex-col items-center my-8'>
                                        <p className='text-xl'>View more</p>
                                        <ChevronDown size={"40"} />
                                    </div>
                                </TabsContent>
                                <TabsContent value="popular">
                                    <div className='grid grid-cols-2 gap-8 mt-4'>
                                        {trending.slice(0, 4).map((ticket, index) => (
                                            <BorderCard key={index} cardStyles='w-full !p-0 border-none relative'>
                                                <Image src={ticket.image} height={200} width={500} alt='wallet' className='object-cover h-[420px] w-full rounded-2xl' />
                                                <div className='bg-[#000000] w-full'>
                                                    <div className='px-6 py-4 relative'>
                                                        <h6 className='text-2xl font-semibold'>{ticket.name}</h6>
                                                        <p className='py-1'>{ticket.description}</p>
                                                        <p className='flex gap-1 items-center'>{ticket.whu} WHU <span><Image src={'/wallet/whu.svg'} height={20} width={20} alt='wallet' /></span></p>
                                                        <div className='flex justify-center'>
                                                            <ThemeButton btnStyle='mt-4 px-8 h-12 w-full text-xl bg-transparent bg-none' title='View Details' />
                                                        </div>
                                                        {ticket.onChain && <p className='absolute top-2 right-3 text-sm'>On Chain</p>}
                                                    </div>
                                                </div>
                                            </BorderCard>
                                        ))}
                                    </div>
                                    <div className='flex flex-col items-center my-8'>
                                        <p className='text-xl'>View more</p>
                                        <ChevronDown size={"40"} />
                                    </div>
                                </TabsContent>
                                <TabsContent value="on-sale">
                                    <div className='grid grid-cols-2 gap-8 mt-4'>
                                        {trending.slice(0, 4).map((ticket, index) => (
                                            <BorderCard key={index} cardStyles='w-full !p-0 border-none relative'>
                                                <Image src={ticket.image} height={200} width={500} alt='wallet' className='object-cover h-[420px] w-full rounded-2xl' />
                                                <div className='bg-[#000000] w-full'>
                                                    <div className='px-6 py-4 relative'>
                                                        <h6 className='text-2xl font-semibold'>{ticket.name}</h6>
                                                        <p className='py-1'>{ticket.description}</p>
                                                        <p className='flex gap-1 items-center'>{ticket.whu} WHU <span><Image src={'/wallet/whu.svg'} height={20} width={20} alt='wallet' /></span></p>
                                                        <div className='flex justify-center'>
                                                            <ThemeButton btnStyle='mt-4 px-8 h-12 w-full text-xl bg-transparent bg-none' title='View Details' />
                                                        </div>
                                                        {ticket.onChain && <p className='absolute top-2 right-3 text-sm'>On Chain</p>}
                                                    </div>
                                                </div>
                                            </BorderCard>
                                        ))}
                                    </div>
                                    <div className='flex flex-col items-center my-8'>
                                        <p className='text-xl'>View more</p>
                                        <ChevronDown size={"40"} />
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </TabsContent>
                    <TabsContent value="auctions">
                        <div>
                            <div>
                                <h4 className='text-2xl font-black pt-2 pb-2.5'>⚡ Live  Auctions</h4>
                            </div>
                            <div className='grid grid-cols-2 gap-8 mt-4'>
                                {trending.slice(0, 4).map((ticket, index) => (
                                    <BorderCard key={index} cardStyles='w-full !p-0 border-none relative'>
                                        <Image src={ticket.image} height={200} width={500} alt='wallet' className='object-cover h-[420px] w-full rounded-t-2xl' />
                                        <div className='bg-[#000000] rounded-t-2xl absolute bottom-0 w-full'>
                                            <div className='px-6 py-4 relative'>
                                                <h6 className='text-2xl font-semibold'>{ticket.name}</h6>
                                                <p className='py-1'>{ticket.description}</p>
                                                <p className='flex gap-1 items-center'>{ticket.whu} WHU <span><Image src={'/wallet/whu.svg'} height={20} width={20} alt='wallet' /></span></p>
                                                <div className='flex justify-center'>
                                                    <ThemeButton btnStyle='mt-4 px-8 h-12 w-[80%] text-xl bg-transparent bg-none' title='Bid Now' />
                                                </div>
                                                {ticket.onChain && <p className='absolute top-2 right-3 text-sm'>On Chain</p>}
                                            </div>
                                        </div>
                                    </BorderCard>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="bundles">
                        <div>
                            <div>
                                <h4 className='text-2xl font-black pt-2 pb-2.5'>🛍️ Bundles</h4>
                            </div>
                            <div className='grid grid-cols-2 gap-8 mt-4'>
                                {trending.slice(0, 4).map((ticket, index) => (
                                    <BorderCard key={index} cardStyles='w-full !p-0 border-none relative'>
                                        <Image src={ticket.image} height={200} width={500} alt='wallet' className='object-cover h-[420px] w-full rounded-t-2xl' />
                                        <div className='bg-[#000000] rounded-t-2xl absolute bottom-0 w-full'>
                                            <div className='px-6 py-4 relative'>
                                                <h6 className='text-2xl font-semibold'>{ticket.name}</h6>
                                                <p className='py-1'>{ticket.description}</p>
                                                <p className='flex gap-1 items-center'>{ticket.whu} WHU <span><Image src={'/wallet/whu.svg'} height={20} width={20} alt='wallet' /></span></p>
                                                <div className='flex justify-center'>
                                                    <ThemeButton btnStyle='mt-4 px-8 h-12 w-[80%] text-xl bg-transparent bg-none' title='View Bundle' />
                                                </div>
                                                {ticket.onChain && <p className='absolute top-2 right-3 text-sm'>On Chain</p>}
                                            </div>
                                        </div>
                                    </BorderCard>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="drops">
                        <div>
                            <div>
                                <h4 className='text-2xl font-black pt-2 pb-2.5'>🔥 Drops</h4>
                            </div>
                            <div className='grid grid-cols-2 gap-8 mt-4'>
                                {trending.slice(0, 4).map((ticket, index) => (
                                    <BorderCard key={index} cardStyles='w-full !p-0 border-none relative'>
                                        <Image src={ticket.image} height={200} width={500} alt='wallet' className='object-cover h-[420px] w-full rounded-t-2xl' />
                                        <div className='bg-[#000000] rounded-t-2xl absolute bottom-0 w-full'>
                                            <div className='px-6 py-4 relative'>
                                                <h6 className='text-2xl font-semibold'>{ticket.name}</h6>
                                                <p className='py-1'>{ticket.description}</p>
                                                <p className='flex gap-1 items-center'>{ticket.whu} WHU <span><Image src={'/wallet/whu.svg'} height={20} width={20} alt='wallet' /></span></p>
                                                <div className='flex justify-center'>
                                                    <ThemeButton btnStyle='mt-4 px-8 h-12 w-[80%] text-xl bg-transparent bg-none' title='View Drop' />
                                                </div>
                                                {ticket.onChain && <p className='absolute top-2 right-3 text-sm'>On Chain</p>}
                                            </div>
                                        </div>
                                    </BorderCard>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="allowlist">
                        <div>
                            <div>
                                <h4 className='text-2xl font-black pt-2 pb-2.5'>🔒 Allowlists</h4>
                            </div>
                            <div className='grid grid-cols-2 gap-8 mt-4'>
                                {trending.slice(0, 4).map((ticket, index) => (
                                    <BorderCard key={index} cardStyles='w-full !p-0 border-none relative'>
                                        <Image src={ticket.image} height={200} width={500} alt='wallet' className='object-cover h-[420px] w-full rounded-t-2xl' />
                                        <div className='bg-[#000000] rounded-t-2xl absolute bottom-0 w-full'>
                                            <div className='px-6 py-4 relative'>
                                                <h6 className='text-2xl font-semibold'>{ticket.name}</h6>
                                                <p className='py-1'>{ticket.description}</p>
                                                <p className='flex gap-1 items-center'>{ticket.whu} WHU <span><Image src={'/wallet/whu.svg'} height={20} width={20} alt='wallet' /></span></p>
                                                <Link href={'/store-allowlist'} className='flex justify-center'>
                                                    <ThemeButton btnStyle='mt-4 px-8 h-12 w-[80%] text-xl bg-transparent bg-none' title='View' />
                                                </Link>
                                                {ticket.onChain && <p className='absolute top-2 right-3 text-sm'>On Chain</p>}
                                            </div>
                                        </div>
                                    </BorderCard>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </section>
        </>
    )
}

export default MarketPlace