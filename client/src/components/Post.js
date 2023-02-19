import { Avatar, Divider } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function HandleClick(){
    let navigate = useNavigate();
    let path = `/post/:id`;
    navigate(path);
}
const Post = ({person,post_detail}) => {
    
  return (

    <div className='post'>
        <div className='post__head'>
            <Avatar src={person.imageUrl}/>
            <span> {person.name} </span>
            <span> {person.dt} </span>
        </div>
        <div className='post__body' onClick={() =>{window.location.href ='http://localhost:3000/post/:id'}}>
            <div>
            <h2> {post_detail.title} </h2>
            <p> {post_detail.desc.substr(0,300) + '...'} </p>
            </div>
            <div>
                <img src={post_detail.post_img} width={200} height={100}/>
            </div>
        </div>
        {/* <Divider variant="inset" component="li" /> */}
    </div>
  )
}

export default Post