import React from 'react'
import "./Login.css"
import { useNavigate } from "react-router-dom";
// import { MongoClient } from 'mongodb';

const connectionString = 'mongodb://localhost:27017/'
const loginDatabaseName = 'rift-login-info'
const loginDatabaseCollectionName = 'public-users'

export default function Login() {

	let navigate = useNavigate();
	const handleLoginClick = ()=>{
		const username = document.getElementById("username-id").value
		const password = document.getElementById("password-id").value
		if(password == '') {
			const errDisplay = document.getElementById('password-incorrect-error-text-id')
			errDisplay.innerHTML = "*Incorrect Password"
			errDisplay.hidden = false
		}else if (username == ''){
			const errDisplay = document.getElementById('password-incorrect-error-text-id')
			errDisplay.innerHTML = "*Enter Username"
			errDisplay.hidden = false
		}else{
			// const mongoClient = new MongoClient(connectionString);
			// const data = mongoClient.db(loginDatabaseName).collection(loginDatabaseCollectionName).find({}).toArray();
			// console.log(data)
		}
	}
	const handleSignUpClick = ()=>{
		navigate('/signup')
	}
	return (
		<div className='login-page-main'>
			<div className='login-box-container'>
				<div className='padding-correction'>
					<div className='logo-container'>
						<span className='logo-holder'>Rift logo</span>
					</div>
					<div className='login-form-container'>
						<h3 className='heading-text-main'>Sign in with a Rift account</h3>
						<form className='form-main' >
							<div className='input-containers'>
								<div className='username-input-container input-container-main'>
									<input type='text' id='username-id' required='required' className='username-input-field input-field' placeholder='Username' />
								</div>
								<div className='password-input-container input-container-main'>
									<input type='password' id='password-id' required='required' className='password-input-field input-field' placeholder='Password' />
								</div>
							</div>
							<span className='password-incorrect-error-text' id='password-incorrect-error-text-id' hidden></span>
							<div className='button-container-main'>
								<div className='sign-up-button-container submit-button-container'>
									<button className='submit-button' onClick={handleSignUpClick}> Sign Up</button>
								</div>
								<div className='login-button-container submit-button-container'>
									<button type='submit' className='submit-button' onClick={handleLoginClick}>Log in</button>
								</div>
							</div>
						</form>
						
					</div>
				</div>
			</div>
		</div>
	)
}
