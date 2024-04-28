import Link from 'next/link'
import React from 'react'

type Props = {
    title : string,
    desc : string,
    href : string
}

export default function ActionCard({title, desc, href} : Props) {
  return (
    <div className='border p-5 rounded-xl gap-3 border-slate-200 h-full w-full grid grid-cols-1' >
        <h1 className='text-2xl font-bold' >{title}</h1>
        <p>{desc}</p>
        <Link href={href} className='bg-pink-600 p-2 rounded-xl text-white hover:bg-black transition-all' >Learn More</Link>
    </div>  
  )
}
