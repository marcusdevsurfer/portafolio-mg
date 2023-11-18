import React from 'react'
import { BsLinkedin, BsGithub,BsFillTerminalFill } from "react-icons/bs";

import '../Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo-navbar'>
            <BsFillTerminalFill className='logo-navbar-img'/>
        </div>
        <div className='links-navbar'>
            <BsLinkedin className='link-item'/>
            <BsGithub className='link-item'/>
        </div>
    </div>
  )
}
