import React, { useState, useEffect } from "react";
import "./App.css";
import LoginRegister from "./components/LoginRegister";
import GreetUser from "./components/GreetUser";
import Categories from "./components/Categories";
import QuizParams from "./components/QuizParams";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username) => {
    console.log("Logged in as:", username);

    useEffect(() => {
      // Fetch /loggedIn and update the state based on the response
      fetch(`http://localhost:3308/loggedIn?username=${username}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setLoggedIn(data.loggedIn);
          // fetch user
          // return (
          //   <div className="App">
          //     <GreetUser username="" /> {/* add username from response here */}
          //     <Categories />
          //   </div>
          // );
        })
        .catch((error) => {
          console.error("Error checking login status:", error);
        });
    }, []);
  };

  if (!loggedIn) {
    return <LoginRegister onLogin={handleLogin} />;
  }
}

export default App;
