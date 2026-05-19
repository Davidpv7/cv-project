import { useState } from 'react'
import '../styles/PersonalInfo.css'

export default function PersonalInfo(){

    const [isEditing, setIsEditing] = useState(false)
    const [name, setIsname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleChangeName = (e) => {
        setIsname(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }

    return(
        <div className="personal-info">
            {isEditing ? (
                <>
                    <input type='text' value={name} placeholder='Name' onChange={handleChangeName}/>
                    <input type='email' value={email} placeholder='Email' onChange={handleChangeEmail}/>
                    <input type='tel' value={phone} placeholder='Phone' onChange={handleChangePhone}/>
                </>
            ) : (
                <>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
                </>
            )}
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </div>
    )
}