import '../styles/Login.css'
import React from "react";
import { useState } from "react";
import request from "../../utils/request";
import { setToken } from "../../utils/token"
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        const body = {
            email,
            password
        }
        request('http://localhost:3001/login','POST',body)
            .then(resp => resp.json())
            .then(json => setToken(json.token))
            .then(() => navigate('/user'))
            .catch(err => console.log(err))
        setEmail('')
        setPassword('')        
    }
    return (
        <form onSubmit={e => handleSubmit(e)} className="Login" data-testid='form'>
            <h2>Login</h2>
            <input type="email" placeholder="digite seu e-mail" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="digite sua senha" value={password} onChange={e => setPassword(e.target.value)}/>
            <input type="submit" value="Entrar" />
        </form>
    )
}
export default Login