import React, { Component } from 'react'
import ResForm from './ResForm'
import './App.scss'

class Contact extends Component {

    render() {
      return (
          <section id='reservation_section' className='contact'>
            <div className='contact-info'>
              <h2>Full service gaming lounge</h2>
              <p>Enter a unique social environment that redefines the way you play video games with your friends. Over 50 PC's fill the industrial, techy space to immerse you into the most popular games from League of Legends and Call of Duty: Black Ops to Madden and Ark Survival. A full-featured refreshment station designed to keep you fueled delivers tasty made to order concessions well into the evening. Tournaments and events, high-performance gear, and a lineup of friendly and knowledgeable staff complete a one of a kind gaming experience.
              </p>
              <div className='features'>
                <i class="fa fa-wifi" aria-hidden="true"></i><p>500mbps up/down</p>
                <i class="fa fa-sun-o" aria-hidden="true"></i> <i class="fa fa-moon-o" aria-hidden="true"></i><p>Open 24/7</p>
                <i class="fa fa-gamepad" aria-hidden="true"></i><p>Massive game library</p>
              </div>
              <div className='numbers'>
                <h3>Have more questions</h3>
                <ul>
                  <li>Tempe: <span className='number'>(480) 367-6005</span></li>
                  <li>Phoenix: <span className='number'>(480) 999-3076</span></li>
                </ul>
              </div>
            </div>
            <div className='form-wrapper'>
              <ResForm />
            </div>
          </section>
        )
    }
}

export default Contact
