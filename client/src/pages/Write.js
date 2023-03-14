import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { LoginContext } from "../context/AuthContext";

const Write = () => {
  const {currentUser} = useContext(LoginContext);
  const state = useLocation().state;
  useEffect(() => {
    console.log(currentUser);
  }, []);
  const [createPost, setCreatePost] = useState({
    user_id : currentUser.userId,
    title : "",
    file : null,
    content : "",
    category : ""
  });
 
  const [flag, setFlag] = useState(false);
 
  const navigate = useNavigate()
  
  useEffect(() => {
    if(flag === true){
      // setCreatePost(prev => ({...prev,user_id: '123', title: titl, file: file, content: desc, category : cat}));
      
      console.log(createPost);
      Axios.post('http://localhost:5000/write',{
        createPost : createPost
      }).then(function(res){
        console.log(res);
        alert('Successfully Posted!')
      }).catch(function(err){
        console.log(err);
      });
      setFlag(false);
    }
    
  }, [flag])
  

  const upload = () =>{
    setFlag(true);
  }

  const handleClick = (e)=>{
    e.preventDefault();
    upload();
  }

  const handleChange = (e) =>{
    // e.preventDefault();
    setCreatePost({...createPost, category : e.target.value});
  }

  const handleContent = (text) =>{
    setCreatePost({...createPost, content : text});
  }

  return (
    <div className="add">
      <div className="content">
        <input className="title__input"
          type="text"
          placeholder="Title"
          onChange={(e) => setCreatePost({...createPost, title : e.target.value})}
        />
        <div className="editorContainer">
        <ReactQuill
            className="editor"
            theme="snow"
            value={createPost.content}
            onChange={handleContent}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => {
              console.log(e.target.files[0]);    
              setCreatePost({...createPost, file : URL.createObjectURL(e.target.files[0])})}}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button className="first_button">Save as a draft</button>
            <button className="second_button" onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={createPost.category === "art"}
              name="cat"
              value="art"
              id="art"
              onChange={e => handleChange(e)}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={createPost.category === "science"}
              name="cat"
              value="science"
              id="science"
              onChange={e => handleChange(e)}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={createPost.category === "technology"}
              name="cat"
              value="technology"
              id="technology"
              onChange={e => handleChange(e)}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={createPost.category === "cinema"}
              name="cat"
              value="cinema"
              id="cinema"
              onChange={e => handleChange(e)}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={createPost.category === "design"}
              name="cat"
              value="design"
              id="design"
              onChange={e => handleChange(e)}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={createPost.category === "food"}
              name="cat"
              value="food"
              id="food"
              onChange={e => handleChange(e)}
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write