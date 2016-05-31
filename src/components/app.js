import React, { Component } from 'react';

import PhoneInputGroup from '../containers/phone_input_group';
import Header from '../components/header';
import Footer from '../components/footer';
import Social from '../components/social';

export default class App extends Component {
  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <Header />
        <PhoneInputGroup />
        <Social />
        <Footer />
      </div>
    );
  }
}
