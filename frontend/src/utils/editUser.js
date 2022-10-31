import request from "./request";

function editUser(id,email,token) {
    const body = {
        id,
        email
    }
    return new Promise ((resolve,reject) => {
        request('http://localhost:3001/user','PUT',body,token)
        .then(resp => resp.json())
        .then(json => resolve(json))
        .catch(err => reject(err))
    })
}
export default editUser