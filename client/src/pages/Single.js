import React, { useEffect, useState } from 'react'
import { Avatar, Divider } from '@mui/material'
import Navbar from '../components/Navbar';
import axios from 'axios'
import DOMPurify from "dompurify";
import { useLocation, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar';

const Single = ({post_id}) => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const handleDelete = () =>{}
  const HandleClick = () =>{}

  useEffect(() => {
    axios.get(`http://localhost:5000/${postId}`).then(res=>{
      setPost(res.data[0]);
      console.log(res.data[0]);
    }).catch(err =>{console.log(err);
    });
  }, []);

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  function randomColor() {
    let hex = Math.floor(Math.random() * 0xFFFFFF);
    let color = "#" + hex.toString(16);
    return color;  
  }

  useEffect(()=>{
    console.log(post);
  },[])
  return (
    <>
    <Navbar />
    <div className="single">
      <div className="content">
        <div className="user">
          <Avatar style={{backgroundColor: randomColor()}}>{post.username?.length > 2 ? post.username.substr(0,2) : post.username}</Avatar>
           
          <div className="info">
            <span><strong>{post.username}</strong></span>
            <p style={{color: 'gray', fontSize: '13px'}}>Posted on {post.dt_added}</p>
          </div>
        </div>
        <h1 style={{fontSize : '32px', fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif', marginBottom: '-0.5px'}}>{post.title}</h1>
        <img className='single_image' src={post?.images} alt="" />
       
        <p style={{fontSize: '20px', fontFamily: 'source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif'}}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.content),
          }}
        ></p>      
      </div>
      <Sidebar />
    </div>
    </>
  )
}

export default Single