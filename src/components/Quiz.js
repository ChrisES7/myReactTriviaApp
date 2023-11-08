import React, { Component } from "react";
// import QuizParams from "./QuizParams";
import "../App.css";

// send variable from Categories, and do apiKeys[cat].name...etc

class Quiz extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>K.</h1>
        <div>
          <h1>{this.props.data}</h1>
          <h1>{this.props.dataex}</h1>
        </div>
      </div>
    );
  }
}

export default Quiz;
