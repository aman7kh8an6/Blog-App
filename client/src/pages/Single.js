import React from 'react'
import Navbar from '../components/Navbar'
import Feeds from '../components/Feeds'
import Sidebar from '../components/Sidebar'
import Post from '../components/Post'
const Single = ({post_id}) => {
  
  return (
    <div>
      <Navbar />
      <div className='home__body'>
        <Feeds 
      
          />
          <Sidebar />
      </div>
    </div>
  )
}

export default Single