import React, { Component } from "react";
import Quiz from "./Quiz";
import "../App.css";

class QuizParams extends Component {
  constructor() {
    super();
    this.state = {
      nbQuestions: "",
      category: "",
      difficulty: "",
      type: "",
    };
  }

  getQuestions(prop) {
    console.log(prop);
    //deactivate button and selects and the category buttons
    //check if variables are empty
    let categoryName = prop;
    let category;
    switch (categoryName) {
      case "General Knowledge":
        category = 9;
        break;
      case "Art":
        category = 25;
        break;
      case "Sports":
        category = 21;
        break;
      case "Mythology":
        category = 20;
        break;
      case "History":
        category = 23;
        break;
      case "Geography":
        category = 22;
        break;
      case "Animals":
        category = 27;
        break;
    }
    let nbQuestionsSelect = document.getElementById("nbQuestionsSelect");
    let difficultySelect = document.getElementById("difficultySelect");
    let typeSelect = document.getElementById("typeSelect");
    console.log(nbQuestionsSelect.value);
    console.log(difficultySelect.value);
    console.log(typeSelect.value);
    let apiUrl = `https://opentdb.com/api.php?amount=${nbQuestionsSelect.value}&category=${category}&difficulty=${difficultySelect.value}&type=${typeSelect.value}`;
    //
    //i could also use state variables
    //
    // this.setState({
    //   nbQuestions: nbQuestionsSelect.value,
    //   category: "",
    //   difficulty: difficultySelect.value,
    //   type: typeSelect.value,
    // });
    // let apiUrl = `https://opentdb.com/api.php?amount=${this.state.nbQuestions}&category=22&difficulty=${this.state.difficulty}&type=${this.state.type}`;

    document.querySelector(
      ".allChoicesDiv"
    ).innerHTML += `<h2 style="color:white;">${apiUrl}</h2>`;
    console.log(apiUrl);
  }
  render() {
    console.log(this.props.cat);
    //i will put a form to make a request in the future
    return (
      <div>
        <div className="allChoicesDiv">
          <div id="nbQuestionsDiv">
            <label>Number of Questions :</label>
            <br />
            <select className="selectParam" id="nbQuestionsSelect">
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div id="difficultyDiv">
            <label>Difficulty :</label>
            <br />
            <select className="selectParam" id="difficultySelect">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <div id="nbQuestionsDiv">
              <label>Number of Questions :</label>
              <br />
              <select className="selectParam" id="typeSelect">
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True or False</option>
              </select>
            </div>
            <button onClick={console.log("Hello")}>Hi</button>
            <button
              id="btnDone"
              onClick={() => this.getQuestions(this.props.cat)}
            >
              Start Quiz
            </button>
          </div>
        </div>
        <Quiz />
      </div>
    );
  }
}

export default QuizParams;
