'use client'
import { twMerge } from 'tailwind-merge'
import CheckIcon from '@/assets/check.svg'
import MainBtn from '@/components/MainBtn'
import MainHeading from '@/components/MainHeading'
import SubTitle from '@/components/SubTitle'
import pricingTiers from '@/data/PricingData'
import { motion } from 'motion/react'
type featureObj = {
    id2: number,
    arr: string[]
}

type PricingType = {
    id: number
    title: string
    monthlyPrice: number
    buttonText: string
    popular: boolean
    inverse: boolean
    features: featureObj[]
}
const Pricing = () => {
    return (
        <>
            <section className='py-24 px-8 lg:px-6 bg-white'>
                <div className="m-auto">
                    <div className="flex justify-center flex-col text-center gap-4 max-w-6xl m-auto">
                        <div className="flex justify-center flex-col text-center gap-4 max-w-3xl m-auto">
                            <MainHeading text='Pricing' cName='font-black text-3xl' />
                            <SubTitle text='Free Forever. Upgrade ForUnlimited Tasks, Better Security, And Exclusive Features.' />
                        </div>
                        <div className='flex flex-col lg:flex-row gap-6 items-center justify-center lg:items-end'>
                            {pricingTiers.map(({ id, title, monthlyPrice, buttonText, popular, inverse, features }: PricingType) => (
                                <div className={twMerge('card', inverse === true && 'border-black bg-black text-white')} key={id}>
                                    <div className="flex justify-between">
                                        <h3 className={twMerge('text-lg font-bold text-black/50', inverse === true && 'text-white/60')}>{title}</h3>
                                        {popular === true && (
                                            <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                                                <motion.span
                                                    initial={{
                                                        backgroundPositionX: '0%',
                                                    }}
                                                    animate={{
                                                        backgroundPositionX: '100%',
                                                    }}
                                                    transition={{
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        ease: 'linear',
                                                        repeatType: 'loop'
                                                    }}
                                                    className='bg-[linear-gradient(to_right,#DD7DDf,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#DD7DDf,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] bg-size-[200%] text-transparent bg-clip-text font-medium'>Popular</motion.span>
                                            </div>
                                        )}
                                    </div>
                                    <div className='flex items-baseline gap-1 mt-7.5'>
                                        <span className='text-4xl font-bold tracking-tighter leading-none'>${monthlyPrice}</span>
                                        <span className='tracking-tight font-bold text-black/50'>/month</span>
                                    </div>
                                    <MainBtn text={buttonText} extraClass={twMerge("w-full mt-[30px]", inverse === true && "bg-white text-black")} />
                                    <ul className='flex flex-col gap-5 mt-8'>
                                        {features.map((featureObj) => (
                                            featureObj.arr.map((feature, index) => (
                                                <li className='text-sm flex items-center gap-4' key={`${featureObj.id2}-${index}`}>
                                                    <CheckIcon className='h-6 w-6' />
                                                    <span className='text-start'>{feature}</span>
                                                </li>
                                            ))
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing