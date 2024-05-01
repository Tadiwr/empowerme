import React from 'react'
import { TreeMenuItem } from '../types/tree_menu_items'
import TreeMenu from './tree-components/tree_menu'

type Props = {
  menuItems : TreeMenuItem[]
}

export default function FixedSideBar({menuItems} : Props) {
  return (
    <div className='p-3 flex justify-start flex-col' >
      <h1 className='font-bold text-3xl' >Topics</h1>
      <TreeMenu menuItems={menuItems} />
    </div>
  )
}
