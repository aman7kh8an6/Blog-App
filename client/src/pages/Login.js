import {useState, useContext, useEffect} from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import '../style.css';
import { LoginContext } from '../App';

const Login = () => {
  const [username, setusername] = useState("");
  const [pwd, setpwd] = useState("");
  const [error, seterror] = useState(false);
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  function getResponse(){
    Axios.post('http://localhost:5000/login',{
      username: username,
      password: pwd
    }).then(function(res){
      if(typeof res.data == "object"){
        return res.data;
        console.log(res.data);
        
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
    // let result = getResponse();
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