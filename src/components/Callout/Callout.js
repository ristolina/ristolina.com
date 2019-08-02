import React, { Component } from 'react';

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
        <div className="dtc v-mid tc white ph3 ph4-l">
          <h1 className="f1 f2-m fw1 tc" >ristolina</h1>
          <h2 className="fw1 f3 white-80 mt3 mb4">a page about me</h2>
          <a className="pointer f6 no-underline grow dib v-mid white-70 ba ph3 pv2 mb3" onClick={this.handleShowContact} href="mailto:info@ristolina.com">Email me</a>

        </div>
    );
  }
}

export default Callout;
