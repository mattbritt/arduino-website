/*
    Author: Matt Britt
    Date: 2/22/18
    Description: HardwarePage.js is the implementation file for the HardwarePage
                react component.
*/

import React, {Component} from 'react';

import NavBar from '../components/NavBar';
import Accordian from '../components/Accordian';
import BoardLayout from '../components/BoardLayout';

import './HardwarePage.css';

export default class HardwarePage extends Component{
   

   
    render(){

        return(
            <div>
                <NavBar currentPage='hardware' />
            <article id='hardware-page'>
                <h1>Hardware Page</h1>
                <BoardLayout />
                <Accordian />
            </article>
            </div>
        )
    }
}
