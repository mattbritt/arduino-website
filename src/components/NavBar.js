/*
    Author: Matt Britt
    Date: 2/15/18
    Description: NavBar.js is the implmentation file for the NavBar react component.
*/

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

var NavBarSettings = require('../settings/NavBar.json');

export default class NavBar extends Component{
    render(){

        var homeClass, softwareClass, hardwareClass, projectsClass, aboutClass;
        homeClass = softwareClass = hardwareClass = projectsClass = aboutClass = 'nav-a';
        aboutClass += ' right';
    
        switch(this.props.currentPage){
            case 'home':
                homeClass += ' nav-active';
                break;
            case 'software':
                softwareClass += ' nav-active';
                break;
            case 'hardware':
                hardwareClass += ' nav-active';
                break;
            case 'projects':
                projectsClass += ' nav-active';
                break;
            case 'about':
                aboutClass += ' nav-active';
                break;
            default:
        }




        return (
            <nav id='navbar'>
                
                <div id='logo'>
                    <img id='logo-img' src={NavBarSettings.icon}
                        alt={NavBarSettings.alt} />
                    <h1 id='nav-h1'>About Arduino</h1>
                </div>
                    <Link to='/' className={homeClass} ><div>Home</div></Link>
                    <Link to='/software' className={softwareClass}><div>Software</div></Link>
                    <Link to='/hardware' className={hardwareClass}><div>Hardware</div></Link>
                    <Link to='/projects' className={projectsClass}><div>Projects</div></Link>
                    <Link to='/about' className={aboutClass} ><div className='right'>About</div></Link>
            </nav>
        )
    }
}
