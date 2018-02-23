/*
    Author: Matt Britt
    Date: 2/22/18
    Description: SoftwarePanel.js is the implmentation file for the SoftwarePanel react component.
                This component will return one panel for the Accordian component.
*/

import React, {Component} from 'react';

import './SoftwarePanel.css';

export default class SoftwarePanel extends Component{
    render(){
        return (
            <div className='software-panel-div'>
                <div className='scroll-box'>
                    {this.props.data.code}
                </div>
                    <img src={this.props.data.imgSrc} alt={this.props.data.imgAlt} className='software-panel-img' />
                    <button className='software-panel-button'>Download Source</button>
            </div>
        )
    }
}