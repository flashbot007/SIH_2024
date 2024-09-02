import React from 'react'
import { useRef,forwardRef,useState } from 'react'

const About = forwardRef((props, ref)=> {
 
    
  return (
    <div id='aboutComponent' ref={ref} className='h-[100vh] flex justify-center items-center  bg-[#201F1F] w-[100%]'>
        <div className='w-full flex flex-col gap-8'>
        <div className=' text-black meet text-center font-extrabold py-3 text-5xl bg-red-500'>MEET THE TEAM</div>
      <div className='  h-[100%] w-full grid grid-flow-col grid-cols-6 px-5 justify-center items-center gap-8'>
        <div className='bg-[#3c3a3a] meetCards rounded-xl text-white  py-4 flex flex-col justify-center items-center gap-3'>
            <img className=' h-52 w-52 object-cover rounded-full' src="/profilePic/dp2.jpg" alt="" />
            <span className='font-bold text-lg'>PARTH AGARWAL</span>
            <p className='text-base mt-[-6px]'> <span className='!text-[#95c11e]'>&lt;</span>Android Developer<span className='!text-[#95c11e]'>&gt;</span></p>
        </div>
        <div className='bg-[#3c3a3a] meetCards rounded-xl text-white  py-4 flex flex-col justify-center items-center gap-3'>
            <img className=' dp-2 h-52 w-52 object-cover rounded-full ' src="/profilePic/dp-4.jpg" alt="" />
            <span className='font-bold text-lg'>VAISHNAVI SINGH</span>
            <p className='text-base mt-[-6px]'> <span className='!text-[#95c11e]'>&lt;</span>AR/VR Developer <span className='!text-[#95c11e]'>&gt;</span></p>
        </div>
        <div className='bg-[#3c3a3a] meetCards rounded-xl text-white  py-4 flex flex-col justify-center items-center gap-3'>
            <img style={{objectPosition:'20% 30%', zoom:'100%'}} className=' h-52 w-52 object-cover rounded-full' src="/profilePic/dp1.jpg" alt="" />
            <span className='font-bold text-lg'>AYUSH GUPTA</span>
            <p className='text-base mt-[-6px]'> <span className='!text-[#95c11e]'>&lt;</span>Full Stack Web Developer <span className='!text-[#95c11e]'>&gt;</span></p>
        </div>
        <div className='bg-[#3c3a3a] meetCards rounded-xl text-white  py-4 flex flex-col justify-center items-center gap-3'>
            <img className=' h-52 w-52 object-cover rounded-full' src="/profilePic/dp3.jpg" alt="" />
            <span className='font-bold text-lg'>ADITYA BISWARI GUPTA</span>
            <p className='text-base mt-[-6px]'> <span className='!text-[#95c11e]'>&lt;</span>Android Developer <span className='!text-[#95c11e]'>&gt;</span></p>
        </div>
        <div className='bg-[#3c3a3a] meetCards rounded-xl text-white  py-4 flex flex-col justify-center items-center gap-3'>
            <img className=' h-52 w-52 object-cover rounded-full object-' src="/profilePic/dp-6.jpg" alt="" />
            <span className='font-bold text-lg'>AISHWARYA TEWARI</span>
            <p className='text-base mt-[-6px]'> <span className='!text-[#95c11e]'>&lt;</span>Full Stack Web Developer <span className='!text-[#95c11e]'>&gt;</span></p>
        </div>
        <div className='bg-[#3c3a3a] meetCards rounded-xl text-white  py-4 flex flex-col justify-center items-center gap-3'>
            <img className=' h-52 w-52 object-cover rotate-[-26deg] rounded-full' src="/profilePic/dp-5.jpg" alt="" />
            <span className='font-bold text-lg'>AYUSH SINGH</span>
            <p className='text-base mt-[-6px]'> <span className='!text-[#95c11e]'>&lt;</span>AI/ML Developer <span className='!text-[#95c11e]'>&gt;</span></p>
        </div>
       
        
      </div>
      </div>

    </div>
  )
})

export default About
