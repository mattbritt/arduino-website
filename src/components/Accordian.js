/*
    Author: Matt Britt
    Date: 2/22/18
    Description: Accordian.js is the implementation file for the Accordian
                react component.
    Credit: Based on W3Schools - https://www.w3schools.com/howto/howto_js_accordion.asp
*/

import React, {Component} from 'react';
import './Accordian.css';

export default class Accordian extends Component {
   
  handleClick = function(event){
    
    event.target.classList.toggle('active');
    var panel = event.target.nextElementSibling;
console.log(panel);
    if(panel.style.maxHeight){
        panel.style.maxHeight = null;
    }
    else{
        panel.style.maxHeight = panel.scrollHeight + 'px';
    }
}

   
    render(){


        return(
            <div className='accordian-div'>
                <button className='accordian' onClick={this.handleClick}>Section 1</button>
                <div className='panel'>
                    <p>blah blah blah</p>
                </div>

                <button className='accordian' onClick={this.handleClick}>Section 2</button>
                <div className='panel'>
                    <p>blah blah blah</p>
                </div>

                <button className='accordian' onClick={this.handleClick}>Section 3</button>
                <div className='panel'>
                    <p>blah blah blah</p>
                </div>

            </div>
        )
    }
}