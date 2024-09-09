import React from 'react'
import { useRef,forwardRef,useState } from 'react'

const About = forwardRef((props, ref)=> {
 
    
  return (
    <div id='aboutComponent' ref={ref} className=' pt-36 pb-7 flex justify-center items-center  bg-[#201F1F] w-[100%]'>
        <div className='w-full flex flex-col gap-8'>
        <div className=' text-black meet text-center font-extrabold py-3 text-5xl bg-red-500'>MEET THE TEAM</div>
      <div className='  h-[100%] w-full grid grid-flow-col grid-cols-6 px-5 justify-center items-center gap-8'>
        <div className='bg-[#3c3a3a] meetCards rounded-xl text-white  py-4 flex flex-col justify-center items-center gap-3'>
            <img className=' h-52 w-52 object-cover rounded-full' src="/insertimg.png" alt="" />
            <span className='font-bold text-lg'>Flash</span>
            <p className='text-base mt-[-6px]'> <span className='!text-[#95c11e]'>&lt;</span>AR/VR , Android Developer<span className='!text-[#95c11e]'>&gt;</span></p>
        </div>
        <div className='bg-[#3c3a3a] meetCards rounded-xl text-white  py-4 flex flex-col justify-center items-center gap-3'>
            <img className=' dp-2 h-52 w-52 object-cover rounded-full ' src="/insertimg.png" alt="" />
            <span className='font-bold text-lg'>Superman</span>
            <p className='text-base mt-[-6px]'> <span className='!text-[#95c11e]'>&lt;</span>AR/VR Developer <span className='!text-[#95c11e]'>&gt;</span></p>
        </div>
        <div className='bg-[#3c3a3a] meetCards rounded-xl text-white  py-4 flex flex-col justify-center items-center gap-3'>
            <img style={{objectPosition:'20% 30%', zoom:'100%'}} className=' h-52 w-52 object-cover rounded-full' src="/insertimg.png" alt="" />
            <span className='font-bold text-lg'>Batman</span>
            <p className='text-base mt-[-6px]'> <span className='!text-[#95c11e]'>&lt;</span>Web Developer <span className='!text-[#95c11e]'>&gt;</span></p>
        </div>
        <div className='bg-[#3c3a3a] meetCards rounded-xl text-white  py-4 flex flex-col justify-center items-center gap-3'>
            <img className=' h-52 w-52 object-cover rounded-full' src="/insertimg.png" alt="" />
            <span className='font-bold text-lg'>Spiderman</span>
            <p className='text-base mt-[-6px]'> <span className='!text-[#95c11e]'>&lt;</span>Android Developer <span className='!text-[#95c11e]'>&gt;</span></p>
        </div>
        <div className='bg-[#3c3a3a] meetCards rounded-xl text-white  py-4 flex flex-col justify-center items-center gap-3'>
            <img className=' h-52 w-52 object-cover rounded-full object-'src="/insertimg.png"" alt="" />
            <span className='font-bold text-lg'>Ninja</span>
            <p className='text-base mt-[-6px]'> <span className='!text-[#95c11e]'>&lt;</span>Web Developer <span className='!text-[#95c11e]'>&gt;</span></p>
        </div>
        <div className='bg-[#3c3a3a] meetCards rounded-xl text-white  py-4 flex flex-col justify-center items-center gap-3'>
            <img className=' h-52 w-52 object-cover rotate-[-26deg] rounded-full' src="/insertimg.png" alt="" />
            <span className='font-bold text-lg'>Aquaman</span>
            <p className='text-base mt-[-6px]'> <span className='!text-[#95c11e]'>&lt;</span>ML Developer <span className='!text-[#95c11e]'>&gt;</span></p>
        </div>
       
        
      </div>
      </div>

    </div>
  )
})

export default About
