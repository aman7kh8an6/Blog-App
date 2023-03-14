import {useState, useContext, useEffect } from 'react'
import Axios from 'axios';
import { Link,useNavigate } from 'react-router-dom'
import '../style.css';
import { LoginContext } from '../context/AuthContext' 

const Login = () => {
  const [username, setusername] = useState("");
  const [pwd, setpwd] = useState("");
  const [error, seterror] = useState(false);
  const {currentUser,setCurrentUser} = useContext(LoginContext);
  const navigate = useNavigate();
  const getResponse = async () =>{
    await Axios.post('http://localhost:5000/login',{
      username: username,
      password: pwd
    }).then(function(res){
      if(typeof res.data == "object"){
        console.log(res.data);
        setCurrentUser({isLoggedIn : true, userId : res.data[0].user_id ,username : res.data[0].username, email: res.data[0].email, profileImg : "https://thumbs.dreamstime.com/z/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg"});
        navigate('/');
      }else{
        console.log("User not authorized!!");
        return "User not Authorize!!"
      }
    }).catch(function(err){
      console.log(err);
      seterror(true);
    });
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    getResponse();
    console.log('from here');
  }

  // useEffect(() => {
  //   handleSubmit();
  // }, [])
  
  
  return (
    
    <div className="auth">
      <h1 className='auth_h1'>Login</h1>
      <form>
        <input className='auth_input'
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={(e) => {setusername(e.target.value)}}
        />
        <input className='auth_input'
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => {setpwd(e.target.value)}}
        />
        <button className='auth_button' onClick={handleSubmit}>Login</button>
        <p className='auth_p'>{error == true ? 'Incorrect Username or Password' : ''}  </p>
        <span className='auth_span'>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login