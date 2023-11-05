import React, {Component} from 'react';
import './App.css';
import GreetUser from './components/GreetUser'

const User1 = {
  name: 'Chris',
  totalPoints: 24
}
function App() {
  return (
    <div className="App">
      <GreetUser name={User1.name} totalPoints={User1.totalPoints} />
    </div>
  );
}

export default App;
