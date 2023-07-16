import { BrowserRouter as  Router, Route, Routes} from 'react-router-dom';
import React from 'react'
import Login from './Pages/Login/Login';
import Home from '../src/Pages/Home/Home';
import Signup from './Pages/SignUp/Signup';
import PostCard from './Components/PostCard/PostCard';
import Messages from './Pages/Messages/Messages';
import axios from 'axios';
import {UserContextProvider} from './userContext'
import { SelectedDMContextProvider } from './SelectedUserDMContext';


export default function RoutingControl() {
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <SelectedDMContextProvider>
        <Router>
            <Routes>
                <Route path='/home' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/signup' element={<Signup />}/>
                <Route path='/post' element={<PostCard />}/> 
                <Route path='/messages' element={<Messages />}/> 
            </Routes>
        </Router>
      </SelectedDMContextProvider>
    </UserContextProvider>
        
  )
}
