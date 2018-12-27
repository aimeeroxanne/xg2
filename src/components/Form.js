import React, { Component } from 'react'
import '../App.css'
import { Parallax } from 'react-scroll-parallax';
const trees = require('../images/trees.jpg')

class Form extends Component {
  render() {
    return (
      <Parallax
        className="col-sm left"
        offsetYMax={this.props.yoffsetmax}
        offsetYMin={this.props.yoffsetmin}
        slowerScrollRate
        tag="figure">
        <h2>Tell us a little about yourself...</h2>
        <form className="form">
          <div className="form-group">
            <label for="age">Age</label>
            <input id="age" type="number" class="form-control"
            placeholder="99"/>
          </div>
          <div class="form-group">
            <label for="gender">Gender</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option disabled selected>Select a Gender</option>
              <option>Transgender Woman</option>
              <option>Transgender Man</option>
              <option>Intersex</option>
              <option>Third Gender</option>
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>
          <div class="form-group">
            <label>Race</label>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="Native American or Alaskan Native" id="1"/>
              <label class="form-check-label" for="1">
              American or Alaskan Native
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="Asian" id="2"/>
              <label class="form-check-label" for="2">
              Asian
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="Black or African American" id="3"/>
              <label class="form-check-label" for="3">
              Black or African American
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="Hispanic or Latino" id="4"/>
              <label class="form-check-label" for="4">
              Hispanic or Latino
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="Native Hawaiian or Pacific Islander" id="5"/>
              <label class="form-check-label" for="5">
              Native Hawaiian or Pacific Islander
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="White" id="6"/>
              <label class="form-check-label" for="6">
              White
              </label>
            </div>
          </div>
          <div className="form-group">
            <label for="location">Location</label>
            <input id="location" type="text" class="form-control"
            placeholder="Denver, CO"/>
          </div>
          <button type="submit" class="btn btn-dark">Next</button>
        </form>
      </Parallax>
    )
  }
}

export default Form
