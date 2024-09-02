import React, { useState, useEffect} from 'react';
import { plansData } from '../../data/plansData';
import Quiz from './Quiz';
import './Plans.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isQuizActive, setIsQuizActive] = useState(false);

  const handlePlanSelect = (planName) => {
    const plan = plansData.find(p => p.name === planName);
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
   gsap.from("#quiz-title >",{
    opacity:0,
    stagger:0.4,
    duration:1,
   })
  }, [])
  

  return (
    <div className={`plans-container bg-[#201F1F]  flex py-10 border-red-500 `}>
      <div  className='flex justify-center items-center border w-[40%] py-4'>
        <h1 id='quiz-title' className='text-white text-6xl w-[100%] text-center font-extrabold '>
        <span>T</span><span>R</span><span>Y</span><span> </span><span>O</span><span>U</span><span>T</span><span> </span><span>Q</span><span>U</span><span>I</span><span>Z</span><span> </span><span>T</span><span>O</span><span> </span><span>G</span><span>A</span><span>I</span><span>N</span><span> </span><span>Y</span><span>O</span><span>U</span><span>R</span><span> </span><span>K</span><span>N</span><span>O</span><span>W</span><span>L</span><span>E</span><span>D</span><span>G</span><span>E</span>

        </h1>
      </div>
      {!isQuizActive ? (
        <div className="plans w-[60%] border gap-14 py-10">
          {plansData.map((plan, index) => (
            <div key={index} className="plan">
              <h2 className="plan-heading">{plan.name}</h2>
              <button className="btn" onClick={() => handlePlanSelect(plan.name)}>Quiz</button>
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