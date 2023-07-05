import React from 'react'
import "./DMUsers.css"

function DMUsers() {
    const handleNewDMClick = ()=>{
        console.log("Add New DM")
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
                
            </div>
        </div>
    )
}

export default DMUsers