import React from 'react';
import { useRef } from 'react';
import { plansData } from './plansData';
import './Plans.css';

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
    <div id='plansComponent' className=" z-22 pb-10 relative flex items-center justify-center flex-col pt-8 bg-[#201F1F] gap-14 ">
      <div className="typesofD z-22 w-[100%] bg-red-700 py-4  flex justify-center items-center">
        <h1  className='text-6xl font-extrabold'>TYPES OF NATURAL DISASTERS</h1>
      </div>
      <div className="plans grid px-4 grid-flow-col gap-6 z-22 py-4 grid-cols-4">
        {plansData.map((plan, index) => (
          <div ref={plan} onMouseEnter={()=>handleDetails('e')} onMouseLeave={()=>handleDetails('l')} className="plan bg-[#3C3A3A]  scale-[0.9]" key={index}>
            <h3 className=" font-bold text-2xl">{plan.name}</h3>
            <p className="plan-description">{plan.description}</p>
          </div>
        ))}
      </div>
      <button  className="load-more-button ">Load More</button>
    </div>
  )
};

export default Plans;
