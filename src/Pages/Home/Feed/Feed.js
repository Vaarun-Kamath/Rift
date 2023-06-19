import React, { useEffect, useState } from 'react'
import './Feed.css'
import PostCard from '../../../Components/PostCard/PostCard'
import { fetchHomePosts } from '../../../globalFunctions';


function Feed({posts, setPosts}) {

    // const [posts,setPosts] = useState([]);
    // async function fetchHomePosts() {
    //     const posts = await fetch('http://localhost:8000/api/post',{
	// 		method:'GET',

	// 	})
	// 	// console.log(response)
	// 	const data = await posts.json()
    //     setPosts(data)
    // }

    useEffect(()=>{
        fetchHomePosts(setPosts);
    },[posts.length])

    return (
        <div className='feed-main'>
            {posts.length > 0 && posts.map((post,index)=>{
                return <PostCard key={index} username={post.postedBy}>{post.postText}</PostCard>
            })}
        </div>
    )
    
}

export default Feed