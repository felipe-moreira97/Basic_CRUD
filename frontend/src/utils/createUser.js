import request from "./request";

function createUser(email,password,token) {
    const body = {
        email,
        password
    }
    return new Promise ((resolve,reject) => {
        request('http://localhost:3001/signin','POST',body,token)
            .then(resp => resp.json())
            .then(json => resolve(json))
            .catch(err => reject(err))
    })
}
export default createUser