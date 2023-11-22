import React, { Component } from "react";
import "./App.css";
import LoginRegister from "./components/LoginRegister";
import GreetUser from "./components/GreetUser";
import Categories from "./components/Categories";
import QuizParams from "./components/QuizParams";

// fetch user in here
// if i want to post or get, i do it in the other files
function App() {
  let loggedIn;
  //fetch /loggedIn and if it returns true, then you change components on page by making state variable
  fetch("http://localhost:3308/loggedIn", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loggedIn),
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        if (!loggedIn) {
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
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default App;
