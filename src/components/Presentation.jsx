import React from 'react'
import { Photo } from './Photo'
import { Resume } from './Resume'


const style = {
  'minHeight': '92vh' 
}

export const Presentation = () => {
  return (
    <div style={style} className='container-fluid d-flex justify-content-center align-items-center'>
        <Photo/>
        <Resume/>
    </div>
  )
}
