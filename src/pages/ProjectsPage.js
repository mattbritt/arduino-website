/*
    Author: Matt Britt
    Date: 2/16/18
    Description: ProjectsPage.js is the implementation file for the ProjectsPage
                react component.
*/

import React, {Component} from 'react';

import NavBar from '../components/NavBar';
import GridBox from '../components/GridBox';

import projectList from '../settings/Projects.json';

import './ProjectsPage.css';

export default class ProjectsPage extends Component{

    render(){

        // create GriBoxes from loaded data
        var boxes = [];
        var projects = projectList.projects;
        for(var i = 0; i < projects.length; i++)
        {
            var color = {color: projects[i].color} || {color: 'white'};
            boxes.push(<GridBox key={i} imgSrc={projects[i].imgSrc} alt={projects[i].alt} text={projects[i].text} link={projects[i].link} color={color} />);
        }

        return(
            <div>
                <article>
                <NavBar currentPage='projects'/>
                    <h1 id='projects-page-h1'>Projects Page</h1>
                    <p id='projects-page-p'> The projects below were selected to show off the range of projects you can build using Arduino. 
                         They range from scientific to novelty, from useful to entertaining.  Remember, there are many, many more projects out there to explore!
                    </p>
                    <div className='grid-container'>
                        {boxes}
                    </div>
                </article>
            </div>
        )
    }
}
