import {Route, BrowserRouter, Routes } from 'react-router-dom'
import FormCreate from '../Components/FormCreate'
import FormUpdate from '../Components/FormUpdate'
import Login from '../Components/Login/Login'
import Table from '../Components/Table'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path='/' exact />
                <Route element={<Table />} path='/user' />
                <Route element={<FormCreate />} path='/create' />
                <Route element={<FormUpdate />} path='/update' />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas