import React, { useRef, useEffect } from 'react';
import './StoryPopUp.css'
import ReactDom from 'react-dom'
import Button from '../Buttons/Button'

function StoryPopUp({ open, children , onClose}) {
    if(!open) return null
    return ReactDom.createPortal(
        <>
            <div className='storypopup-overlay'></div>
            <div className='storypopup-main'>
                <Button onClick={onClose}>Cancel</Button>
                <br />
                <br />
                {children}
            </div>
        </>,
        document.getElementById('story-portal')
    )
}

export default StoryPopUp