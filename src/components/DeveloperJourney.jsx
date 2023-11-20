import React from 'react'
import '../DeveloperJourney.css'

export const DeveloperJourney = () => {
  return (
    <div className='developer-journey-box'>
      <h2>Work Experience</h2>

      <div className='experience-description'>
        <div className='experience-description-year'>
          2023 - Now
        </div>
        <div className='experience-description-job'>
          <h4>IBM - Java Developer</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum, eveniet consequuntur architecto libero accusamus doloremque quo quidem quaerat dolores at deleniti laudantium assumenda reiciendis porro obcaecati optio debitis quae.</p>
        </div>
      </div>

      <div className='experience-description'>
        <div className='experience-description-year'>
          2021 - 2023
        </div>
        <div className='experience-description-job'>
          <h4>HCLTECH - Software Enginner</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum, eveniet consequuntur architecto libero accusamus doloremque quo quidem quaerat dolores at deleniti laudantium assumenda reiciendis porro obcaecati optio debitis quae.</p>
        </div>
      </div>
    </div>
  )
}
