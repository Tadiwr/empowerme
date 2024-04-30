import FixedSideBar from '@/lib/components/fixed_sidebar'
import PopUpSideBar from '@/lib/components/popup_sidebar'
import React, { ReactNode } from 'react'

type Props = {
    children : ReactNode
}

export default function WikiLayout({children} : Props) {
  return (
    <div className='w-full flex flex-col md:flex-row ' >
        
        <div className='md:hidden'  >
            <PopUpSideBar/>
        </div>
        <div className='hidden md:flex'>
            <FixedSideBar/>
        </div>
        {children}
    </div>
  )
}
