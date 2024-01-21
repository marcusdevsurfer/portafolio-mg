import React from 'react'
import { Photo } from './Photo'
import { Resume } from './Resume'

import '/src/style/Presentation.css'


const style = {
  'minHeight': '92vh'
}

export const Presentation = () => {
  return (
    <div style={style} className='container-fluid d-flex justify-content-center align-items-center'>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <Photo />
        </div>
        <div className='col-sm-12 col-md-6'>
          <Resume />
        </div>
      </div>

      <div class="bubbles">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
      </div>
    </div>
  )
}
