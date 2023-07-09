import React, { useContext } from 'react'
import "./DMChat.css"
import { SelectedDM } from '../SelectedUserDMContext'

function DMChat({onlineUsers,currUser}) {
    // ! format of onlineUsers = {dbId: username}
    const {selectedUserId} = useContext(SelectedDM)
    return (
        <div className='direct-message-chat'>
            <div className='direct-message-selected-user-info-container'>
                
            </div>
            <div className={'direct-message-chats-container-main ' +(selectedUserId === null ? 'direct-message-chats-container-closed': 'direct-message-chats-container-open')}>
                {selectedUserId === null ? <h1>Select a user to send messages</h1>:<h1>{onlineUsers[selectedUserId]}</h1>}
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