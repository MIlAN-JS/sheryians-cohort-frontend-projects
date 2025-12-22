import { BsArrowUpRightCircleFill } from "react-icons/bs";


const SkillCard = ({title , detail}) => {
  return (
    <section className='text-white  h-fit w-full mx-auto flex flex-col gap-4 mb-5 '>

        <div className="skill w-full bg-tri p-8 flex flex-col gap-3 rounded-lg">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-[0.8rem] mb-2 w-full line-clamp-2 hover:line-clamp-none cursor-pointer">{detail}</p>

            <button className="flex items-center gap-2 text-sm uppercase">
               <i className="text-xl    border-white border-1 rounded-full"><BsArrowUpRightCircleFill /></i>
                Learn More
            </button>
        </div>
       
        
    </section>
  )
}

export default SkillCard