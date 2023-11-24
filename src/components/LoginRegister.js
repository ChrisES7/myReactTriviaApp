import React, { Component } from "react";
import GreetUser from "./GreetUser";

class LoginRegister extends Component {
  constructor() {
    super();
    this.state = {};
  }
  // how do i send the variable that tells node js if its login or register
  // an input onclick or listener?

  validate(event) {
    const form = document.querySelector("form");
    let username = document.querySelector('input[name="username"]');
    console.log(username);
    console.log(event.target.name);

    let action = event.target.name;

    if (action == "login") {
      form.action = "/login";
      form.method = "POST";
      fetch(`http://localhost:3308/loggedIn?username=${username}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: 78912 }),
      })
        .then((response) => response.json())
        .then((response) => console.log(JSON.stringify(response)));
    }
    // if (buttonType === "loginBtn") {
    //   console.log("Login");
    //   form.action = "/login";
    //   form.method = "GET";
    // } else if (buttonType === "registerBtn") {
    //   console.log("Register");
    //   form.action = "/register";
    //   form.method = "GET";
    // }
  }
  render() {
    return (
      <div>
        <form action="">
          <div>
            <input type="text" placeholder="Username" name="username" />
          </div>
          <input
            type="submit"
            value="LOG IN"
            name="login"
            onClick={this.validate}
          />
          <input
            type="submit"
            value="REGISTER"
            name="register"
            onClick={this.validate}
          />
        </form>
      </div>
    );
  }
}

export default LoginRegister;
