import React from 'react'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import '.././i18n.js'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Navbar = ({scrollToAbout}) => {
  const changee = useRef()
  const theme = useRef()
  const { t,i18n } = useTranslation();

  const changeLanguage = (lng) => {
   
    i18n.changeLanguage(lng);
  };

  const changeTheme = ()=>{
    let tryComp = document.querySelector("#tryComponent")
    let aboutComp = document.querySelector("#aboutComponent")
    if(theme.current.innerHTML === "Light Mode"){
      theme.current.style.backgroundColor = "#201F1F"
      tryComp.style.backgroundColor = "white"
      tryComp.style.color = "black"
      document.querySelector(".playBtn").style.color = "white"
      document.querySelector(".tryNow").style.backgroundColor = "#1A1A1A"
      document.querySelector(".tryNow").style.color = "#black"
      aboutComp.style.backgroundColor = "white"
      document.querySelector(".meet").style.backgroundColor = "#DC2626"
      document.querySelectorAll(".meetCards").forEach((item)=>{
        item.style.backgroundColor = "#1F1F1F"
      })
      theme.current.innerHTML = "Dark Mode"
    }
    else if(theme.current.innerHTML === "Dark Mode"){
      theme.current.style.backgroundColor = "#2b2b2b"
      tryComp.style.backgroundColor = "#201F1F"
      tryComp.style.color = "white"
      document.querySelector(".tryNow").style.backgroundColor = "black"
      document.querySelector(".tryNow").style.color = "white"
      aboutComp.style.backgroundColor = "#201F1F"
      document.querySelector(".meet").style.backgroundColor = "#EF4444"
      document.querySelectorAll(".meetCards").forEach((item)=>{
        item.style.backgroundColor = "#3C3A3A"
      })
       theme.current.innerHTML = "Light Mode"
    }
  }

  const handleLogo = (value)=>{
    let cursor = document.querySelector("#moveWithCursor");
    if(value === 'e')
      cursor.style.opacity = '0';
    else
    cursor.style.opacity = '1'; 

  }

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
    zIndex:19,
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
   <nav ref={changee} className='fixed navbar z-30 flex items-center h-[20vh]  w-[100%] p-4'>
    <div onMouseEnter={()=>handleLogo('e')} onMouseLeave={()=>handleLogo('l')} className="siteNameLogo h-[20vh] ">
      <img className='w-full scale-[1.6] logoImg h-full object-contain'  src="/weblogo.png" alt="" />
    </div>
    {/* <div className="relative site-name text-[rgb(254,218,218)] font-extrabold uppercase z-20 text-4xl w-fit">Crisis Friend</div> */}
    {/* <div className="absolute site-name text-black z-10 font-extrabold left-[9px] top-[14px] uppercase text-4xl w-fit">Crisis <br/> Friend</div> */}
    <ul className='flex justify-center items-center pr-10 gap-12  w-[100%]  text-white font-bold '>
        <li className='hover:cursor-none hover:text-[#95c11e]'>Home</li>
        <li className='hover:cursor-none hover:text-[#95c11e]' onClick={scrollToAbout}>About Us</li>
        <li className='hover:cursor-none hover:text-[#95c11e]'>Contact</li>
        <li className='hover:cursor-none hover:text-[#95c11e]'>Types</li>
        <li className='hover:cursor-none hover:text-[#95c11e]'>Try</li>
    </ul>
    <div ref={theme} onClick={changeTheme} className='cursor-pointer rounded-xl w-52 border p-[2px] bg-[rgb(38,37,37)] h-fit flex items-center justify-center text-white font-bold'>
      Light Mode 
    </div>
    

    </nav>
   
   </>
  )
}

export default Navbar
