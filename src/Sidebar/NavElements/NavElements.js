import React from 'react'
import "./NavElements.css"
import NavButton from "../../Components/NavButton/NavButton"
import PostButton from '../../Components/PostButton/PostButton'

function NavElements({fetchPostsAndLikes, posts, likedStatus}) {
	return (
		<div className='nav-elem-main'>
			<div className='nav-buttons-container'>
				<NavButton value = "Home" 
					redirect = {"/home"}
					fetchPostsAndLikes = {fetchPostsAndLikes}
					posts = {posts}
					likedStatus = {likedStatus}
				/>
				<NavButton value = "Livestreams" 
					redirect= {"/live"}
					fetchPostsAndLikes = {fetchPostsAndLikes}
					posts = {posts}
					likedStatus = {likedStatus}
				/>
				<NavButton value = "Explore" 
					redirect={"/explore"}
					fetchPostsAndLikes = {fetchPostsAndLikes}
					posts = {posts}
					likedStatus = {likedStatus}
				/>
				<NavButton value = "Direct Messages" 
					redirect={"/messages"}
					fetchPostsAndLikes = {fetchPostsAndLikes}
					posts = {posts}
					likedStatus = {likedStatus}
				/>
				<NavButton value = "Game Stats" 
					redirect={"/gamestats"}
					fetchPostsAndLikes = {fetchPostsAndLikes}
					posts = {posts}
					likedStatus = {likedStatus}
				/>
			</div>
			<div className='post-story-container'>
				<div className='story-main'>
					<PostButton value="Story" />
				</div>
				<div className='post-main'>
					<PostButton value="Rift" posts = {posts} likedStatus={likedStatus} fetchPostsAndLikes={fetchPostsAndLikes}/>
				</div>
				
			</div>
		</div>
	)

}

export default NavElements