import { BrowserRouter as  Router, Route, Routes} from 'react-router-dom';
import React from 'react'
import Login from './Pages/Login/Login';
import App from './App';
import Signup from './Pages/SignUp/Signup';

export default function RoutingControl() {
  return (
        <Router>
            <Routes>
                <Route path='/home' element={<App />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/signup' element={<Signup />}/>
            </Routes>
        </Router>
  )
}
