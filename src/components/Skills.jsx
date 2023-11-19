import React from 'react'
import { FaJava, FaHtml5, FaReact, FaNpm } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";
import '../Skills.css'

export const Skills = () => {
  return (
    <div className='skills-box'>
      <div className='skills-front-end'>
        <h3 className='skill-title '>Front End</h3>
        <FaHtml5 className='skill-icon skill-icon-html' />
        <FaReact className='skill-icon skill-icon-react' />
        <FaNpm className='skill-icon skill-icon-npm' />
      </div>
      <div className='skills-back-end'>
        <h3 className='skill-title '>Back End</h3>
        <FaJava className='skill-icon' />
        <SiSpringboot className='skill-icon' />
        <SiMysql className='skill-icon' />
      </div>
    </div>
  )
}
