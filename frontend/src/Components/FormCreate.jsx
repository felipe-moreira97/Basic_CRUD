import './styles/Login.css'
import React from 'react'
import { useState } from 'react'
import createUser from '../utils/createUser'
import { getToken } from '../utils/token'
import { useNavigate } from 'react-router-dom'

function FormCreate() {
    const token = getToken()
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
            createUser(email,password,token)
                .then(navigate('/user'))
                .catch(err => console.log(err))
    }
    const handleCancel = e => {
        e.preventDefault()
        navigate('/user')
    }
    return (
        <form className='Login' onSubmit={e => handleSubmit(e)} onReset={e => handleCancel(e)}>
            <h2>Cadastrar</h2>
            <input type='email' 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder='digite seu email'/>
            <input type='password' 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                placeholder='digite sua senha' />
            <div className='btn-container'>
                <input type='submit' />
                <input type="reset" value='cancelar' />
            </div>
        </form>
    )
}
export default FormCreate