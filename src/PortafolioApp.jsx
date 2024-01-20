import React from 'react'
import { Navbar } from './components/Navbar'
import { Presentation } from './components/Presentation'
import { Timeline } from './components/Timeline'
import { Footer } from './components/Footer'

export const PortafolioApp = () => {
  return (
    <>
        <Navbar/>
        <Presentation/>
        <Timeline/>
        <Footer/>
    </>
  )
}
