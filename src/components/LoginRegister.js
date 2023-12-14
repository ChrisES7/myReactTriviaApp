import React, { Component } from "react";
import GreetUser from "./GreetUser";

class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.validate = this.validate.bind(this);
  }
  // how do i send the variable that tells node js if its login or register
  // an input onclick or listener?

  validate(event) {
    event.preventDefault();
    const form = document.querySelector("form");
    let username = document.querySelector('input[name="username"]');
    console.log(username.value);
    // this.props.onLogin(username);
    console.log(this.props);
    console.log(this.props.onLogin);
    console.log(event.target.name);

    let action = event.target.name;

    if (action == "login") {
      form.action = "http://localhost:3308/login";
      form.method = "POST";
      fetch(`http://localhost:3308/loggedIn?username=${username.value}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(JSON.stringify(data));
          if (data.loggedIn) {
            this.props.onLogin(username, data.loggedIn);
          } else {
            console.error("Invalid username or password");
          }
        });
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
