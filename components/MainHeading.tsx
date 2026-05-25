import React from 'react'

const MainHeading = ({text,cName}:{text:string,cName:string}) => {
    return <h1 className={`${cName} md:text-7xl tracking-tighter bg-linear-to-b from-black to-[#001e80] text-transparent bg-clip-text`}>{text}</h1>
}

export default MainHeading