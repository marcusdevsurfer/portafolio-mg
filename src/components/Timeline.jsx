import React, { useState } from 'react'
import '/src/style/Timeline.css'
import { Episode } from './Episode';

const listActivitiesListHCLFirstProject = [
    'Working in an agile environment and having constant communication with work members and project managers to solve questions or doubts about the project process, all the time the communication is in English because it is a multicultural team mixed with people from India and the United States.',
    'The project architecture is based on a microservices architecture deployed in containers and developed on Spring Boot, using some importants dependencies of Spring boot like security and spring web. Usually I attend user stories to develop new code or new functionalities to the project and also receive the code review and create the pull request to implement it in the production environment.',
    'Create solutions to implement when bugs or defects are detected in the production environment, all these tickets are posted and assigned in a Jira dashboard.',
    'Use of Kibana Tool to debugging services in the project when defects appear in the production environment, when the problem is detected we have to provide a fix code or route this to the correct module or layer of the application.'
]

const listActivitiesListHCLSecondProject = [
    'Working in the SCRUM environment to agile progress.',
    'Using Java 8 as a programming language.',
    'Use of Maven to build projects and manage dependencies',
    'Writing and reading of CSV files through Java with OpenCSV dependency.',
    'Writing HTML documents using the data from the CSV file through Java using BufferedWriter class, the HTML document contains a dashboard with a summary of the data.',
    'Use of web technologies as HTML, CSS and JavaScript.',
    'Creating User Interfaces and adding Styles with CSS. Also using media queries to create a responsive design of the dashboard summary.',
    'Using JavaScript listeners as onClick, onChange and also using jQuery to select and manage objects from the DOM.'
]

const listActivitiesIBM = [
    'Read and analyze code written in Java.',
    'Perform unit tests on Java classes using Junit5.',
    'Analyzing methods declared within the classes to test their operation both as the expected and as the unexpected result.',
    'Use of the Jacoco library for code coverage and to know how much the code has been executed in a test environment.'
]



export const Timeline = () => {


    return (
        <div className='container mb-3'>
            <div className='text-center my-3'>
                <h3>Timeline</h3>
            </div>

            <div className='row justify-content-center align-items-center'>
                <div className='col-sm-12 col-md-6 text-center'>
                    <Episode enterprise={'HCLTECH'} client={'Verizon'} jobRole={'Production Support and Development.'} activities={listActivitiesListHCLFirstProject} />
                    <canvas className='card-separator'></canvas>
                </div>
            </div>

            <div className='row justify-content-center align-items-center'>
                <div className='col-sm-12 col-md-6 text-center'>
                    <Episode enterprise={'HCLTECH'} client={'Verizon'} jobRole={'Dashboard Summary'} activities={listActivitiesListHCLSecondProject} />
                    <canvas className='card-separator'></canvas>
                </div>
            </div>

            <div className='row justify-content-center align-items-center'>
                <div className='col-sm-12 col-md-6 text-center'>
                    <Episode enterprise={'IBM'} client={'USAA'} jobRole={'Unit Testing Development'} activities={listActivitiesIBM} />
                </div>
            </div>


        </div>
    )
}
