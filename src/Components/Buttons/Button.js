import React from 'react'
import "./Button.css"
// import { Navigate, useNavigate } from 'react-router-dom';

function Button({onClick,children}) {
  return (
	<div className='button-main' onClick={onClick}>{children}</div>
  )
}

export default Button

