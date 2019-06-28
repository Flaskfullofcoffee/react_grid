import React, { Component } from 'react'
import './App.scss'

class ResFrom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messageSent: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => {
      return {
        messageSent: !prevState.messageSent
      }
    })
    e.target.reset();
  }

  render() {

    const status = this.state.messageSent ? 'Sent' : 'Submit'
    return (
      <form onSubmit={this.handleSubmit} id="contact-form" method="POST" action="/resForm">
        <h2>Plan a party</h2>
        <div className="input-field">
          <input type="text" id="name" name="name" placeholder="Name"></input>
          <input type="text" id="number" name='number' placeholder="Number"></input>
          <input type="email" id="email" name="email" placeholder="Email"></input>
          <textarea name="comments" id="comments" cols="30" rows="10" placeholder="Comments"></textarea>
        </div>
        <button id="submit" type="submit" className="btn submitBtn">{status}</button>
      </form>
    )
  }
}

export default ResFrom
