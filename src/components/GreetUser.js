import React from "react";

const Greet = (user) => {
  return (
    <div>
      <h1>
        Hello {user.username}, you have {user.nbPoints} lifetime points.
      </h1>
      <h3>{user.questionsAnswered} questions answered</h3>
    </div>
  );
};

export default Greet;
