'use client'

import BorderCard from '@/components/Cards/BorderCard';
import Footer from '@/components/Footer';
import GradientBorderCard from '@/components/Cards/GradientBorderCard';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, Check, ChevronRight, WalletCards } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const Cart = () => {

    const [currentStep, setCurrentStep] = React.useState(1);

    const steps = [
        { id: 1, label: "Cart" },
        { id: 2, label: "Shipping" },
        { id: 3, label: "Payment" },
        { id: 4, label: "Success" },
    ];

    const handleNext = () => {
        if (currentStep < steps.length) setCurrentStep(currentStep + 1)
    }

    const handleBack = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1)
    }

    return (
        <>
            <Header />
            <div className='flex justify-center mt-6'>
                <h2 className='font-bold text-2xl md:text-3xl'>🛒 Cart & Checkout</h2>
            </div>
            <div className="relative flex items-center justify-between md:w-full w-[87%] max-w-3xl mx-auto mt-10 md:px-0 px-4">
                {/* Full line */}
                <div className="absolute top-1/2 left-0 right-0 h-[8px] border border-gray-500 rounded-full -z-10"></div>

                {/* Active line */}
                <div
                    className="absolute top-1/2 left-0 h-[8px] bg-yellow-400 rounded-full -z-10 transition-all duration-500"
                    style={{
                        width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                    }}
                ></div>

                {currentStep === 4 && <div className='absolute -right-5 top-0 text-4xl'>🎉</div>}

                {/* Steps */}
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className={`md:w-12 w-10 h-10 md:h-12 mt-1 mx-auto rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 bg-[#00D35F] md:text-2xl`}
                    >
                        {step.id}
                    </div>
                ))}
            </div>

            {currentStep === 1 && <div className='max-w-4xl mx-auto md:mt-20 mt-10'>
                <GradientBorderCard outerStyles='md:!bg-gradient-to-b !from-[#C400F5] !to-[#02FFFF]'>
                    <div className='bg-[#020617] rounded-2xl px-6 py-8'>
                        <div className='flex flex-col gap-3'>
                            <div className='bg-[#03006059] md:p-6 p-4 rounded-2xl flex gap-4'>
                                <div>
                                    <Image src={'/cart/jersey.png'} height={120} width={120} alt='Image' className='rounded-2xl shadow-md shadow-white' />
                                </div>
                                <div className='flex justify-between md:items-start items-center w-full py-4'>
                                    <div>
                                        <h3 className='font-semibold text-base md:text-xl'>Collector Jersey</h3>
                                        <p className='text-sm tracking-wider'>Qty : 1</p>
                                    </div>
                                    <p>200 WHU</p>
                                </div>
                            </div>
                            <div className='bg-[#03006059] md:p-6 p-4 rounded-2xl flex gap-4'>
                                <div>
                                    <Image src={'/cart/nft-pass.png'} height={120} width={120} alt='Image' className='rounded-2xl shadow-md shadow-white' />
                                </div>
                                <div className='flex justify-between md:items-start items-center w-full py-4'>
                                    <div>
                                        <h3 className='font-semibold text-base md:text-xl'>NFT Pass</h3>
                                        <p className='text-sm tracking-wider'>Qty : 2</p>
                                    </div>
                                    <p>200 WHU</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </GradientBorderCard>
                <div className='py-6 mt-4 md:block hidden'>
                    <p className='text-right font-bold text-[#02FFFF] text-2xl'>400 WHU</p>
                </div>
                <div className='pr-4 mb-10 md:hidden block'>
                    <p className='text-right font-bold text-[#02FFFF] text-2xl'>Subtotal : 600 WHU</p>
                </div>
                <GradientBorderCard outerStyles='!bg-gradient-to-b !from-[#C400F5] !to-[#02FFFF] md:px-0 mx-4'>
                    <div className='bg-[#020617] rounded-2xl md:p-6 p-4 flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <p className=' md:tracking-wider'>Currency</p>
                            <div className='bg-[#03006059] py-2 px-4 flex gap-4'>
                                <h3 className='font-semibold text-md md:text-xl'>WHU</h3>
                            </div>
                        </div>
                        <Button
                            onClick={handleNext}
                            className="w-[180px] cursor-pointer bg-gradient-to-r from-[#FF00C7] to-[#0022FF] rounded-xl px-8 md:py-6 py-5 md:w-[300px] text-white font-semibold"
                        >
                            Proceed to checkout <ArrowRight />
                        </Button>
                    </div>
                </GradientBorderCard>
            </div>}
            {currentStep === 2 && <div className='max-w-4xl mx-auto mt-20'>
                <GradientBorderCard outerStyles='bg-none bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]'>
                    <div className='bg-[#020617] rounded-2xl px-6 py-8'>
                        <div className='flex flex-col gap-3'>
                            <h4 className='text-xl font-bold mb-2'>📦 Shipping Address</h4>
                            <div className=' rounded-2xl flex gap-4'>
                                <div className='w-full'>
                                    <p className='md:hidden block pb-2'>Full Name</p>
                                    <Input placeholder='Full Name' className='bg-[#03006059] border-0 focus-visible:ring-0 outline-0' />
                                    <p className='md:hidden block py-2 pb-0 md:mt-0 mt-2'>Address</p>
                                    <Input placeholder='Address' className='bg-[#03006059] border-0 focus-visible:ring-0 outline-0 mt-3' />
                                    <div className='flex md:flex-row flex-col md:mt-3 mt-2 md:items-center md:gap-2 gap-3'>
                                        <p className='md:hidden block py-2 pb-0'>Country</p>
                                        <Input placeholder='Country' className='bg-[#03006059] border-0 focus-visible:ring-0 outline-0' />
                                        <p className='md:hidden block py-2 pb-0'>State</p>
                                        <Input placeholder='State' className='bg-[#03006059] border-0 focus-visible:ring-0 outline-0' />
                                    </div>
                                    <div className='flex md:flex-row flex-col md:mt-3 mt-2 md:items-center md:gap-2 gap-3'>
                                        <p className='md:hidden block py-2 pb-0'>City</p>
                                        <Input placeholder='City' className='bg-[#03006059] border-0 focus-visible:ring-0 outline-0' />
                                        <p className='md:hidden block py-2 pb-0'>Postal Code</p>
                                        <Input placeholder='Postal Code' className='bg-[#03006059] border-0 focus-visible:ring-0 outline-0' />
                                    </div>
                                    <p className='md:hidden block py-2 md:mt-0 mt-2'>Mobile Number</p>
                                    <Input placeholder='Mobile Number' className='bg-[#03006059] border-0 focus-visible:ring-0 outline-0 md:mt-3 md:w-1/2' />
                                </div>
                            </div>
                        </div>
                    </div>
                </GradientBorderCard>
                <div>
                    <div className=' p-6 flex justify-between items-center'>
                        <Button
                            onClick={handleBack}
                            className="md:text-[#02FFFF] hover:underline bg-none bg-transparent flex items-center gap-2"
                        >
                            <ArrowLeft /> Back
                        </Button>
                        <Button
                            onClick={handleNext}
                            className="md:w-[300px] w-[180px] cursor-pointer bg-gradient-to-r from-[#FF00C7] to-[#0022FF] rounded-xl px-8 md:py-6 py-4 text-white font-semibold"
                        >
                            Proceed to payment <ArrowRight />
                        </Button>
                    </div>
                </div>
            </div>}
            {currentStep === 3 && <div className='max-w-4xl mx-auto mt-20'>
                <GradientBorderCard outerStyles='md:bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]'>
                    <div className='bg-[#020617] rounded-2xl px-6 py-8'>
                        <div className='flex flex-col gap-3'>
                            <h4 className='text-xl font-bold mb-2'>💳 Payment Method</h4>
                            <div className='bg-[#03006040] p-6 rounded-2xl md:flex hidden gap-4'>
                                <Label className="flex items-start justify-center gap-3 rounded-lg p-3">
                                    <Checkbox
                                        id="toggle-2"
                                        defaultChecked
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700 mr-4 mt-3"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="leading-none text-lg font-semibold flex items-center gap-2">
                                            🌐 Crypto (WalletConnect) <Image src={'/cart/metamask.png'} height={30} width={30} alt='metamask' />
                                        </p>
                                        <p className="text-[#D9D9D9] text-sm">
                                            Connect your wallet (e.g. MetaMask) with WalletConnect and pay using WHU tokens or
                                            other supported cryptocurrencies.
                                        </p>
                                    </div>
                                </Label>
                            </div>
                            <div className='md:hidden flex flex-col items-center gap-4'>
                                <div className='bg-[#03006040] p-6 rounded-2xl w-full flex gap-4'>
                                    <div className='flex items-center gap-4'>
                                        <Image src={'/cart/metamask.png'} height={30} width={30} alt='metamask' />
                                        <p>MetaMask</p>
                                    </div>
                                </div>
                                <div className='bg-[#03006040] p-6 rounded-2xl w-full flex gap-4'>
                                    <div className='flex items-center gap-4'>
                                        <Image src={'/cart/coinbase.svg'} height={30} width={30} alt='metamask' />
                                        <p>Coinbase Wallet</p>
                                    </div>
                                </div>
                                <div className='bg-[#03006040] p-6 rounded-2xl w-full flex gap-4'>
                                    <div className='flex items-center gap-4'>
                                        <Image src={'/cart/base.svg'} height={30} width={30} alt='metamask' />
                                        <p>Base</p>
                                    </div>
                                </div>
                                <div className='bg-[#03006040] p-6 rounded-2xl w-full flex gap-4 justify-between'>
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
                <div>
                    <div className=' p-6 flex justify-between items-center'>
                        <Button
                            onClick={handleBack}
                            className="md:text-[#02FFFF] hover:underline bg-none bg-transparent flex items-center gap-2"
                        >
                            <ArrowLeft /> Back
                        </Button>
                        <Button
                            onClick={handleNext}
                            className="md:w-[300px] w-[180px] cursor-pointer bg-gradient-to-r from-[#FF00C7] to-[#0022FF] rounded-xl px-8 md:py-6 py-4 text-white font-semibold"
                        >
                            Proceed to payment <ArrowRight />
                        </Button>
                    </div>
                </div>
            </div>}
            {currentStep === 4 && <div className='max-w-4xl mx-auto md:mt-20 mt-10 md:px-0 px-4 min-h-dvh'>
                <h4 className='text-xl font-bold mb-6 text-center'>Payment Successfull</h4>
                <GradientBorderCard outerStyles='relative bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] shadow-lg'>
                    <div className="absolute -inset-2 z-0 rounded-lg bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#C400F5] opacity-50 blur-[50px]" />
                    <div className='relative bg-[#020617] rounded-2xl'>
                        <div className='flex flex-col gap-3'>
                            <div className='bg-[#000] md:p-6 md:py-4 py-8 p-4 rounded-2xl flex-col flex items-center justify-center'>
                                <h4 className='text-2xl font-bold mb-2'>🎉  Thank You!</h4>
                                <p className='max-w-md text-center py-6 md:text-base text-sm'>Your order has been placed successfully. You will receive
                                    a confirmation email shortly with your order details.</p>
                                <div className='mt-3 hidden md:flex justify-between items-center'>
                                    <Button
                                        onClick={handleBack}
                                        className="text-[#02FFFF] border border-[#02FFFF] hover:underline bg-none bg-transparent flex items-center gap-2"
                                    >
                                        <ArrowLeft /> Back to Store
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </GradientBorderCard>
                <div className='mt-6 md:hidden flex justify-center items-center w-full'>
                    <Button
                        onClick={handleBack}
                        className="text-[#02FFFF] border border-[#02FFFF] hover:underline bg-none bg-transparent flex items-center gap-2 rounded-full h-12 w-[200px]"
                    >
                        <ArrowLeft /> Back to Store
                    </Button>
                </div>
            </div>}
            <Footer />
        </>
    )
}

export default Cart