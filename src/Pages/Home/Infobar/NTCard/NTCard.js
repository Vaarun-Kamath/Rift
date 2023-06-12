import React, { Component } from 'react'
import "./NTCard.css"

export default class NTCard extends Component {
	constructor(props){
		super(props);
		this.state={
			n:this.props.n,
			context:this.props.context,
			ctcContentContainerIDName:""
		}
		this.state.ctcContentContainerIDName = "ntc-content-" + String(this.state.context).toLowerCase() + "-container-id"
	}

	componentDidMount(){
		var ntcContainer = document.getElementById(this.state.ctcContentContainerIDName)
		// console.log(ntcContainer)
		for (let i = 0; i < this.state.n; i++) {
			var ntcTagDiv = document.createElement("div")
			var ntcTagP = document.createElement("p")
	
			ntcTagDiv.className = "ntc-content-text-container"
			ntcTagP.className = "ntc-content-text"
			ntcTagP.innerText =  this.state.context + " # " + String(i+1); 
			
			ntcTagDiv.appendChild(ntcTagP)
			ntcContainer.appendChild(ntcTagDiv)
			// ntcContainer.append(ntcTagDiv)
		}
		ntcTagDiv = document.createElement("div")
		ntcTagP = document.createElement("p")
		ntcTagP.innerText = "Show More"
		ntcTagP.style.color = "#1a8cd8"
		ntcTagDiv.appendChild(ntcTagP)
		ntcTagP.style.position = "relative"
		ntcTagP.style.left = "10px"
		// ntcTagDiv.style.border = '1px solid'
		// ntcTagDiv.style.borderTopColor = "#1a8cd8"
		// ntcTagDiv.style.borderTopRightRadius = "10px"
		// ntcTagDiv.style.borderTopLeftRadius = "10px"
		// ntcTagDiv.style.borderBottomColor = "rgb(0, 0, 0,0 )"
		// ntcTagDiv.style.borderRightColor = "rgb(0, 0, 0,0 )"
		// ntcTagDiv.style.borderLeftColor = "rgb(0, 0, 0,0 )"

		
		ntcContainer.appendChild(ntcTagDiv)
	}

	render() {
		return (
			<div className='short-ntc-main'>
				<div className='ntc-text-container'>
					<h2 className='ntc-text-main'>{this.state.context}</h2>
				</div>
				<div className='ntc-content-container' id={this.state.ctcContentContainerIDName} ></div>
			</div>
		)
		
	}
}
