import React, {useState} from 'react'
import "./PostButton.css"
import PostPopUp from '../PostPopUp/PostPopUp';
import StoryPopUp from '../StoryPopUp/StoryPopUp';


function PostButton({value}) {
	const [isPostOpen,setPostIsOpen] = useState(false);
	const [isStoryOpen,setStoryIsOpen] = useState(false);
	if(value == 'Post') {
		return (
			<>
				<div className='post-button-main' onClick={()=>setPostIsOpen(true)}>{value}</div>
				<PostPopUp open={isPostOpen} onClose={()=>setPostIsOpen(false)}></PostPopUp>
			</>
		)
	}else if(value == 'Story') {
		return(
			<>
				<div className='story-button-main' onClick={()=>setStoryIsOpen(true)}>{value}</div>
				<StoryPopUp open={isStoryOpen} onClose={()=>setStoryIsOpen(false)}>Insert Story part</StoryPopUp>
			</>
		)
	}
}

export default PostButton

// class PostButton extends Component {
// 	constructor(props){  
// 		super(props);  
// 		this.state={
// 			value:this.props.value,
// 			redirectLink: this.props.redirectLink
// 		}
// 	} 
// 	render() {
// 		return ()
// 	}
// }
