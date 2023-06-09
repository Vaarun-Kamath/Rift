import React, { Component } from 'react'
import "./PostButton.css"

export default class PostButton extends Component {
	constructor(props){  
		super(props);  
		this.state={
			value:this.props.value,
			redirectLink: this.props.redirectLink
		}
	} 
	render() {
		return (
			<div className='post-button-main'>{this.state.value}</div>
		)
	}
}
