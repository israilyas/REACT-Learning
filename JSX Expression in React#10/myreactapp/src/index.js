import React from 'react';
import ReactDOM from 'react-dom';

// const mName = "ISRA ILYAS";
const age = 18;
const fName = "ISRA";
const lName="ILYAS";

ReactDOM.render(
  // ===== JSX Expression In React  =====
  // <>
  //   <h1>JSX Expression</h1>
  //   <p>My name is {mName}</p>
  //   <p>My age is :{age}</p>
  //   <p>Random number: {Math.random()}</p>
  // </>,

  // === Template Literals In React ====
  <>
{/* <h1>My Name is {fName +" "+ lName}</h1> */}
<h1>{`My Name is ${fName} ${lName}`}</h1>
  </>,
  document.getElementById('root')
)
