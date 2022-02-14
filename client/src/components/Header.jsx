import React from 'react'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'

import ava1 from '../assets/person/1.jpeg';

export const Header = () => {
  return (
    <div className="header">
        <div className="header__left">
            <span className="logo">Fakebook</span>
        </div>
        <div className="header__middle">
            <div className="searchbar">
                <Search style={{transform: "scale(0.7)"}}/>
                <input type="text" placeholder='Search for fake friends' className='searchInput' />
            </div>
        </div>
        <div className="header__right">
            {/* <div className="header__right__links">
                <span className="link">
                    Home
                </span>
                <span className="link">
                    Newfeed
                </span>
            </div> */}
            <div className="header__right__icons">
                <div className="icon">
                    <Person></Person>
                    <span className="iconBadge">1</span>
                </div>
                <div className="icon">
                    <Chat></Chat>
                    <span className="iconBadge">1</span>
                </div>
                <div className="icon">
                    <Notifications></Notifications>
                    <span className="iconBadge">1</span>
                </div>
            </div>
            <img src={ava1} alt="" className="header__image" />
        </div> 
    </div>
  )
}
