/*
    Author: Matt Britt
    Date: 2/16/18
    Description: HardwarePage.js is the implementation file for the HardwarePage
                react component.
*/

import React, {Component} from 'react';

import NavBar from '../components/NavBar';
import Accordian from '../components/Accordian';

import './HardwarePage.css';

export default class HardwarePage extends Component{
    render(){
        return(
            <div>
                <NavBar currentPage='hardware' />
                <article>
            <h1>Hardware Page</h1>
            <Accordian />
            </article>
            </div>
        )
    }
}
