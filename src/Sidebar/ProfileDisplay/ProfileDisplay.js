import React from 'react'
import './ProfileDisplay.css'

function ProfileDisplay({user}) {

	return (
		// pfd = ProfileDisplay
		<div className='pfd-main'>
			<span className='pfp-pic'></span>
			<h3 className='username-display'>{user.username}</h3>
			<p className='rift-id-display'>#000000</p>
			{/* <div className='buttons-container'> */}
				{/* SETTINGS and PROFILE Button Components */}
				{/* <div className='settings-button-container'><Button>Settings</Button></div>
				<div className='profile-button-container'><Button>Profile</Button></div> */}
				{/* <Button value = "Settings"/>
				<Button value = "Profile"/> */}
			{/* </div> */}
		</div>
	)
}

export default ProfileDisplay

