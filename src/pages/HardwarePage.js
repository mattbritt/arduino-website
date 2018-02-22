/*
    Author: Matt Britt
    Date: 2/22/18
    Description: HardwarePage.js is the implementation file for the HardwarePage
                react component.
*/

import React, {Component} from 'react';

import NavBar from '../components/NavBar';
import BoardLayout from '../components/BoardLayout';

import './HardwarePage.css';

export default class HardwarePage extends Component{
   

   
    render(){

        return(
            <div>
                <NavBar currentPage='hardware' />
            <article id='hardware-page'>
                <h1>Explore The Hardware</h1>
                <BoardLayout />
                
                <h1>Shields</h1>
                <p> Shields are circuit boards designed to fit the Arduino form factor.  Shields allow you to easily add capabilities to your Arduino</p>
                <p>There are many, many shields available (there is a large community or Arduino enthusiasts!).  Here are some common examples</p>
            </article>
            </div>
        )
    }
}
