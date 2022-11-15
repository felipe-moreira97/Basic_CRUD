import '../styles/Table.css'
import React from "react";
import Rows from "../Rows/Rows";
import { useNavigate } from 'react-router-dom'
import { useEffect,useRef } from 'react';
import { useContext } from 'react';
import globalContext from '../../Context/globalContext';
import { getUsers } from '../../Context/actions';

function Table() {
    const context = useContext(globalContext)
    const refDispatch = useRef(context.dispatch)
    const navigate = useNavigate()
    useEffect(() => {
        getUsers(refDispatch.current)
    },[]) 
    
    
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
                <Rows />
            </tbody>
        </table>
    )}
export default Table