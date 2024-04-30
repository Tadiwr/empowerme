"use client";

import React from 'react'

export default function PopUpSideBar() {

  const [show, setShow] = React.useState(true);

  const toogleModal = () => {
    setShow(!show);
  }

  return (
    <div className='p-3 border  border-slate-200' >

      <div onClick={toogleModal} className=' font-semibold hover:font-bold cursor-pointer' >
        {show ? "Hide Topics" : "Show Topics"}
      </div>

      <div className={`${show ? "flex" : "hidden"} w-full top-0 left-0 h-screen pt-5`} >
        <p>Topic Area</p>
      </div>

    </div>
  )
}
