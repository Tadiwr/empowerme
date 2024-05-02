import FixedSideBar from '@/lib/components/fixed_sidebar'
import PopUpSideBar from '@/lib/components/popup_sidebar'
import { TreeMenuItem } from '@/lib/types/tree_menu_items'
import React, { ReactNode } from 'react'

type Props = {
    children : ReactNode
}

const menuItems : TreeMenuItem[] = [
    {
        title : "Forms of Abuse",
        href : "/wiki/forms-of-abuse"
    },

    {
        title : "Stockholm Syndrome",
        href : "/wiki/stockholm-syndrome"
    },
]

export default function WikiLayout({children} : Props) {
  return (
    <div className='w-full flex flex-col md:flex-row ' >
        
        <div className='md:hidden'  >
            <PopUpSideBar menuItems={menuItems} />
        </div>
        <div className='hidden sticky h-screen md:flex md:w-1/4'>
            <FixedSideBar menuItems={menuItems} />
        </div>
        <div className='h-full w-full md:w-3/4 bg-slate-100 rounded-xl m-3' >
            {children}
        </div>
    </div>
  )
}
