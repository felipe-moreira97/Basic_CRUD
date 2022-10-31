
function request(url = '',method = 'GET',body = null,token = null) {
    const authorization = token ? `Bearer ${token}` : null 
    const headers = {
        "Content-type": "application/json; charset=UTF-8",
        "Accept": "*",
        "Authorization": authorization,
        "mode":"no-cors"
    }
    const b = body ? JSON.stringify(body) : null
    const request = new Request (url,{
        method,
        headers,
        body:b,
    })
    return new Promise ((resolve,reject) => {
        fetch(request)
            .then(resp => resolve(resp))
            .catch(err => reject(err))
    })
}
export default request

