import React from 'react'
import Helmet from '../components/Helmet'
import Feed from '../components/Feed'

const Home = () => {
  return (
    <div className="container">
      <div className="main">
        <Helmet title="Home">
          <Feed></Feed>
        </Helmet>
      </div>
    </div>
  )
}

export default Home