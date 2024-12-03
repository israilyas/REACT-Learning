import React from 'react';
import "./style.css";

const image ="myimage";

const Restaurant = () => {
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='card-body'>
            <span className='card-number card-circle subtle'>1</span>
            <span className='card-author subtle'>Breakfast</span>
            <h2 className='card-title'>Maggi</h2>
            <span className='card-description subtle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium consectetur magnam, sed illo saepe enim reprehenderit dolorum modi aliquam?</span>
            <div className='card-read'>Read</div>
            <img src="{image" alt="images" className='card-media' />
            <span className='card-tag subtle'>Order Now</span>
        </div>
      </div>
    </div>
  )
}

export default Restaurant

