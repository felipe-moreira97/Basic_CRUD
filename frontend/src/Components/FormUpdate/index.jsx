import '../styles/Login.css'
import { useState,useMemo } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import { updateUsers } from '../../Context/actions'
import { useContext } from 'react'
import globalContext from '../../Context/globalContext'

function FormUpdate() {
    const navigate = useNavigate()
    const context = useContext(globalContext)
    function useQuery() {
        const { search } = useLocation();
        return useMemo(() => new URLSearchParams(search), [search]);
      }
    const query = useQuery()
    const [email,setEmail] = useState(query.get('email') || '')
    const [id] = useState(query.get('id') || '')

    const handleSubmit = e => {
        e.preventDefault()
        const payload = {
            id,
            email
        }
        updateUsers(context.dispatch,payload)
        navigate('/user')
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