import React, { useContext, useEffect, useState } from 'react'
import { LoginContext, AllPostContext } from '../context/AuthContext';
import Post from './Post'
import Axios from 'axios';

const Feeds = () => {
  const {currentUser} = useContext(LoginContext);
  const {allPosts, setAllPosts} = useContext(AllPostContext);
  const [flag, setFlag] = useState(false);
  

  useEffect(() => {
    Axios.get('http://localhost:5000/fetchPosts')
      .then(res => {
        // console.log(res.data)
        setAllPosts([allPosts,...res.data]);
        setFlag(true);
        // console.log('allposts',allPosts);
      }).catch(err =>{console.log(err);
    });
  }, [])
  
  return (
    <div className='feed'>
      {allPosts.map(post =>(
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
  )
}
export default Feeds