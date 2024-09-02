import React from 'react';
import { useRef } from 'react';
import { plansData } from './plansData';
// import './Plans.css';

const Plans = ({cursor}) => {

  const plan = useRef()

  const handleDetails = (value)=>{

      if (value === 'e') {
        cursor.current.style.opacity = "0"
       
        
      } else if (value === 'l') {
         cursor.current.style.opacity = "1"
        
      }
    
  }

  return ( 
    <div id='plansComponent' className=" z-22 pb-10 relative flex items-center justify-center flex-col pt-8 w-[100%] bg-[#201F1F] gap-14 ">
      <div className="typesofD z-22 w-[100%] bg-red-700 py-4  flex justify-center items-center">
        <h1  className='text-6xl font-extrabold'>TYPES OF NATURAL DISASTERS</h1>
      </div> 
      <div className="plans grid grid-flow-col w-[100%] gap-6 z-22 pt-4 grid-cols-4 items-center justify-center">
        {plansData.map((plan, index) => (
          <div ref={plan} onMouseEnter={()=>handleDetails('e')} onMouseLeave={()=>handleDetails('l')} className="plan bg-[#3C3A3A] h-[100%] w-[95%] flex flex-col hover:scale-[1.2]  hover:bg-[rgb(238,104,14)]  scale-[0.9]" key={index}>
            <h3 className=" font-bold text-4xl">{plan.name}</h3>
            <p className="plan-description">{plan.description}</p>
          </div>
        ))}
      </div>
      <button style={{}}  className="load-more-button transition-colors duration-150 ease-in-out z-[2] font-bold   bg-white border-[3px] hover:bg-black hover:text-white cursor-pointer py-1 px-4 rounded-xl text-xl border-[rgb(255,165,0)] text-[rgb(255,165,0)  ]">Load More</button>
    </div>
  )
};

export default Plans;
