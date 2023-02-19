import { useContext, useEffect } from 'react'
import logo1 from '../assets/logo1.png'
import { TextField, Typography, Avatar, Box, Button } from '@mui/material'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { LoginContext } from '../App';

const Navbar = () => {
  const [loggedIn,setLoggedIn] = useContext(LoginContext);
  useEffect(() => {
    console.log(loggedIn);
  }, [])


  return (
    <div className='navbar'>
      <div className='navbar__body'>
        <img className="navbar__img left" src={logo1} />
        <Box sx={{ display: 'flex', alignItems: 'flex-end', color: 'text.disabled', borderRadius:8, backgroundColor: '#EFEBEA', justifyContent: 'space-between', alignItems:'center'  }}>
          <SearchIcon sx={{ color: 'action.active', ml: 1, my: 0 }} />
          <TextField placeholder="Search Here" variant="standard" InputProps={{ disableUnderline: true, sx:{ "& input":{textAlign: "start"}, width: 150} }} />
        </Box>
        <div className='right'>
          <div className='navbar__write' onClick={() =>{window.location.href ='http://localhost:3000/write'}}>
            <DriveFileRenameOutlineOutlinedIcon className='write__icon' />
            <Typography> Write </Typography>
          </div>
          <NotificationsOutlinedIcon className='navbar__bell'/>
          <Avatar />
          {loggedIn === true ? <Button variant="outlined" onClick={()=>{window.location.href ='http://localhost:3000/login'}}>Log Out</Button> :
            <Button variant="outlined" onClick={()=>{window.location.href ='http://localhost:3000/login'}}>Log In</Button>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar