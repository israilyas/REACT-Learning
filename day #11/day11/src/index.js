import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const mName = "ISRA";
const image1 = "https://picsum.photos/200/300";
const image2 = "https://picsum.photos/250/300";
const image3 = "https://picsum.photos/300/300";
const link_youtube = "https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=14&t=11s"

// CSS
const heading = {
  color: '#fa9191',
  textAlign: 'center',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  fontFamily: "Josefin Sans",
  marginTop:'20px',
  textShadow: '0px 2px 4px #e71c96',
  fontFamily: '"Josefin", Sans sans-serif'
}

ReactDOM.render(
  <>
  {/* Inline CSS */}
    <h1 style={heading}>My name is {mName}</h1>
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
