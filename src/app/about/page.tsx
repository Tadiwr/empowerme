import TestimonialCard from '@/lib/components/cards/testimonial_card'
import React from 'react'

export default function AboutPage() {
  return (
    <div className='flex w-full p-10 flex-col justify-center items-center' >
        <h1 className='md:text-6xl text-4xl font-bold my-10 text-center' >Inspiration for EmpowerMe</h1>

        <div className='md:grid-cols-2 w-full gap-5 grid grid-cols-1' >

            <TestimonialCard authorName='Kudakwashe Jonga' authorTitle='Developer' >
            Firstly I can't really choose to say what really motivated me  to want to raise awareness on abuse. I can't say if it was growing up  in a setup whereby  cases of abuse were  common or was it my urge to make a difference in someone's or some people's lives or was it the increasing cases of abuse all around the globe or was it that the more that I grew the  better a view  I got of the other side of the world and getting multiple chances to be at the forefront of helping the disadvantaged. In short all of it contributed. The moment I entered the other side of the world I set it to myself to help others whenever I got the chance and helping create this website came as my chance and a  start to a continuous line of help and also a chance to tackle one of the most disturbing issues in today's world so that we could be able to help that one person whose out there who doesn't know what to do, where to go and how to pull through.
            </TestimonialCard>

            <TestimonialCard authorName='Mazvita Sigauke' authorTitle='Developer' >
            Growing up I just loved the idea of helping people out. I just always felt helpless whenever I saw people in need of help yet I had no way whatsoever of offering my assistance. When I was in form 1, someone close to me was assaulted indecently by a relative. She spoke out about the issue and it’s safe to say she would have ended up in a worser case if she didn’t speak out. Her courage and story not only inspired me but made me want to help girls in similar and worser situations. Making this website that educates people about abuse,provides information too and who to go to,to seek for for assistance or guidance.
            </TestimonialCard>

            <TestimonialCard authorName='Tadiwanashe Shangwa' authorTitle='Developer' >
                I wanted to put my amatuer coding skills to good use by building something that will benefit the community. I haven't faced abuse myself but I know there are many people who do face abuse in the dark and in silence. EmpowerMe presented an opportunity to help these people abuse in silence to be able to find more awareness on what to do and who to call! 
            </TestimonialCard>

        </div>

    </div>
  )
}
