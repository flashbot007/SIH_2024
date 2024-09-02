import React, { useState } from 'react';
import './Quiz.css';

const Quiz = ({ questions = [], onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  if (questions.length === 0) {
    return <div>No questions available</div>;
  }

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setIsFinished(true);
      }
      setSelectedAnswer(null); // Reset the selected answer for the next question
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null); // Reset the selected answer when going back
    }
  };

  return (
    <div className="quiz-overlay" onClick={onClose}>
      <div className="quiz-container" onClick={(e) => e.stopPropagation()}>
        {isFinished ? (
          <div className="quiz-results">
            <h2>Your Score: {score} / {questions.length}</h2>
            <button className="submit-quiz-btn" onClick={onClose}>Back to Plans</button>
          </div>
        ) : (
          <div className="quiz-question">
            <h2>{questions[currentQuestion]?.question || "No question available"}</h2>
            <div className="quiz-options">
              {questions[currentQuestion]?.options?.map((option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name={`quiz-option-${currentQuestion}`}
                    onChange={() => handleAnswerSelect(option)}
                    checked={selectedAnswer === option}
                  />
                  {option}
                </label>
              )) || "No options available"}
            </div>
            <div className="quiz-navigation">
              <button
                className="navigation-btn"
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
              >
                Previous
              </button>
              <button
                className="navigation-btn"
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;