import React from 'react'

type Props = {
    authorName : string,
    authorTitle? : string, 
    children : string
}

/** A card component that displays an author and the authors info and takes the testimony itself as a component */
export default function TestimonialCard({
    authorName,
    authorTitle = "",
    children
}: Props) {

  return (
    <div className='w-full p-10 border rounded-xl'>
        <p className='text-slate-600 mb-5' >{children}</p>
        <p className='font-bold text-xl' >{authorName}</p>
        <p className='font-semibold text-slate-400' >{authorTitle}</p>
    </div>
  );

}
