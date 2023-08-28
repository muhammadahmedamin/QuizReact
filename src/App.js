 import React, { useState } from 'react';
import './App.css';
const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'London', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    question: "HTML Stands for ______________",
    options: ["hypher and text Markup Language", "Home toll Markup language", "Hypertext Markup Language", "programing language"],
    correctAnswer: "Hypertext Markup Language",
  },
  {
    question: "Who is making the Web standards?",
    options: ["Microsoft  ", "The World Wide Web Consortium", "Google", "Mozilla"],
    correctAnswer: "Microsoft",
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    options: ["head", "h6", "h1", "heading"],
    correctAnswer: "h1",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["lb", "/br", "br;", "break"],
    correctAnswer: "/br",
  },
  {
    question: "What is the correct HTML for adding a background color?",
    options: ["background>yellow</background", "body bg= yellow", "Structured Query Language", " body style=background-color:yellow"],
    correctAnswer: "body style=background-color:yellow;",
  }
  // Add more questions
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].question}
          </div>
          <div className="answer-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
 