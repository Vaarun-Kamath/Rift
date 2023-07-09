import React from 'react'
import "./NavElements.css"
import NavButton from "../../Components/NavButton/NavButton"
import PostButton from '../../Components/PostButton/PostButton'

function NavElements({fetchPostsAndLikes, posts, likedStatus,from='None'}) {
	return (
		<div className='nav-elem-main'>
			<div className='nav-buttons-container'>
				<NavButton value = "Home" 
					redirect = {"/home"}
					fetchPostsAndLikes = {fetchPostsAndLikes}
					posts = {posts}
					likedStatus = {likedStatus}
					from = {from}
				/>
				<NavButton value = "Livestreams" 
					redirect= {"/live"}
					fetchPostsAndLikes = {fetchPostsAndLikes}
					posts = {posts}
					likedStatus = {likedStatus}
					from = {from}
				/>
				<NavButton value = "Explore" 
					redirect={"/explore"}
					fetchPostsAndLikes = {fetchPostsAndLikes}
					posts = {posts}
					likedStatus = {likedStatus}
					from = {from}
				/>
				<NavButton value = "Direct Messages" 
					redirect={"/messages"}
					fetchPostsAndLikes = {fetchPostsAndLikes}
					posts = {posts}
					likedStatus = {likedStatus}
					from = {from}
				/>
				<NavButton value = "Game Stats" 
					redirect={"/gamestats"}
					fetchPostsAndLikes = {fetchPostsAndLikes}
					posts = {posts}
					likedStatus = {likedStatus}
					from = {from}
				/>
			</div>
			<div className='post-story-container'>
				<div className='story-main'>
					<PostButton value="Story" />
				</div>
				<div className='post-main'>
					<PostButton 
						value="Rift" 
						posts = {posts} 
						likedStatus={likedStatus} 
						fetchPostsAndLikes={fetchPostsAndLikes}
						from = {from}
					/>
				</div>
				
			</div>
		</div>
	)

}

export default NavElements