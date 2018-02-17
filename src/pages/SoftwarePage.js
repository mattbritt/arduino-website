/*
    Author: Matt Britt
    Date: 2/16/18
    Description: SoftwarePage.js is the implementation file for the SoftwarePage
                react component.
*/

import React, {Component} from 'react';

import NavBar from '../components/NavBar';

export default class SoftwarePage extends Component{
    render(){
        return(
            <div>
                    <NavBar currentPage='software' />
                <article>
                <h1>Software Page</h1>
                </article>
            </div>
        )
    }
}
