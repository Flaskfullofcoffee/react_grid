import React, { Component } from 'react'
import cx from 'classnames'
import {CSSTransition} from 'react-transition-group'
import './App.scss'

class Games extends Component {

render() {
  return (
    <section className='games'>
      <div className='list-row list-row-top'>
        <ul className='game-list'>
          <li className='game search-link'></li>
          <li className='game'></li>
          <li className='game'></li>
          <li className='game'></li>
        </ul>
      </div>
      <div className='list-row list-row-bottom'>
        <ul className='game-list'>
          <li className='game'></li>
          <li className='game'></li>
          <li className='game'></li>
          <li className='game'></li>
        </ul>
      </div>
    </section>
  )
}
}

export default Games
