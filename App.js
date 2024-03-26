import React, { useState } from 'react';
import SubjectSelector from './components/SubjectSelector';
import Quiz from './components/Quiz';



function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="App">
      {selectedSubject ? (
        <Quiz selectedSubject={selectedSubject} />
      ) : (
        <SubjectSelector onSelectSubject={setSelectedSubject} />
      )}
    </div>
  );
}

export default App;