import React, { useContext, useEffect, useState } from 'react'
import './Messages.css'
import Sidebar from '../../Sidebar/Sidebar'
import DMChat from './DMChat/DMChat'
import DMUsers from './DMUsers/DMUsers'
import { getUserInfo } from '../../globalFunctions'
import { UserContext } from '../../userContext'
// import { SelectedDM } from '../../SelectedUserDMContext'

function Messages() {
    const [ws,setWs] = useState(null);
    // const [currentUser,setCurrentUser] = useState({});
    const {setCurrUser} = useContext(UserContext);
    const {selectedUserId, setSelectedUserId} = useContext(UserContext);
    const [onlineUsers,setOnlineUsers] = useState({});
    const [messages,setMessages] = useState([]);

    useEffect(()=>{
        connectWs()
        getUserInfo().then(currentUser=>{
            setCurrUser(currentUser);
        });
    },[])

    useEffect(()=>{
        console.log("Messages.js : selectedUserId: ",selectedUserId);
        localStorage.setItem('selectedUserId',selectedUserId);
    },[selectedUserId]);

    const connectWs = ()=>{
        const ws = new WebSocket('ws://localhost:8000');
        setWs(ws);
        ws.addEventListener('message',handleMessage)
        ws.addEventListener('close',()=> {
            setTimeout(()=>{
                console.log("Disconnected, reconnecting...");
                connectWs();
            },1000)
        })
    }
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
        const selectedId = localStorage.getItem('selectedUserId');
        console.log("Messages.js : selectedId : ",selectedId);
        if('online' in data){
            showOnlineUsers(data.online);
        }else if('text' in data){
            console.log("SENDER: ",data.sender, "SELECTED:",selectedId);
            if(data.sender === selectedId){
                setMessages(prev=>([...prev,{
                    sender: data.sender,
                    recipient: data.recipient,
                    text: data.text,
                    isUsers: false
                }]));
            }
        }
    }
    

    return (
            <div className='messages-root'>
                <div className='sidebar-container'>
                    <Sidebar from="Messages"/>
                </div>
                <div className='direct-message-users-chat'>
                    <DMChat 
                        onlineUsers = {onlineUsers} 
                        // currUser = {currentUser} 
                        ws = {ws}
                        setMessages = {setMessages}
                        messages = {messages}
                        setSelectedUserId = {setSelectedUserId}
                        selectedUserId = {selectedUserId}
                    />
                    <DMUsers 
                        onlineUsers = {onlineUsers} 
                        // currUser = {currentUser} 
                        ws = {ws}
                        setMessages = {setMessages}
                        messages = {messages}
                        setSelectedUserId = {setSelectedUserId}
                        selectedUserId = {selectedUserId}
                    />
                </div>
            </div>
        
    )
}

export default Messages