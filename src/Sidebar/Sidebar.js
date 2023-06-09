import React, { Component } from 'react'
import './Sidebar.css'
import ProfileDisplay from './ProfileDisplay/ProfileDisplay'
import NavElements from "./NavElements/NavElements"

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
                </div>
                
            </div>
        )
    }
}
