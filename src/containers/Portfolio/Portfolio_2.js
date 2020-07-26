import React from 'react';
import './Portfolio.css';
import 'animate.css';
import 'tachyons';
import facerecimg from '../media/facerec.png'


const Portfolio = () => {
  return (
    <div>
    <section className="center mw4">
      <h2 className="fw3 f3 white-80 mt3 mb4">portfolio</h2>
    </section>
    <section className="cf w-100 pa2-ns">
      <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
        <div className="aspect-ratio aspect-ratio--1x1">
          <img style={{backgroundImage: `url(${require('../media/facerec.png')})`}} className="db bg-center cover aspect-ratio--object"></img>
        </div>
        <a href="#0" className="ph2 ph0-ns pb3 link db">
          <h3 className="f5 f4-ns mb0 moon-gray">Face Recognition</h3>
          <h3 className="f6 f5 fw4 mt2 gray">Facial recognition through API.</h3>
        </a>
      </article>
      <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
        <div className="aspect-ratio aspect-ratio--1x1">
          <img className="db bg-center cover aspect-ratio--object"></img>
        </div>
        <a href="#0" className="ph2 ph0-ns pb3 link db">
          <h3 className="f5 f4-ns mb0 moon-gray">Title of piece</h3>
          <h3 className="f6 f5 fw4 mt2 gray">Subtitle of piece</h3>
        </a>
      </article>
      <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
        <div className="aspect-ratio aspect-ratio--1x1">
          <img className="db bg-center cover aspect-ratio--object"></img>
        </div>
        <a href="#0" className="ph2 ph0-ns pb3 link db">
          <h3 className="f5 f4-ns mb0 moon-gray">Title of piece</h3>
          <h3 className="f6 f5 fw4 mt2 gray">Subtitle of piece</h3>
        </a>
      </article>
      <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
        <div className="aspect-ratio aspect-ratio--1x1">
          <img className="db bg-center cover aspect-ratio--object"></img>
        </div>
        <a href="#0" className="ph2 ph0-ns pb3 link db">
          <h3 className="f5 f4-ns mb0 moon-gray">Title of piece</h3>
          <h3 className="f6 f5 fw4 mt2 gray">Subtitle of piece</h3>
        </a>
      </article>
      <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
        <div className="aspect-ratio aspect-ratio--1x1">
          <img className="db bg-center cover aspect-ratio--object"></img>
        </div>
        <a href="#0" className="ph2 ph0-ns pb3 link db">
          <h3 className="f5 f4-ns mb0 moon-gray">Title of piece</h3>
          <h3 className="f6 f5 fw4 mt2 gray">Subtitle of piece</h3>
        </a>
      </article>
      <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
        <div className="aspect-ratio aspect-ratio--1x1">
          <img className="db bg-center cover aspect-ratio--object"></img>
        </div>
        <a href="#0" className="ph2 ph0-ns pb3 link db">
          <h3 className="f5 f4-ns mb0 moon-gray">Title of piece</h3>
          <h3 className="f6 f5 fw4 mt2 gray">Subtitle of piece</h3>
        </a>
      </article>
    </section>
</div>

  )
}

export default Portfolio;
