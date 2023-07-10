import React from 'react'
import './Sidebar.css'
import ProfileDisplay from './ProfileDisplay/ProfileDisplay'
import NavElements from "./NavElements/NavElements"
import Button from '../Components/Buttons/Button'
import { useNavigate } from "react-router-dom";


function Sidebar({user, fetchPostsAndLikes, posts, likedStatus,from='None'}) {
    let navigate = useNavigate();
    const logout = ()=>{
        localStorage.removeItem('token');
        document.cookie.split(";").forEach((c) => {
            document.cookie = c
              .replace(/^ +/, "")
              .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
          });
        navigate('/login')
    }
    return (
        <div className='sidebar'>
            <div className='pfd-elements-container'>
                <div className='pfd-container'>
                    <ProfileDisplay/>
                </div>
                <div className='elements-container'>
                    <NavElements 
                        posts = {posts} 
                        likedStatus={likedStatus} 
                        fetchPostsAndLikes={fetchPostsAndLikes}
                        from = {from}
                    />
                </div>
                {/* Sign Out Button is temporary for Development Purposes */}
                <div className='sign-out-button-container'><Button onClick={()=>logout()}>TEMP : SignOut</Button></div>
            </div>
            
        </div>
    )
}

export default Sidebar

