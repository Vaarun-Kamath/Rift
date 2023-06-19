import React, { useEffect, useState } from 'react';
import './Home.css'
import '../../Sidebar/Sidebar.css'
import Feed from './Feed/Feed';
import jwt from 'jsonwebtoken'
import Infobar from './Infobar/Infobar';
import { useNavigate } from "react-router-dom";
import Sidebar from '../../Sidebar/Sidebar';
import { fetchHomePosts } from '../../globalFunctions';



export default function Home() {
	const navigate = useNavigate();
	var [canRender,setCanRender] = useState(false)
	const [posts,setPosts] = useState([]);
	

	const token =  localStorage.getItem('token'); 
	const currUser = jwt.decode(token)

	useEffect(()=>{
		const getTokenInfo = async ()=>{
			if(token && !currUser){
				localStorage.removeItem('token');
				navigate('/login');
				return false
			}else if(token == null){
				navigate('/login');
				return false
			}
			return true
		}
		setCanRender(getTokenInfo());
		// eslint-disable-next-line
	},[])

	if(canRender && currUser !== null ){
		try{
			return (
				<div className='home-root'>
					<Sidebar user={currUser} setPosts={setPosts}/>
					<div className='feed-infobar-container'>
						<Feed user={currUser} posts={posts} setPosts={setPosts}/>
						<Infobar user={currUser}/>
					</div>
				</div>
			)
		}catch(err){
			console.log(err)
		}
	}else{
		return null
	}
}