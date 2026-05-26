import { motion } from "motion/react";

interface MainHeadingProps {
    text: string,
    cName?: string
    animateTypewriter?: boolean
}
const MainHeading = ({text,cName, animateTypewriter=false}:MainHeadingProps) => {
    const letters = Array.from(text)
    const containerVariants = {
        hidden:{opacity: 0},
        visible:{
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            }
        }
    }
    const letterVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1, display: 'inline-block'},
    }
    const baseClasses = `${cName} md:text-7xl tracking-tighter bg-linear-to-b from-black to-[#001e80] text-transparent bg-clip-text inline-block`;
    return animateTypewriter ? (
        <motion.h1 
                className={baseClasses}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {letters.map((char, index) => (
                    <motion.span key={index} variants={letterVariants}>
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h1>
    ): (
        <h1 className={baseClasses}>{text}</h1>
    )
}

export default MainHeading