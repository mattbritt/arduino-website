/*
    Author: Matt Britt
    Date: 2/16/18
    Description: HomePage.js is the implementation file for the HomePage
                react component.
*/

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';

import './HomePage.css';

export default class HomePage extends Component{


    render(){

        return(
            <div>
            <NavBar currentPage='home' />
            <article id='home-page'>
            <section>
                <h1>What Can You Do Do With An Arduino?</h1>
                <Carousel />
            </section>
            <section id='text'>
                <h1>What Is An Arduino?</h1>
                <img id='arduino-board' src='Arduino_Uno_-_R3.jpg' alt='Arduino Uno Board' />
                    <span>Image from Wikipedia</span>
                <p>An Arduino is a platform for learning and building electronics projects.
                      It is an ecosystem composed of hardware and software designed to encourage 
                      education and innovation.  With the Arduino system it is easy to create 
                      intelligent, automated devices.</p>
                <h1>It's Software</h1>
                <img id='arduino-ide' src='Arduino IDE.png' alt='Arduino IDE' />
                <p>The Arduino <Link to='/software'><strong>software</strong></Link> consists of 
                    a easy-to-use Integrated Development Environment (IDE) and custom libraries.
                    The IDE provides a way to quickly get started coding with baked in compilation
                    and upload utilities.  The custom libraries provide simplified access to 
                    underlying hardware and easy interfacing with common sensors and actuators.</p>
                <h1>Plus Hardware</h1>
                <img id='arduino-hardware' src='BarGraph_bb.png' alt='Arduino connected to leds' />
                <span>Image from http://androidmafia.ru/video/nW_k-VSYOU8</span>
                <p>The Arduino <Link to='/hardware'><strong>hardware</strong></Link> platform consists
                    of a variety of economical microcontroller boards that enable a plethora of projects. 
                     Each Arduino board has a variety of input and output pins, as well as facilities 
                      for dealing with both analog and digital signals.  Several types of interface are 
                      provided including I2C, SPI and USB.</p>
                <h1>Times You</h1>
                <img id='bulb' src='bulb.jpg' alt='Light Bulb' />
                <span>Image from http://thepix.info/incandescent-light-bulbs-2017-movies/</span>
                <p>What really matters is what you can do with it.  The carousel above shows 
                    a few select <Link to='/projects'><strong>projects</strong></Link> to give you a 
                    broad ideal of the power of an Arduino-enabled system.  You will find more on 
                    the <Link to='/projects'><strong>projects</strong></Link> page, but remember the sky's 
                    the limit when it comes to what you can create!
                </p>

            </section>
            </article>
            </div>
        )
    }
}