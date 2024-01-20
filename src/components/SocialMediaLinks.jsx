import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import  '/src/style/SocialMediaLinks.css'

export const SocialMediaLinks = () => {
  return (
    <div className='text-center'>
        <a className='social-media-link' target='blank' href="https://www.linkedin.com/in/marcusgonzalez1399/"><FaLinkedin className='m-3 img-fluid' size={32} /></a>
        <a className='social-media-link' target='blank' href="https://github.com/marcusdevsurfer"><FaGithub className='m-3' size={32} /></a>
    </div>
  )
}
