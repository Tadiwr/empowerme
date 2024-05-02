import Link from 'next/link'
import React from 'react'

const navlinks : {title : string, href : string}[] = [
    // {
    //     title : 'Home',
    //     href : "/"
    // },

    {
        title : 'Learn',
        href : "/wiki"
    },
    
    {
        title : 'About',
        href : "/about"
    },

    {
        title : 'Contacts',
        href : "/contacts"
    },
]

export default function Navbar() {
  return (
    <div className='w-full p-5 grid grid-cols-2 z-50 sticky bg-white md:px-10 top-0 left-0'  >
        <div>
            <Link href="/" className='font-semibold md:text-xl ' >EmpowerMe ZW</Link>
        </div>

        <div className='md:flex flex justify-end items-center md:text-xl ' >
            {navlinks.map((link, index) => {
                return <Link className='mr-3 hover:text-pink-600'  href={link.href} key={index}>{link.title}</Link>
            })}
        </div>

    </div>
  )
}
