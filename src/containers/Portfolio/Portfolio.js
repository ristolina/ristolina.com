import React from 'react';
import './Portfolio.css';
import 'animate.css';
import 'tachyons';


const Portfolio = () => {
  const style ={backgroundImage: 'url(http://mrmrs.github.io/images/0006.jpg)'}
  return (
    <div className="flex flex-wrap">
      <div className="w-100">
        <section className="tc center">
          <h2 className="fw3 f3 white-80 mt3 mb0">/ portfolio /</h2>
          <hr class="mw3 bb b--white-80 mb4" />
        </section>
      </div>
      <section className="cf w-100 pa2-ns">
        <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
          <div className="aspect-ratio aspect-ratio--1x1">
            <img style={{backgroundImage: `url(${require('./media/dev.ristolina.com.png')})`}} className="db bg-center cover aspect-ratio--object"></img>
          </div>
          <a href="https://ristolina.com" target="_blank" className="ph2 ph0-ns pb3 link db">
            <h3 className="f5 f4-ns mb0 moon-gray">Ristolina.com</h3>
            <h3 className="f6 f5 fw4 mt2 gray">My own site, built from scratch with ReactJS.</h3>
          </a>
        </article>
        <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
          <div className="aspect-ratio aspect-ratio--1x1">
            <img style={{backgroundImage: `url(${require('./media/DebugPos.png')})`}} className="db bg-center cover aspect-ratio--object"></img>
          </div>
            <h3 className="f5 f4-ns mb0 moon-gray">DebugPOS</h3>
            <h3 className="f6 f5 fw4 mt2 gray">Debug application for troubleshooting Bambora Payment Terminals.</h3>
        </article>
        <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
          <div className="aspect-ratio aspect-ratio--1x1">
            <img style={{backgroundImage: `url(${require('./media/kostspec.se.png')})`}} className="db bg-center cover aspect-ratio--object"></img>
          </div>
          <a href="https://www.kostspec.se" target="_blank" className="ph2 ph0-ns pb3 link db">
            <h3 className="f5 f4-ns mb0 moon-gray">Kostspec.se</h3>
            <h3 className="f6 f5 fw4 mt2 gray">Wordpress site for 3rd party.</h3>
          </a>
        </article>
        <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
          <div className="aspect-ratio aspect-ratio--1x1">
            <img style={{backgroundImage: `url(${require('./media/facerec.png')})`}} className="db bg-center cover aspect-ratio--object"></img>
          </div>
          <a href="https://ristolina-fcerec.herokuapp.com/" target="_blank" className="ph2 ph0-ns pb3 link db">
            <h3 className="f5 f4-ns mb0 moon-gray">Face Recognition</h3>
            <h3 className="f6 f5 fw4 mt2 gray">Facial recognition through API.</h3>
          </a>
        </article>
    </section>
    </div>

  )
}

export default Portfolio;
