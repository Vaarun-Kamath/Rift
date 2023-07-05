import React from 'react'
import './ProfileDisplay.css'
import { getUserInfo } from '../../globalFunctions'

function ProfileDisplay() {
	const user = getUserInfo()
	return (
		// pfd = ProfileDisplay
		<div className='pfd-main'>
			<span className='pfp-pic'></span>
			<h3 className='username-display'>{user.username || "Error Displaying"}</h3>
			<p className='rift-id-display'>#000000</p>
		</div>
	)
}

export default ProfileDisplay

