import React, { useContext, useEffect, useRef, useState } from 'react'
import "./DMChat.css"
import axios from 'axios'
// import { SelectedDM } from '../../../SelectedUserDMContext'
import { UserContext } from '../../../userContext'

function DMChat({onlineUsers,ws,messages,setMessages}) {
    // ! format of onlineUsers = {dbId: username}
    const {currUser} = useContext(UserContext)
    const {selectedUserId} = useContext(UserContext)
    const [directMessage,setDirectMessage] = useState('')
    const divUnderMessages = useRef();
    
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
    useEffect(()=>{
        const div = divUnderMessages.current;
        if(div){
            div.scrollIntoView({behavior: 'smooth'});
        }

    },[messages])

    useEffect(()=>{
        // console.log("INSIDE USE EFFECT TO FETCH")
        setMessages([]);
        if(selectedUserId){
            console.log("Fetching Chats for user(current): " + currUser.username);
            axios.get('http://localhost:8000/api/messages/'+selectedUserId).then((res)=>{
                res.data.forEach((message)=>{
                    setMessages(prev=>([...prev,{
                        sender: message.sender,
                        recipient: message.recipient,
                        text: message.text, 
                        isUsers: (message.sender === currUser.dbID)
                    }]));
                })
            })
        }
    },[selectedUserId]);

    /*
        ! Messages Format
        * sender: currUser.dbID,
        * recipient: selectedUserId,
        * text: directMessage, 
        * isUsers: true
    */
    return (
        <div className='direct-message-chat'>
            <div className='direct-message-selected-user-info-container'>
                <h1>{onlineUsers[selectedUserId]}</h1>
            </div>
            <div className={'direct-message-chats-container-main ' +(selectedUserId === null ? 'direct-message-chats-container-closed': 'direct-message-chats-container-open')}>
                {selectedUserId === null && <h1>Select a user to send messages </h1>}
                {selectedUserId !== null  && (
                    <div className='direct-message-chats'>
                        {/* {console.log("Messages to Display: ",messages)} */}
                        {messages.map((message,index) => (
                            <div key={index} className={'direct-message-chat-box-container '+(message.isUsers === true?'chat-align-right':'chat-align-left')}>
                                <div className={'direct-message-chat-text-box ' +
                                        (message.isUsers === true?'direct-message-chat-right ':'direct-message-chat-left')}>
                                    {message.text}
                                </div>
                                <div ref={divUnderMessages}></div>
                            </div>
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