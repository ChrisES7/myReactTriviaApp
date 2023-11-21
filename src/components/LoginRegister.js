import React from "react";
import GreetUser from "./GreetUser";

const LoginRegister = (user) => {
  // how do i send the variable that tells node js if its login or register
  // an input onclick or listener?

  // validate(value) {
  //   console.log(value);
  // }
  return (
    <div>
      <form action="">
        <div>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
        </div>
        <input type="submit" value="LOG IN" onInput={validate(this.value)} />
        <input type="submit" value="REGISTER" onInput="validate()" />
      </form>
    </div>
  );
};

export default LoginRegister;
