import React from 'react'
import { Photo } from './Photo'
import { Resume } from './Resume'

import '/src/style/Presentation.css'


const style = {
  'minHeight': '92vh'
}

export const Presentation = () => {
  return (
    <div className='container'>
      <div style={style} className='row align-items-center justify-content-center'>
        <div className='col-auto col-md-6 text-cente'>
          <Photo />
        </div>
        <div className='col-auto col-md-6'>
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
