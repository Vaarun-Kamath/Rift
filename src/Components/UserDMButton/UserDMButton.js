import React from 'react'
import "./UserDMButton.css"


function UserDMButton({username, onClick,selected}) {
    return (
        <div className={"user-dm-button "+(selected?'user-selected':'')} onClick={onClick}>
            <div className='user-dm-pfp-container'><div className='user-dm-pfp'></div></div>
            <div className='user-dm-username'>{username}</div>
        </div>
    )
}

export default UserDMButton