"use client";

import { TreeMenuItem } from '@/lib/types/tree_menu_items'
import Link from 'next/link'
import React from 'react'

type Props = {
    menuItems : TreeMenuItem[],
    onItemClick? : () => void,
}

export default function TreeMenu({menuItems, onItemClick = () => {}} : Props) {


  return (
    <div className='transition-all' >
        {menuItems.map((item, index) => {
            return <div className='mt-3 font-semibold text-slate-500 hover:text-lg' >
              <Link onClick={onItemClick} key={index} href={item.href} >{item.title}</Link>
            </div>
        })}
    </div>
  )
}
