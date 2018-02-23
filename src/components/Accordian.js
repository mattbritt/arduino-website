/*
    Author: Matt Britt
    Date: 2/22/18
    Description: Accordian.js is the implementation file for the Accordian
                react component.  This Accordian accepts and array of objs [{title: '', jsx: {jsx}}]
                and will render based on that.
    Credit: Based on W3Schools - https://www.w3schools.com/howto/howto_js_accordion.asp
*/

import React, {Component} from 'react';
import './Accordian.css';

export default class Accordian extends Component {

// handles click - toggles accordian panel
handleClick = function(event){
    
    // get appropriate panel and toggle
    event.target.classList.toggle('active');
    var panel = event.target.nextElementSibling;

    if(panel.style.maxHeight){
        panel.style.maxHeight = null;
    }
    else{
        panel.style.maxHeight = panel.scrollHeight + 'px';
    }
}

    render(){

        // create the buttons & panels from the array of objs
        var panels = [];

        this.props.panels.forEach((element, index) => {
        
         panels.push(<div key={index}>
                <button className='accordian' onClick={this.handleClick}>{element.title}</button>
            <div className='panel'>
                {element.jsx}
            </div></div>) ;
        });

        return(
            <div className='accordian-div'>
                {panels}
            </div>
        )
    }
}