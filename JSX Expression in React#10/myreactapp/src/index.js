import React from 'react';
import ReactDOM from 'react-dom';

const mName = "ISRA ILYAS";
const age = 18;

ReactDOM.render(
  <>
    <h1>JSX Expression</h1>
    <p>My name is {mName}</p>
    <p>My age is :{age}</p>
    <p>Random number: {Math.random()}</p>
  </>,
  document.getElementById('root')
)
