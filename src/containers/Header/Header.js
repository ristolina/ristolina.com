import React from 'react';
import logo from '../media/logo.png';
import './Header.css';
import tachyons from 'tachyons';

const bg_img_url = "http://mrmrs.github.io/photos/u/011.jpg"
const bg_img_style = {backgroundImage: 'url(' + bg_img_url + ')'}

const Header = () => {
  return(
    <nav>
      <ul className='main-nav'>
        <li><a href='#'><img src={logo}/></a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Portfolio</a></li>
        <li className='push-left'><a href='#'>Contact</a></li>
      </ul>
    </nav>
  );

}

export default Header;
