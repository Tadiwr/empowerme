import React from 'react'

type Props = {
    children : React.ReactNode
}

export default function SourcesContainer({children} : Props) {
  return (
    <div className='sources w-full p-4 bg-slate-200 rounded-xl my-5' >
        {"Sources: "}{children}
    </div>
  )
}
