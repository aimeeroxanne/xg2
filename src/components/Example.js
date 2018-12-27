import React, { Component } from 'react'
import '../App.css'

class Example extends Component {
  render() {
    return (
      <div className="col-sm-6 right">
        <h3>It would be great if
          <span className="highlight"> restaurants </span> 
        would 
          <span className="highlight"> use compostable packaging </span> 
        so that 
          <span className="highlight"> we would put less plastic and styrofoam into landfills and oceans</span>
        .
        </h3>
      </div>
    )
  }
}

export default Example
