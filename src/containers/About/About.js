import React from 'react';
import './About.css';
import frontendIcon from '../media/code.svg';
import backendIcon from '../media/terminal.svg';
import bracketsIcon from '../media/brackets.svg';


const About = () => {
  return (
    <div className="bg-black-80 flex justify-center pb7">
      <article className="mw5 br3 pa4 mr4 ba b--mid-gray w-50">
        <div className="tc moon-gray">
          <h1 className="f4">Info</h1>
          <hr className="mw3 bb bw1 b--white-10" />
        </div>
          <dl className="f6 mv2">
            <dt className="dib b pr1 gray">Name:</dt>
            <br />
            <dd className="dib ml0 moon-gray">Kristoffer</dd>
          </dl>
          <dl className="f6 lh-title mv2">
            <dt className="dib b pr1 gray">Age:</dt>
            <br />
            <dd className="dib ml0 moon-gray">26</dd>
          </dl>
          <dl className="f6 lh-title mv2">
            <dt className="dib b pr1 gray">Passion:</dt>
            <br />
            <dd className="dib ml0 moon-gray">Learning and understanding everything.</dd>
          </dl>
          <dl className="f6 lh-title mv2">
            <dt className="dib b pr1 gray">Hobbies:</dt>
            <br />
            <dd className="dib ml0 moon-gray">Music, movies & TV, diet and excercise.</dd>
          </dl>
      </article>
      <article className="mw8 br3 pa4 ml4 ba b--mid-gray w-50">
        <div className="tc moon-gray">
          <h1 className="f4">Bio</h1>
          <hr className="mw3 bb bw1 b--white-10" />
        </div>
        <p className="lh-copy center f6 black-70 moon-gray ma0">
          I've been interested in computers and technology for all my life. I've worked with manufacturing optical fiber cables, 1st Line Support, 2nd Line Support, IT Operations and Support Manager.
          <br />
          <br />
          I'm currently working as an Integration Specialist in the payment industry. My job is to help our partners integrate their software with our hardware. It's a very interesting job and it involves everything from regular support to development.
          <br />
          <br />
          My programming and development interest is mostly something that I do in my spare time. I've attended a few college courses in programming but I'm mostly self taught.
          I enjoy learning and understanding things and programming is a great way to do that. You get instant feedback if you have understood something correctly (either it works or it doesn't).
        </p>
      </article>
  </div>
  )
}

export default About;
