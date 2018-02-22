/*
    Author: Matt Britt
    Date: 2/16/18
    Description: SoftwarePage.js is the implementation file for the SoftwarePage
                react component.
*/

import React, {Component} from 'react';

import NavBar from '../components/NavBar';
import Accordian from '../components/Accordian';

import './SoftwarePage.css';

export default class SoftwarePage extends Component{
    render(){
        return(
            <div>
                    <NavBar currentPage='software' />
                <article id='software-page'>
                <h1>Software Page</h1>
                <Accordian />
                </article>
            </div>
        )
    }
}
