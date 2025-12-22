import React from 'react'

const CrewCard = ({crewName , crewDetail , skillName , skillDetail , imgLink , flexRev  }) => {
  return (


        <div className = {`luffy h-fit p-3 md:p-0  md:h-90 w-full md:flex   gap-3 text-white ${flexRev} bg-primary md:bg-transparent rounded-lg  `}>
            
             <div className="img  mb-3 md:mb-0 w-full md:w-1/2 h-full   rounded-lg overflow-hidden">
                
                <img src= {`${imgLink}`} alt="" className='w-full h-full object-cover object-top' />
            </div>
            <div className="info w-full h-full md:w-1/2   rounded-lg overflow-hidden flex flex-col gap-3 ">
                <div className="about bg-tri  p-8 flex flex-col gap-4 h-1/2 rounded-lg">
                    <h1 className='text-2xl font-semibold'>{crewName}</h1>
                    <p className='text-lg '>{crewDetail}</p>
                </div>
                <div className="skill h-1/2 bg-tri p-8 flex flex-col gap-5 rounded-lg">
                    
                    <h2 className='text-2xl font-bold'>{skillName}</h2>
                    <p className='text-lg '>{skillDetail} </p>
                </div>
            </div>


           

        </div>
  )
}

export default CrewCard