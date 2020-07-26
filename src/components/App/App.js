import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Header from '../Header/Header';
import Footer from '../../containers/Footer/Footer';
import About from '../../containers/About/About';
import Experience from '../../containers/Experience/Experience';
import Contact from '../../containers/Contact/Contact';
import Callout from '../Callout/Callout';
import Portfolio from '../../containers/Portfolio/Portfolio';
import 'animate.css';


const particleOptions = {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 3
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 7.891476416322726,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 0,
          "size_min": 0.1,
          "sync": true
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }


class App extends Component {
  constructor() {
    super();

    this.state = {
      showAbout: null,
      showAboutClass: "animated fadeOutDown",

      }
    }

  handleShowAbout= () => {
    const { showAbout } = this.state;
    if (showAbout) {
      this.setState({ showAbout: false });
    }
    else {
      this.setState({ showAbout: true });
    }
    console.log(this.state)
  }


  render() {
    const { showAbout } = this.state;
    return (
      <div className="App">
        <section id="home">
        </section>
        {/*
          <div id="Particle-Canvas">
            <Particles className="particles" params={particleOptions} />
          </div>
           */}


          <Header/>
          <div className="flex flex-wrap w-100 justify-center">
              <div className="dt center vh-100 w-100">
                <Callout/>
              </div>
              <div className="w-100 bg-black-05 vh-50 pt3">
                <section id="experience">
                  <Experience />
                </section>
              </div>
              <div className="w-100 vh-50">
                <section id="portfolio">
                  <Portfolio />
                </section>
              </div>
          </div>


      </div>
    );
  }
}

export default App;
