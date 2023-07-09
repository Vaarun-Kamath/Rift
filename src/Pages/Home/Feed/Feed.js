import React, { useEffect, useState } from 'react';
import './Feed.css';
import PostCard from '../../../Components/PostCard/PostCard';

function Feed({posts, likedStatus}) {

    // useEffect(() => {
    //     fetchPostsAndLikes()
    // }, []);

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
