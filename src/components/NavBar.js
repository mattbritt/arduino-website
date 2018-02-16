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
            <nav id='navbar'>
                
                <div id='logo'>
                    <img id='logo-img' src={NavBarSettings.icon}
                        alt={NavBarSettings.alt} />
                    <h1 id='nav-h1'>About Arduino</h1>
                </div>
                    <a className='nav-active nav-a' href='/'><div>Home</div></a>
                    <a className='nav-a' href='/software'><div>Software</div></a>
                    <a className='nav-a' href='/hardware'><div>Hardware</div></a>
                    <a className='nav-a' href='/projects'><div>Projects</div></a>
                    <a className='nav-a right' href='/about'><div className='right'>About</div></a>
            </nav>
        )
    }
}
