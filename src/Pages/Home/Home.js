import React, { useEffect, useState } from 'react';
import './Home.css';
import '../../Sidebar/Sidebar.css';
import Feed from './Feed/Feed';
import jwt from 'jsonwebtoken';
import Infobar from './Infobar/Infobar';
import { useNavigate } from "react-router-dom";
import Sidebar from '../../Sidebar/Sidebar';

export default function Home() {
	const navigate = useNavigate();
	const token = localStorage.getItem('token');
	const currUser = jwt.decode(token);

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

	if (getTokenInfo()) {
	try {
		return (
			<div className='home-root'>
			{console.log("CALLING HOME")}
			<Sidebar user={currUser} fetchPostsFunction={()=>null}/>
			<div className='feed-infobar-container'>
			<Feed user={currUser} />
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
