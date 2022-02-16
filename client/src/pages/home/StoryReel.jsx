import { Avatar } from '@material-ui/core'
import React from 'react'

import ava1 from '../../assets/person/1.jpeg'
import image1 from '../../assets/person/image.jpg'

const dummyUsers = [
    {
        image: image1,
        profileSrc: ava1,
        userName: "Annie"
    },
    {
        image: image1,
        profileSrc: ava1,
        userName: "Roxy"
    },
    {
        image: image1,
        profileSrc: ava1,
        userName: "Chica"
    },
    {
        image: image1,
        profileSrc: ava1,
        userName: "Bonnie"
    },
    {
        image: image1,
        profileSrc: ava1,
        userName: "Haley"
    },
]
const StoryReel = () => {
  return (
    <div className="storyreel">
        {
            dummyUsers.map((item, index) => (
                <Story 
                    key={index}
                    image={item.image}
                    profileSrc={item.profileSrc}
                    userName={item.userName}
                />
            ))
        }
    </div>
  )
}

export default StoryReel

const Story = props => {
    return (
        <div 
            className="storyreel__item"
            style={{ backgroundImage: `url(${props.image})`}}
        >
            <Avatar className="storyreel__item__avatar" src={props.profileSrc}/>
            <h4>{props.userName}</h4>
        </div>
    )
}