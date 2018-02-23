/*
    Author: Matt Britt
    Date: 2/16/18
    Description: AboutPage.js is the implementation file for the AboutPage
                react component.
*/

import React, {Component} from 'react';

import NavBar from '../components/NavBar';

export default class AboutPage extends Component{
    render(){
        return(
            <div>
                <NavBar currentPage='about' />
                <article>

                  <h1>About Page</h1>
                </article>
            </div>
        )
    }
}


