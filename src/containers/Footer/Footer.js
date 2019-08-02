import React from 'react';
import './Footer.css';


const Footer = () => {
  return(
    <div name="Footer" className="sans-serif ma0 pa0 flex bg-black-10 items-center content-center">
      <div className="f6 fw4 white-70 w-50 pl1">
          Icons made by <a className="f6 fw4 hover-white no-underline white-70" href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a className="f6 fw4 hover-white no-underline white-70" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </a> is licensed by <a className="f6 fw4 hover-white no-underline white-70" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>

    </div>
    <p className="f6 fw4 white-70 w-50 pr1" style={{display: 'flex', justifyContent: 'flex-end'}}>Photo by Florian Olivo on Unsplash</p>

    </div>
  );
}

export default Footer;
