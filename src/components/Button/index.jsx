import React from 'react'

const  Button = (props) => {

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

export { Button}