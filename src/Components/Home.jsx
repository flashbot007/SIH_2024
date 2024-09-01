import React from "react";
import Navbar from "./Navbar";
import {useEffect, useRef, useState } from "react";
import About from "./About";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Try from "./Try";
gsap.registerPlugin(ScrollTrigger);

const Home = ({aboutRef}) => {
  const [playState, setPlayState] = useState(false)
  const [first, setfirst] = useState(true)
  const [count, setcount] = useState(0)
  const [backgroundImg, setbackgroundImg] = useState(['/disasterBg/disaster1.webp' , '/disasterBg/disaster2.jpeg' , '/disasterBg/disaster3.avif' , '/disasterBg/disaster4.jpeg'])
  
    const cursor = useRef()
    const imgChange = useRef();
    const bgImg = useRef();
    

  const [currentimage, setcurrentimage] = useState("/wildfire001.jpg");
  const [transition, settransition] = useState(false);
  const changeImage = (newImage , val) => {
   
    let homeHeading = document.querySelector("#mainHeading")

    
      setcount(prevCount => {
        let newCount = prevCount;
    
        // Update count based on boundary conditions
        if (newCount > 3) {
          newCount = 0;
        }

        //Update heading
        if(val == 0){
          homeHeading.innerHTML = "LET US SAVE LIVES"
          homeHeading.style.setProperty('--before-content','"LET US SAVE LIVES"')

        }
        else if(val == 1){
          homeHeading.innerHTML = "When waters rise, our mission is to lift lives to safety."
          homeHeading.style.setProperty('--before-content','"When waters rise, our mission is to lift lives to safety."')
        }
        else if(val == 2){
          homeHeading.innerHTML = "In the aftermath of the quake, we rebuild lives and restore hope."
          homeHeading.style.setProperty('--before-content','"In the aftermath of the quake, we rebuild lives and restore hope."')

        }
        else{
          homeHeading.innerHTML = "Together, we move mountains to restore what was lost."
          homeHeading.style.setProperty('--before-content','"Together, we move mountains to restore what was lost."')


        }
    
        // Update background image
        if (bgImg.current) {
          bgImg.current.style.backgroundImage = `url('${backgroundImg[newCount]}')`;
        }
    
        console.log(newCount);
        console.log(backgroundImg);
    
        // Trigger transition if needed
        if (newImage !== currentimage) {
          settransition(true);
          setTimeout(() => {
            setcurrentimage(newImage);
            settransition(false);
          }, 500);
        }
    
        return newCount + 1; // Increment count after boundary check
      });
  
    

   

  };

  useEffect(() => {

    
    

    const handleMouse = (event)=>{
      
        const {clientX, clientY} = event;

        // cursor.current.style.transition = 'top 0.1s ease-in-out, left 0.1s ease-in-out'
        cursor.current.style.top = `${clientY - 15}px`
        cursor.current.style.left = `${clientX - 15}px`
        let playBtn = document.querySelector(".playBtn");
       playBtn.style.top = `${clientY - 40}px`
        playBtn.style.left = `${clientX - 40}px`
        
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
    <div id="main" className="relative flex flex-col  w-[100%]">
    <div ref={cursor} id="moveWithCursor" className='fixed cursor-default pointer-events-none h-[30px] w-[30px] bg-[#9BC91F] rounded-full z-20 top-0 left-0'></div>
     <div ref={bgImg} className="relative bg-[url('/disasterBg/disaster1.webp')] bg-cover flex  overflow-hidden h-[100vh] w-[100%]">
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
            onClick={() => changeImage("/wildfire001.jpg",0)}
            className="z-25 hover:h-4 hover:w-4 hover:bg-sky-500 transition-all duration-100 ease-in-out circle h-5 w-5 rounded-full bg-white"
          ></div>
          <div
            onClick={() => changeImage("/2.jpeg",1)}
           className="z-25 hover:h-4 hover:w-4 hover:bg-sky-500 transition-all duration-100 ease-in-out circle h-5 w-5 rounded-full bg-white"
          ></div>
          <div
            onClick={() => changeImage("/3.jpg",2)}
            className="z-25 hover:h-4 hover:w-4 hover:bg-sky-500 transition-all duration-100 ease-in-out circle h-5 w-5 rounded-full bg-white"
          ></div>
          <div
            onClick={() => changeImage("4.webp",3)}
           className="z-25 hover:h-4 hover:w-4 hover:bg-sky-500 transition-all duration-100 ease-in-out circle h-5 w-5 rounded-full bg-white"
          ></div>
        </div>
      </div>
    
      <div className="breakline  bg-red-700  h-[2px] w-[100%] "></div>
      <Try/>
      <div className="breakline  bg-red-700 h-[2px] w-[100%]"></div>
      <About ref={aboutRef} first={first} />
    </div>
  );
};

export default Home;
