'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ThemeButton from '@/components/ThemeButton'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { PrivyProvider, usePrivy, useWallets } from '@privy-io/react-auth'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '@/lib/contractInfo'
import { sepolia } from '@wagmi/chains'

// Declare window.ethereum for TypeScript (fallback if needed)
declare global {
  interface Window {
    ethereum?: any
  }
}

const walletHistory = [
  { type: "Stake", date: "4/9/25", status: "Pending", amount: -80, token: "WHU" },
  { type: "Reward", date: "15/07/25", status: "Completed", amount: 60, token: "WHU" },
  { type: "Stake", date: "4/06/25", status: "Completed", amount: -100, token: "WHU" },
  { type: "Reward", date: "25/05/25", status: "Completed", amount: 40, token: "WHU" },
]

const WalletContent = () => {
  const { ready, authenticated, login, logout, user } = usePrivy()
  const { wallets } = useWallets()

  const [walletState, setWalletState] = useState<'idle' | 'connecting' | 'active'>('idle')
  const [account, setAccount] = useState<string | null>(null)
  const [balanceETH, setBalanceETH] = useState<string>("")
  const [balanceToken, setBalanceToken] = useState<string>("")
  const [isLoadingBalances, setIsLoadingBalances] = useState(false)

  useEffect(() => {
    if (ready) {
      if (authenticated && wallets.length > 0) {
        setWalletState('active')
        const walletAddress = wallets[0].address
        setAccount(walletAddress)
        fetchBalances(walletAddress)
      } else {
        setWalletState('idle')
      }
    }
  }, [ready, authenticated, wallets])

  const fetchBalances = async (address: string) => {
    if (!address) return

    try {
      setIsLoadingBalances(true)
      const infuraKey = process.env.NEXT_PUBLIC_INFURA_KEY
      if (!infuraKey) {
        throw new Error("Infura key is missing. Please set NEXT_PUBLIC_INFURA_KEY in .env.local")
      }
      const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/${infuraKey}`)

      // Fetch ETH balance
      const balanceWei = await provider.getBalance(address)
      setBalanceETH(parseFloat(ethers.formatEther(balanceWei)).toFixed(4) + " ETH")

      // Fetch token balance (ERC-20)
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)
      if (typeof contract.balanceOf === 'function' && typeof contract.decimals === 'function') {
        const tokenBalance = await contract.balanceOf(address)
        const decimals = await contract.decimals()
        setBalanceToken(ethers.formatUnits(tokenBalance, decimals) + " WHU")
      } else {
        setBalanceToken("0 WHU")
      }
    } catch (err) {
      console.error("Balance fetch error:", err)
      setBalanceETH("0 ETH")
      setBalanceToken("0 WHU")
    } finally {
      setIsLoadingBalances(false)
    }
  }

  const handleLogin = async () => {
    setWalletState('connecting')
    await login()
  }

  const handleLogout = async () => {
    await logout()
    setAccount(null)
    setBalanceETH("")
    setBalanceToken("")
    setWalletState('idle')
  }

  const WalletConnectButton = () => {
    return (
      <Button
        className='font-semibold border-[#A4A0A0] rounded-2xl bg-gradient-to-r from-[#0022FF] to-[#030060] border h-[48px] w-[170px] mt-6 cursor-pointer'
        onClick={handleLogin}
      >
        🔗 Connect
      </Button>
    )
  }

  return (
    <>
      <Header />
      <main className={`flex items-center justify-center ${walletState === 'active' ? "mt-20" : "h-[calc(100vh-100px)] relative"} px-4`}>
        {walletState === 'active' && (
          <div className='absolute md:top-28 top-16 md:right-20 right-6 cursor-pointer font-bold' onClick={handleLogout}>
            Log Out
          </div>
        )}
        <div>
          <div className='flex justify-center'>
            <Image src={"/wallet/Wallet.svg"} height={200} width={200} alt='Whuups' className='md:w-48 md:h-20 w-40' />
          </div>

          {/* Connecting */}
          {walletState === 'connecting' && (
            <>
              <div className="relative md:mt-20 mt-16 rounded-2xl p-[0.8px] h-[240px] lg:w-[1000px] md:w-[700px] bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] shadow-lg">
                <div className="absolute -inset-2 z-0 rounded-lg bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#C400F5] opacity-50 blur-[50px]" />
                <div className="relative rounded-2xl bg-[#000000] p-12 flex flex-col justify-center items-center h-full">
                  <h5 className='font-bold text-2xl md:text-3xl'>WalletConnect</h5>
                  <p className='font-bold text-xl md:text-3xl mt-8 text-[#00D35F]'>Connecting... 🔄</p>
                </div>
              </div>
            </>
          )}

          {/* Active */}
          {walletState === 'active' && (
            <>
              <div className="relative mt-20 rounded-2xl p-[0.8px] h-[240px] lg:w-[1000px] md:w-[700px] w-[90%] mx-auto bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] shadow-lg">
                <div className="absolute -inset-2 z-0 rounded-lg bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#C400F5] opacity-50 blur-[50px]" />
                <div className="relative rounded-2xl bg-[#000000] md:p-12 p-6 flex flex-col justify-center items-center h-full">
                  <h5 className='font-bold text-xl md:text-3xl'>Total Portfolio Value</h5>
                  <h1 className='text-[#02FFFF] font-bold text-4xl md:text-6xl py-4'>
                    {balanceToken && balanceETH ? `$${parseFloat(balanceETH.split(" ")[0]) * 2000 + parseFloat(balanceToken.split(" ")[0]) * 1}` : "$240"}
                  </h1>
                  <p className='font-bold text-xl md:text-3xl text-[#00D35F]'>Includes WHU balance</p>
                </div>
              </div>
              <div className='flex md:flex-row flex-col justify-center items-center mt-16 gap-6'>
                <ThemeButton title='➕   Top up' btnStyle='from-[#00DF07] to-[#006C31] border-0' />
                <ThemeButton title='⬇️   Withdraw' btnStyle='from-[#FFEF3F] to-[#D05000] border-0' />
                <ThemeButton title='🏆   Rewards' btnStyle='from-[#FF82C7] to-[#FF008C] border-0' />
              </div>
              <div className={`relative rounded-2xl my-20 md:w-[78%] w-full mx-auto p-[0.8px] h-full bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] shadow-lg`}>
                <div className={`rounded-2xl bg-[#020617] md:px-20 px-4 py-6 flex flex-col justify-center`}>
                  <h4 className='font-bold text-2xl md:text-3xl'>WHU Balance</h4>
                  <div className='mt-6 border-[#A4A0A0] border bg-gradient-to-r from-[#4F005B] via-[#FF008C] to-[#D05000] flex md:flex-row flex-col justify-between items-center p-4 rounded-2xl px-10'>
                    <div className='flex md:flex-row flex-col gap-2 items-center'>
                      <Image src={'/wallet/whu.svg'} height={40} width={40} alt='Image' />
                      <h6 className='font-bold text-2xl'>WHU</h6>
                    </div>
                    <p className='text-3xl font-black'>{isLoadingBalances ? "Loading..." : (balanceToken || "240")}</p>
                  </div>
                </div>
              </div>
              <div className={`relative rounded-2xl md:w-[78%] w-full mx-auto p-[0.8px] h-full bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] shadow-lg mb-8`}>
                <div className={`rounded-2xl bg-[#020617] md:px-20 px-4 py-6 flex flex-col justify-center`}>
                  <h4 className='font-bold text-2xl md:text-3xl'>ETH Balance</h4>
                  <div className='mt-6 border-[#A4A0A0] border bg-gradient-to-r from-[#4F005B] via-[#FF008C] to-[#D05000] flex md:flex-row flex-col justify-between items-center p-4 rounded-2xl px-10'>
                    <div className='flex md:flex-row flex-col gap-2 items-center'>
                      <Image src={'/wallet/eth.svg'} height={40} width={40} alt='ETH' />
                      <h6 className='font-bold text-2xl'>ETH</h6>
                    </div>
                    <p className='text-3xl font-black'>{isLoadingBalances ? "Loading..." : (balanceETH || "0")}</p>
                  </div>
                </div>
              </div>
              <div className={`relative rounded-2xl w-full md:w-[78%] mx-auto p-[0.8px] h-full bg-gradient-to-r from-[#C400F5] via-[#02FFFF] to-[#FA1500] shadow-lg`}>
                <div className={`rounded-2xl bg-[#020617] md:px-10 px-4 py-6 flex flex-col justify-center`}>
                  <h4 className='font-bold text-2xl md:text-3xl'>NFT Passes</h4>
                  <div className='flex md:flex-row flex-col items-center justify-center gap-8 mt-8'>
                    <div>
                      <Image src={'/profile/vip-lounge.jpg'} height={240} width={240} alt='VIP Pass' className='rounded-2xl' />
                      <h5 className='text-center font-bold text-xl mt-1'>VIP Pass</h5>
                    </div>
                    <div>
                      <Image src={'/wallet/nf-creator-pass.jpg'} height={240} width={240} alt='Creator Pass' className='rounded-2xl' />
                      <h5 className='text-center font-bold text-xl mt-1'>Creator Pass</h5>
                    </div>
                    <div>
                      <Image src={'/wallet/ultimate.jpg'} height={240} width={240} alt='Ultimate Pass' className='rounded-2xl' />
                      <h5 className='text-center font-bold text-xl mt-1'>Ultimate</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`relative rounded-2xl mt-20 w-full md:w-[78%] mx-auto p-[0.8px] md:mb-52 h-full bg-gradient-to-b from-[#C400F5] via-[#02FFFF] to-[#FA1500] shadow-lg`}>
                <div className={`rounded-2xl bg-[#020617] md:px-10 px-4 py-6 flex flex-col justify-center`}>
                  <h4 className='font-bold text-2xl md:text-3xl'>Transaction History</h4>
                  <div className='flex flex-wrap md:gap-4 gap-2 items-center mt-8 w-full'>
                    <ThemeButton title="All" btnStyle='from-[#00D35F] to-[#00D35F] border-0 h-10 w-20' />
                    <ThemeButton title="Stake" btnStyle='from-[#03006066] to-[#03006066] border-0 h-10 w-28' />
                    <ThemeButton title="Rewards" btnStyle='from-[#03006066] to-[#03006066] border-0 h-10 w-28' />
                    <div className='w-full'>
                      <input className='bg-[#03006066] h-12 w-full rounded-xl px-4 py-2 border border-[#A4A0A0]' placeholder='Search...' />
                    </div>
                  </div>

                  <div className='mt-4'>
                    {walletHistory.map((item, index) => (
                      <div key={index} className="flex md:flex-row flex-col justify-between gap-6 items-center border border-[#A4A0A0] rounded-xl px-6 py-5 mb-4 bg-[#03006066]">
                        <p className="font-bold text-lg md:w-32">{item.type}</p>
                        <p className="text-md md:w-32">{item.date}</p>
                        <p className="md:w-48 text-left">
                          <span className={`${item.status === 'Completed' ? '' : 'text-yellow-400'}`}>
                            Status: {item.status}
                          </span>
                        </p>
                        <p className={`font-bold text-xl ${item.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                          {item.amount > 0 ? '+' : ''}{item.amount} {item.token}
                        </p>
                      </div>
                    ))}

                    <div className='flex text-[#02FFFF] text-sm items-center gap-1 justify-center cursor-pointer'>
                      <p className='text-center underline'>Load Previous Transactions</p> <span>➜</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Idle */}
          {walletState === 'idle' && (
            <>
              <div className='flex md:flex-row flex-col items-center justify-center md:gap-10 gap-2 md:py-20 py-8'>
                <div className='border relative border-[#C400F5] px-8 py-5 rounded-2xl bg-[#03006040] h-[240px] md:w-[500px] w-full md:mt-4 flex flex-col justify-center items-center'>
                  <h5 className='font-bold text-xl md:text-3xl mt-1 text-[#C400F5]'>WalletConnect</h5>
                  <WalletConnectButton />
                </div>
                <div className='border relative border-[#00D35F] px-8 py-5 rounded-2xl bg-[#03006040] h-[240px] md:w-[500px] w-full md:mt-4 flex flex-col justify-center items-center'>
                  <h5 className='font-bold text-xl md:text-3xl mt-1 text-[#00D35F]'>Custodial Wallet</h5>
                  <Button className='font-semibold border-[#A4A0A0] rounded-2xl bg-[#0300604D] border h-[48px] w-[170px] mt-6'>
                    🛡️ Enable
                  </Button>
                  <p className='mt-10 text-xs md:text-sm absolute bottom-4 text-center'>✨ Perfect for new users — no prior crypto experience required.</p>
                  <p className='absolute top-2 right-4 text-sm'>New User Friendly</p>
                </div>
              </div>
              <p className='text-[#02FFFF] text-center md:text-base text-sm'>✨ Secure your wallet and explore NFT passes to unlock exclusive events and perks!</p>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

const Wallet = () => {
  return (
    <PrivyProvider
      appId="cmgtqi9nw00anjo0ba9gjguyd"
      config={{
        supportedChains: [sepolia],
        appearance: {
          theme: 'dark',
          accentColor: '#02FFFF',
          logo: '/wallet/Wallet.svg',
        },
        loginMethods: ['wallet'], // Only wallet login
        embeddedWallets: {
          ethereum: {
            createOnLogin: 'all-users', // ✅ Correct placement
          },
        },
        externalWallets: { // ✅ Replaced walletConnectors
          coinbaseWallet: {},
          walletConnect: {
            enabled: true,
          },
        },
      }}
    >
      <WalletContent />
    </PrivyProvider>
  )
}




export default Wallet