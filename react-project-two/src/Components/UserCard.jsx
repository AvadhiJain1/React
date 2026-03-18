import React from 'react'
import './UserCard.css';
const UserCard = (props) => {
  return (
    <div className='User-Container'>
        <p id='User-Name'>{props.name}</p>
        <p id='User-description'>{props.des}</p>
      
    </div>
  )
}

export default UserCard
