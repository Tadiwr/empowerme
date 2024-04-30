import ActionCard from "@/lib/components/action_card";
import { title } from "process";

const services : {title : string, desc : string}[] = [
  {
    title : "Forms of abuse",
    desc : `Learn about the different forms of abuse like Sexual, Finacial e.t.c aswell as 
    why the Stockholm Sysndrome is the reason why so many abuse cases aren't reported`
  },

  {
    title : "What should I do?",
    desc : `Information on what to do if you or a person you know may be facing abuse as sometimes you don't even know what to do or even
    where to start when you face abuse.`
  },

  {
    title : "Contacts",
    desc : `If you still have more questions, pressing issues, need imformation on guidance and 
    want to report an abuse case. We have compiled a list of organisations in Zimbabwe we trust to help you`
  },

]


export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center" >
      
      {/* Hero section */}
      <div className="bg-black text-white grid md:grid-cols-2 grid-cols-1 p-10 gap-5 md:py-20 justify-center items-center " >
        <h1 className="text-4xl md:text-7xl font-semibold" >Silence doesn't mean strength</h1>
        <p className="" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis doloribus nisi veniam numquam impedit voluptatem mollitia nam facilis molestias eveniet, labore, hic ipsum. Quidem perferendis perspiciatis iure magnam deserunt ut!</p>
      </div>

    {/* Brief About Section */}
      <div className="p-10 text-center flex flex-col md:mt-20 justify-center items-center" >
        <h1 className="text-3xl font-bold md:text-5xl mb-3" >Welcome to EmpowerMe</h1>

        {/* Why this website exitst */}
        <p className="md:text-2xl text-center md:px-10 py-5" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nemo unde magnam ducimus, ea consequatur, laboriosam tempore eligendi delectus possimus quia culpa, hic atque dicta at vitae officia inventore quidem.</p>

      </div>

      {/* Empower Me by Educating me */}
      <div className="p-10 flex md:mt-20 flex-col justify-center items-center text-center" >
        <h1 className="text-3xl md:text-5xl font-bold mb-10" >EmpowerMe by EducatingMe</h1>

        <div className=" w-full md:mt-10 gap-3 grid grid-cols-1 h-full md:grid-cols-3" >
            {services.map((service, index) => {
              return <ActionCard
                key={index}
                href={""}
                desc={service.desc}
                title={service.title}
              />
            })}
        </div>
      </div>

    </main>
  );
}
