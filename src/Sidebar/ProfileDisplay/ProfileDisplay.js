import React, { useEffect, useState } from 'react'
import './ProfileDisplay.css'
import { getUserInfo } from '../../globalFunctions'

function ProfileDisplay() {
	const [username,setUsername] = useState(null)
	
	useEffect(()=>{
		getUserInfo().then((user)=>{
			setUsername(user.username)
		})
	},[])
	return (
		<div className='pfd-main'>
			<span className='pfp-pic'></span>
			<h3 className='username-display'>{username || "Error Displaying"}</h3>
			<p className='rift-id-display'>#000000</p>
		</div>
	)
}

export default ProfileDisplay