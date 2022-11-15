import * as type from './types'
import { getToken } from '../utils/token'
import editUser from '../utils/editUser'
import createUser from '../utils/createUser'
import deleteUser from '../utils/deleteUser'
import getUser from '../utils/getUser'

export function getUsers(dispatch) {
    const token = getToken()
    getUser(token)
        .then(resp => dispatch({type:type.GET_USERS_SUCCESS,payload:resp}))
        .catch(err => alert(err.mensagem))    
}
export function updateUsers(dispatch,payload) {
    const token = getToken()
    editUser(payload.id,payload.email,token)
        .then(resp => {
            alert(resp.mensagem)
            dispatch({type:type.UPDATE_USERS_SUCCESS,payload:resp.users})
        })
        .catch(err => alert(err.mensagem))
}

export function newUser(dispatch,payload) {
    const token = getToken()
    createUser(payload.email,payload.password,token)
        .then(resp => {
            alert(resp.mensagem)
            dispatch({type:type.CREATE_USER,payload:resp.users})
        })
        .catch(err => alert(err.mensagem))
}

export function delUser(dispatch,payload) {
    const token = getToken()
    deleteUser(payload.id,token)
        .then(resp => {
            alert(resp.mensagem)
            dispatch({type:type.DELETE_USER,payload:resp.users})
        })
        .catch(err => alert(err.mensagem))
}