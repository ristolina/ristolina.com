import React from 'react';
import './Experience.css';
import frontendIcon from '../media/code.svg';
import backendIcon from '../media/terminal.svg';
import bracketsIcon from '../media/brackets.svg';


const Experience = () => {
  return (
    <div className="bg-black-80 pb5">
      <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          <div className="fl w-100 w-third-ns pt3 pb2">

              <article className="mw5 center">
                <div className="tc">
                  <img src={frontendIcon} alt="frontend icon" className="br-100 h3 w3 dib ba b--gray pa2"></img>
                  <h1 className="f3 mb2 moon-gray">Frontend</h1>
                  <h2 className="f5 fw4 light-gray mt0">Frontend development primarly with React.</h2>
                </div>
              </article>
          </div>
          <div className="fl w-100 w-third-ns pt3 pb2">
              <article className="mw5 center">
                <div className="tc">
                  <img src={backendIcon} alt="backend icon" className="br-100 h3 w3 dib ba b--gray pa2"></img>
                  <h1 className="f3 mb2 moon-gray">Backend</h1>
                  <h2 className="f5 fw4 light-gray mt0">Backend development primarly with Node.js.</h2>
                </div>
              </article>
          </div>
          <div className="fl w-100 w-third-ns pt3 pb2">
              <article className="mw5 center">
                <div className="tc">
                  <img src={bracketsIcon} alt="brackets icon" className="br-100 h3 w3 dib ba b--gray pa2"></img>
                  <h1 className="f3 mb2 moon-gray">Development</h1>
                  <h2 className="f5 fw4 light-gray mt0">Experience includes: Python, C#, Java, PowerShell, bash, CMD, relational databases etc.</h2>
                </div>
              </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
