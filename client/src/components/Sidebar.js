import React,{ useContext, useEffect, useState} from 'react'
import { AllPostContext } from '../context/AuthContext';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [categ, setCateg] = useState({});
  
  const navigate = useNavigate();

  useEffect(() =>{
    Axios.get('http://localhost:5000/tags')
      .then(res => {
        console.log(res.data)
        setCateg(res.data);
        // console.log('alltags',categ);
      }).catch(err =>{console.log(err);
    });
  },[]);
  
  const handleTagClick = (cat) => {
    return () => {
      navigate(`/tags/${cat}`);
    };
  };

  return (
    <div className='sidebar'>
      {categ?.length > 0 ? (
        <div className='tags_div'>
          {categ.map((item) => (
            <div className='tag_div' onClick={handleTagClick(item.category)}>{item.category}</div>
          ))}
        </div>
      ) : (
        <p>
        </p>
      )} 
    </div>
  )
}

export default Sidebar