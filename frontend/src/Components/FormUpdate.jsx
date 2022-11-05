import './styles/Login.css'
import React from 'react'
import { useState } from 'react'
import editUser from '../utils/editUser'
import { getToken } from '../utils/token'
import { useNavigate,useLocation } from 'react-router-dom'

function FormUpdate() {
    const token = getToken()
    const navigate = useNavigate()
    function useQuery() {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
      }
    const query = useQuery()
    const [email,setEmail] = useState(query.get('email') || '')
    const [id] = useState(query.get('id') || '')

    const handleSubmit = e => {
        e.preventDefault()
        editUser(id,email,token)

            .then(resp => {
                if(resp.status===200) alert('usuário alterado com sucesso')
            })
            .then(navigate('/user'))
            .catch(err => console.log(err))
        }
    const handleCancel = e => {
        e.preventDefault()
        navigate('/user')
    }    
        return (
            <form className='Login' onSubmit={e => handleSubmit(e)} onReset={e => handleCancel(e)}>
                <h2>Editar</h2>
                <input type='email' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='digite seu email' />
                <div className='btn-container'>
                    <input type='submit' />
                    <input type="reset" value='cancelar' />
                </div>
            </form>
        )
    }
export default FormUpdate