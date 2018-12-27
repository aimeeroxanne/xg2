import React, { Component } from 'react'
import '../App.css'
import { Parallax } from 'react-scroll-parallax';
const logo = require('../images/logo.png')

class Form extends Component {
  render() {
    return (
      <div className="row justify-content-center py-5">
        <div className="col-3">
          <img 
            src={logo}
            className="logo"/>
        </div>  
      </div>
    )
  }
}

export default Form
