import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export const Header = () => {
  return(
    <div className='header-top'>
      <Link className='header'　to='/'>Mood Tracker</Link>
    </div>
  )
}
