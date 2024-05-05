import TestimonialCard from '@/lib/components/cards/testimonial_card'
import React from 'react'

export default function AboutPage() {
  return (
    <div className='flex w-full p-10 flex-col justify-center items-center' >
        <h1 className='md:text-6xl text-4xl font-bold my-10 text-center' >Inspiration for EmpowerMe</h1>

        <div className='md:grid-cols-2 w-full gap-5 grid grid-cols-1' >

            <TestimonialCard authorName='Kudakwashe Jonga' authorTitle='Developer' >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ut quia consequuntur ea sit asperiores sint, nobis reiciendis eum totam eius, dolores numquam corporis quo repellendus eligendi nemo tempore. Impedit.
            </TestimonialCard>

            <TestimonialCard authorName='Mazvita Sigauke' authorTitle='Developer' >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ut quia consequuntur ea sit asperiores sint, nobis reiciendis eum totam eius, dolores numquam corporis quo repellendus eligendi nemo tempore. Impedit.
            </TestimonialCard>

            <TestimonialCard authorName='Tadiwanashe Shangwa' authorTitle='Developer' >
                I wanted to put my amatuer coding skills to good use by building something that will benefit the community. I haven't faced abuse myself but I know there are many people who do face abuse in the dark and in silence. EmpowerMe presented an opportunity to help these people abuse in silence to be able to find more awareness on what to do and who to call! 
            </TestimonialCard>

        </div>

    </div>
  )
}
