import { useState } from 'react'
import '../styles/Experience.css'

export default function Experience({ entry, onChange, onDelete}){

    const [isEditing, setIsEditing] = useState(false)

    return(
        <div className="experience-card">
            {isEditing ? (
                <>
                    <input 
                    type='text' 
                    value={entry.companyJob} 
                    placeholder='Company Name' 
                    onChange={(e) => onChange(entry.id, 'companyJob', e.target.value)}/>

                    <input 
                    type='text' 
                    value={entry.titleJob} 
                    placeholder='Job Title' 
                    onChange={(e) => onChange(entry.id, 'titleJob', e.target.value)}/>

                    <input 
                    type='text' 
                    value={entry.responsability1} 
                    placeholder='Responsibilities' 
                    onChange={(e) => onChange(entry.id, 'responsability1', e.target.value)}/>

                    <input 
                    type='text' 
                    value={entry.responsability2} 
                    placeholder='Responsibilities' 
                    onChange={(e) => onChange(entry.id, 'responsability2', e.target.value)}/>

                    <input 
                    type='text' 
                    value={entry.responsability3} 
                    placeholder='Responsibilities' 
                    onChange={(e) => onChange(entry.id, 'responsability3', e.target.value)}/>

                    <input 
                    type='date' 
                    value={entry.dateFrom} 
                    placeholder='From' 
                    onChange={(e) => onChange(entry.id, 'dateFrom', e.target.value)}/>

                    <input 
                    type='date' 
                    value={entry.dateTo} 
                    placeholder='To' 
                    onChange={(e) => onChange(entry.id, 'dateTo', e.target.value)}/>
                    
                </>

            ) : (
                <>
                    <p>Company Name: {entry.companyJob}</p>
                    <p>Title Job: {entry.titleJob}</p>
                    <p>Responsibilities: {entry.responsability1}</p>
                    <p>Responsibilities: {entry.responsability2}</p>
                    <p>Responsibilities: {entry.responsability3}</p>
                    <p>Date From: {entry.dateFrom}</p>
                    <p>Date To: {entry.dateTo}</p>
                </>
            )}
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
            <button onClick={() => onDelete(entry.id)}>
                Delete
            </button>
        </div>
    )
}