import request from "./request"
const getUser = async (token) => {
    const resp = await request('http://localhost:3001/user',"GET",null,token)
    if (resp.status === 200) {
        const json = await resp.json()
        return json.users
    } 
}
export default getUser