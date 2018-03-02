/*
    Author: Matt Britt
    Date: 2/16/18
    Description: SoftwarePage.js is the implementation file for the SoftwarePage
                react component.
*/

import React, {Component} from 'react';

import NavBar from '../components/NavBar';
import Accordian from '../components/Accordian';
import SoftwarePanel from '../components/SoftwarePanel';

import './SoftwarePage.css';

var blink = require('./softwarePanels/blinkPanel.json');
var knob = require('./softwarePanels/knobPanel.json');
var remote = require('./softwarePanels/remotePanel.json');

export default class SoftwarePage extends Component{




    render(){

        // setup panels for Accordian
        
        var testPanel = [{title: blink.title,
        jsx: <SoftwarePanel data={blink} />},
        {title: knob.title,
            jsx: <SoftwarePanel data={knob} />},
        {title: remote.title,
            jsx: <SoftwarePanel data={remote} />},
        
        ]

        return(
            <div>
                <NavBar currentPage='software' />
                <article id='software-page'>
                <section>
                <h1>Arduino Software</h1>
                <p>The Arduino software system makes it easy to program the Arduino microcontroller.</p>
                <p>The Arduino IDE integrate all the tools need to develop and load programs onto the Arduino board.
                    It includes standard amenities like syntax-highlighting, online help and a serial debugger to test your latest creation.</p>
                <p>Standard programming is in c/c++ with some minor simplifications to help beginners get up and going.  Don't worry though, 
                    once you're advanced enough you can leverage the power of pure c/c++ to push the hardware to it's limits.</p>
                <p>Arduino is a great way to learn programming!</p>
                </section>
                <section>
                <h1>Example Programs</h1>
                <br />
                <h3>Click below to see and download example programs.</h3>
                <Accordian panels={testPanel}/>
                </section>
                <br />
                <section>
                <h1>Arduino IDE</h1>
                <img src='Arduino IDE.png' alt='Arduino IDE'/>
                <p>The Arduino IDE will allow you to quickly program your Arduino boards.</p>
                <h3>The IDE is available in 3 versions:</h3>
                <ul>
                    <li>Standard Installation - download to your computer</li>
                    <li>Non Admin Installation - for Windows users without admin access</li>
                    <li>Arduino Web Editor - Online IDE that allows you to work in the cloud</li>
                </ul>
                <p>For more information see the official <a href='https://www.arduino.cc/en/Main/Software' target='_blank' rel='noopener noreferrer'>Arduino Software Page</a></p>
                </section>
                <br />
                </article>
            </div>
        )
    }
}
