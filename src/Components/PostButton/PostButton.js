import React, {useState} from 'react'
import "./PostButton.css"
import PostPopUp from '../PostPopUp/PostPopUp';
import StoryPopUp from '../StoryPopUp/StoryPopUp';


function PostButton({value,setPosts,fetchPostsFunction}) {
	const [isPostOpen,setPostIsOpen] = useState(false);
	const [isStoryOpen,setStoryIsOpen] = useState(false);
	if(value == 'Rift') {
		return (
			<>
				<div className='overlay-button-container' style={{height:'100%', width:'100%'}}>
					<div className='post-button-main overlay-button' onClick={()=>setPostIsOpen(true)}>{value}</div>
				</div>
				<PostPopUp open={isPostOpen} onClose={()=>setPostIsOpen(false) } fetchPostsFunction = {fetchPostsFunction} setPosts = {setPosts}></PostPopUp>
			</>
		)
	}else if(value == 'Story') {
		return(
			<>
				<div className='overlay-button-container' style={{height:'100%', width:'100%'}}>
					<div className='story-button-main overlay-button' onClick={()=>setStoryIsOpen(true)}>{value}</div>
				</div>
				<StoryPopUp open={isStoryOpen} onClose={()=>setStoryIsOpen(false)}>Insert Story part</StoryPopUp>
			</>
		)
	}
}

export default PostButton