import React from 'react'

const Button = (props) => {
  return (
    <div>
        {props.count}
      <button onClick={props.clicking}>Click me</button>
    </div>
  )
}

export default Button
