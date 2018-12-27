import React, { Component } from 'react'
import './App.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App.js'


class AppContainer extends Component {
  render() {
    return (
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    )
  }
}

export default AppContainer
