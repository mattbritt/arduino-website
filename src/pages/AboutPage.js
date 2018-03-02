/*
    Author: Matt Britt
    Date: 2/16/18
    Description: AboutPage.js is the implementation file for the AboutPage
                react component.
*/

import React, {Component} from 'react';

import NavBar from '../components/NavBar';

import './AboutPage.css';

export default class AboutPage extends Component{
    render(){
        return(
            <div>
                <NavBar currentPage='about' />
                <article>

                  <h1 id='about-page-h1'>About Page</h1>
                    <div id='about-page-p-div'>
                    <p>This website was created as the final project for CS290 Web development at Oregon State University.</p>
                    <p>Create React App was used to bootstrap the creation of this site.  React was chosen to make this a single page application (SPA).  Create React App quickly sets up a basic site template along with webpack, babel and a live-reloading dev server.</p>
                    <p>On the back-end, express is used to create a simple server that provides a GET API to serve up the files for the software page.</p>
                    <p>Using React and Node.js allows for the use of javascript across both the front and back-ends, with dynamic content presentation.</p>
                    </div>
                </article>
            </div>
        )
    }
}


