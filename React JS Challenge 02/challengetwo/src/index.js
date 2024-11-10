import React from 'react';
import ReactDOM from 'react-dom';

const mName = "ISRA ILYAS";
const date = new Date();
console.log(date)

ReactDOM.render(
  <>
    <h1>My name is {mName}</h1>
    <p>Current date is {date.toLocaleDateString()}</p>
    {/* <p>{`Current time is ${date.getHours()} ${date.getMinutes()} ${date.getSeconds()}`}</p> */}
    <p>{`Current time is ${date.toLocaleTimeString()}`}</p>
  </>,
  document.getElementById('root')
)

