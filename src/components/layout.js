import React, { Component } from 'react';
import Header from './header';
import Barnav from './barnav';
import Footer from './footer';
import Aside from './aside';
import Section from './section';


class Layout extends Component {
  render() {
    return (
      <div className="container_padre_layout"> 
        <Header />
        <Barnav />
        <Aside />
        <Section />
        <Footer />
      </div>
    );
  }
}
export default Layout;