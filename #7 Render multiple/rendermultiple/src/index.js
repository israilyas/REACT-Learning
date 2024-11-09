import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  // <div>
  //     <h1>Hello world</h1>
  //     <p>Hello</p>
  //     <h2>plz subscribe my channel</h2>
  // </div>

  // React version above 16 accept array of jsx objects
  [
      <h1>Hello world</h1>,
      <p>Hello</p>,
      <h2>plz subscribe my channel</h2>,
      <p>This is array</p>
  ]
,
  document.getElementById('root')
);


