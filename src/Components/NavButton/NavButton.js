import React, { Component } from 'react'
import "./NavButton.css"

export default class NavButton extends Component {
	constructor(props){  
		super(props);  
		this.state={
			value:this.props.value,
			redirectLink: this.props.redirectLink
		}
	} 
	render() {
		return (
			<div className='nav-button-main'>{this.state.value}</div>
		)
	}
}

