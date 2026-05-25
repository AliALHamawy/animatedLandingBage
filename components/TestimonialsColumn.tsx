
import { motion } from "motion/react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type testimonial = {
    id: number,
    text: string;
    imageSrc: string;
    name: string;
    username: string;
};

interface TestimonialsColumnProps {
    className?: string
    testimonial: testimonial[]
    animateUp?: boolean
    duration?: number
}

const TestimonialsColumn = ({ className, testimonial, animateUp = false, duration = 15 }: TestimonialsColumnProps) => {
    return (
        <>
            <div className={twMerge("flex flex-col h-184.5 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]", className)}>
                <motion.div
                    initial={{ translateY: animateUp ? "0%" : "-50%" }}
                    animate={{ translateY: animateUp ? "-50%" : "0%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: duration,
                    }}
                    className="flex flex-col gap-6 pb-6"
                >
                    {[...testimonial, ...testimonial].map(({id, text, imageSrc, name, username}:testimonial,index) => (
                        <div className="card bg-white/60 p-6 rounded-2xl border border-neutral-200 shadow-sm" key={`${id}-${index}`}>
                            <div>{text}</div>
                            <div className="flex flex-row items-center gap-2 mt-5">
                                <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full" />
                                <div className="flex flex-col">
                                    <div className="font-medium tracking-tight leading-5">{name}</div>
                                    <div className="tracking-tight leading-5 text-netural-500">{username}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
            {/* <div className={twMerge("flex flex-col justify-center gap-6 mt-10 mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]", props.className)}>
                {props.testimonial.map(({ id, text, imageSrc, name, username }: testimonial) => (
                    <div className="card bg-white/60" key={id}>
                        <div>{text}</div>
                        <div className="flex flex-row items-center gap-2 mt-5">
                            <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full" />
                            <div className="flex flex-col">
                                <div className="font-medium tracking-tight leading-5">{name}</div>
                                <div className="tracking-tight leading-5">{username}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
        </>
    )
}

export default TestimonialsColumn