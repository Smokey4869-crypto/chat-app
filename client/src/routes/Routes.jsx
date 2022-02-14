import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home'

const PageRoutes = () => {
    return (
        <Routes className="main">
            <Route path='/' element={<Home />}/>
        </Routes>
    )
}

export default PageRoutes
