import React, { Component } from 'react'
import './App.css'
import { Parallax } from 'react-scroll-parallax';
import Header from './components/Header'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Example from './components/Example'


class App extends Component {
  render() {
    return (
      // <Parallax className="app">
        <div className="container-fluid">
          <Header />
          <div className="row">
            {/* <Form1 
              yoffsetmax={20}
              yoffsetmin={-20}
              test={'slowerScrollRate'}/> */}
            <Form2 />
            <Example />
          </div>
        </div>
      // </Parallax>
    )
  }
}

export default App
