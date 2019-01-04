import React, { Component } from 'react'
import '../App.css'

class Form3 extends Component {
  render() {
    return (
      <div class="my-5">
        <p>
          <span>It would be great if </span>
          <input id="noun" type="text"/>
          <span> would </span>
          <input id="verb" type="text"/>
          <span> so that </span>
          <input id="reason" type="text"/>
        </p>
      </div>
    )
  }
}

export default Form3



