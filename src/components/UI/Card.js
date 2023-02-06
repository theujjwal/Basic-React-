import React from 'react'
import clasess from './Card.module.css'


export default function (props) {
  return (
    <div className={`${clasess.card} ${props.className}`}>{props.children}</div>
  )
}
