'use client'

import React, { useState } from 'react'
import GradientBorderCard from './Cards/GradientBorderCard'
import BorderCard from './Cards/BorderCard'
import { Button } from './ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Input } from './ui/input'
import ThemeButton from './ThemeButton'
import { useRouter } from 'next/navigation'

const CustodialWallet = () => {

    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        {
            title: '✨ Easy Setup for New Users',
            description: 'No prior crypto experience required. Just sign up, secure your account, and start using your wallet instantly.',
            buttonText: 'Complete Setup',
        },
        {
            title: 'Step 1: Sign Up',
            description: 'Enter your email to create your custodial wallet account.',
            buttonText: 'Continue',
        },
        {
            title: 'Step 2: Secure',
            description: 'Enable 2FA for added security and protect your funds.',
            buttonText: 'Enable',
        },
        {
            title: 'Step 3. Start Using',
            description: 'Your custodial wallet is ready. You can now deposit , claim rewards, and join events easily.',
            buttonText: 'Complete Setup',
        },
        {
            title: '✅ Custodial Wallet Ready',
            description: 'Your custodial wallet has been created for abcdehhj@gmail.com. You can now deposit funds, earn rewards, and explore NFT passes with ease.',
            buttonText: 'Complete Setup',
        },
    ]


    const handleNext = () => {
        if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1)
    }

    const handleBack = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1)
    }

    return (
        <>
            <div className='px-40 py-10 pb-20'>
                <h1 className='text-3xl text-center font-bold py-10'>{steps[currentStep].title}</h1>
                <>
                    <GradientBorderCard outerStyles='bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500]'>
                        <div className='bg-[#020617] rounded-2xl py-8 px-8 '>
                            <p className={` ${currentStep === 1 ? "" : currentStep === 4 ? "max-w-3xl text-center mx-auto" : "text-center"} tracking-wider font-semibold mb-6`}>{steps[currentStep].description}</p>
                            {currentStep === 0 &&
                                <div className='flex gap-6 items-center justify-center py-8'>
                                    <BorderCard cardStyles='!p-0'>
                                        <div className='bg-[#020617] rounded-2xl'>
                                            <div className='bg-gradient-to-r text-center from-[#c400f552] to-[#ff008c44] rounded-2xl px-4 py-6'>
                                                <h2 className='text-2xl font-semibold'>1. Sign Up</h2>
                                                <p className='text-center text-sm w-72 mt-4 font-semibold'>Create your custodial wallet account
                                                    with email or phone.</p>
                                            </div>
                                        </div>
                                    </BorderCard>
                                    <BorderCard cardStyles='!p-0'>
                                        <div className='bg-[#020617] rounded-2xl'>
                                            <div className='bg-gradient-to-r text-center from-[#c400f552] to-[#ff008c44] rounded-2xl px-4 py-6'>
                                                <h2 className='text-2xl font-semibold'>2. Secure</h2>
                                                <p className='text-center text-sm w-72 mt-4 font-semibold'>Enable 2FA for added security and protect your funds.</p>
                                            </div>
                                        </div>
                                    </BorderCard>
                                    <BorderCard cardStyles='!p-0'>
                                        <div className='bg-[#020617] rounded-2xl'>
                                            <div className='bg-gradient-to-r text-center from-[#c400f552] to-[#ff008c44] rounded-2xl px-4 py-6'>
                                                <h2 className='text-2xl font-semibold'>3. Start Using</h2>
                                                <p className='text-center text-sm w-72 mt-4 font-semibold'>Deposit , claim rewards, and
                                                    join events easily.</p>
                                            </div>
                                        </div>
                                    </BorderCard>
                                </div>
                            }
                            {currentStep === 1 && <>
                                <BorderCard cardStyles='!p-0 mb-8'>
                                    <div className='bg-[#020617] rounded-2xl'>
                                        <div className='bg-gradient-to-r text-center from-[#c400f552] to-[#ff008c44] rounded-2xl py-2'>
                                            <Input placeholder='Enter your email......' className='border-none focus:ring-0 outline-0 focus-visible:ring-0' />
                                        </div>
                                    </div>
                                </BorderCard>
                            </>}
                            <div className='flex flex-col items-center justify-center gap-2'>
                                {currentStep === 4 ?

                                    <div className='flex md:flex-row flex-col justify-center items-center gap-6'>
                                        <ThemeButton title='➕   Top up' btnStyle='from-[#00DF07] to-[#006C31] border-0' />
                                        <ThemeButton title='⬇️   Withdraw' btnStyle='from-[#FFEF3F] to-[#D05000] border-0' />
                                        <ThemeButton title='🏆   Rewards' btnStyle='from-[#FF82C7] to-[#FF008C] border-0' />
                                    </div> :
                                    <Button
                                        onClick={handleNext}
                                        className="mt-4 w-[300px] mx-auto cursor-pointer bg-gradient-to-r from-[#FF00C7] to-[#0022FF] rounded-xl px-8 py-8 text-white font-semibold"
                                    >
                                        {steps[currentStep].buttonText} <ArrowRight />
                                    </Button>
                                }
                                <Button
                                    onClick={handleBack}
                                    className="text-[#02FFFF] cursor-pointer hover:underline bg-none bg-transparent flex items-center gap-2"
                                >
                                    <ArrowLeft /> Back
                                </Button>
                            </div>
                        </div>
                    </GradientBorderCard>
                </>
            </div>
        </>
    )
}

export default CustodialWallet