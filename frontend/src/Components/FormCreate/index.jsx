import '../styles/Login.css'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import globalContext from '../../Context/globalContext'
import { newUser } from '../../Context/actions'

function FormCreate() {
    const context = useContext(globalContext)
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        const payload = {
            email,
            password
        }
        newUser(context.dispatch,payload)
    navigate('/user')
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