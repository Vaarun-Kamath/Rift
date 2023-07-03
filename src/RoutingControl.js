import { BrowserRouter as  Router, Route, Routes} from 'react-router-dom';
import React from 'react'
import Login from './Pages/Login/Login';
import Home from '../src/Pages/Home/Home';
import Signup from './Pages/SignUp/Signup';
import PostCard from './Components/PostCard/PostCard';
import { useNavigate } from 'react-router-dom';


export default function RoutingControl() {
  return (
        <Router>
            <Routes>
                <Route path='/home' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/signup' element={<Signup />}/>
                <Route path='/post' element={<PostCard />}/> 
            </Routes>
        </Router>
  )
}
