/*
    Author: Matt Britt
    Date: 2/16/18
    Description: ProjectsPage.js is the implementation file for the ProjectsPage
                react component.
*/

import React, {Component} from 'react';

import NavBar from '../components/NavBar';

export default class ProjectsPage extends Component{
    render(){
        return(
            <div>
                <article>
                <NavBar currentPage='projects'/>
                    <h1>Projects Page</h1>
                </article>
            </div>
        )
    }
}
