import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Login from '../pages/login/Login'
import PageRoutes from '../routes/Routes'
import { Header } from './Header'
import SideBar from './SideBar'
import Widgets from './Widgets'

const Layout = () => {
    const user = "Smokey"
    return (
        <BrowserRouter>
            {
                !user ? (
                    <Login/>
                ) : (
                    <>
                        <Header/>
                        <div className="homeContainer">
                            <SideBar/>
                            <PageRoutes></PageRoutes>
                            <Widgets/>
                        </div>
                    </>
                )
            }
        </BrowserRouter>
    )
}

export default Layout
