import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import javaQuestions from './javaQuestions';
import pythonQuestions from './pythonQuestions';
import generalStudiesQuestions from './generalStudiesQuestions';

function Quiz() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setCurrentQuestion(0);
    setUserAnswers(Array(subject.questions.length).fill(null));
  };

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
    setCurrentQuestion(currentQuestion + 1);
  };

  const calculateTotalMarks = () => {
    let totalMarks = 0;
    for (let i = 0; i < selectedSubject.questions.length; i++) {
      if (userAnswers[i] === selectedSubject.questions[i].answerIndex) {
        totalMarks++;
      }
    }
    return totalMarks;
  };

  return (
    <div>
      <h2>Select a Subject:</h2>
      <button onClick={() => handleSubjectSelect({ name: "Java", questions: javaQuestions })}>Java</button>
      <button onClick={() => handleSubjectSelect({ name: "Python", questions: pythonQuestions })}>Python</button>
      <button onClick={() => handleSubjectSelect({ name: "General Studies", questions: generalStudiesQuestions })}>General Studies</button>
      
      {selectedSubject && (
        <div>
          <h3>Quiz: {selectedSubject.name}</h3>
          <p>Question {currentQuestion + 1} of {selectedSubject.questions.length}</p>
          {currentQuestion < selectedSubject.questions.length ? (
            <Question
              question={selectedSubject.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          ) : (
            <Result
              totalMarks={calculateTotalMarks()}
              totalQuestions={selectedSubject.questions.length}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
