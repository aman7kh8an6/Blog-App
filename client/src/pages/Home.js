import React from 'react';
import Navbar from '../components/Navbar';
import Feeds from '../components/Feeds';
import Sidebar from '../components/Sidebar';
import Grid from '@mui/material/Grid'; // Grid version 1
import '../style.css';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='home__body'>
          <Feeds />
          <Sidebar />
      </div>
    </div>
  )
}

export default Home