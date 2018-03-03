/*
    Author: Matt Britt
    Date: 2/22/18
    Description: SoftwarePanel.js is the implmentation file for the SoftwarePanel react component.
                This component will return one panel for the Accordian component.
*/

import React, {Component} from 'react';

import './SoftwarePanel.css';

import settings from '../settings/SoftwarePanelGET.json';

export default class SoftwarePanel extends Component{
    constructor(){
        super();

        this.state = {code: ''};
    }

    render(){
        
        // create link to file download
        var downloadStr = settings.url + '/assets/' + this.props.data.filename;

        return (
            <div className='software-panel-div'>
                <textarea className='scroll-box'
                    value={this.state.code}
                    readOnly>
            
                </textarea>
                    <div className='img-panel-div'>
                    <img src={this.props.data.imgSrc} alt={this.props.data.imgAlt} className='software-panel-img' />
                    
                    <span style={{fontSize: '7px', margin: '10px'}}>{this.props.data.credit}</span>
                   </div>
                    <form method='get' action={downloadStr}>
                        <button className='software-panel-button'>Download Source</button>
                    </form>
                   
            </div>
        )
    }

    componentDidMount(){
        // fetch file text from our express server
        fetch( settings.url + '/softwarePanel/?file=' + this.props.data.filename)
            .then((data)=>{
                data.text().then((text)=>this.setState({
                    code: text
            })
    )})
}}