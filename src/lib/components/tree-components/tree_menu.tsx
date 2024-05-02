"use client";

import { TreeMenuItem } from '@/lib/types/tree_menu_items'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {
    menuItems : TreeMenuItem[],
    onItemClick? : () => void,
}

export default function TreeMenu({menuItems, onItemClick = () => {}} : Props) {

  const path = usePathname();

  return (
    <div className='transition-all' >
        {menuItems.map((item, index) => {
            return <div className={`mt-3 font-semibold ${path != item.href ? " text-slate-500 " : " text-slate-800 font-extrabold text-center bg-slate-200 p-2 rounded-xl" }  hover:text-black text-lg transition-all`} >
              <Link onClick={onItemClick} key={index} href={item.href} >{item.title}</Link>
            </div>
        })}
    </div>
  )
}
