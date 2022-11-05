import deleteUser from "../../utils/deleteUser"
import { getToken } from "../../utils/token"
import { useNavigate } from 'react-router-dom'

const Rows = ({users,setUsers}) => {
    const navigate =useNavigate()
    const token = getToken()
    const handleCLickDelete = id => {
        deleteUser(id,token)
        .then(json => setUsers(json.users))
        .then(() => window.alert('Usuário apagado com sucesso'))
        .catch(err => console.log(err))
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