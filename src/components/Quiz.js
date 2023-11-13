import React, { Component } from "react";
// import QuizParams from "./QuizParams";
import "../App.css";

// send variable from Categories, and do apiKeys[cat].name...etc

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      // questionData: null,
      currentQuestionIndex: 0,
      questionAnswered: false,
    };
    this.putQuestion = this.putQuestion.bind(this);
    this.createAnswers = this.createAnswers.bind(this);
    this.verifyAnswer = this.verifyAnswer.bind(this);
  }
  // results is undefined
  render() {
    console.log(this.props.data);
    // let questionDataa;
    // this.setState({ questionData: this.props.data }, () => {
    //   questionDataa = this.state.questionData;
    // }); // how can i only send questionDataa after callback
    let multipleChoice = true;
    if (this.props.data[this.state.currentQuestionIndex.type] == "multiple") {
      console.log("MULTIPLE");
      multipleChoice = true;
    }
    let counter = 0;
    // console.log(this.props);
    console.log(this.props.nbQuestions);
    while (this.state.currentQuestionIndex < this.props.nbQuestions) {
      if (multipleChoice) {
        return (
          <div>
            <h1>K.</h1>
            <div id="quizDiv">
              <div>{this.putQuestion(this.props.data, multipleChoice)}</div>
            </div>
          </div>
        );
      }
    }
    return <h1>DONE</h1>;
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

    inputElements.sort(() => Math.random() - 0.5);

    inputElements.forEach((input) => {
      document.querySelector("form").appendChild(input);
    });
  }
  putQuestion(questionData, multipleChoice) {
    if (multipleChoice) {
      // let answerIndex = this.state.currentAnswerIndex;
      let answerIndex = 0;
      let currentQuestionIndex = this.state.currentQuestionIndex;
      console.log(currentQuestionIndex);

      //put nb of questions chosen in state variable and do a for loop on (while the questions have not run out)

      while (this.state.questionAnswered != true) {
        return (
          <div className="divQuestions">
            {
              <h2 key={currentQuestionIndex}>
                {questionData[currentQuestionIndex].question}
              </h2>
            }
            <div className="answersDiv">
              {this.putAnswers(this.props.data, multipleChoice)}
            </div>
          </div>
        );
      }
      // call a method that, for each object will put all answers in a  array, then
      // randomize it and then create divs in js and append p elements with answers
      // this.setState({ currentQuestionIndex: 0 });
    } else if (multipleChoice == false) {
    }
  }

  putAnswers(data, multipleChoice) {
    let allAnswers = [];
    let currentQuestionIndex = this.state.currentQuestionIndex;
    let correctAnswer = data[currentQuestionIndex].correct_answer;
    let badAnswers = data[currentQuestionIndex].incorrect_answers;
    console.log(correctAnswer);
    if (multipleChoice) {
      allAnswers.push(
        correctAnswer,
        badAnswers[0],
        badAnswers[1],
        badAnswers[2]
      );
      const answerElements = allAnswers.map((answer, index) => (
        <div key={index} className="answerDiv">
          <button
            type="button"
            className="answerButton"
            onClick={(event) => this.verifyAnswer(answer, event)}
            key={index}
          >
            {answer}
          </button>
        </div>
      ));

      // Return the array of answer elements
      return answerElements;
    }
  }

  async verifyAnswer(answer, event) {
    const targetButton = event.target;
    console.log(targetButton);
    let data = this.props.data;
    let correctAnswer = data[this.state.currentQuestionIndex].correct_answer;
    console.log(this.state.currentQuestionIndex);
    this.setState(
      (prevState) => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
      }),
      () => {
        console.log(this.state.currentQuestionIndex);
      }
    );
    let color;
    if (answer == correctAnswer) {
      color = "green";
      // console.log("ANSWER CORRECT");

      //add a classname witha  transition to green
    } else {
      color = "red";
    }

    targetButton.style.backgroundColor = color;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    targetButton.style.backgroundColor = "";

    // changeQuestion
    // mkae button white again
    // add points if correct
    //add to questions answered
    // return true;
  }
}
export default Quiz;
