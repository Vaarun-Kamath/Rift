import React, { Component } from 'react'
import './ProfileDisplay.css'
import Button from '../../Components/Buttons/Button'


export default class ProfileDisplay extends Component {
	render() {
		return (
			// pfd = ProfileDisplay
			<div className='pfd-main'>
				<span className='pfp-pic'></span>
				<h3 className='username-display'>Username</h3>
				<p className='rift-id-display'>#000000</p>
				<div className='buttons-container'>
					{/* SETTINGS and PROFILE Button Components */}
					<Button value = "Settings"/>
					<Button value = "Profile"/>
				</div>
			</div>
		)
	}
}
