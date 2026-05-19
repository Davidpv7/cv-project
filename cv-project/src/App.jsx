import { useState } from 'react'
import './App.css'

import PersonalInfo from './components/PersonalInfo'
import Experience from './components/Experience'
import Education from './components/Education'


function App() {
  
  const [educationList, setEducationList] = useState([
    {id: 1, school: '', title: '', date: ''}
  ]);

  const handleAddEducation = () => {
    setEducationList([...educationList, { id: Date.now(), school: '', title: '', date: ''}])
  }

  const handleDeleteEducation = (id) => {
    setEducationList(educationList.filter((entry) => 
      entry.id !== id
    ))
  }

  const handleEducationChange = (id, field, value) => {
    setEducationList(educationList.map((entry) => 
      entry.id === id ? { ...entry, [field]: value} : entry
    ))
  }



  const [experienceList, setExperienceList] = useState([
    {id: 1,
    companyJob: '',
    titleJob: '',
    responsability1: '',
    responsability2: '',
    responsability3: '',
    dateFrom: '',
    dateTo: ''}
  ])

  const handleAddExperience = () => {
    setExperienceList([...experienceList, { 
    id: Date.now(), 
    companyJob: '',
    titleJob: '',
    responsability1: '',
    responsability2: '',
    responsability3: '',
    dateFrom: '',
    dateTo: ''}])
  }

  const handleExperienceChange = (id, field, value) => {
    setExperienceList(experienceList.map((entry) =>
      entry.id === id ? {...entry, [field]: value} : entry
    ))
  }

  const handleDeleteExperience = (id) => {
    setExperienceList(experienceList.filter((entry) => 
      entry.id !== id
    ))
  }

  return (
    <>
    <h1 className='resume-title'>Resume</h1>
      <div className='main-box'>

        <div className='info-box'>

          <div className='title-top-area'>
            <h1 className='title'>Information</h1>
          </div>

          <div className='box-info-comp'>

            <div className='comp-info'>
              <PersonalInfo />
            </div>
          </div>

        </div>

        <div className='education-box'>

          <div className='title-top-area'>
            <h1 className='info-title'>Education</h1>
          </div>

          <div className='box-education-comp'>

            <div className='comp-education'>
              {educationList.map((entry) => (
                <Education key={entry.id} entry={entry} onChange={handleEducationChange} onDelete={handleDeleteEducation}/>
              ))}
              <button onClick={handleAddEducation}>Add Education</button>
            </div>
          </div>

        </div>

        <div className='exp-box'>

          <div className='title-top-area'>
            <h1 className='info-title'>Experience</h1>
          </div>

          <div className='box-exp-comp'>

            <div className='comp-exp'>
              {experienceList.map((entry) =>(
                <Experience key={entry.id} entry={entry} onChange={handleExperienceChange} onDelete={handleDeleteExperience}/>
              ))}
              <button onClick={handleAddExperience}>Add Experience</button>
          
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
