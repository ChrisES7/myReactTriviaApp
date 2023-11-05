import React from 'react'



const Greet = (user) => {
  return <h1>Hello {user.name}, you have {user.totalPoints} lifetime points.</h1>
}

export default Greet;
