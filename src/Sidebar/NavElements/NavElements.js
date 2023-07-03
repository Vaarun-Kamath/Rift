import React from 'react'
import "./NavElements.css"
import NavButton from "../../Components/NavButton/NavButton"
import PostButton from '../../Components/PostButton/PostButton'

function NavElements({user,setPosts,fetchPostsFunction}) {
	return (
		<div className='nav-elem-main'>
			<div className='nav-buttons-container'>
				<NavButton value = "Home" redirect = {"/home"}/>
				<NavButton value = "Livestreams" redirect= {"/live"}/>
				<NavButton value = "Explore" redirect={"/explore"}/>
				<NavButton value = "Direct Messages" redirect={"/"}/>
				<NavButton value = "Game Stats"/>
			</div>
			<div className='post-story-container'>
				<div className='story-main'>
					<PostButton value="Story" />
				</div>
				<div className='post-main'>
					<PostButton value="Rift" setPosts = {setPosts} fetchPostsFunction = {fetchPostsFunction}/>
				</div>
				
			</div>
		</div>
	)

}

export default NavElements