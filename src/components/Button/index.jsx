import React from 'react'

export default function Button(props) {

  const handleClick = () => {
    if(props.onClick) {
      props.onClick()
    }
  }

  return (
    <button 
      onClick={() => handleClick()} 
      className={props.className}> 
      {props.children} 
    </button>
  )
}