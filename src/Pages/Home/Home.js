import React, { useEffect, useState } from 'react';
import './Home.css';
import '../../Sidebar/Sidebar.css';
import Feed from './Feed/Feed';
import jwt from 'jsonwebtoken';
import Infobar from './Infobar/Infobar';
import { useNavigate } from "react-router-dom";
import Sidebar from '../../Sidebar/Sidebar';
import { fetchHomePosts, hasUserLiked } from "../../globalFunctions"

export default function Home() {
	const navigate = useNavigate();
	const token = localStorage.getItem('token');

	const currUser = jwt.decode(token);
	const [posts, setPosts] = useState([]);
    const [likedStatus, setLikedStatus] = useState({});

	const getTokenInfo = () => {
		if (token && !currUser) {
			localStorage.removeItem('token');
			navigate('/login');
			return false;
		} else if (token == null) {
			navigate('/login');
			return false;
		}
		return true;
	};

	const fetchPostsAndLikes = ()=>{
        fetchHomePosts()
        .then((value) => {
            setPosts(value);
            fetchLikedStatus(value);
        }).catch((error) => {
            console.log('ERROR FETCHING POSTS:', error);
        });
    }

	const fetchLikedStatus = async (posts) => {
        const likedStatusMap = {};
        for (const post of posts) {
            const hasLiked = await hasUserLiked(post._id, localStorage.getItem('token'));   
            likedStatusMap[post._id] = hasLiked;
        }
        // console.log('LikedStatusMap: ',likedStatusMap)
        setLikedStatus(likedStatusMap);
    };
	useEffect(() =>{
		fetchPostsAndLikes()
		console.log("IN Use Effect Home")
	},[])

	if (getTokenInfo()) {
		try {
			return (
				<div className='home-root'>
					{console.log("CALLING HOME")}
					<Sidebar user={currUser} 
						posts = {posts} 
						likedStatus={likedStatus} 
						fetchPostsAndLikes={fetchPostsAndLikes}
						from = "Home"
					/>
					<div className='feed-infobar-container'>
						<Feed user={currUser} 
							posts = {posts} 
							likedStatus={likedStatus} 
						/>
						<Infobar user={currUser} />
					</div>
				</div>
			);
		} catch (err) {
			console.log(err);
		}
	} else {
		return null;
	}
}
