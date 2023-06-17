import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()

export const isLoggedIn = ()=>{
    let token = localStorage.getItem('token');
    if(jwt.verify(token,))
    if(token == null) return false
    return token
}

export const doLogout = ()=>{
    localStorage.removeItem('token');
}


