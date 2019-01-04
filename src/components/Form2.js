import React, { Component } from 'react'
import '../App.css'

class Form2 extends Component {
  render() {
    return (
      <div className="col-sm left">

        <h2>What subject does your problem relate to?</h2>

        <form className="py-4">
          
          <div class="form-check">
            <input class="form-check-input" type="radio" id="environment" value="environment" checked />
            <label class="form-check-label" for="environment">Environment / Nature</label>
          </div>
            
          <div class="form-check">
            <input class="form-check-input" type="radio" value="community" id ="community" />
            <label class="form-check-label" for="community">Community / Neighborhood</label>
          </div>
          
          <div class="form-check">
            <input class="form-check-input" type="radio" value="politics" id="politics" />
            <label class="form-check-label" for="politics">Politics / Human Rights</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" value="company" id="company" />
            <label class="form-check-label" for="company">Company / Organization</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" value="products" id="products" />
            <label class="form-check-label" for="products">Products / Services</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" value="family" id="family" />
            <label class="form-check-label" for="family">Family / Personal</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" value="education" id="education" />
            <label class="form-check-label" for="education">Education / Schools</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" value="other" id="other" />
            <label class="form-check-label" for="other">Other</label>
          </div>

          </form>

      </div>
    )
  }
}

export default Form2
