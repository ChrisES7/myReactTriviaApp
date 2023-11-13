import React, { Component } from "react";
import Quiz from "./Quiz";
import "../App.css";

let dataa;
let dataArray = [];

class QuizParams extends Component {
  constructor() {
    super();
    this.state = {
      nbQuestions: "",
      category: "",
      difficulty: "",
      type: "",
      fetchedData: null,
    };
  }
  //basically, i need to put an array into the the state variable, but idk what to put inside the array
  getData(data) {
    console.log(data);
    dataa = data;
    //check if data.variable exists
    // dataArray.push(dataa.results);
    this.setState({ fetchedData: dataa.results }, () => {
      console.log(this.state.fetchedData);
    });

    // return data;
  }

  async getApiData(apiUrl, getData) {
    const response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);
    this.getData(data);
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

    //
    let apiUrl = `https://opentdb.com/api.php?amount=${nbQuestionsSelect.value}&category=${category}&difficulty=${difficultySelect.value}&type=${typeSelect.value}`;
    // OHH, i need to put the this keyword to access functions from inside a method
    this.getApiData(apiUrl, this.getData);
    //trying to send data inside component props

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
    //<Quiz data={this.getQuestions(this.props.cat)} /> in render()
    document.querySelector(
      ".allChoicesDiv"
    ).innerHTML += `<h2 style="color:white;">${apiUrl}</h2>`;
    console.log(apiUrl);
  }
  //either send the component call only after the start quiz has been activated, but how

  render() {
    // console.log(this.props.cat);
    // console.log(this.getQuestions(this.props.cat));
    //i will put a form to make a request in the future
    if (this.state.fetchedData) {
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
              <button
                id="btnDone"
                onClick={() => this.getQuestions(this.props.cat)}
              >
                Start Quiz
              </button>
              <h1>IF</h1>
            </div>
          </div>
          <Quiz
            data={this.state.fetchedData}
            nbQuestions={document.getElementById("nbQuestionsSelect").value}
            dataex="data"
          />
        </div>
      );
    } else {
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
              <button
                id="btnDone"
                onClick={() => this.getQuestions(this.props.cat)}
              >
                Start Quiz
              </button>
              <h1>ELSE</h1>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default QuizParams;
