import React, { Component } from 'react';
import logo from '../../containers/media/Ristolina_Developer_150x50.png';
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
      <header className="header fixed w-100">
          <div className="">
            <nav className="dt w-100 mw8 center">
              <div className="dtc v-mid">
              <a href="/" className="dib h2 pa1 grow-large">
                <img src={logo} alt="Ristolina"></img>
              </a>
              </div>
              <div className="dtc v-mid tr pr1">
                <AnchorLink href="#home" className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph1">/ home /</AnchorLink>
                <AnchorLink href="#experience" className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph1">/ experience /</AnchorLink>
                <AnchorLink href="#portfolio" className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph1">/ portfolio /</AnchorLink>
                <a href="https://github.com/ristolina" target="_blank" className="dib w2 h2 pa1 grow-large ph1 mr3 ml2">
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
