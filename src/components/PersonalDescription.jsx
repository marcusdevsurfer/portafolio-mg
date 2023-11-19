import React from 'react'
import '../PersonalDescription.css'
export const PersonalDescription = () => {
  return (
    <div className='personal-description-box'>

      <div className='personal-description-resume'>
        <h1>Welcome.</h1>
        <p>I'm Marcus Gonzalez, Full Stack Developer with 4 year's of experience.</p>
      </div>

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
