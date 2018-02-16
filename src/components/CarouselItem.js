/*
    Author: Matt Britt
    Date: 2/16/18
    Description: CarouselItem.js is the implementation file for the 
        CarouselItem react component which represents a single item for 
        the Carousel component.    
*/

import React, {Component} from 'react';

import './CarouselItem.css';

export default class CarouselItem extends Component{
    render(){
        var data = this.props.data;
        return(
            

            <a className='carousel-item' href={this.props.data.link}>
                <h2>{data.title}</h2>
                <img src={data.img} alt={data.alt} />
                <p>{data.desc}</p>
            </a>
        )
    }
}
