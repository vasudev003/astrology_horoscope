import home from '../logo.png';
import Button from '@mui/material/Button';
import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className='home'><a href='/'><img src={home} alt="Home" height="80" ></img></a></div>
      <div className='navigations' >
      <Link to="/"> Home </Link>
      <Link to="/Prediction"> Prediction </Link>
      <Link to="/Palm_Reading"> Palm Reading </Link>
      <Link to="/Career"> Career </Link>
        </div>
        <div className='user'>
        <Link to="/login">
          <Button variant="text" className='login_btn'>Login</Button>
        </Link>
        <Link to="/signup">
        <Button variant="outlined" className='Sign_up_btn'>Sign Up</Button>
        </Link>
      </div>
    </header>
  )
}

export default Header