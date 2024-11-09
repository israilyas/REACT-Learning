// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(<h1>What is JSX?</h1>,
//   document.getElementById('root')
// )

// By using babel 
// import { jsx as _jsx } from "react/jsx-runtime";
// ReactDOM.render(/*#__PURE__*/_jsx("h1", {
//   children: "What is JSX?"
// }), document.getElementById('root'));

// Pure JS

var h1 = document.createElement('h1');
h1.innerHTML = "What is JSX?  By appendChild";
document.getElementById('root').appendChild(h1);

