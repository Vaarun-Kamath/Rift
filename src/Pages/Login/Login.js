import React, { useEffect, useState, useContext } from 'react'
import "./Login.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from '../../userContext';

export default function Login() {
	let navigate = useNavigate();
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const {setUsername:setLoggedInUsername, setId, setFullname, setEmail, setDob} = useContext(UserContext);

	const handleSignUpClick = ()=>{
		navigate('/signup')
	}

	const handleUsernameChange = (event)=> setUsername(event.target.value)
	const handlePasswordChange = (event)=> setPassword(event.target.value)

	const loadingBlur = (val)=>{
		const overlayDiv = document.getElementById('overlay-id')
		if (val){
			overlayDiv.style.display = 'initial'
		}else{
			overlayDiv.style.display = 'none'
		}
	}

	async function loginUser(event) {
		loadingBlur(true)

		event.preventDefault()
		const {data} = await axios.post('http://localhost:8000/api/login', {
			username,
            password,
		})

		if(data.status === 'OK'){
			setId(data.id);
			setLoggedInUsername(data.user.username);
			setFullname(data.user.fullname);
			setDob(data.user.dob);
			setEmail(data.user.email);
			localStorage.setItem('token',data.token)
			navigate('/home',{state:{user:data.user}}) 
		}else{ // Error in Login TODO: handle error
			loadingBlur(false)
		}
		console.log(data)
	}

	async function verifyToken(){
		const userToken = localStorage.getItem('token')
		if(userToken){
			// console.log(userToken)
			const response =  await fetch('http://localhost:8000/api/verifytoken',{
				method:'POST',
				headers:{
					'Content-type':'application/json',
				},
				body: JSON.stringify({
					token:userToken
				}),
			})
			const data = await response.json()
			console.log(data)
			if(data.status === 'OK'){
				navigate('/home')
			}else if(data.token === true){ 
				localStorage.removeItem('token')
			}
		}
		
	}

	useEffect(() => {
		verifyToken()
	});

	return (
		<div className='login-page-main'>
			<div className='login-box-container'>
				<span className='overlay' id='overlay-id'></span>
				<div className='padding-correction'>
					{/* <div className='temp' id='temp-id'> */}
						<div className='logo-container'>
							<span className='logo-holder'>Rift logo</span>
						</div>
						<div className='login-form-container' id='login-form-container-id'>
							<h3 className='heading-text-main'>Sign in with a Rift account</h3>
							<form className='form-main' onSubmit={loginUser}>
								<div className='input-containers'>
									<div className='username-input-container input-container-main'>
										<input type='text' 
										id='username-id'  
										className='username-input-field input-field' 
										onChange={handleUsernameChange} 
										required='required' 
										placeholder='Username'/>
									</div>
									<div className='password-input-container input-container-main'>
										<input type='password' 
										id='password-id'
										className='password-input-field input-field' 
										onChange={handlePasswordChange} 
										required='required' 
										placeholder='Password'/>
									</div>
								</div>
								<span className='password-incorrect-error-text' id='password-incorrect-error-text-id' hidden></span>
								<div className='button-container-main'>
									<div className='login-button-container submit-button-container'>
										<button type='submit' className='submit-button'>Log in</button>
									</div>
									<div className='sign-up-button-container submit-button-container'>
										<button className='submit-button' onClick={handleSignUpClick}> Sign Up</button>
									</div>
								</div>
							</form>
							
						</div>
					{/* </div> */}
					<div className='helper-text-container'>
						<div className='forgot-password-container'>
							<a href='/' className='forgot-password-main'>Forgot Password</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
