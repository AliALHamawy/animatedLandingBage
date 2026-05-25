'use client'
import MainHeading from "@/components/MainHeading"
import SecoundaryHeading from "@/components/SecoundaryHeading"
import SubTitle from "@/components/SubTitle"
import TestimonialsColumn from "@/components/TestimonialsColumn"
import testimonialsData from "@/data/TestimonialsData"

const { FirstColumn, SecondColumn, ThirdColumn } = testimonialsData

const Testimonials = () => {
    return (
        <section className="py-24 px-8 lg:px-6 overflow-x-hidden">
            <div className="max-w-7xl m-auto flex flex-col justify-center items-center gap-12">
                <div className="flex justify-center flex-col text-center gap-4 max-w-3xl m-auto">
                    <div className="flex justify-center max-w-2xl m-auto">
                        <SecoundaryHeading text='Testimonials' />
                    </div>
                    <MainHeading text="What Our Users Say" cName="font-black text-3xl" />
                    <SubTitle text="From Intuitive Design To Powerful Features, Our App Has Become An Essential Tool For Users Around The World." />
                </div>
                <div className="flex justify-center gap-6 mt-10 w-full max-h-184.5 overflow-hidden">
                    <TestimonialsColumn testimonial={FirstColumn} animateUp={false} duration={20} />
                    <TestimonialsColumn testimonial={SecondColumn} className="hidden md:flex" animateUp={true} duration={18} />
                    <TestimonialsColumn testimonial={ThirdColumn} className="hidden lg:flex" animateUp={false} duration={22} />
                </div>
            </div>
        </section>
    )
}

export default Testimonials