import { Avatar, Icon } from '@material-ui/core'
import { Chat, EmojiFlags, ExpandMore, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons'
import React from 'react'

import ava from '../assets/person/ava.jpg';

const sideBarItems = [
  {
    icon: <LocalHospital/>,
    title: "COVID-19 Information Center"
  }, 
  {
    icon: <EmojiFlags/>,
    title: "Pages"
  }, 
  {
    icon: <People/>,
    title: "Friends"
  }, 
  
  {
    icon: <Chat/>,
    title: "Messenger"
  }, 
  {
    icon: <Storefront/>,
    title: "Marketplace"
  }, 
  {
    icon: <VideoLibrary/>,
    title: "Videos"
  }, 
  {
    icon: <ExpandMore/>,
    title: "Shortcuts"
  }, 
]
const SideBar = () => {
  return (
    <div className="sidebar">
      <SidebarRow src={ava} title="Smokey"/>
      {
        sideBarItems.map((item, index) => (
          <SidebarRow 
            key={index} 
            Icon={item.icon}
            title={item.title} />
        ))
      }
    </div>
  )
}

export default SideBar


const SidebarRow = props => {
  return (
    <div className="sidebar__row">
      {props.src && <Avatar src={props.src}/>}
      {props.Icon}
      <h4>{props.title}</h4>
    </div>
  )
}