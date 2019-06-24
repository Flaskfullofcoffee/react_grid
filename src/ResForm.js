import React, { Component } from 'react'
import { Mailer } from 'nodemailer'
import axios from 'axios'
import './App.scss'

class ResFrom extends Component {

  render() {
    return (
      <form action="send" id="contact-form" method="POST">
        <h2>Plan a party</h2>
        <div className="input-field">
          <input type="text" id="name" name="name" placeholder="Name"></input>
          <input type="text" id="number" placeholder="Number"></input>
          <input type="email" id="email" name="email" placeholder="Email"></input>
          <textarea name="comments" id="comments" cols="30" rows="10" placeholder="Comments"></textarea>
        </div>
        <button id="submit" type="submit" className="btn submitBtn">Submit</button>
      </form>
    )
  }
}

export default ResFrom
