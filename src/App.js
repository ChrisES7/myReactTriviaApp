import React, {Component} from 'react';
import './App.css';
import GreetUser from './components/GreetUser'

const User1 = {
  name: 'Chris',
  totalPoints: 24,
  questionsAnswered: 9
}
function App() {
  return (
    <div className="App">
      <GreetUser name={User1.name} totalPoints={User1.totalPoints} questionsAnswered={User1.questionsAnswered} >
        <p>this is a child prop</p>
      </GreetUser>
    </div>
  );
}

export default App;
