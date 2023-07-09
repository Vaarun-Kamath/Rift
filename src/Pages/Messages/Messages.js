import React, { useEffect, useState } from 'react'
import './Messages.css'
import Sidebar from '../../Sidebar/Sidebar'
import DMChat from './DMChat/DMChat'
import DMUsers from './DMUsers/DMUsers'
import { getUserInfo } from '../../globalFunctions'
import { SelectedDMContextProvider } from './SelectedUserDMContext'

function Messages({user,fetchPostsAndLikes, posts, likedStatus}) {
    const [ws,setWs] = useState(null);
    const [currentUser,setCurrentUser] = useState(null);
    const [onlineUsers,setOnlineUsers] = useState({});
    useEffect(()=>{
        const ws = new WebSocket('ws://localhost:8000');
        setWs(ws);
        ws.addEventListener('message',handleMessage)
        getUserInfo().then(currentUser=>{
            setCurrentUser(currentUser);
        });
    },[])
    const showOnlineUsers = (usersArray)=>{
        const users = {}
        usersArray.forEach(({dbID,username})=>{
            users[dbID] = username
        })
        setOnlineUsers(users)
    }
    const handleMessage = (event)=>{
        const data = JSON.parse(event.data)
        if('online' in data){
            showOnlineUsers(data.online);
        }
    }
    return (
        <SelectedDMContextProvider>
            <div className='messages-root'>
                <div className='sidebar-container'>
                    <Sidebar user={user} 
                        posts = {posts} 
                        likedStatus={likedStatus} 
                        fetchPostsAndLikes={fetchPostsAndLikes}
                        from="Messages"
                    />
                </div>
                <div className='direct-message-users-chat'>
                    <DMChat onlineUsers = {onlineUsers} currUser = {currentUser}/>
                    <DMUsers onlineUsers = {onlineUsers} currUser = {currentUser}/>
                </div>
            </div>
        </SelectedDMContextProvider>
        
    )
}

export default Messages