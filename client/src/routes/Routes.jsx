import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import App from '../components/App';

import Home from '../pages/home/Home'
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Messenger from '../pages/messenger/Messenger';
import Profile from '../pages/profile/Profile';

const PageRoutes = () => {
    const user = null
    return (
        <Routes className="main">
            <Route path='/' element={
                user ? <App/> : <Register/>
            }/>
            <Route path='/login' element={
                user ? <Navigate replace to="/"/> : <Login/>
            }/>
            <Route path='/register' element={
                user ? <Navigate replace to="/"/> : <Register/>
            }/>
            <Route path='/messenger' element={
                !user ? <Navigate replace to="/"/> : <Messenger/>
            }/>
            <Route path='/profile/:username' element={Profile}/>
            <Route path='/watch' element={<Home />}/>
            <Route path='/marketplace' element={<Home />}/>
            <Route path='/groups' element={<Home />}/>
            <Route path='/gaming' element={<Home />}/>
            <Route path='/register' element={<Register />}/>

        </Routes>
    )
}

export default PageRoutes
