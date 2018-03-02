import React, {Component} from 'react';

import './GridBox.css';

export default class GridBox extends Component{
    render(){
        return(
            <a href={this.props.link} target='_blank'>
            <div className='grid-box'>
                <img src={this.props.imgSrc} alt={this.props.alt}/>
                <h2 style={this.props.color}>{this.props.text}</h2>
            </div>
            </a>

        )
    }
}