import React, { Component } from 'react';
import logo from '../../containers/media/Ristolina_developer.png';

class Callout extends Component {
  constructor() {
    super();
    this.state = {
      showContact: false
      }
  }

  handleShowContact = () => {
    const { showContact } = this.state;
    if (showContact) {
      this.setState({ showContact: false });
    }
    else {
      this.setState({ showContact: true });
    }
    console.log(this.state)
  }

  render() {
    const { showContact } = this.state;
    return (
        <div className="dtc v-mid tc pt3">
          <img src={logo} alt="ristolina logo" width="100%">
          </img>
          <a className="pointer f6 no-underline grow dib v-mid white-70 ba ph3 pv2 mb3" onClick={this.handleShowContact} href="mailto:info@ristolina.com">Email me</a>

        </div>
    );
  }
}

export default Callout;
