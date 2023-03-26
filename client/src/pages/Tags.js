import React,{ useContext, useEffect, useState} from 'react'
import { AllPostContext } from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Post from '../components/Post';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { fontSize } from '@mui/system';
const Tags = () => {
  const [posts, setPosts] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const cat = location.pathname.split("/")[2];
  
  useEffect(() =>{
    console.log(cat);
    axios.get(`http://localhost:5000/tags/${cat}`).then(res=>{
      setPosts(res.data);
      console.log(res.data);
      }).catch(err =>{console.log(err);
    });
  },[cat]);
  return (
    <div className=''>
      <Navbar />
      <div className='tags_post'>
        <div className='feed'>
          <h1 className='tag_title' style={{fontSize: '50px', padding: '10px'}}> {cat.charAt(0).toUpperCase() + cat.slice(1)} </h1>
          {posts.map(post =>(
            post.username != undefined ?
            <Post key={post.post_id}
            person={{
              username: post.username, 
              imageUrl: post.profileImg
            }}
            
            post_detail={{
              id: post.post_id,
              title: post.title, 
              post_img: post.images,
              dt_added: post.dt_added,
              desc: post.content       
            }}
            /> : ''  
          ))}
          </div>
        <Sidebar />
      </div>
    </div>
  )
}

export default Tags