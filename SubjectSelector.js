// SubjectSelector.js
import React from 'react';


function SubjectSelector({ onSelectSubject }) {
  const subjects = ['Java', 'Python', 'General Aptitude'];

  return (
    <div>
       <h2>Welcome to quiz application</h2>
       <img src="https://tse1.mm.bing.net/th?id=OIP.BmhluxQYLRxghM9SnmsizwHaHa&pid=Api&P=0&h=180" />
      <ul>
        {subjects.map((subject, index) => (
          <li key={index} onClick={() => onSelectSubject(subject)}>
            {subject}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectSelector;
