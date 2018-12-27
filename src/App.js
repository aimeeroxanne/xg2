import React, { Component } from 'react'
import './App.css'
import { Parallax } from 'react-scroll-parallax';
import Header from './components/Header'
import Form from './components/Form'
import Example from './components/Example'


class App extends Component {
  render() {
    return (
      // <Parallax className="app">
        <div className="container-fluid">
          <Header />
          <div className="row">
            <Form 
              yoffsetmax={20}
              yoffsetmin={-20}
              test={'slowerScrollRate'}/>
            <Example />
          </div>
        </div>
      // </Parallax>
    )
  }
}

export default App
