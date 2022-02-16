import React from 'react'
import { Avatar } from '@material-ui/core'
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUp } from '@material-ui/icons'

const postOptions = [
    {
        icon: <ThumbUp/>,
        display: "Like"
    },
    {
        icon: <ChatBubbleOutline/>,
        display: "Comment"
    }, 
    {
        icon: <NearMe/>,
        display: "Share"
    },
]

const Post = props => {
  return (
    <div className="post">
        <div className="post__top">
            <Avatar className="post__top__avatar" src={props.profilePic}/>
            <div className="post__top__info">
                <h3>{props.userName}</h3>
                <p>{props.timeStamp}</p>
            </div>
        </div>
        <div className="post__bottom">
            <p>{props.message}</p>
        </div>
        <div className="post__image">
            <img src={props.image} alt="" />
        </div>
        <div className="post__option">
            {
                postOptions.map((item, index) => (
                    <div key={index} className="post__option__item">
                        {item.icon}
                        <p>{item.display}</p>
                    </div>
                ))
            }
            <div className="post__option__item">
                <AccountCircle/>
                <ExpandMoreOutlined/>
            </div>
        </div>
    </div>
  )
}

export default Post