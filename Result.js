// Result.js
import React from 'react';

function Result({ totalMarks, totalQuestions }) {
  const percentage = (totalMarks / totalQuestions) * 100;
  let message = '';

  if (percentage >= 70) {
    message = 'Excellent! You scored very well.';
  } else if (percentage >= 50) {
    message = 'Good job! You passed the quiz.';
  } else {
    message = 'You need more practice. Keep learning!';
  }

  return (
    <div>
      <h2>Quiz Result</h2>
      <p>Total Marks: {totalMarks}</p>
      <p>Percentage: {percentage}%</p>
      <p>{message}</p>
      {/* Add retake option here */}
    </div>
  );
}

export default Result;
