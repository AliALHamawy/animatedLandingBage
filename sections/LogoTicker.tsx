'use client'
import AcmeLogo from '@/assets/logo-acme.png'
import QuantumLogo from '@/assets/logo-quantum.png'
import EchoLogo from '@/assets/logo-echo.png'
import CelestailLogo from '@/assets/logo-celestial.png'
import PulseLogo from '@/assets/logo-pulse.png'
import ApexLogo from '@/assets/logo-apex.png'
import Image from 'next/image'
import {motion} from 'motion/react'


const LogoTicker = () => {
    return (
        <>
            <div className="py-8 md:py-12 bg-white">
                <div className="conatiner">
                    <div className='flex overflow-hidden mask-[linear-gradient(to_right,transparent,black,transparent)]'>
                        <motion.div className='flex gap-14 flex-none flex-nowrap w-max' 
                        animate={{
                            translateX: "-25%",
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'linear',
                            repeatType: 'loop',
                        }}
                        >
                            <Image src={AcmeLogo} alt='Acem logo' className='h-8 w-auto' />
                            <Image src={QuantumLogo} alt='QuantumLogo logo' className='h-8 w-auto' />
                            <Image src={EchoLogo} alt='EchoLogo logo' className='h-8 w-auto' />
                            <Image src={CelestailLogo} alt='CelestailLogo logo' className='h-8 w-auto' />
                            <Image src={PulseLogo} alt='PulseLogo logo' className='h-8 w-auto' />
                            <Image src={ApexLogo} alt='ApexLogo logo' className='h-8 w-auto' />
                            
                            {/* secound group of logo for animation */}

                            <Image src={AcmeLogo} alt='Acem logo' className='h-8 w-auto' />
                            <Image src={QuantumLogo} alt='QuantumLogo logo' className='h-8 w-auto' />
                            <Image src={EchoLogo} alt='EchoLogo logo' className='h-8 w-auto' />
                            <Image src={CelestailLogo} alt='CelestailLogo logo' className='h-8 w-auto' />
                            <Image src={PulseLogo} alt='PulseLogo logo' className='h-8 w-auto' />
                            <Image src={ApexLogo} alt='ApexLogo logo' className='h-8 w-auto' />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogoTicker