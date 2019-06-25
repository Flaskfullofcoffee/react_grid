import React, { Component } from 'react'
import cx from 'classnames'
import {CSSTransition} from 'react-transition-group'
import './App.scss'

class Games extends Component {

render() {
  return (
    <section className='games'>
      <div className='list-row list-row-top'>
        <div className='game-list'>
          <div className='game search-link'>
            <h2>Our<br />Games</h2>
            <button className='btn searchBtn'>View more</button>
          </div>
          <div className='game card1'></div>
          <div className='game card2'></div>
          <div className='game card3'></div>
        </div>
      </div>
      <div className='list-row list-row-bottom'>
        <div className='game-list'>
          <div className='game card4'></div>
          <div className='game card5'></div>
          <div className='game card6'></div>
          <div className='game card7'></div>
        </div>
      </div>
    </section>
  )
}
}

export default Games
