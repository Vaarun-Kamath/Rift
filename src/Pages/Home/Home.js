import React, { Component } from 'react';
import './Home.css'
import Feed from './Feed/Feed';
import Infobar from './Infobar/Infobar';

class Home extends Component {
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
