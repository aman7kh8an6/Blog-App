import { Avatar, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Buffer} from 'buffer';


const Post = ({person,post_detail}) => {
    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent  
    }
    function HandleClick(e){
        e.preventDefault();
        let navigate = useNavigate();
        let path = `/post/:${post_detail.id}`;
        navigate(path);
    }
    const navigate = useNavigate();
    
function randomColor() {
    let hex = Math.floor(Math.random() * 0xFFFFFF);
    let color = "#" + hex.toString(16);
    return color;  
}
  return (
    
    <div className='post'>
        <div className='post__head'>
            <Avatar style={{backgroundColor: randomColor()}}>{person.username?.length > 2 ? person.username.substr(0,2) : person.username}</Avatar>
            <span className='post_username'> {person.username} </span>
            <span> {post_detail.dt_added} </span>
        </div>
        <div className='post__body' onClick={() => {}}>
        <Link className="link" to={`/post/${post_detail.id}`}>
            <div>
            <h2> {post_detail.title} </h2>
            <p> {post_detail.desc?.length > 300 ? getText(post_detail.desc.substr(0,300)) + '...' : getText(post_detail.desc)} </p>
            </div>
            </Link>
            <div>
                <img style={{objectFit : 'cover'}} src={post_detail.post_img} width={200} height={100}/>
            </div>
        
        </div>
        {/* <Divider variant="inset" component="li" /> */}
    </div>
  )
}

export default Post