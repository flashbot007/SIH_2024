import React from 'react'
import About from './About'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import '.././i18n.js'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Navbar = ({scrollToAbout}) => {
  const changee = useRef()
  const { t,i18n } = useTranslation();

  const changeLanguage = (lng) => {
   
    i18n.changeLanguage(lng);
  };

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

  gsap.to(".navbar",{
    backgroundColor:'black',
    scrollTrigger:{
      trigger:'.navbar',
      scroller:"body",
      markers:false,
      start:"top -30%",
      end:"bottom 50%",
      scrub:1
      
    }
  })
   
  }, [])
  
  
  return ( 
   <>
   <nav ref={changee} className='fixed navbar z-30 flex items-center  w-[100%] p-4'>
    <div className="relative site-name text-[rgb(254,218,218)] font-extrabold uppercase z-20 text-4xl w-fit">Crisis Friend</div>
    <div className="absolute site-name text-black z-10 font-extrabold left-[9px] top-[14px] uppercase text-4xl w-fit">Crisis <br/> Friend</div>
    <ul className='flex justify-center items-center pr-14 gap-12  w-[100%]  text-white font-bold '>
        <li className='hover:cursor-none'>Home</li>
        <li className='hover:cursor-none' onClick={scrollToAbout}>About Us</li>
        <li className='hover:cursor-none'>Contact</li>
        <li className='hover:cursor-none'>Types</li>
        <li className='hover:cursor-none'>Try</li>
    </ul>
    <div onClick={()=> changeLanguage('hi')} className='cursor-pointer w-52 border p-[2px] bg-[rgb(38,37,37)] h-fit flex items-center justify-center text-white font-bold'>
      Change Language -
    </div>
    

    </nav>
   
   </>
  )
}

export default Navbar
