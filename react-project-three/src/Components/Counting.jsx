import React, { useState } from 'react'
import './Counting.css';
const counter = () => {
  const [count,setCount]=useState(0)
  return (
    <div className='counter-Container'>
        <p className='para'>
            you have clicked button {count} times
        </p>
        <button className='buton' onClick={()=>{
          setCount(count+1)
        }}>click me</button>
      
    </div>
  )
}

export default counter
