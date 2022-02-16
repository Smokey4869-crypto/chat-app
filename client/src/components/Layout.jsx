import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PageRoutes from '../routes/Routes'
import { Header } from './Header'
import SideBar from './SideBar'
import Widgets from './Widgets'

const Layout = () => {
    return (
        <BrowserRouter>
            <Header/>
            <div className="homeContainer">
                <SideBar/>
                <PageRoutes></PageRoutes>
                <Widgets/>
            </div>
        </BrowserRouter>
    )
}

export default Layout
