import React from 'react';
import logo from '../media/ristolina-logo_mono-light.svg';
import './Header.css';
import 'animate.css';
import 'tachyons';

const Header = () => {
  return(
    <header className="sans-serif  ">
        <div className="bg-black-80 pb4">
          <nav className="dt w-100 mw8 center">
            <div className="dtc w2 v-mid pa3">
              <a href="/" className="dib w2 h2 pa1 grow-large">
                <img src={logo} alt="ristolina logo"></img>
              </a>
            </div>
            <div className="dtc v-mid tr pa3">
              <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >About</a>
              <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Portfolio</a>
              <a className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba animated bounce" href="/" >Contact me</a>
            </div>
          </nav>
          <div className="tc-l mt4 mt5-m mt6-l ph3 animated fadeIn slower">
            <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">ristolina</h1>
            <h2 className="fw1 f3 white-80 mt3 mb4">a page about me</h2>
            <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="">Contact me</a>
          </div>
        </div>
      </header>
  );

}

export default Header;
