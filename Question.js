import React from 'react';

function Question({ question, onAnswer }) {
  const { question: questionText, options } = question;

  const handleOptionSelect = (event) => {
    const optionIndex = parseInt(event.target.value);
    onAnswer(optionIndex);
  };

  return (
    <div>
      <h3>{questionText}</h3>
      <form>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option${index}`}
              name="option"
              value={index}
              onChange={handleOptionSelect}
            />
            <label htmlFor={`option${index}`}>{option}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Question;


