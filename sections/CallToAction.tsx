'use client'
import MainBtn from "@/components/MainBtn"
import MainHeading from "@/components/MainHeading"
import SecoundButton from "@/components/SecoundButton"
import SubTitle from "@/components/SubTitle"
import StarImage from "@/assets/star.png"
import SpringImage from "@/assets/spring.png"
import Image from "next/image"
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from "react"

const CallToAction = () => {

    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

    return (
        <>
            <section ref={sectionRef} className="py-24 px-8 lg:px-6 bg-linear-to-b from-white to-[#D2DCFF] overflow-x-clip">
                <div className="flex justify-center flex-col text-center gap-4 max-w-3xl m-auto relative">
                    <MainHeading text="Sign Up For Free Today" cName="font-black text-3xl" />
                    <SubTitle text="Celebrate The Joy Of Accomplishment With An App Designed To Track Your Progress And Motivate Your Efforts." />
                    <motion.img src={StarImage.src} alt="Star Image" width={360} className="hidden md:flex absolute -left-87.5 -top-34.25"
                        style={{ translateY }}
                    />
                    <motion.img src={SpringImage.src} alt="Spring Image" width={360} className="hidden md:flex absolute -right-82.75 -top-4.75"
                        style={{ translateY }}
                    />
                </div>
                <div className="flex justify-center items-center gap-2 mt-10">
                    <MainBtn text="Get For Free" extraClass="" />
                    <SecoundButton text="Learn More" />
                </div>
            </section>
        </>
    )
}

export default CallToAction