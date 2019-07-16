import React, { Component } from 'react'
import GameList from './GameList'
import './App.scss'

class Games extends Component {
  render() {
  return (
    <section id='games_section' className='games'>
      <div className='list-row list-row-top'>
        <div className='game-list'>
          <GameList />
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
