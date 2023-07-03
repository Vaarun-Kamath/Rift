import React, { useRef, useEffect , useState} from 'react';
import './PostPopUp.css'
import ReactDom from 'react-dom'
import Button from '../Buttons/Button'
// import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { fetchHomePosts } from '../../globalFunctions';


function PostPopUp({ open, children , onClose,setPosts,fetchPostsFunction}) {
    // const navigate = useNavigate();
    const textPostRef = useRef(null);
    const [textPostValue, setTextPostValue] = useState('')
    const [filesPost, setFilesPost] = useState('')


    const loadingBlur = (val)=>{
		const overlayDiv = document.getElementById('post-notouch-overlay-id')
		if (val === true){
			overlayDiv.style.display = 'initial'
		}else{
			overlayDiv.style.display = 'none'
		}
	}

    useEffect(() => {
        var textPost = document.getElementById('post-type-content-id');
        // console.log(textPost)
        if (textPost) {
            const handleInput = () => {
                textPost.style.height = 'auto';
                textPost.style.height = textPost.scrollHeight + 'px';
            };

            const handleKeyPress = (event) => {
                if (event.key === 'Enter' && event.shiftKey) {
                    event.preventDefault();
                }
            };

            // const closePopUp = (event)=>{
            //     if(event.key === 'Escape'){
            //         onClose();
            //     }
            // }

            textPost.addEventListener('input', handleInput);
            textPost.addEventListener('keypress', handleKeyPress);
            // textPost.addEventListener('escape',closePopUp)

            return () => {
                textPost.removeEventListener('input', handleInput);
                textPost.removeEventListener('keypress', handleKeyPress);
                // textPost.removeEventListener('escape',closePopUp);
            };
        }
    }, [open]);
    if(!open) return null

    const handleOnPost = ()=>{
        onClose();
        fetchPostsFunction()
    }

    async function createPost(event){
        if(textPostValue.length > 0){
            event.preventDefault();
            loadingBlur(true)
            const token = localStorage.getItem('token')
            const data  = new FormData();
            data.set('token',token)
            data.set('postText',textPostValue)
            data.set('files',filesPost[0]) // TAKING ONLY 1 FILE (CHANGE LATER) 
            const response = await fetch('http://localhost:8000/api/post',{
                method:'POST',
                body:data,
            })

            const resData = await response.json();
            if(resData.status === 'OK'){
                console.log(`Post Created`);
            }else{
                console.log("Error in Post creation");
            }
            handleOnPost();
            loadingBlur(false);
        }
        
    }

    const handleTextPostChange = (event)=> setTextPostValue(event.target.value);
    
    
    return ReactDom.createPortal(
        <>
            <div className='postpopup-overlay' onClick={onClose}></div>
            <div className='postpopup-main'>
                <div className='post-notouch-overlay' id='post-notouch-overlay-id'></div>
                <div className='post-form-containter'>
                    <h1 >Create a Rift</h1>
                    <div className='post-content-main-container'>
                        <textarea ref={textPostRef} 
                            onChange={handleTextPostChange} 
                            className='post-type-content' 
                            id='post-type-content-id' 
                            autoCorrect='on' 
                            autoComplete='on' 
                            placeholder='Post on Rift' 
                            autoFocus='on' >
                        </textarea>
                        <div className='post-upload-button-container'>
                            <input className='post-upload-button' onChange={event => setFilesPost(event.target.files)} type='file' />
                        </div>
                        {/* <ReactQuill className='post-type-content' ref={textPostRef}/> */}
                    </div>
                    <div className='popup-button-containers'>
                        <div className='cancel-button-container post-button-container'><Button className='post-close-button popup-post-button' onClick={onClose}>Cancel</Button></div>
                        <div className='post-create-button-container post-button-container'><Button className='post-create-button popup-post-button' onClick={createPost}>Post</Button></div>
                    </div>
                    {/* <button className='post-close-button' onClick={onClose}></button> */}
                </div>
                {/* {children} */}
            </div>
        </>,
        document.getElementById('post-portal')
    )
}

export default PostPopUp