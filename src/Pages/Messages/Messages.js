import React, { useContext, useEffect, useState } from 'react'
import './Messages.css'
import Sidebar from '../../Sidebar/Sidebar'
import DMChat from './DMChat/DMChat'
import DMUsers from './DMUsers/DMUsers'
import { getUserInfo } from '../../globalFunctions'
import { SelectedDMContextProvider } from './SelectedUserDMContext'

function Messages() {
    const [ws,setWs] = useState(null);
    const [currentUser,setCurrentUser] = useState({});
    const [onlineUsers,setOnlineUsers] = useState({});
    const [messages,setMessages] = useState([]);

    useEffect(()=>{
        const ws = new WebSocket('ws://localhost:8000');
        setWs(ws);
        ws.addEventListener('message',handleMessage)
        getUserInfo().then(currentUser=>{
            setCurrentUser(currentUser);
        });
    },[])
    // Sets Online Users Status
    const showOnlineUsers = (usersArray)=>{
        const users = {}
        usersArray.forEach(({dbID,username})=>{
            users[dbID] = username
        })
        setOnlineUsers(users)
    }

    // Getting new Messages
    const handleMessage = (event)=>{
        const data = JSON.parse(event.data)
        if('online' in data){
            showOnlineUsers(data.online);
        }else if('text' in data){
            console.log(currentUser)
            setMessages(prev=>([...prev,{
                sender: data.sender,
                recipient: data.recipient,
                text: data.text, 
                isUsers: false
            }]));
        }
    }
    return (
        <SelectedDMContextProvider>
            <div className='messages-root'>
                <div className='sidebar-container'>
                    <Sidebar from="Messages"/>
                </div>
                <div className='direct-message-users-chat'>
                    <DMChat 
                        onlineUsers = {onlineUsers} 
                        currUser = {currentUser} 
                        ws = {ws}
                        setMessages = {setMessages}
                        messages = {messages}
                    />
                    <DMUsers 
                        onlineUsers = {onlineUsers} 
                        currUser = {currentUser} 
                        ws = {ws}
                        setMessages = {setMessages}
                        messages = {messages}
                    />
                </div>
            </div>
        </SelectedDMContextProvider>
        
    )
}

export default Messages