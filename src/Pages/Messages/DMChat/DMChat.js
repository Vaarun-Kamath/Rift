import React, { useContext, useState } from 'react'
import "./DMChat.css"
import { SelectedDM } from '../SelectedUserDMContext'

function DMChat({onlineUsers,currUser,ws,messages,setMessages}) {
    // ! format of onlineUsers = {dbId: username}
    const {selectedUserId} = useContext(SelectedDM)
    const [directMessage,setDirectMessage] = useState('')
    // const [messages,setMessages] = useState([]);
    const handleMessageInput = (event)=>{
        setDirectMessage(event.target.value)
    }
    // Sending new messages
    const handleSendMessage = (event)=>{
        event.preventDefault()
        ws.send(JSON.stringify({
            message:{
                recipient: selectedUserId,
                text: directMessage,
            }
        }));
        setDirectMessage('')
        setMessages(prev=>([...prev,{
            sender: currUser.dbID,
            recipient: selectedUserId,
            text: directMessage, 
            isUsers: true
        }]));
    }
    return (
        <div className='direct-message-chat'>
            <div className='direct-message-selected-user-info-container'>
                
            </div>
            <div className={'direct-message-chats-container-main ' +(selectedUserId === null ? 'direct-message-chats-container-closed': 'direct-message-chats-container-open')}>
                {selectedUserId === null && <h1>Select a user to send messages </h1>}
                {selectedUserId !== null && (
                    <div className='direct-message-chats'>
                        {messages.map((message,index) => (
                            <div key={index}>{message.text}{console.log("MESSAGEEE: ",message)}</div>
                        ))}
                    </div>
                )}
            </div>
            <form className='direct-message-chats-engagement-container' onSubmit={handleSendMessage}>
                <div className='direct-message-input-container'>
                    <input 
                        disabled = {selectedUserId === null} 
                        type='text' 
                        className='direct-message-input' 
                        placeholder='Type your Message' 
                        onChange={handleMessageInput}
                        value={directMessage}
                    />
                </div>
                <div className='direct-message-send-container'>
                    <button 
                        disabled = {selectedUserId === null} 
                        type='submit' 
                        className='direct-message-send-button'>
                    </button>
                </div>
            </form>
        </div>
    )
}   

export default DMChat