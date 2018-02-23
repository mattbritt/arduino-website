/*
    Author: Matt Britt
    Date: 2/22/18
    Description: HardwarePage.js is the implementation file for the HardwarePage
                react component.
*/

import React, {Component} from 'react';

import NavBar from '../components/NavBar';
import BoardLayout from '../components/BoardLayout';
import Accordian from '../components/Accordian';

import './HardwarePage.css';

export default class HardwarePage extends Component{
   
    render(){

        // array of objs to pass to Accordian - these are the panels for the shields
        var panels = [{title: 'Motor', 
                        jsx: (
                            <div>
                                <img src='motor.jpg' alt='motor controller shield' width='100%'/>
                                <p>This Motor shield allows the Arduino to control electric motors.</p>
                            </div>
                        )},
                        {title: 'Terminal', 
                        jsx: (
                            <div>
                                <img src='terminal.jpg' alt='screw terminal shield' width='100%'/>
                                <p>The Screw Terminal Shield makes it easy to secure connections to the Arduino.</p>
                            </div>
                        )},
                        {title: 'Data Logger', 
                        jsx: (
                            <div>
                                <img src='logger.jpg' alt='data logger shield' width='100%'/>
                                <p>This shield provides both an SD card and a Real-time clock that can be used to timestamp data readings as they are saved to the SD card.</p>
                            </div>
                        )},
                        {title: 'LCD Screen', 
                        jsx: (
                            <div>
                                <img src='tft.jpg' alt='tft lcd screen shield' width='100%'/>
                                <p>This one provides a color LCD screen for Arduino output.</p>
                            </div>
                        )} ]

        return(
            <div>
                <NavBar currentPage='hardware' />
            <article id='hardware-page'>
            <section>
                <h1>Explore The Hardware</h1>
                <BoardLayout />
                </section>
                <section>
                <h1>Shields</h1>
                <p> Shields are circuit boards designed to fit the Arduino form factor.  Shields allow you to easily add capabilities to your Arduino</p>
                <p>There are many, many shields available (there is a large community or Arduino enthusiasts!).  Here are some common examples</p>
                <Accordian panels={panels} />
                </section>
                <br />
                <section>
                <h1>Beyond Shields</h1>
                <p>Shields are a great way of getting started, but what if there isn't a shield available for what you want to do?</p>
                <p>Well, you've got options!</p>
                <p>You can interface with almost any part using bread-board, proto-boards or even your own custom PCB.</p>
                <p>You can even create your own shields, if you want.  The Arduino hardware exposes pins that allow you to connect to most common devices and the software libraries make it simple to communicate with them.</p>
                <p>Arduino is a fully open-source platform, including the hardware.  This means that all schematics are available and you can tweak the design to your liking.</p>
                </section>
                <br />
            </article>
            </div>
        )
    }
}
