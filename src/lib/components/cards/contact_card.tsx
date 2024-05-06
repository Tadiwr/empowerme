import React from 'react'

export type Contact = {
    name : string,
    whatsApp: string,
    suitibility : string
    links : {title: string, href: string}[]
}

type Props = {
    contact : Contact
}


export default function ContactCard({contact} : Props) {
  return (
    <div className='grid grid-cols-1 gap-3 p-5 border rounded-xl'>

        <h1 className='font-bold text-xl' >{contact.name}</h1>
        <p className="text-slate-400 p-2 border rounded-xl bg-slate-50 border-slate-200">{contact.suitibility}</p>


        <p>{contact.whatsApp && `Whats App ${contact.whatsApp}`}</p>

        {contact.links.map((link, index) => {
            return <a  className='text-blue-400 hover:text-blue-700 hover:font-semibold transition-all' key={index} href={link.href}>{link.title}</a>
        })}


    </div>

  )
}
