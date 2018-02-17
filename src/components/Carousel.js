/*
    Author: Matt Britt
    Date: 2/16/18
    Description: Carousel.js is the implementation file for the Carousel
                react component.
*/

import React, {Component} from 'react';

import CarouselItem from './CarouselItem';
import './Carousel.css';

var items = require('../settings/CarouselItem.json');

export default class Carousel extends Component{

    constructor(){
        super();

        this.state = {
            currentIndex: 0,
            lastPos: 'left'
        }

        this.leftClick = this.leftClick.bind(this);
        this.rightClick = this.rightClick.bind(this);

    }


// go left one slot in carousel
leftClick = function(){
var index = this.state.currentIndex;

   if(index > 0)
        index--;
    //else wrap around    
    else{
        index = items.length - 1;
    }

    this.setState({
        currentIndex: index
    })
      
}

// go right one slot in carousel
rightClick = function(){
var index = this.state.currentIndex;

    if(index < items.length - 1)
        index++;
    // else wrap around
    else
        index = 0;

    this.setState({
        currentIndex: index
    })
}

    render(){
    // populate carousel items and tag active item for display
    var carouselItems = items.map((element, index)=>{
        var thisClass = '';
        if(index === this.state.currentIndex){
            thisClass = 'carousel-active fromLeft';
        }
        return <li className={thisClass} key={index}><CarouselItem data={element}/></li>;
    })




        return(
            <div className='carousel'>
               <p onClick={this.leftClick}> &lsaquo; </p>
                <ol className='carousel-ol'>
                    {carouselItems}
                </ol>
                <p onClick={this.rightClick}> &rsaquo;</p>
            </div>
        )
    }
}