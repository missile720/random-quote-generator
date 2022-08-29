import React, { useState } from 'react'
import "./Body.css"

function Body(props) {
  const [number, setNumber] = useState(0);

  const randomizeQuote = () => {
    let num = Math.floor(Math.random() * props.data.length);
    setNumber(num);

    //randomizes number for each part of the color
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    
    document.body.style=`background: rgba(${red}, ${green}, ${blue});`;
  };

  return (
    <div className='container'>
      <div className='box'>
        <h2>{props.data[number].quote}</h2>
        <p>-{props.data[number].author}</p>
      </div>
      <button className='button' onClick={randomizeQuote}>New Quote</button>
    </div>
  )
}

export default Body