import React, { Component } from 'react';
import './Home.css'
import Feed from './Feed/Feed';
import Infobar from './Infobar/Infobar';

class Home extends Component {
	componentDidMount(){
		// console.log("Mounted Home")
	}
	render() {
		return (
			<div className='home-root'>
				<Feed />
				<Infobar />
			</div>
		)
	}
}


export default Home
