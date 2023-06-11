import React, { Component } from 'react'
import './Infobar.css'
import NTCard from './NTCard/NTCard'

export default class Infobar extends Component {
    componentDidMount(){
        // console.log("Mounted Infobar")
    }
    render() {
        return (
            <div className='infobar-main'>
                <div className='trending-card-container card-container'><NTCard n = {5} context = "Trending"/></div>
                <div className='news-card-container card-container'><NTCard n = {3} context = "News"/></div>
                {/* <ShortNews /> */}
            </div>
        )
    }
}
