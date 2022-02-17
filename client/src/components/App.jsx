import React from 'react'
import Home from '../pages/home/Home'
import { Header } from './Header'
import SideBar from './SideBar'
import Widgets from './Widgets'
import PageRoutes from '../routes/Routes'

const App = () => {
  return (
    <div>
        <Header/>
        <div className="homeContainer">
            <SideBar/>
            <Home/>
            <Widgets/>
        </div>                   
    </div>
  )
}

export default App