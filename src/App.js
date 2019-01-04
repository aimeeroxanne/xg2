import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Example from './components/Example'


class App extends Component {
  render() {
    return (

      <div className="container-fluid">
        <Header />
        <div className="row">
          {/* <Form1 /> */}
          <Form2 />
          <Example />
        </div>
      </div>
      
    )
  }
}

export default App
