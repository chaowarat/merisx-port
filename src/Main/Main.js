import React, { Component } from 'react';
import fullpage from 'fullpage.js';
import './Main.css';
import 'fullpage.js/dist/fullpage.css'
import Profile from './Profile'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'

class Main extends Component {
  componentDidMount() {
    new fullpage('#fullpage', {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      anchors: ['main', 'about', 'portfolio'],
      sectionsColor: ['#fefff7', '#fca109', '#0d0b32'],
      navigation: true,
      navigationPosition: 'right',
    });
  }

  render() {
    return (
      <div id="fullpage">
        <Profile />
        <AboutMe />
        <Portfolio />
      </div>
    );
  }
}

export default Main;
