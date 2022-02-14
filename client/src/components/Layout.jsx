import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PageRoutes from '../routes/Routes'
import { Header } from './Header'
import { Footer } from './Footer'
import { LeftNav, RightNav } from './SideNav.jsx'

const Layout = () => {
    return (
        <BrowserRouter>
            <Header/>
            <div className="homeContainer">
                <LeftNav></LeftNav>
                <PageRoutes />
                <RightNav></RightNav>
            </div>
        </BrowserRouter>
    )
}

export default Layout
