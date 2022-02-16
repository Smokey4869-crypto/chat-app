import React, { useState } from 'react'

import ava from '../../assets/person/ava.jpg'

import { Videocam, PermMedia, Mood } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'

const shareOptions = [
  {
    icon: <Videocam htmlColor='#27b304'/>,
    display: "Live Video"
  }, 
  {
    icon: <PermMedia htmlColor='#db4200'/>,
    display: "Photo/Video"
  },
  {
    icon: <Mood htmlColor='#ca08d1'/>,
    display: "Feeling/Activity"
  }
]
const Status = () => {

  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="status">
      <div className="status__top">
        <Avatar src={ava}/>
        <form>
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='status__top__input'
            placeholder="What's on your mind?" />
        </form>
        <button onClick={handleSubmit} type="submit">
          Hidden Submit
        </button>
      </div>
      <div className="status__bottom">
        {
          shareOptions.map((item, index) => (
            <div key={index} className="status__bottom__option">
              {item.icon}
              <h3>{item.display}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Status