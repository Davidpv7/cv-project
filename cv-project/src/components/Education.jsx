import { useState } from 'react'
import '../styles/Education.css'

export default function Education({ entry, onChange, onDelete }) {

  const [isEditing, setIsEditing] = useState(false);
  
    return (

    <div className="education-card">
        {isEditing ? (
            <>
                <input 
                type='text' 
                placeholder='School Name' 
                value={entry.school} 
                onChange={(e) => onChange(entry.id, 'school', e.target.value)
                }
                />

                <input 
                type='text' 
                placeholder='Title' 
                value={entry.title} 
                onChange={(e) => onChange(entry.id, 'title', e.target.value)}
                />

                <input 
                type='date'
                placeholder='Date' 
                value={entry.date} 
                onChange={(e) => onChange(entry.id, 'date', e.target.value)}
                />
            </>
        ): (

            <>
                <p>School Name: {entry.school}</p>
                <p>Title of Study: {entry.title}</p>
                <p>Date: {entry.date}</p>
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