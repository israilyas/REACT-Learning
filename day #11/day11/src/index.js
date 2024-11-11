import React from 'react';
import ReactDOM from 'react-dom';

const mName = "ISRA";
const image = "https://picsum.photos/200/300";
const link_youtube = "https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=14&t=11s"

ReactDOM.render(
  <>
    <h1 contentEditable="true">My name is {mName}</h1>
    <img src={image} alt='random images'/>
    <a href={link_youtube} target='_'>Thapa Technical</a>
  </>,
  document.getElementById('root')
)
