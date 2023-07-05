import React from 'react'
import "./DMChat.css"

function DMChat() {
    return (
        <div className='direct-message-chat'>
            <div className='direct-message-selected-user-info-container'>

            </div>
            <div className='direct-message-chats-container'>

            </div>
            <div className='direct-message-chats-engagement-container'>
                <div className='direct-message-input-container'>
                    <input type='text' className='direct-message-input' placeholder='Type your Message' />
                </div>
                <div className='direct-message-send-container'>
                    <div className='direct-message-send-button'></div>
                </div>
            </div>
        </div>
    )
}   

export default DMChat