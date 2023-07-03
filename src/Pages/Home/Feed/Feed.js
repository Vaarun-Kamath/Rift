import React, { useEffect, useState } from 'react';
import './Feed.css';
import PostCard from '../../../Components/PostCard/PostCard';
import { fetchHomePosts, hasUserLiked } from '../../../globalFunctions';

function Feed() {
    const [posts, setPosts] = useState([]);
    const [likedStatus, setLikedStatus] = useState({});
    const fetchPostsAndLikes = ()=>{
        fetchHomePosts()
        .then((value) => {
            setPosts(value);
            fetchLikedStatus(value);
        }).catch((error) => {
            console.log('ERROR FETCHING POSTS:', error);
        });
    }

    useEffect(() => {
        fetchPostsAndLikes()
    }, []);

    const fetchLikedStatus = async (posts) => {
        const likedStatusMap = {};
        for (const post of posts) {
            const hasLiked = await hasUserLiked(post._id, localStorage.getItem('token'));   
            likedStatusMap[post._id] = hasLiked;
        }
        // console.log('LikedStatusMap: ',likedStatusMap)
        setLikedStatus(likedStatusMap);
    };
    return (
    <div className="feed-main">
        {posts.length > 0 &&
        posts.map((post, index) => (
            <PostCard
            key={index}
            username={post.postedBy}
            postId={post._id}
            likesNumber={post.postLikes}
            likeStat = {likedStatus}
            >
            {post.postText}
            </PostCard>
        ))}
    </div>
    );
}

export default Feed;
