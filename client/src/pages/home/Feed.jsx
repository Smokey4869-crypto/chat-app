import React from 'react'

import StoryReel from './StoryReel'
import Status from './Status'
import Post from './Post'

import ava from '../../assets/person/1.jpeg'
import image from '../../assets/post/10.jpeg'

const dummyPosts = [
  {
    profilePic: ava,
    message: "Wow this works!" ,
    timeStamp: "05:11 PM",
    userName: "Annie",
    image: image,
  },
  {
    profilePic: ava,
    message: "Wow this works!" ,
    timeStamp: "05:11 PM",
    userName: "Annie",
    image: image,
  },
  {
    profilePic: ava,
    message: "Wow this works!" ,
    timeStamp: "05:11 PM",
    userName: "Annie",
    image: image,
  },
  {
    profilePic: ava,
    message: "Wow this works!" ,
    timeStamp: "05:11 PM",
    userName: "Annie",
    image: image,
  },
  {
    profilePic: ava,
    message: "Wow this works!" ,
    timeStamp: "05:11 PM",
    userName: "Annie",
    image: image,
  }
]

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel/>
      <Status/>
      {
        dummyPosts.map((item, index) => (
          <Post 
            key={index} 
            profilePic={item.profilePic}
            message={item.message}
            userName={item.userName}
            timeStamp={item.timeStamp}
            image={item.image}
            />
        ))
      }
    </div>
  )
}

export default Feed