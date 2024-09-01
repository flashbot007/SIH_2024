import React from "react";
import { useRef, useEffect, useState, forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Try = () => {
  const [scaleState, setscaleState] = useState(false);
  const video = useRef();
  const hideContainer = useRef();
  const cross = useRef();
  const play = useRef();

  const handlePlayEnter = () => {
      document.querySelector("#moveWithCursor").style.opacity = "0"
      play.current.style.opacity = "1";
      console.log("entered");
    
  };

  const handlePlayLeave = ()=>{
    document.querySelector("#moveWithCursor").style.opacity = "1"
    play.current.style.opacity = "0";
    console.log("left");
  }

  const handleCross = () => {
    gsap.fromTo(
      video.current,
      { scale: 1, opacity: 1, duration: 0.5 },
      {
        scale: 0.5,
        opacity: 0,
      }
    );
    setTimeout(() => {
      gsap.to(video.current, {
        scale: 1,
        opacity: 1,
      });

      video.current.style.display = "none";
      if (hideContainer.current) {
        hideContainer.current.style.display = "flex";
      }
    }, 500);
  };

  const playVideo = () => {
    video.current.style.display = "flex";
    if (hideContainer.current) {
      hideContainer.current.style.display = "none";
    }
  };

  useEffect(() => {
    //   document.body.addEventListener("mouseenter",handlePlay)

    return () => {};
  }, []);

  return (
    <div id="tryComponent" className="w-[100%] bg-[#201F1F] z-29 text-white p-5 flex justify-center items-center h-[70vh]">
      <div ref={video} className="relative  z-29 hidden h-[100%] w-[60%]  ">
        <video
          autoPlay
          muted
          loop
          className="object-cover h-full w-full"
          src="/video.mp4"
        ></video>

        <div
          onClick={handleCross}
          ref={cross}
          className=" absolute z-29 right-[-1px] bg-[#0f0d0d] w-fit h-fit "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 50 50"
            class="rotate"
          >
            <path
              d="M 7.7070312 6.2929688 L 6.2929688 7.7070312 L 23.585938 25 L 6.2929688 42.292969 L 7.7070312 43.707031 L 25 26.414062 L 42.292969 43.707031 L 43.707031 42.292969 L 26.414062 25 L 43.707031 7.7070312 L 42.292969 6.2929688 L 25 23.585938 L 7.7070312 6.2929688 z"
              fill="black"
              stroke="#95c11e"
              stroke-width="4"
            />
          </svg>
        </div>
      </div>
      <div
        ref={hideContainer} 
        className="flex items-center transition-all duration-150 ease-in w-[100%] h-[100%]"
      >              
        <div 
          onMouseEnter={handlePlayEnter}
          onMouseLeave={handlePlayLeave}
          className="relative w-[40%] h-[90%]  "
        >
          <div
            ref={play}
            className="fixed transition-opacity duration-300 ease-in-out pointer-events-none playBtn opacity-0 h-20 w-20 bg-black flex justify-center items-center font-bold rounded-full"
          >
            PLAY
          </div>
          <img
            onClick={playVideo}
            className="w-[100%] h-[100%] rounded-lg object-cover"
            src="/arvr.webp"
            alt=""
          />
        </div>
        <div className="h-[100%] w-[60%] flex pt-10 flex-col pb-2 gap-3 justify-center items-start px-10">
          <span className=" font-bold text-2xl">SOLUTION</span>
          <h1 className="font-extrabold  text-6xl mb-5">AR/VR GAME</h1>
          <p className="text-xl">
            The AR/VR disaster prevention game offers an immersive experience
            where users navigate realistic disaster scenarios like earthquakes,
            floods, and fires. It provides interactive learning, guiding users
            through essential safety measures. The game enhances engagement by
            allowing practice in a safe, controlled environment, making disaster
            preparedness both educational and enjoyable.
          </p>

          <a href="https://hianime.to/" target="_blank">
            <button className="tryNow bg-black border-[3px] mt-5 border-[#95c11e] rounded-full text-center px-10 py-4 font-bold text-xl  animate-bounce">
              Try Now!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Try;
