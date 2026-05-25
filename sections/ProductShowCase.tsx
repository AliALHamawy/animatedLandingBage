'use client'
import ProductImage from '@/assets/product-image.png'
import MainHeading from '@/components/MainHeading'
import SecoundaryHeading from '@/components/SecoundaryHeading'
import PyramidImage from '@/assets/pyramid.png'
import TubeImage from '@/assets/tube.png'
import Image from 'next/image'
import SubTitle from '@/components/SubTitle'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const ProductShowCase = () => {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

    return (
        <>
            <section ref={sectionRef} className='bg-linear-to-b from-white to-[#d2dcff] py-24 px-5 overflow-x-clip'>
                <div className="container flex flex-col m-auto justify-center max-w-7xl">
                    <div className="flex justify-center max-w-2xl m-auto">
                        <SecoundaryHeading text='Boost Your Productivity' />
                    </div>
                    <div className="flex justify-center flex-col text-center gap-4 max-w-3xl m-auto">
                        <MainHeading text='A More Effective Way To Track Progress' cName='font-black text-3xl' />
                        <SubTitle text='Effortlessly Turn Your Ideas Into a Fully Functional, Responsive, SaaS Website in Just Minutes With This Template.' />
                    </div>
                    <div className="relative">
                        <Image src={ProductImage} alt='product image' className='mt-5' />
                        <motion.img src={PyramidImage.src} alt='Pyramid image' height={262} width={262} className='hidden md:block absolute -right-36 -top-32'
                            style={{
                                translateY,
                            }}
                        />
                        <motion.img src={TubeImage.src} alt='Tube image' height={262} width={262} className='hidden md:block absolute bottom-24 -left-36'
                            style={{
                                translateY,
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductShowCase