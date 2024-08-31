import React from "react";
import Navbar from "./Navbar";
import {useEffect, useRef, useState } from "react";
import About from "./About";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home = ({aboutRef}) => {
  
    const cursor = useRef()
    const imgChange = useRef();
  const [currentimage, setcurrentimage] = useState("/wildfire001.jpg");
  const [transition, settransition] = useState(false);
  const changeImage = (newImage) => {
    if(newImage != currentimage)
    settransition(true);

    
    setTimeout(() => {
      setcurrentimage(newImage);
      settransition(false);
    }, 500);

  };

  useEffect(() => {

    
    
    

    const handleMouse = (event)=>{
        const {clientX, clientY} = event;

        cursor.current.style.transition = 'top 0.1s ease, left 0.1s ease'
        cursor.current.style.top = `${clientY - 15}px`
        cursor.current.style.left = `${clientX - 15}px`
        
    }
    document.body.addEventListener("mousemove",handleMouse)

    gsap.fromTo(".heading",
      { y: 200, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 2, delay: 0.5 }
    );

    return ()=>{
        document.body.removeEventListener("mousemove",handleMouse)
    }
  }, [])
  
  

  return (
    <div id="main" className="relative w-[100%]">
    <div ref={cursor} id="moveWithCursor" className='transition-all duration-700 ease-in-out fixed cursor-default pointer-events-none h-[30px] w-[30px] bg-[#9BC91F] rounded-full z-20 top-0 left-0'></div>
     <div className="relative bg-[url('/ndisaster.webp')] bg-cover flex  overflow-hidden h-[100vh] w-[100%]">
        <img
          ref={imgChange}
          className={` transition-transform duration-250 ease-in-out object-fit h-[100%] w-[100%] ${
            transition ? " translate-x-[100%]" : "translate-x-[0]"
          }`}
          src={currentimage}
          alt=""
        />

        <h1 id="mainHeading" className="text-center opacity-1 translate-y-0  text-white w-[100%] absolute top-[30%] font-extrabold text-8xl z-10 heading">LET US SAVE LIVES</h1>
       

        <div id="changeSlides" className="absolute  h-[100px] w-[200px] z-30 arrow left-9 bottom-10 flex justify-center items-center gap-3">
          <div
            onClick={() => changeImage("/wildfire001.jpg")}
            className="z-25 hover:h-4 hover:w-4 hover:bg-sky-500 transition-all duration-100 ease-in-out circle h-5 w-5 rounded-full bg-white"
          ></div>
          <div
            onClick={() => changeImage("/2.jpg")}
           className="z-25 hover:h-4 hover:w-4 hover:bg-sky-500 transition-all duration-100 ease-in-out circle h-5 w-5 rounded-full bg-white"
          ></div>
          <div
            onClick={() => changeImage("/3.jpg")}
            className="z-25 hover:h-4 hover:w-4 hover:bg-sky-500 transition-all duration-100 ease-in-out circle h-5 w-5 rounded-full bg-white"
          ></div>
          <div
            onClick={() => changeImage("4.jpg")}
           className="z-25 hover:h-4 hover:w-4 hover:bg-sky-500 transition-all duration-100 ease-in-out circle h-5 w-5 rounded-full bg-white"
          ></div>
        </div>
      </div>
      <About ref={aboutRef} />
    </div>
  );
};

export default Home;