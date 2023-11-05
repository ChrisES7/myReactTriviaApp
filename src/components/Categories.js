import React, {Component} from 'react'
import '../App.css';

class Categories extends Component {
  constructor() {
    super()
    this.state = {
      message: "Pick your category : "
    }
  }

  chooseCategory(cat) {
    this.setState({
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
  }

  render() {
    // in the future, i will pass a database user as parameter
    //
    // we will use apiObject.name in the future
    return (
      <div>
        <h1 id="categoryPickHeader">{this.state.message}</h1>
        <div class="onclickButtonsDiv">

          <div>
            <button onClick={ () => this.chooseCategory("genKnow")}>General Knowledge</button>
            <button onClick={ () => this.chooseCategory("art")}>Art</button>
          </div>
          <div>
            <button onClick={ () => this.chooseCategory("sports")}>Sports</button>
            <button onClick={ () => this.chooseCategory("myth")}>Mythology</button>
            <button onClick={ () => this.chooseCategory("history")}>History</button>
          </div>
          <div>
            <button onClick={ () => this.chooseCategory("geo")}>Geography</button>
            <button onClick={ () => this.chooseCategory("animals")}>Animals</button>
          </div>
        </div>
      </div>
    )
  }
}



export default Categories;
