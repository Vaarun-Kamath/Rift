import React, { useEffect, useState } from 'react'
import "./Login.css"
import { useNavigate } from "react-router-dom";

export default function Login() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	let navigate = useNavigate();
	const handleSignUpClick = ()=>{
		navigate('/signup')
	}

	const handleUsernameChange = (event)=>{
		// console.log("Username:" + event.target.value)
		setUsername(event.target.value)
	}
	const handlePasswordChange = (event)=>{
		// console.log("Password: " + event.target.value)
		setPassword(event.target.value)
		// console.log(password)
	}
	const loadingBlur = (val)=>{
		const overlayDiv = document.getElementById('overlay-id')
		if (val === true){
			overlayDiv.style.display = 'initial'
		}else{
			overlayDiv.style.display = 'none'
		}
	}

	async function loginUser(event) {
		// console.log("In loginUser function")
		loadingBlur(true)

		event.preventDefault()
		const response = await fetch('http://localhost:8000/api/login',{
			method:'POST',
			headers:{
				'Content-type':'application/json',
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})
		// console.log(response)
		const data = await response.json()
		if(data.userToken){
			localStorage.setItem('token',data.userToken)
			navigate('/home') 
			// window.location.href = '/home'
		}else{
			loadingBlur(false)
		}
		// console.log("exiting loginUser function")
		console.log(data)
	}

	async function verifyToken(){
		const userToken = localStorage.getItem('token')
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
		// console.log(data)
		if(data.status === 'OK'){
			navigate('/home')
		}else if(data.token === true){ 
			localStorage.removeItem('token')
		}
	}

	useEffect(() => {
		verifyToken()
	}, []);

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
							<a href='' className='forgot-password-main'>Forgot Password</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
