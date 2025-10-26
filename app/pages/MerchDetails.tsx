'use client'
import Footer from '@/components/Footer'
import React, { useState } from 'react'
import Image from 'next/image';
import ThemeButton from '@/components/ThemeButton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, CloudUpload, Heart, ShoppingCart } from 'lucide-react';
import GradientBorderCard from '@/components/Cards/GradientBorderCard';


const MerchDetails = () => {

    const [selected, setSelected] = useState("Medium");
    const [selectedColor, setSelectedColor] = useState("Red");

    const colors = [
        { name: "Red", value: "#FF3B30" },
        { name: "Yellow", value: "#FFD60A" },
        { name: "Black", value: "#000000" },
    ];

    const sizes = ["S", "M", "L", 'XL'];

    return (
        <>
            <header className='flex justify-between w-[80%] mx-auto pt-8'>
                <Link href='/store'>
                    <Button className='text-[#02FFFF] hover:underline bg-none bg-transparent flex items-center gap-2'><ArrowLeft />Back</Button>
                </Link>
                <Link href={'/cart'} className='relative'><ShoppingCart size={"36"} /> <span className='absolute top-2 right-1 translate-x-1/2 -translate-y-1/2 bg-red-600 text-white w-4 h-4 text-xs flex items-center justify-center rounded-full'>0</span></Link>
            </header>
            <main>
                <section className='w-[80%] mx-auto my-10'>
                    <GradientBorderCard outerStyles='rounded-none bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]' borderStyles='rounded-none bg-none bg-[#030131]'>
                        <div className='flex'>
                            <div className='w-[60%] relative'>
                                <Image src={'/ads/juice.png'} height={400} width={500} alt='Product-image' className='h-[700px] w-full object-cover' />
                                <div className='flex items-center justify-center gap-4 absolute bottom-0 w-full'>
                                    <Image src={'/ads/juice.png'} height={400} width={500} alt='Product-image' className='h-[200px] w-[180px] object-cover' />
                                    <Image src={'/ads/juice.png'} height={400} width={500} alt='Product-image' className='h-[200px] w-[180px] object-cover' />
                                    <Image src={'/ads/juice.png'} height={400} width={500} alt='Product-image' className='h-[200px] w-[180px] object-cover' />
                                </div>
                            </div>
                            <div className='py-10 px-8 w-[50%] mx-auto'>
                                <h4 className='font-black text-2xl'>Collector Jersey</h4>
                                <p className='text-sm'>Premium limited-run jersey.</p>

                                <h4 className='text-xl font-bold flex items-center gap-2 mt-4 py-3'>200 WHU <span><Image src={'/wallet/whu.svg'} height={20} width={20} alt='wallet' /></span> </h4>
                                <div className='py-4'>
                                    <p>Select size</p>
                                    <div className="flex gap-4 mt-2">
                                        {sizes.map((size) => (
                                            <label
                                                key={size}
                                                className={`cursor-pointer px-4 py-2 rounded-xl border transition-all duration-200
            ${selected === size
                                                        ? "bg-[#08047a66] text-white border"
                                                        : "bg-[#03006066] border-transparent text-gray-300 hover:border-[#C400F5]"
                                                    }`}
                                                onClick={() => setSelected(size)}
                                            >
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    value={size}
                                                    checked={selected === size}
                                                    onChange={() => setSelected(size)}
                                                    className="hidden"
                                                />
                                                {size}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className='py-4'>
                                    <p>Select size</p>
                                    <div className="flex gap-4 mt-2">
                                        {colors.map((color) => (
                                            <label
                                                key={color.name}
                                                className={`cursor-pointer  px-4 py-2 rounded-xl border transition-all duration-200 flex items-center justify-center
            ${selectedColor === color.name
                                                        ? "border-gray-500 bg-[#08047a66] p-[2px]"
                                                        : "border-transparent bg-[#03006066] hover:border-[#C400F5]"
                                                    }`}
                                                onClick={() => setSelectedColor(color.name)}
                                            >
                                                <div
                                                    className="w-full h-full rounded-full"
                                                >{color.name}</div>

                                                <input
                                                    type="radio"
                                                    name="color"
                                                    value={color.name}
                                                    checked={selectedColor === color.name}
                                                    onChange={() => setSelectedColor(color.name)}
                                                    className="hidden"
                                                />
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex gap-2 items-center mt-4'>
                                    <ThemeButton title='Add to Cart' btnStyle='border-0 h-10 from-[#C400F5] to-[#FF008C]' />
                                    <Heart size={30} />
                                </div>
                                <h5 className='text-xl font-semibold mt-6'>Product Details</h5>
                                <ul className='list-disc py-8 pl-4'>
                                    <li>High quality and durable
                                    </li>
                                    <li>
                                        Free shipping
                                    </li>
                                    <li>
                                        Easy returns available
                                    </li>
                                </ul>
                                <ThemeButton title='Buy Now' btnStyle=' border-0 h-10 from-[#C400F5] to-[#FF008C]' />

                            </div>
                        </div>
                    </GradientBorderCard>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default MerchDetails