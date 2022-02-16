import React, { useRef } from 'react'

import logo from '../assets/logo/logo.png'

import { Link, useLocation } from 'react-router-dom'

import { Add, Forum, ExpandMore, SportsEsports, NotificationsActive, Search, Home, Flag, SubscriptionsOutlined, StorefrontOutlined, SupervisedUserCircle } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'

const middleMenuOpts = [
    {
        icon: <Home/>,
        path: '/'
    }, 
    {
        icon: <SubscriptionsOutlined/>,
        path: '/watch'
    },
    {
        icon: <StorefrontOutlined/>,
        path: '/marketplace'
    },
    {
        icon: <SupervisedUserCircle/>,
        path: '/groups'
    },
    {
        icon: <SportsEsports/>,
        path: '/gaming'
    },
]

const rightMenuOpts = [
    {
        icon: <Add fontSize='small'/>
    },
    {
        icon: <Forum fontSize='small'/>
    },
    {
        icon: <NotificationsActive fontSize='small'/>
    },
    {
        icon: <ExpandMore fontSize='small'/>
    }
]
export const Header = () => {
    const { pathname } = useLocation()
    const activeNav = middleMenuOpts.findIndex(e => e.path === pathname)

    console.log(activeNav);
    
    const menuMiddle = useRef(null)
    const menuToggle = () => menuMiddle.current.classList.toggle('active')

    return (
        <div className="header">
            <div className="header__left">
                <img src={logo} alt="" />
                <div className="header__left__input">
                    <Search fontSize='small'></Search>
                    <input type="text" />
                </div>
            </div>
            <div className="header__middle" ref={menuMiddle}>
                {
                    middleMenuOpts.map((item, index) => (
                        <div key={index} 
                            className={`header__middle__option ${index === activeNav ? 'active' : ''}`} 
                            onClick={menuToggle}>
                            <Link to={item.path}>
                                {item.icon}
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div className="header__right">
                <div className="header__right__info">
                    <Avatar fontSize='small'></Avatar>
                    <h4>Smokey</h4>
                </div>
    
                {
                    rightMenuOpts.map((item, index) => (
                        <IconButton fontSize="10px" key={index}>
                            {item.icon}
                        </IconButton>
                    ))
                }
            </div>
        </div>
      )
}
