import { twMerge } from "tailwind-merge"


const MainBtn = ({text, extraClass}:{text:string, extraClass:string}) => {
  return <button className={twMerge('bg-black text-white px-4 py-2 text-sm rounded-lg font-medium inline-flex justify-center items-center tracking-wider', extraClass)}>{text}</button>
}

export default MainBtn