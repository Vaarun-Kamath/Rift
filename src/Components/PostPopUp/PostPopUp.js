import React, { useRef, useEffect , useState} from 'react';
import './PostPopUp.css'
import ReactDom from 'react-dom'
import Button from '../Buttons/Button'


function PostPopUp({ open, children , onClose}) {
    const textareaRef = useRef(null);

    useEffect(() => {
        var textarea_var = document.getElementById('post-type-content-id');
        console.log(textarea_var)
        if (textarea_var) {
            const handleInput = () => {
                textarea_var.style.height = 'auto';
                textarea_var.style.height = textarea_var.scrollHeight + 'px';
            };

            const handleKeyPress = (event) => {
                if (event.key === 'Enter' && event.shiftKey) {
                    event.preventDefault();
                }
            };

            textarea_var.addEventListener('input', handleInput);
            textarea_var.addEventListener('keypress', handleKeyPress);

            return () => {
                textarea_var.removeEventListener('input', handleInput);
                textarea_var.removeEventListener('keypress', handleKeyPress);
            };
        }
    }, [open]);
    if(!open) return null

    const createPost = ()=>{
        console.log("Creating Post")
        // Create user post on database
    }

    
    
    return ReactDom.createPortal(
        <>
            <div className='postpopup-overlay'></div>
            <div className='postpopup-main'>
                <div className='post-form-containter'>
                    <h1 >Create a post</h1>
                    <div className='post-content-main-container'>
                        {/* <input className='post-type-content' autoCorrect='on' autoComplete='on' placeholder='Post on Rift' type='text'/> */}
                        <textarea ref={textareaRef} className='post-type-content' id='post-type-content-id' autoCorrect='on' autoComplete='on' placeholder='Post on Rift' ></textarea>
                        {/* {setIsRendered(true)} */}
                    </div>
                    {/* <div className='post-upload-button-container'><span className=''></span></div> */}
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