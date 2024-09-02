import React, { useState, useEffect } from "react";
import { plansData } from "../../data/plansData";
import Quiz from "./Quiz";
import "./Plans.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isQuizActive, setIsQuizActive] = useState(false);

  const handlePlanSelect = (planName) => {
    const plan = plansData.find((p) => p.name === planName);
    if (plan) {
      setSelectedPlan(plan.quiz);
      setIsQuizActive(true);
    }
  };

  const handleCloseQuiz = () => {
    setIsQuizActive(false);
    setSelectedPlan(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseQuiz();
    }
  };

  useEffect(() => {
    gsap.fromTo(
      ".quizTitle span",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.1,
        duration: 0.3,
        scrollTrigger: {
          trigger: ".quizTitle span",
          scroller: "body",
          markers: false,
          start: "top 80%", // Adjust this value based on when you want the animation to start
          end: "top 60%", // Adjust this value if you want the animation to end at a specific point
        },
      }
    );
  }, []);

  return (
    <div id="quizComponent" className={`plans-container bg-[#201F1F]  flex py-10 border-red-500 `}>
      <div className="flex justify-center items-center  w-[40%] py-4">
        <h1 className="text-white quizTitle text-6xl w-[100%] text-center font-extrabold ">
          <span>T</span>
          <span>R</span> 
          <span>Y</span>
          <span> </span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
          <span> </span>
          <span className="  text-7xl text-[#95c11e]">Q</span>
          <span className="  text-7xl text-[#95c11e]">U</span>
          <span className="  text-7xl text-[#95c11e]">I</span>
          <span className="  text-7xl text-[#95c11e]">Z</span>
          <span> </span>
          <span>T</span>
          <span>O</span>
          <span> </span>
          <span>G</span>
          <span>A</span>
          <span>I</span>
          <span>N</span>
          <span> </span>
          <span>Y</span>
          <span>O</span>
          <span>U</span>
          <span>R</span>
          <span> </span>
          <span className="text-red-600 text-7xl">K</span>
          <span className="text-red-600 text-7xl">N</span>
          <span className="text-red-600 text-7xl">O</span>
          <span className="text-red-600 text-7xl">W</span>
          <span className="text-red-600 text-7xl">L</span>
          <span className="text-red-600 text-7xl">E</span>
          <span className="text-red-600 text-7xl">D</span>
          <span className="text-red-600 text-7xl">G</span>
          <span className="text-red-600 text-7xl">E</span>
        </h1>
      </div>
      {!isQuizActive ? (
        <div className="plans w-[60%] gap-10 py-10">
          {plansData.map((plan, index) => (
            <div key={index} className="plan  rounded-xl   hover:bg-[rgb(238,104,14)]   flex justify-center items-center">
              <h2 className="plan-heading">{plan.name}</h2>
              <button
                className="btn w-[100%] rounded-xl"
                onClick={() => handlePlanSelect(plan.name)}
              >
                Quiz
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="quiz-overlay" onClick={handleOverlayClick}>
          <div className="quiz-container">
            <Quiz questions={selectedPlan} onClose={handleCloseQuiz} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Plans;
