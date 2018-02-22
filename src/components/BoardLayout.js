/*
    Author: Matt Britt
    Date: 2/22/18
    Description: BoardLayout.js is the implementation file for the BoardLayout
                react component.
*/

import React, {Component} from 'react';

import './BoardLayout.css';

export default class BoardLayout extends Component{
  constructor(){
      super();

      this.state = { imageData: '' };

      this.handleClick = this.handleClick.bind(this);
  }
  
    componentDidMount(){
        var canvas = document.getElementById('board-canvas');
        var context = canvas.getContext('2d');
        context.imageSmoothingEnabled = false;
        var img = new Image();
        console.log('did update');
        img.onload = ()=>{
            context.drawImage(img, 0,0, canvas.width, canvas.height);
            this.setState({imageData: context.getImageData(0,0,canvas.width, canvas.height)})
        }

        img.src = 'Uno-top view.jpg';
    }
  

handleClick = function(event){
   
    var canvas = document.getElementById('board-canvas');
    var context = canvas.getContext('2d');

    var rectArr = [];
    var text = '';

    switch(event.target.id){
        case 'communication':
            rectArr.push({ x: 65, y: 85, w: 150, h: 100});
            rectArr.push({ x: 525, y: 30, w: 60, h: 35});
            text = 'Arduino has both USB and serial connections allowing the board to communicate with computers as well as I2C and SPI capabilities which interface with sensors and actuators';
            break;
        case 'digital':
            rectArr.push({ x: 310, y: 30, w: 270, h: 35});
            text = 'Digital pins detect presence (or absence) of power.  The signal is either ON or OFF.  This is useful for switching and communicating.  Digital pins can also be configured to output digital signal, which can control a variety of other devices';
        break;
        case 'analog':
            rectArr.push({ x: 450, y: 355, w: 130, h: 35});
            text = 'Analog inputs can detect precise voltages which allow us to interface with sensors measuring physical parameters such as voltage, pressure or ambient lighting';
            break;
        case 'microprocessor':
            rectArr.push({ x: 305, y: 245, w: 270, h: 75});
            text = 'The microprocessor (aka microcontroller) is the brains of the Arduino board.  This chip executes our programs and ultimately controls all other hardware.  A variety of boards are availabel depending on how much computing power the application needs';
            break;
        case 'power':
            rectArr.push({ x: 80, y: 285, w: 150, h: 100}); 
            rectArr.push({ x: 350, y: 355, w: 115, h: 35});
            text = 'Arduino can be powered via USB or by a standard wall adaptor.  It has built in voltage regulators to supply power to many common peripherals.  Battery power can also be used';
        break;
    }

    // restore canvas
    context.putImageData(this.state.imageData, 0,0);

    rectArr.forEach((elem)=>{
        context.beginPath();
        context.rect(elem.x, elem.y, elem.w, elem.h);
        context.lineWidth = 7;
        context.strokeStyle = 'rgb(255,0,0)';
        context.stroke();
    })

    document.getElementById('board-text').textContent = text;

}

    render(){
        return(
            <div id='board-layout'>
                <div id='board'>
                    <ul><h3>Click To Learn More</h3>
                        <li id='communication' onClick={this.handleClick}>Communication</li>
                        <li id ='digital' onClick={this.handleClick}>Digital I/O</li>
                        <li id='analog' onClick={this.handleClick}>Analog I/O</li>
                        <li id='microprocessor' onClick={this.handleClick}>Microprocessor</li>
                        <li id='power' onClick={this.handleClick}>Power</li>
                    </ul>
                        <canvas id='board-canvas' height='426' width='675'>
                            
                        </canvas>
                </div>
                <p id='board-text'></p>
            </div>
        )
    }

}