import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const style = {
    'color': 'inherit' 
  }

export const SocialMediaLinks = () => {
  return (
    <div className='text-center'>
        <a style={style} target='blank' href="https://www.linkedin.com/in/marcusgonzalez1399/"><FaLinkedin className='m-3 img-fluid' size={30} /></a>
        <a style={style} target='blank' href="https://github.com/marcusdevsurfer"><FaGithub className='m-3' size={30} /></a>
    </div>
  )
}
