"use client"
import MainBtn from '@/components/MainBtn'
import SecoundButton from '@/components/SecoundButton'
import cogImage from '@/assets/cog.png'
import CylinderTmage from '@/assets/cylinder.png'
import NoodleImage from '@/assets/noodle.png'
import Image from 'next/image'
import MainHeading from '@/components/MainHeading'
import SecoundaryHeading from '@/components/SecoundaryHeading'
import { easeInOut, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { useRef } from 'react'

const Hero = () => {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start end', 'end start']
    })
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

    return (
        <>
            <section ref={heroRef} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip  '>
                <div className="container px-5 lg:max-w-300 lg:gap-10 lg:mx-auto">
                    <div className='md:flex items-center'>
                        <div className='md:w-119.5'>
                            <SecoundaryHeading text='Version 2.0 Is Here' />
                            <MainHeading text='Pathway To Productivity' cName='text-5xl font-bold' />
                            <p className='text-xl text-[#010d3e] tracking-tight mt-6'>Celebrate The Joy Of Accomplishment With An App Designed To Track Your Progress, Motivate Your Efforts, And Celebrate Your Successes</p>
                            <div className="inline-flex gap-1 items-center mt-7.5">
                                <MainBtn text='Get For Free' extraClass="" />
                                <SecoundButton text='Learn More' />
                            </div>
                        </div>
                        <div className='mt-20 md:mt-0 md:h-162  md:flex-1 relative'>
                            <motion.img src={cogImage.src} alt='Cog Image' className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0'
                                animate={{
                                    translateY: [-30, 30],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: 'mirror',
                                    duration: 2,
                                    ease: easeInOut
                                }}
                            />
                            <motion.img src={CylinderTmage.src} alt='CylinderTmage Image' width={220} height={220} className='hidden md:block -top-8 -left-32 md:absolute'
                                style={{ translateY: translateY }}
                            />
                            <motion.img src={NoodleImage.src} alt='NoodleImage Image' width={220} height={220} className='hidden lg:block top-131 left-112 rotate-30 lg:absolute'
                                style={{
                                    translateY: translateY
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero