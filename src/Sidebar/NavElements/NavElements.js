import React, { Component } from 'react'
import "./NavElements.css"
import NavButton from "../../Components/NavButton/NavButton"
import PostButton from '../../Components/PostButton/PostButton'

export default class NavElements extends Component {
	render() {
		return (
			<div className='nav-elem-main'>
				<div className='nav-buttons-container'>
					<NavButton value = "Home"/>
					<NavButton value = "Livestreams"/>
					<NavButton value = "Explore"/>
					<NavButton value = "Rift"/>
					<NavButton value = "Game Stats"/>
				</div>
				<div className='post-story-container'>
					<div className='story-main'>
						<PostButton value="Story"/>
					</div>
					<div className='post-main'>
						<PostButton value="Post"/>
					</div>
					
				</div>
			</div>
		)
	}
}
