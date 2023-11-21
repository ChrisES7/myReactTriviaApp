import React, { Component } from "react";
import "./App.css";
import LoginRegister from "./components/LoginRegister";
import GreetUser from "./components/GreetUser";
import Categories from "./components/Categories";
import QuizParams from "./components/QuizParams";

const User1 = {
  name: "Chris",
  totalPoints: 24,
  questionsAnswered: 9,
};
// fetch user in here
// if i want to post or get, i do it in the other files
function App() {
  if (true) {
    <LoginRegister />;
  } else {
    return (
      <div className="App">
        <GreetUser />
        <Categories />
      </div>
    );
  }
}

export default App;
