import React from 'react'
import About from './About'
import { useEffect } from 'react'

const Navbar = ({scrollToAbout}) => {

  useEffect(() => {
   
    let cursor = document.querySelector("#moveWithCursor");
    let circles = document.querySelectorAll("#changeSlides > div")

    circles.forEach((circle)=>{
      circle.addEventListener("mouseenter",()=>{
        cursor.style.scale = "1.25"
        cursor.style.backgroundColor = "transparent"
        cursor.style.border = "1px solid white"
      })
  
      circle.addEventListener("mouseleave",()=>{
        cursor.style.scale ="1"
         cursor.style.backgroundColor = "#9BC91F"
        cursor.style.border = "none"
      })
    })
  document.querySelectorAll("li").forEach((a)=>{
    
    a.addEventListener("mouseenter",()=>{
      cursor.style.scale = "2"
      cursor.style.backgroundColor = "transparent"
      cursor.style.border = "1px solid white"
    })

    a.addEventListener("mouseleave",()=>{
      cursor.style.scale ="1"
       cursor.style.backgroundColor = "#9BC91F"
      cursor.style.border = "none"
    })
  })

   
  }, [])
  
  
  return ( 
   <>
   <nav className='fixed z-30 flex  w-[100%] p-4'>
    <div className="relative site-name text-[rgb(254,218,218)] font-extrabold uppercase z-20 text-4xl w-fit">Crisis Friend</div>
    <div className="absolute site-name text-black z-10 font-extrabold left-[9px] top-[14px] uppercase text-4xl w-fit">Crisis <br/> Friend</div>
    <ul className='flex justify-center items-center pr-14 gap-12  w-[100%]  text-white font-bold '>
        <li className='hover:cursor-none'>Home</li>
        <li className='hover:cursor-none' onClick={scrollToAbout}>About Us</li>
        <li className='hover:cursor-none'>Contact</li>
        <li className='hover:cursor-none'>Types</li>
        <li className='hover:cursor-none'>Try</li>
    </ul>
    </nav>
   
   </>
  )
}

export default Navbar
