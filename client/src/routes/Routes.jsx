import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home/Home'
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

const PageRoutes = () => {
    
    return (
        <Routes className="main">
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/watch' element={<Home />}/>
            <Route path='/marketplace' element={<Home />}/>
            <Route path='/groups' element={<Home />}/>
            <Route path='/gaming' element={<Home />}/>
            <Route path='/register' element={<Register />}/>

        </Routes>
    )
}

export default PageRoutes
