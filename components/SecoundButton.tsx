import ArrowRight from '@/assets/arrow-right.svg'

const SecoundButton = ({text}:{text:string}) => {
  return <button className='bg-transparent text-black px-4 py-2 text-sm rounded-lg font-medium inline-flex justify-center items-center tracking-wider gap-1'>{text} <ArrowRight className='h-4 w-4 inline-flex justify-center items-center'/></button>
}

export default SecoundButton