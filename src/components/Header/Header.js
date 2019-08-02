import React, { Component } from 'react';
import logo from '../../containers/media/ristolina-logo_mono-light.svg';
import githubLogo from '../../containers/media/GitHub-Mark-Light-32px.png';
import './Header.css';
import 'animate.css';
import 'tachyons';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleShowAbout } = this.props
    return(
      <header className="header ma3 fixed w-100">
          <div className="">
            <nav className="dt w-100 mw8 center">
              <div className="dtc w2 v-mid">
                <a href="/" className="dib w2 h2 pa1 grow-large">
                  <img src={logo} alt="ristolina logo"></img>
                </a>
              </div>
              <div className="dtc v-mid tr">
                <a href="https://github.com/ristolina" target="_blank" className="dib w2 h2 pa1 grow-large">
                  <img src={githubLogo} alt="GitHub"></img>
                </a>
              </div>
            </nav>
          </div>
      </header>




      );
    }

}

export default Header;
