import React from 'react'
import { RssFeed, FeaturedVideo, Bookmark, HelpOutline, WorkOutline, Event, School } from '@material-ui/icons'

const leftNavItems = [
    {
        icon: <RssFeed/>,
        display: "Feed"
    }, 
    {
        icon: <FeaturedVideo/>,
        display: "Videos"
    },
    {
        icon: <Bookmark/>,
        display: "Bookmarks"
    },
    {
        icon: <HelpOutline/>,
        display: "Questions"
    },
    {
        icon: <WorkOutline/>,
        display: "Jobs"
    },
    {
        icon: <Event/>,
        display: "Events"
    },
    {
        icon: <School/>,
        display: "Schools"
    }
];

export const LeftNav = () => {

    console.log(leftNavItems)
  return (
    <div className="leftnav">
        <div className="leftnav__wrapper">
            <ul className="leftnav__wrapper__list">
                {
                    leftNavItems.map((item, index) => (
                        <li key={index} className="leftnav__wrapper__list__item">
                            {item.icon}
                            <span className="leftnav__wrapper__list__item__text">
                                {item.display}
                            </span>
                        </li>
                    ))
                }
            </ul>
            <button className="leftnav__btn">Show more</button>
            <hr className='leftnav__hr'/>
            <h4>Your shortcuts</h4>
            <ul className="leftnav__wrapper__list">
                <li className="leftnav__wrapper__list__item">
                    
                </li>
            </ul>
        </div>
    </div>
  )
}


export const RightNav = () => {
    return (
        <div className="rightnav">
            rightnav
        </div>
    )
}