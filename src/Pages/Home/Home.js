import React, {useEffect, useState} from 'react';
import './Home.css'
import Feed from './Feed/Feed';
import Infobar from './Infobar/Infobar';
import jwt from 'jsonwebtoken'
import { useNavigate } from "react-router-dom";
// import Sidebar from '../../Sidebar/Sidebar';



export default function Home() {
	let navigate = useNavigate();
	// const [quote,setQuote] = useState('')

	// async function populateQuote(){
	// 	const req = await fetch('http://localhost:8000/api/quote',{
	// 		headers:{
	// 			'x-access-token': localStorage.getItem('token')
	// 		}
	// 	})
	// 	const data = req.json()
	// 	// console.log(data)
	// 	if(data.status === 'OK'){
			
	// 	}
	// }

	useEffect(()=>{
		const token = localStorage.getItem('token')
		if(token){
			const user = jwt.decode(token)
			if(!user){
				localStorage.removeItem('token')
				navigate('/login')
			}
		}
	}, [])
	return (
		<div className='home-root'>
			{/* <Sidebar /> */}
			<Feed />
			<Infobar />
		</div>
	)
}


// class Home extends Component {
	
// 	render() {
		
// 	}
// }


// export default Home
