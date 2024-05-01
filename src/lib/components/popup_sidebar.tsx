"use client";

import React from 'react'
import { TreeMenuItem } from '../types/tree_menu_items';
import TreeMenu from './tree-components/tree_menu';

type Props = {
  menuItems : TreeMenuItem[]
}

export default function PopUpSideBar({menuItems} : Props) {

  const [show, setShow] = React.useState(false);

  const toogleModal = () => {
    setShow(!show);
  }

  return (
    <div className='p-3 border  border-slate-200' >

      <div onClick={toogleModal} className=' font-semibold hover:font-bold cursor-pointer' >
        {show ? "Hide Topics" : "Show Topics"}
      </div>

      <div className={`${show ? "flex" : "hidden"} w-full top-0 left-0 h-screen pt-5`} >
        <TreeMenu menuItems={menuItems} />
      </div>

    </div>
  )
}
