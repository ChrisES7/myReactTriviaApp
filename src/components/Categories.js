import React, { Component } from "react";
import "../App.css";
import QuizParams from "./QuizParams";

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      buttonId: "",
      catFull: "",
      message: "Pick your category : ",
    };
  }
  chooseCategory(cat) {
    let catFull;
    //NEW WAY OF DOING : id for each button is the case name, so when a button is clicked, you get element by id and change its background color
    this.setState(
      {
        buttonId: `${cat}`,
      },
      () => {
        // pass a callback function, so that the rest of the code only executes when the state has been changed.
        switch (cat) {
          case "genKnow":
            catFull = "General Knowledge";
            // now, you would call a component where the variable passed is the name of the apiObject
            // so if its general knlowedge, you create a general Knowledge object, and in each of the html components
            // i will do apiObject.question[i]...
            break;
          case "art":
            catFull = "Art";
            break;
          case "sports":
            catFull = "Sports";
            break;
          case "myth":
            console.log(cat);
            catFull = "Mythology";
            break;
          case "history":
            catFull = "History";
            break;
          case "geo":
            catFull = "Geography";
            break;
          case "animals":
            catFull = "Animals";
            break;
        }
        console.log(cat);
        let currentBtn = document.getElementById(this.state.buttonId);
        let allButtons = document.querySelectorAll(".onclickButtonsDiv button");
        if (currentBtn == null || catFull == null) {
          console.log("NULL");
        } else {
          this.setState({
            buttonId: `${cat}`,
            catFull: `${catFull}`,
            message: `You chose ${catFull}`,
          });
          allButtons.forEach((currentBtn) => {
            currentBtn.style.backgroundColor = "white";
          });
          // console.log(document.querySelectorAll(".onclickButtonsDiv button"));
          currentBtn.style.backgroundColor = "#baeafa";
        }
      }
    );
  }
  render() {
    // in the future, i will pass a database the apitoken as parameter
    // for each object, we will have apiObject.name in the future
    return (
      <div>
        <div>
          <h1 id="categoryPickHeader">{this.state.message}</h1>
          <div className="onclickButtonsDiv">
            <div>
              <button
                id="genKnow"
                onClick={() => this.chooseCategory("genKnow")}
              >
                General Knowledge
              </button>
              <button id="art" onClick={() => this.chooseCategory("art")}>
                Art
              </button>
            </div>
            <div>
              <button id="sports" onClick={() => this.chooseCategory("sports")}>
                Sports
              </button>
              <button id="myth" onClick={() => this.chooseCategory("myth")}>
                Mythology
              </button>
              <button
                id="history"
                onClick={() => this.chooseCategory("history")}
              >
                History
              </button>
            </div>
            <div>
              <button id="geo" onClick={() => this.chooseCategory("geo")}>
                Geography
              </button>
              <button
                id="animals"
                onClick={() => this.chooseCategory("animals")}
              >
                Animals
              </button>
            </div>
          </div>
        </div>
        <QuizParams cat={this.state.catFull} />
      </div>
    );
  }
}

export default Categories;
