import React from 'react'
import { TreeMenuItem } from '../types/tree_menu_items'
import TreeMenu from './tree-components/tree_menu'

type Props = {
  menuItems : TreeMenuItem[]
}

export default function FixedSideBar({menuItems} : Props) {
  return (
    <div className=' flex justify-start flex-col p-10' >
      <h1 className='font-bold text-3xl' >Topics</h1>
      <TreeMenu menuItems={menuItems} />
    </div>
  )
}
