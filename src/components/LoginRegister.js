import React, { Component } from "react";
import GreetUser from "./GreetUser";

class LoginRegister extends Component {
  constructor() {
    super();
    this.state = {};
  }
  // how do i send the variable that tells node js if its login or register
  // an input onclick or listener?

  validate(value) {
    console.log(value);
  }
  render() {
    return (
      <div>
        <form action="">
          <div>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
          </div>
          <input
            type="submit"
            value="LOG IN"
            onInput={this.validate(this.value)}
          />
          <input type="submit" value="REGISTER" onInput="validate()" />
        </form>
      </div>
    );
  }
}

export default LoginRegister;
