import './styles/Table.css'
import React from "react";
import { useEffect,useState } from "react";
import request from "../utils/request";
import Rows from "./Rows";
import { getToken } from '../utils/token';
import { useNavigate } from 'react-router-dom'


function Table() {
    const [users,setUsers] = useState([])
    const token = getToken()
    const navigate = useNavigate()

    useEffect(() => {
        request('http://localhost:3001/user',"GET",null,token)
            .then(resp => {
                if (resp.status === 200) {
                    return resp.json()
                } else {
                    navigate('/')
                }
            })
            .then(json => setUsers(json.users))
            .catch(err => console.log(err))
    },[token,navigate])

    const handleClick = e => {
        navigate('/create')
    }
        return (
        <table className="Table">
            <thead>
                <tr>
                    <td></td>
                    <td></td>
                    <td>
                        <button onClick={e => handleClick(e)} >Cadastrar</button>
                    </td>
                </tr>
                <tr>
                    <th>Id</th>
                    <th>email</th>
                    <th>ações</th>
                </tr>
            </thead>
            <tbody>
                <Rows users={users} 
                      setUsers={setUsers} 
                    />
            </tbody>
        </table>
    )}
export default Table