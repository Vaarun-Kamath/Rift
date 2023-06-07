import React, { Component } from 'react'
import './Sidebar.css'
import ProfileDisplay from './ProfileDisplay/ProfileDisplay'
import Elements from './Elements/Elements'

export default class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                Sidebar
                {/* pfd = ProfileDisplay */}
                <div className='pfd-elements-container'>
                    <div className='pfd-container'>
                        <ProfileDisplay />
                    </div>
                    <div className='elements-container'>
                        <Elements />
                    </div>
                </div>
                
            </div>
        )
    }
}
