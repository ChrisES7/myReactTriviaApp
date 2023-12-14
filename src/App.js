import React, { useState, useEffect } from "react";
import "./App.css";
import LoginRegister from "./components/LoginRegister";
import GreetUser from "./components/GreetUser";
import Categories from "./components/Categories";
import QuizParams from "./components/QuizParams";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, newvar) => {
    console.log("Logged in as:", username);
    console.log(newvar);

    // Fetch /loggedIn and update the state based on the response
    fetch(`http://localhost:3308/loggedIn/${username}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.loggedIn[0]);
        setLoggedIn(true);
        // setLoggedIn(data.loggedIn);
        return (
          <div className="App">
            <GreetUser username={data.loggedIn[0]} />
            {/* add username from response here */}
            <Categories />
          </div>
        );
      })
      .catch((error) => {
        console.error("Error checking login status:", error);
      });
  };

  if (!loggedIn) {
    console.log("LOGIN PAGE");
    return <LoginRegister onLogin={handleLogin("Kiko")} />;
  }
}

export default App;
