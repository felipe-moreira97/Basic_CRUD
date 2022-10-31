import request from "./request"
const deleteUser = (id,token) => {
    const body = {
        id
    }   
    return new Promise((resolve,reject) => {
        request('http://localhost:3001/user','DELETE',body,token)
        .then(resp => resp.json())
        .then(json => resolve(json))
        .catch(err => reject(err))
    })  
}
export default deleteUser