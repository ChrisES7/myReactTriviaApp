import React, {Component} from 'react'
import '../App.css';

class Categories extends Component {
  constructor() {
    super()
    this.state = {
      buttonId: "",
      message: "Pick your category : "
    }
  }

  chooseCategory(cat) {

    //NEW WAY OF DOING : id for each button is the case name, so when a button is clicked, you get element by id and change its background color
    this.setState({
      buttonId: `${cat}`,
      message: `You chose ${cat}`
    })
    switch (cat) {
      case "genKnow":
        // now, you would call a component where the variable passed is the name of the apiObject
        // so if its general knlowedge, you create a general Knowledge object, and in each of the html components
        // i will do apiObject.question[i]...
        break;
      case "art":
        console.log(cat);
        break;
      case "sports":
        console.log(cat);
        break;
      case "myth":
        console.log(cat);
        break;
      case "history":
        console.log(cat);
        break;
      case "geo":
        console.log(cat);
        break;
      case "animals":
        console.log(cat);
        break;
    }
    console.log(this.state.buttonId);
    let currentBtn = document.getElementById(this.state.buttonId);
    let allButtons = document.querySelectorAll(".onclickButtonsDiv button");
    if (currentBtn == null) {
        console.log("NULL"); 
    }else {
      allButtons.forEach((currentBtn) => {
          currentBtn.style.backgroundColor = "white";
      });

      console.log(document.querySelectorAll(".onclickButtonsDiv button"));
      currentBtn.style.backgroundColor = "#baeafa";
    }


  }

  render() {
    // in the future, i will pass a database user as parameter
    //
    // we will use apiObject.name in the future
    return (
      <div>
        <h1 id="categoryPickHeader">{this.state.message}</h1>
        <div className="onclickButtonsDiv">

          <div>
            <button id="genKnow" onClick={ () => this.chooseCategory("genKnow")}>General Knowledge</button>
            <button id="art" onClick={ () => this.chooseCategory("art")}>Art</button>
          </div>
          <div>
            <button id="sports" onClick={ () => this.chooseCategory("sports")}>Sports</button>
            <button id="myth" onClick={ () => this.chooseCategory("myth")}>Mythology</button>
            <button id="history" onClick={ () => this.chooseCategory("history")}>History</button>
          </div>
          <div>
            <button id="geo" onClick={ () => this.chooseCategory("geo")}>Geography</button>
            <button id="animals" onClick={ () => this.chooseCategory("animals")}>Animals</button>
          </div>
        </div>
      </div>
    )
  }
}



export default Categories;
