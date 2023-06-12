import React, { Component } from 'react'
import './Sidebar.css'
import ProfileDisplay from './ProfileDisplay/ProfileDisplay'
import NavElements from "./NavElements/NavElements"
import Button from '../Components/Buttons/Button'

export default class Sidebar extends Component {
    render() {
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
                    <div className='sign-out-button-container'><a className='sign-out-button-container' href='/login'><Button value='TEMP : SignOut'></Button></a></div>
                </div>
                
            </div>
        )
    }
}
