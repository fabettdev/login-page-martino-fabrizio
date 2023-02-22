import React from 'react'
import { Routes, Route } from "react-router-dom"
import Subscribe from '../screens/Subscribe'
import Login from '../screens/Login'

function Routing() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/subscribe' element={<Subscribe />} />
        </Routes>
    )
}

export default Routing

