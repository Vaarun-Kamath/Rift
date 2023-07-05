import React from 'react'
import './Messages.css'
import Sidebar from '../../Sidebar/Sidebar'
import DMChat from './DMChat/DMChat'
import DMUsers from './DMUsers/DMUsers'

function Messages({user,fetchPostsAndLikes, posts, likedStatus}) {
    return (
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
                <DMChat />
                <DMUsers />
            </div>
        </div>
    )
}

export default Messages