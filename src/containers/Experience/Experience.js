import React from 'react';
import './Experience.css';
import frontendIcon from '../media/code.svg';
import backendIcon from '../media/terminal.svg';
import bracketsIcon from '../media/brackets.svg';


const Experience = () => {
  return (

      <div className="flex flex-wrap">
        <div className="w-100">
          <section className="tc center">
            <h2 className="fw3 f3 white-80 mt3 mb0">/ experience /</h2>
            <hr class="mw3 bb b--white-80 mb4" />
          </section>
        </div>
        <div className="w-third-ns w-100-m">
          <article className="center">
            <div className="tc">
              <img src={frontendIcon} alt="frontend icon" className="br-100 h3 w3 dib ba b--gray pa2"></img>
              <h1 className="f3 mb2 moon-gray">Frontend</h1>
              <h2 className="f5 fw4 light-gray mt0">Frontend development primarly with React.</h2>
            </div>
          </article>
        </div>
        <div className="w-third-ns w-100-m">
          <article className="mw5 center">
            <div className="tc">
              <img src={backendIcon} alt="backend icon" className="br-100 h3 w3 dib ba b--gray pa2"></img>
              <h1 className="f3 mb2 moon-gray">Backend</h1>
              <h2 className="f5 fw4 light-gray mt0">Backend development primarly with Node.js.</h2>
            </div>
          </article>
        </div>
        <div className="w-third-ns w-100-m">
          <article className="mw5 center">
            <div className="tc">
              <img src={bracketsIcon} alt="brackets icon" className="br-100 h3 w3 dib ba b--gray pa2"></img>
              <h1 className="f3 mb2 moon-gray">Development</h1>
              <h2 className="f5 fw4 light-gray mt0">Experience includes: Python, C#, Java, PowerShell, bash, CMD, relational databases and more.</h2>
            </div>
          </article>
        </div>
    </div>
  )
}

export default Experience;
