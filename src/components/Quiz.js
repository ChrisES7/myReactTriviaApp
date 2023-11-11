import React, { Component } from "react";
// import QuizParams from "./QuizParams";
import "../App.css";

// send variable from Categories, and do apiKeys[cat].name...etc

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      // questionData: null,
      currentIndex: 0,
    };
    this.putQuestion = this.putQuestion.bind(this);
    this.createAnswers = this.createAnswers.bind(this);
  }
  // results is undefined
  render() {
    console.log(this.props.data);
    // let questionDataa;
    // this.setState({ questionData: this.props.data }, () => {
    //   questionDataa = this.state.questionData;
    // }); // how can i only send questionDataa after callback
    let multipleChoice = true;
    if (this.props.data[this.state.currentIndex.type] == "multiple") {
      console.log("MULTIPLE");
      multipleChoice = true;
    }
    let counter = 0;
    // console.log(this.props);
    if (multipleChoice) {
      return (
        <div>
          <h1>K.</h1>
          <div>
            <div>{this.putQuestion(this.props.data, multipleChoice)}</div>
          </div>
        </div>
      );
    }
  }

  createAnswers() {
    let answers = [this.state.questionsData];

    const inputElements = Array.from({ length: 4 }, (_, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "buttonAnswer";
      button.value = this.props.data[0];
      return button;
    });

    // Shuffle the array
    inputElements.sort(() => Math.random() - 0.5);

    // Append input elements to the body
    inputElements.forEach((input) => {
      document.querySelector("form").appendChild(input);
    });
  }
  putQuestion(questionData, multipleChoice) {
    if (multipleChoice) {
      // this.questionData.forEach((question) => {
      //   console.log(question.category);
      // });
      let currentIndex = this.state.currentIndex;
      console.log(currentIndex);
      return (
        <div className="divQuestions">
          {<p key={currentIndex}>{questionData[currentIndex].question}</p>}
        </div>
      );
      this.setState((prevState) => ({
        counter: (prevState.counter + 1) % 3, // Increment and reset to 0 when it reaches 3
      }));
      if (this.state.questionsAnswered) {
        this.setState((prevState) => ({
          counter: 0, // Increment and reset to 0 when it reaches 3
        }));
      }
    } else if (multipleChoice == false) {
    }
  }
}
export default Quiz;
