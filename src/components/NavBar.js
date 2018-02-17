/*
    Author: Matt Britt
    Date: 2/15/18
    Description: NavBar.js is the implmentation file for the NavBar react component.
*/

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
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
                    <Link to='/' className='nav-active nav-a' ><div>Home</div></Link>
                    <Link to='/software' className='nav-a'><div>Software</div></Link>
                    <Link to='/hardware' className='nav-a'><div>Hardware</div></Link>
                    <Link to='/projects' className='nav-a'><div>Projects</div></Link>
                    <Link to='/about' className='nav-a right' ><div className='right'>About</div></Link>
            </nav>
        )
    }
}
