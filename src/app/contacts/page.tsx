import ContactCard from '@/lib/components/cards/contact_card'
import { contacts } from '@/lib/constants/contacts';
import React from 'react';



export default function ContactsPage() {
  return (
    <div className='p-10 flex flex-col justify-center items-center' >
        <h1 className='text-3xl md:text-6xl font-bold mb-5' >Contacts</h1>
        <p className='md:text-lg md:w-3/4 text-center' >We have compiled a list of groups and organisations that we believe can help answer any questions you might have, provide guidance and also allow you to report</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-10' >

            {contacts.map((contact, index) => {
                return <ContactCard key={index} contact={contact} />
            })}

        </div>

    </div>
  )
}
