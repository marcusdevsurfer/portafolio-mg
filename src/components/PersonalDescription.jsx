import React from 'react'
import '../PersonalDescription.css'
import { WelcomeMessage } from './WelcomeMessage'
import { DeveloperJourney } from './DeveloperJourney'
export const PersonalDescription = () => {
  return (
    <div className='personal-description-box'>
      <WelcomeMessage/>
      <DeveloperJourney/>
    </div>
  )
}
