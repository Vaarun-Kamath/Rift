import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RoutingControl from './RoutingControl';
import axios from 'axios'

// import { useEffect, useState } from 'react'

// const axiosInstance = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_URL,
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	// <App />
	<RoutingControl />
	// </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
