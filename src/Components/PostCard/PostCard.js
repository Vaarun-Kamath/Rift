import React, { useEffect, useState } from 'react'
import './PostCard.css'
import axios from 'axios'

function Post({
	children,
	username,
	postId,
	likesNumber=0,
	commentNumber=0,
	reriftNumber=0,
	shareNumber=0,
	likeStat
}){
	// console.log(likeStat)
	var likeStatCurr = likeStat[postId]
	// console.log(`PostCard: ${likeStatCurr} : ${children}`)
	const [postLiked,setPostLiked] = useState(likeStatCurr)
	const [likesOutput,setLikesOutput] = useState(likesNumber)
	
	// console.log(`${likeStat[postId]} IN POSTCARD: `,postLiked,": ",children,": ",postId)
	const likeClicked =()=>{

		var newPostLiked = !postLiked; // Negate the current value of postLiked
  		setPostLiked(newPostLiked);

		axios.post('http://localhost:8000/api/post/like',{
			userToken: localStorage.getItem('token'),
			postId: postId,
			userLiked: newPostLiked
		}).then(response =>{
			if(response.data.status === 'OK'){
				console.log("POST LIKED")
				console.log(response)
				if(response.data.isLiked) setLikesOutput(prev=>prev+1)
				else setLikesOutput(prev=>prev-1)
			}else{
				console.log(response)
				newPostLiked = !newPostLiked
				setPostLiked(newPostLiked)
			}
		}).catch(error =>{
			console.log("ERROR IN LIKING POST");
			console.log(error);
		})
	}
	useEffect(() => {
		setPostLiked(likeStatCurr)
	}, [likeStatCurr]);
	return (
		<div className='postcard-box-container'>
			<div className='postcard-heading'>
				<div className='post-user-info-container'>
				<div className='pf-pic-disp-container header-element'><span className='pfp-main-container'></span></div>
				<span className='pf-name header-element'>
					<p className='username-container-main header-text-main'>
						{username.charAt(0).toUpperCase() + username.slice(1)}
					</p>
					<p className='rift-id-container-main header-text-main'>Rift ID Here</p>
				</span>
				</div>
				<div className='pf-interactive header-element'></div>
			</div>
			<div className='postcard-content'>
				<span className='content-text-container'>
				<p className='content-text-main'>
					{children}
				</p> 
				</span> 
				{/* <span className='content-imgvid-container'></span> */}
			</div>
			<div className='postcard-engage'>
				<div className='like-button-container engage-button-container' >
					<div className={`like-button engage-button ${postLiked ? 'like-button-clicked' : 'like-button'}`} onClick={likeClicked} id='like-button-id'></div> 
					<span className='like-button-stats engage-button-stats' id='like-button-stats-id'>{likesOutput}</span>
				</div>
				<div className='comment-button-container engage-button-container'>
					<div className='comment-button engage-button'></div>
					<span className='comment-button-stats engage-button-stats' id='comment-button-stats-id'>{commentNumber}</span>
				</div>
				<div className='rerift-button-container engage-button-container'>
					<div className='rerift-button engage-button'></div>
					<span className='rerift-button-stats engage-button-stats' id='rerift-button-stats-id'>{reriftNumber}</span>
				</div>
				<div className='share-button-container engage-button-container'>
					<div className='share-button engage-button'></div>
					<span className='share-button-stats engage-button-stats' id='share-button-stats-id'>{shareNumber}</span>
				</div>
			</div>
		</div>
	)
}

export default Post