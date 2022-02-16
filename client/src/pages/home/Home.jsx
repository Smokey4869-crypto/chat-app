import React from 'react'
import Helmet from '../../components/Helmet'
import Feed from './Feed'

const Home = () => {
  return (
    <div className="container">
      <div className="main">
        <Helmet title="Home">
          <div className="home">
            <Feed/>
          </div>
        </Helmet>
      </div>
    </div>
  )
}

export default Home