import React, { Component } from "react";
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

  // categories.forEach((category) => {
  //   difficulties.forEach((difficulty) => {
  //     questionTypes.forEach((type) => {
  //       const description = `${category} (${difficulty}, ${type === "multiple" ? "Multiple Choice" : "True/False"})`;
  //       quizOptions.push({ category, difficulty, type, description });
  //     });
  //   });
  // });

  getQuestions() {
    //deactivate button and selects and the category buttons
    // initiate all input values in variables
    let nbQuestionsSelect = document.getElementById("nbQuestionsSelect");
    let difficultySelect = document.getElementById("difficultySelect");
    let typeSelect = document.getElementById("typeSelect");
    console.log(nbQuestionsSelect.value);
    console.log(difficultySelect.value);
    console.log(typeSelect.value);
    if (true) {
    }
    const nbQuestions = [3, 4, 5, 6, 7, 8, 9, 10];
    // const categories = [
    //   "General Knowledge",
    //   "Art",
    //   "Sports",
    //   "Mythology",
    //   "History",
    //   "Geography",
    // ]; // Add more categories
    const difficulties = ["easy", "medium", "hard"];
    const questionTypes = ["multiple", "trueFalse"];

    const quizOptions = [];

    switch (nbQuestionsSelect.value) {
      case 3:
        break;
      default:
    }
  }
  render() {
    //i will put a form to make a request in the future
    // i can make a for loop and append these <option value="8">test8</option>
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
                <option value="multipleChoice">Multiple Choice</option>
                <option value="trueFalse">True or False</option>
              </select>
            </div>
            <button id="btnDone" onClick={() => this.getQuestions()}>
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizParams;
