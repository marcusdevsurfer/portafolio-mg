import React from 'react'
import { FaJava, FaHtml5, FaReact, FaNpm } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";
import '../Skills.css'

export const Skills = () => {
  return (
    <div className='skills-box'>
      <div className='skills-front-end'>
        <h3 className='skill-title'>Front End</h3>
        <FaHtml5 className='skill-icon skill-icon-html' />
        <FaReact className='skill-icon skill-icon-react' />
        <FaNpm className='skill-icon skill-icon-npm' />
      </div>
      <div className='skills-back-end'>
        <h3 className='skill-title'>Back End</h3>
        <FaJava className='skill-icon skill-icon-java' />
        <SiSpringboot className='skill-icon skill-icon-spring' />
        <SiMysql className='skill-icon skill-icon-mysql' />
      </div>
    </div>
  )
}
