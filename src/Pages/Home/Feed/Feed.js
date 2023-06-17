import React, { Component } from 'react'
import './Feed.css'
import PostCard from '../../../Components/PostCard/PostCard'

export default class Feed extends Component {
    render() {
        return (
            <div className='feed-main'>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        )
    }
}
