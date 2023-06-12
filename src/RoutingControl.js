import { BrowserRouter as  Router, Route, Routes} from 'react-router-dom';

import React from 'react'
// import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import App from './App';

export default function RoutingControl() {
  return (
        <Router>
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
  )
}
