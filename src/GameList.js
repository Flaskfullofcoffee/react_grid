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
      title = <h2>Our<br />Games</h2>;
    } else {
        title = <h2>Game List</h2>;
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


// const openSearch = this.state.gameList ? 'open' : 'close'
// const hide = !openSearch ? 'hide' : 'reveal'
// const closeSearch = this.state.gameList ? 'close' : 'open'
// const backtrack = <FontAwesomeIcon className={hide} icon={faBackward} />
//
// let display;
//   if (openSearch === 'close') {
//     display = <button onClick={this.openSearch} className={`btn searchBtn ${hide}`}>View more</button> ;
//   } else {
//     display = <GameList />
//   }

// <h2>Game List</h2>
// <input id="searchbar" className='searchBar' placeholder="SEARCH" type="text" value="" autocomplete="off" />
