function setToken(token) {
    window.sessionStorage.setItem('token',token)
}
function getToken() {
    const token = window.sessionStorage.getItem('token')
    return token
}
export {setToken,getToken}