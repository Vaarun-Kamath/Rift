import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from "react-router-dom";

function Signup() {
    const [fullname, setFullname] = useState('')
	const [email, setEmail] = useState('')
	const [dob, setDob] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	let navigate = useNavigate();

    const loadingBlur = (val)=>{
		const overlayDiv = document.getElementById('overlay-id')
		if (val === true){
			overlayDiv.style.display = 'initial'
		}else{
			overlayDiv.style.display = 'none'
		}
	}
	const handleFullnameChange = (event)=> setFullname(event.target.value)
	const handleEmailChange = (event)=> setEmail(event.target.value)
    const handleDobChange = (event)=> setDob(event.target.value)
    const handleUsernameChange = (event)=> setUsername(event.target.value)
	const handlePasswordChange = (event)=> setPassword(event.target.value)
    // ----------------- *DEBUG -------------------------------
	// const handleFullnameChange = (event)=> console.log(event.target.value)
	// const handleEmailChange = (event)=> console.log(event.target.value)
    // const handleDobChange = (event)=> console.log(event.target.value)
    // const handleUsernameChange = (event)=> console.log(event.target.value)
	// const handlePasswordChange = (event)=> console.log(event.target.value)


    async function registerUser(event){
        loadingBlur(true)
        event.preventDefault()
        const response = await fetch('http://localhost:8000/api/signup',{
			method:'POST',
			headers:{
				'Content-type':'application/json',
			},
			body: JSON.stringify({
                fullname,
                email,
                dob,
				username,
				password,
			}),
		})
		// console.log(response)
		const data = await response.json()
		if(data.status === 'OK'){
			navigate('/login') 
		}else{
			loadingBlur(false)
		}
		console.log(data)
    }

    return (
    <div className='signup-main'>
        <section className="container">
            <span className='overlay' id='overlay-id'></span>
            <div className='logo-container-su'>
                <span className='logo-holder-su'>Rift logo</span>
            </div>
            <form onSubmit={registerUser} className="form">
                <h3 className='heading-text-main'>Register to Rift</h3>
                <div className="input-box-container">
                    {/* <div className='required-text-container'><p className='required-name-text'>*Required</p></div> */}
                    <input type="text" className='required-name-input' onChange={handleFullnameChange} placeholder="Enter full name*" required />
                </div>
                <div className="input-box-container">
                    {/* <div className='required-text-container'><p className='required-email-text'>*Required</p></div> */}
                    <input type="text" className='required-email-input'onChange={handleEmailChange} placeholder="Enter email address*" required />
                </div>
                <div className="input-box-container">
                    {/* <div className='optional-text-container'><p className='optional-text'>Optional</p></div> */}
                    <input type="date" onChange={handleDobChange}/>
                </div>
                <div className="input-box-container">
                    {/* <div className='required-text-container'><p className='required-username-text'>*Required</p></div> */}
                    <input type="text" className='required-username-input' onChange={handleUsernameChange} placeholder="Enter Username*" required />
                </div>
                <div className="input-box-container">
                    {/* <div className='required-text-container'><p className='required-password-text'>Required</p></div> */}
                    <input type="password" className='required-password-input' onChange={handlePasswordChange} placeholder='Enter Password*' required/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    </div>
    )
}

export default Signup