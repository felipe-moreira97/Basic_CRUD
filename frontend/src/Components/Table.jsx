import './styles/Table.css'
import React from "react";
import { useState } from "react";
import request from "../utils/request";
import Rows from "./Rows/Rows";
import { getToken } from '../utils/token';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';




function Table() {
    const isObjDiferent = (objA,objB) => {
        return JSON.stringify(objA) !== JSON.stringify(objB)
    }
    const navigate = useNavigate()
    const [users,setUsers] = useState([])
    const token = getToken()
    useEffect(() => {
        const fetchData = async () => {
            const resp = await request('http://localhost:3001/user',"GET",null,token)
            if (resp.status === 200) {
                const json = await resp.json()
                const data = json.users
                console.log(data)
                if (isObjDiferent(data,users)) {
                    console.log('entrou')
                    setUsers(data)
                }
            } else {
                navigate('/')
            }
        }    
        fetchData()
    })
    
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