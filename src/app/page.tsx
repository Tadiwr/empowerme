import ActionCard from "@/lib/components/action_card";
import Image from "next/image";
import { title } from "process";

const services = [
  {
    title : "Forms of abuse",
    desc : `Learn about the different forms of abuse like Sexual, Finacial e.t.c aswell as 
    why the Stockholm Sysndrome is the reason why so many abuse cases aren't reported`,
    href : "/wiki/forms-of-abuse"
    
  },

  {
    title : "What should I do?",
    desc : `Information on what to do if you or a person you know may be facing abuse as sometimes you don't even know what to do or even
    where to start when you face abuse.`,
    href : "/wiki/what-to-do"
  },

  {
    title : "Contacts",
    desc : `If you still have more questions, pressing issues, need imformation on guidance and 
    want to report an abuse case. We have compiled a list of organisations in Zimbabwe we trust to help you`,
    href : "/contacts"
  },

]


export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center" >
      
      {/* Hero section */}
      <div className="bg-black text-white relative md:grid md:grid-cols-2 md:py-20 justify-center w-full" >
        <img src="/images/hero.jpg" alt="" className="z-10 md:z-0 bg-blend-overlay opacity-35 w-full" />

        <div className=" z-30 w-full h-full top-0 right-0 absolute md:relative p-10" >
        <h1 className="text-4xl md:text-7xl font-semibold" >Silence doesn't mean strength</h1>
        
        <p className="mt-5 md:text-3xl" >
          The problems concerning abuse is that some people are afraid of voicing out and reporting as a
          result many abuse cases go unreported. According to the International Development Program
          10 cases of sexual abuse go unreported for every girl who is sexual abused.</p>
        </div>
      </div>

    {/* Brief About Section */}
      <div className="p-10 text-center flex flex-col md:mt-20 justify-center items-center" >
        <h1 className="text-3xl font-bold md:text-5xl mb-3" >Welcome to EmpowerMe</h1>

        {/* Why this website exitst */}
        <p className="md:text-2xl text-center md:px-10 py-5" >Empower Me is the digital project inspired to spread awareness on abuse. Abuse is a <strong>very dark side of society</strong>, that sometimes is put on the carpet and can be tricky to tell at times because people don't always have enough knowledge on abuse. Let then the elders say "<strong>Kusaziva kufa</strong>". Fell free to use our resources. We did some research and compiled some resources for you to learn more about abuse.</p>

      </div>

      {/* Empower Me by Educating me */}
      <div className="p-10 flex md:mt-20 flex-col justify-center items-center text-center" >
        <h1 className="text-3xl md:text-5xl font-bold mb-10" >EmpowerMe by EducatingMe</h1>

        <div className=" w-full md:mt-10 gap-3 grid grid-cols-1 h-full md:grid-cols-3" >
            {services.map((service, index) => {
              return <ActionCard
                key={index}
                href={service.href}
                desc={service.desc}
                title={service.title}
              />
            })}
        </div>
      </div>

    </main>
  );
}
