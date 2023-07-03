import React from 'react'
import "./NavButton.css"
import { useNavigate } from "react-router-dom";

function NavButton({value,redirect}) {
	let navigate = useNavigate();
	const handleNavRedirect = ()=>{
		if(redirect != null) navigate(redirect);
	}
	return (
		<div className='nav-button-container'>
			<div className='nav-button-main' onClick={handleNavRedirect}>{value}</div>
		</div>
	)
}

export default NavButton