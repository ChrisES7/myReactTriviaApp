import React from 'react'



const Greet = (user) => {
  return (
    <div>
      <h1>Hello {user.name}, you have {user.totalPoints} lifetime points.</h1>
      <h3>{user.questionsAnswered} questions answered</h3>
    </div>
  )
}

export default Greet;
