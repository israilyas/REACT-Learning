import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const mName = "ISRA";
const image1 = "https://picsum.photos/200/300";
const image2 = "https://picsum.photos/250/300";
const image3 = "https://picsum.photos/300/300";
const link_youtube = "https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=14&t=11s"

ReactDOM.render(
  <>
    <h1 className='heading'>My name is {mName}</h1>
      <div className='imgDiv'>
      <img src={image1} alt='random images' />
      <img src={image2} alt='random images' />
      <a href={link_youtube} target='_'>
        <img src={image3} alt='random images' />
  </a >
      </div>
      
<a href={link_youtube} target='_'>Thapa Technical</a>
  </>,
  document.getElementById('root')
)
