import React from 'react'

const Cards = (props) => {
  return (
    <div>
        {props.children}
      {props.name}
    </div>
  )
}

export default Cards
