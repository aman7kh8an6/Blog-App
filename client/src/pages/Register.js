import { useState } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios';

const Register = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const [error, seterror] = useState(false);

  const handleUser = (e) =>{
    setusername(e.target.value);
  }
  const handleEmail = (e) =>{
    setemail(e.target.value);
  }
  const handlePwd = (e) =>{
    setpwd(e.target.value);
  }
  const handleSubmit = () =>{
    Axios.post('http://localhost:5000/register',{
      username: username,
      email: email,
      password: pwd
    }).then(function(res){
      console.log(res);
      seterror(false);
    }).catch(function(err){
      console.log(err);
      seterror(true);
    });
  }
  return (
    
    <div className="auth">
      <h1 className='auth_h1'>Register</h1>
      <form>
        <input className='auth_input'
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleUser}
        />
        <input className='auth_input'
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleEmail}
        />
        <input className='auth_input'
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handlePwd}
        />
        <button className='auth_button' onClick={handleSubmit}>Register</button>
        <p className='auth_p'>{error == true ? 'This is an error' : ''}  </p>
        <span className='auth_span'>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register