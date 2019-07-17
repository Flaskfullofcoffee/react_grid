import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import SearchMenu from './SearchMenu'
import './App.scss'

class GameList extends Component {
  constructor(props) {
      super(props)
      this.state = {
        gameList: false
      }
      this.openSearch = this.openSearch.bind(this)
    }

    openSearch() {
      this.setState(prevState => {
        return {
          gameList: !prevState.gameList
        }
      })
    }

  render() {

    const openSearch = this.state.gameList ? 'open' : 'close'
    const hide = this.state.gameList ? 'active' : 'inActive'
    const closeSearch = this.state.gameList ? 'close' : 'open'
    let title;
     if (openSearch === 'close') {
      title = <h2 className='closed-title'>Our<br />Games</h2>;
    } else {
        title = <h2 className='open-title'>Game List</h2>;
    }
    let display;
      if (openSearch === 'close') {
        display = <button onClick={this.openSearch} className={`btn searchBtn`}>View more</button> ;
      } else {
        display = <SearchMenu />
      }
      return (
        <div className={`game search-link ${openSearch}`}>
        <span onClick={this.openSearch} className={`return ${hide}`}><FontAwesomeIcon icon={faArrowCircleLeft} /></span>
          {title}
          {display}
        </div>
        )
    }
}

export default GameList
