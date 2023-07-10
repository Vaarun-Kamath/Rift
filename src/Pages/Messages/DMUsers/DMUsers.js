// eslint-disable-next-line
import React, { useContext, useState } from 'react'
import "./DMUsers.css"
import UserDMButton from '../../../Components/UserDMButton/UserDMButton'
import { SelectedDM } from '../SelectedUserDMContext'
import { UserContext } from '../../../userContext'

function DMUsers({onlineUsers}) {
    // ! format of onlineUsers = {dbId: username}
    const {currUser} = useContext(UserContext)
    const {selectedUserId, setSelectedUserId} = useContext(SelectedDM)

    const handleNewDMClick = ()=>{
        console.log("Add New DM")
    }
    console.log("CURRRR: ",currUser)
    const selectUser = (userId)=>{
        console.log("Selected User: ",userId === null?"null":onlineUsers[userId])
        setSelectedUserId(userId)
    }
    return (
        <div className='direct-message-user'>
            {/* DMUsers */}
            <div className='direct-message-heading'>
                <div><h1>Messages</h1></div>
                <div className='new-direct-message-button-container' onClick={handleNewDMClick}>
                    <div className='new-direct-message-button'>+</div>
                </div>
            </div>
            <div className='direct-message-user-button-container'>
                {(Object.keys(onlineUsers).length === 1 || Object.keys(onlineUsers)[0] == null)? 
                    <div className='no-users-Online'>
                        <h2>No users online</h2>
                    </div>
                    :
                    console.log("USERS ONLINE: ",Object.keys(onlineUsers))
                }
                {Object.keys(onlineUsers).map((userId,index)=>{
                    if(onlineUsers[userId] !== currUser.username){
                        return <UserDMButton 
                        onClick={()=> selectUser(userId)} 
                        username = {onlineUsers[userId]} 
                        key={index}
                        selected={selectedUserId === userId?true:false} 
                        />
                    }else{
                        return null
                    }
                })}
            </div>
        </div>
    )
}

export default DMUsers