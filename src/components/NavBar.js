/*
    Author: Matt Britt
    Date: 2/15/18
    Description: NavBar.js is the implmentation file for the NavBar react component.
*/

import React, {Component} from 'react';
import './NavBar.css'

var NavBarSettings = require('../settings/NavBar.json');

export default class NavBar extends Component{
    render(){
        return (
            <nav>
                
                <div id='logo'>
                    <img src={NavBarSettings.icon}
                        alt={NavBarSettings.alt} />
                    <h1>About Arduino</h1>
                </div>
                    <a className='active' href='/'><div>Home</div></a>
                    <a href='/software'><div>Software</div></a>
                    <a href='/hardware'><div>Hardware</div></a>
                    <a href='/projects'><div>Projects</div></a>
                    <a href='/about' className='right'><div className='right'>About</div></a>
                
            
            </nav>
        )
    }
}
