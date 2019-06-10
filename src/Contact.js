import React, { Component } from 'react'
import ResForm from './ResForm'
import './App.scss'

class Contact extends Component {

    render() {
      return (
          <section className='contact'>
            <div className='contact-info'>
              <h3>Full service gaming lounge</h3>
              <p>Enter a unique social environment that redefines the way you play video games with your friends. Over 50 PC's fill the industrial, techy space to immerse you into the most popular games from League of Legends and Call of Duty: Black Ops to Madden and Ark Survival. A full-featured refreshment station designed to keep you fueled delivers tasty made to order concessions well into the evening. Tournaments and events, high-performance gear, and a lineup of friendly and knowledgeable staff complete a one of a kind gaming experience.
              </p>
              <div className='features'>
                <p>500mbps up/down</p>
                <p>Open 24/7</p>
                <p>Massive game library</p>
              </div>
              <p>Have more questions</p>
              <ul>
                <li>Tempe: <span>(480) 367-6005</span></li>
                <li>Phoenix: <span>(480) 367-6005</span></li>
              </ul>
            </div>
            <div className='reservations'>
              <ResForm />
            </div>
          </section>
        )
    }
}

export default Contact
