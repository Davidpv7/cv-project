import { useState } from 'react'
import './App.css'

import './components/PersonalInfo'
import './components/Education'
import './components/Experience'


function App() {
  
  return (
    <>
      <div className='main-box'>

        <div className='info-box'>

          <div className='title-top-area'>
            <h1 className='title'>Information</h1>
            <button className='edit-title'>Edit</button>
          </div>

          <div className='box-info-comp'>

            <div className='comp-info'>
              {/* Personal Info Comp Here */}
            </div>
          </div>

        </div>

        <div className='education-box'>

          <div className='title-top-area'>
            <h1 className='info-title'>Education</h1>
            <button className='edit-title'>Edit</button>
          </div>

        </div>

        <div className='exp-box'>

          <div className='title-top-area'>
            <h1 className='info-title'>Experience</h1>
            <button className='edit-title'>Edit</button>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
