import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let greeting;
let time = new Date()

// Inline styling
const greet = {
  color:"green"
}

if(time.getHours() >= 5 && time.getHours() <= 12){
  greeting = "Good Morning";
  greet.color = "green";
}
else if(time.getHours() >= 12 && time.getHours() <= 17){
  greeting = "Good Afternoon";
  greet.color = "orange";
}
else if(time.getHours() >= 17 && time.getHours() <= 21){
  greeting = "Good Evening";
  greet.color = "red";
}
else{
  greeting = "Good Night"
 greet.color = "black";
}


ReactDOM.render(
  <div className='container'>
    <h1>Hello Sir, <span className='greet' style={greet}>{greeting}</span></h1>
  </div>,
  document.getElementById('root')
)