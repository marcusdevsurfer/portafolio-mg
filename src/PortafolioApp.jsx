import React from 'react'
import { Navbar } from './components/Navbar'
import { Presentation } from './components/Presentation'
import { Timeline } from './components/Timeline'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'

export const PortafolioApp = () => {
  return (
    <>
        <Navbar/>
        <Presentation/>
        <Timeline/>
        <Contact/>
        <Footer/>
    </>
  )
}
