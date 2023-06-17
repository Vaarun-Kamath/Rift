import React, {useEffect} from 'react';
import './Home.css'
import '../../Sidebar/Sidebar.css'
import Feed from './Feed/Feed';
import Infobar from './Infobar/Infobar';
import jwt from 'jsonwebtoken'
import { useNavigate } from "react-router-dom";
import Sidebar from '../../Sidebar/Sidebar';



export default function Home() {
	let navigate = useNavigate();

	useEffect(()=>{
		const token = localStorage.getItem('token')
		if(token){
			const user = jwt.decode(token)
			if(!user){ // Invalid Token
				localStorage.removeItem('token')
				navigate('/login')
			}
		}else navigate('/login')
	}, [])
	return (
		<div className='home-root'>
			<Sidebar />
			<div className='feed-infobar-container'>
				<Feed />
				<Infobar />
			</div>
		</div>
	)
}