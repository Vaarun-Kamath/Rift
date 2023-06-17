import React from 'react'
import './Sidebar.css'
import ProfileDisplay from './ProfileDisplay/ProfileDisplay'
import NavElements from "./NavElements/NavElements"
import Button from '../Components/Buttons/Button'
import { useNavigate } from "react-router-dom";

function Sidebar() {
    let navigate = useNavigate();
    const removeToken = ()=>{
        localStorage.removeItem('token');
        navigate('/login')
    }

    return (
        <div className='sidebar'>
            {/* pfd = ProfileDisplay */}
            <div className='pfd-elements-container'>
                <div className='pfd-container'>
                    <ProfileDisplay />
                </div>
                <div className='elements-container'>
                    <NavElements />
                </div>
                {/* Sign Out Button is temporary for Development Purposes */}
                <div className='sign-out-button-container'><Button onClick={()=>removeToken()}>TEMP : SignOut</Button></div>
            </div>
            
        </div>
    )
}

export default Sidebar

