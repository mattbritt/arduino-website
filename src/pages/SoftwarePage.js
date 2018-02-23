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

export default class SoftwarePage extends Component{



    render(){

        // setup panels for Accordian
        var testPanelObj = {
           filename: 'blink.ino',
          title: 'Blink',
          imgSrc: 'led-blink.gif',
          imgAlt: 'Blinking LED'
        }
        
        var testPanel = [{title: testPanelObj.title,
        jsx: <SoftwarePanel data={testPanelObj} />}]

console.log(testPanel)

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
                </article>
            </div>
        )
    }
}
