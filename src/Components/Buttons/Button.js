import React, { Component } from 'react'
import "./Button.css"

export default class Button extends Component {
	constructor(props){  
		super(props);  
		this.state={
			value:this.props.value,
			redirectLink: this.props.redirectLink
		}
	} 

	render() {
		return (
			<div className='button-main'>{this.state.value}</div>
		)
	}
}
