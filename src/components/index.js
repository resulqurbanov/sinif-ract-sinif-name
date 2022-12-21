import React from 'react'
import './style.scss'
function Card({src,price,name}) {
  return (
    <div>
       <img src={src} alt=""/>
      <p>{price} manat</p>
      <p>{name}</p>
    </div>
  )
}

export default Card