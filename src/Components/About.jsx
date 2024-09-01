import React from 'react'
import { useRef,forwardRef,useState } from 'react'

const About = forwardRef((props, ref)=> {
 
    
  return (
    <div ref={ref} className='h-[100vh] flex justify-center items-center  bg-[#201F1F] w-[100%]'>
        <div className='w-full flex flex-col gap-4'>
        <div className=' text-black text-center font-extrabold text-5xl bg-red-500'>MEET THE TEAM</div>
      <div className='h-[100%] w-full grid grid-flow-col grid-cols-5 px-5 justify-center items-center gap-8'>
        <div className='bg-[#3c3a3a] rounded-xl text-white  py-4 flex flex-col justify-center items-center gap-3'>
            <img className=' h-52 w-52 object-cover rounded-full' src="/insertimg.png" alt="" />
            <span className='font-bold text-lg'>AISHWARYA RANDI</span>
            <p className='text-base mt-[-6px]'> <span className='text-[#95c11e]'>&lt;</span>Full Stack Web Developer <span className='text-[#95c11e]'>&gt;</span></p>
        </div>
        <div className='bg-[#3c3a3a] rounded-xl text-white  py-4 flex flex-col justify-center items-center gap-3'>
            <img className=' h-52 w-52 object-cover rounded-full' src="/insertimg.png" alt="" />
            <span className='font-bold text-lg'>AISHWARYA RANDI</span>
            <p className='text-base mt-[-6px]'> <span className='text-[#95c11e]'>&lt;</span>Full Stack Web Developer <span className='text-[#95c11e]'>&gt;</span></p>
        </div>
        <div className='bg-[#3c3a3a] rounded-xl text-white  py-4 flex flex-col justify-center items-center gap-3'>
            <img className=' h-52 w-52 object-cover rounded-full' src="/insertimg.png" alt="" />
            <span className='font-bold text-lg'>AISHWARYA RANDI</span>
            <p className='text-base mt-[-6px]'> <span className='text-[#95c11e]'>&lt;</span>Full Stack Web Developer <span className='text-[#95c11e]'>&gt;</span></p>
        </div>
        <div className='bg-[#3c3a3a] rounded-xl text-white  py-4 flex flex-col justify-center items-center gap-3'>
            <img className=' h-52 w-52 object-cover rounded-full' src="/insertimg.png" alt="" />
            <span className='font-bold text-lg'>AISHWARYA RANDI</span>
            <p className='text-base mt-[-6px]'> <span className='text-[#95c11e]'>&lt;</span>Full Stack Web Developer <span className='text-[#95c11e]'>&gt;</span></p>
        </div>
        <div className='bg-[#3c3a3a] rounded-xl text-white  py-4 flex flex-col justify-center items-center gap-3'>
            <img className=' h-52 w-52 object-cover rounded-full' src="/insertimg.png" alt="" />
            <span className='font-bold text-lg'>AISHWARYA RANDI</span>
            <p className='text-base mt-[-6px]'> <span className='text-[#95c11e]'>&lt;</span>Full Stack Web Developer <span className='text-[#95c11e]'>&gt;</span></p>
        </div>
       
        
      </div>
      </div>

    </div>
  )
})

export default About
