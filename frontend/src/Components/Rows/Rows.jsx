import { getToken } from "../../utils/token"
import { useNavigate } from 'react-router-dom'
import { useContext } from "react"
import globalContext from "../../Context/globalContext"
import { delUser } from "../../Context/actions"

const Rows = () => {
    const context = useContext(globalContext)
    const users = context.state.users
    const navigate =useNavigate()
    const token = getToken()
    const handleCLickDelete = id => {
        const payload = {id}
        delUser(context.dispatch,payload)
    }
    const handleClickEdit = (id,email) => {
        navigate(`/update?id=${id}&email=${email}`)
    }

    if (!users[0]) {
        return <></>
    } else {
    return (                              
        users.map(u => (
            <tr>
                <td>{u.id}</td>
                <td>{u.email}</td>
                <td className="btn-container">
                    <button className='btn' onClick={e => handleClickEdit(u.id,u.email)}>editar</button>
                    <button className='btn btn-del' onClick={e => handleCLickDelete(u.id,token)}>apagar</button>
                </td>
            </tr>
        )).reduce((acc,cur) => <>{acc}{cur}</>)
    )}
}
export default Rows