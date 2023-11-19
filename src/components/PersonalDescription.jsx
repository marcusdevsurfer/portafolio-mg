import React from 'react'
import '../PersonalDescription.css'
import { WelcomeMessage } from './WelcomeMessage'
export const PersonalDescription = () => {
  return (
    <div className='personal-description-box'>

      <WelcomeMessage/>

      <div className='personal-description-projects'>
        <h3>Projects</h3>
        <ul>
          <li>Lorem, ipsum dolor.
          </li>
          <li>Lorem, ipsum.</li>
        </ul>
      </div>
    </div>
  )
}
