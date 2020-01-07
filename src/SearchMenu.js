import React, { Component } from 'react'
import './App.scss'

class SearchMenu extends Component {

  componentDidMount() {
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAQwfd-wwVm7NraaaTdMgIzVwjmZDZyVAO1EyUbNzoFeyse16ftOS1tkUe0-w-EY14erzSszZBTh5J/pubhtml"

    // "https://script.googleusercontent.com/macros/echo?user_content_key=khx_184a-zMF7xYEFiYwu3Rg3aqOkiyXe-hx2GLtAf2CDBI_Z_C8VPhTxcblTLeQyLt0KCPT-DP30wsV7HrgwHlptyN6pCGom5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKM1ySAP19am3HiAMd7ZlOlZXAaDBQajCVFOzrP3sb9pspWv2o1lwZigsAXUwlIHhsTvy1m0tLyP&lib=M2cybmF92Md50tz0Q_PGZ20xzvpP3hh6O"

    fetch(url)
      .then((resp) => resp.json())
      .then(json => {
        let gameList = json.games.map(obj => obj.game);
        addGames(gameList);
        let searchBox = document.getElementById('searchbar');
        searchBox.addEventListener('keyup', filterGames(gameList))
      })
    // function for adding game
      let addGames = (gameList)  => {
      let ul = document.createElement('ul');
        gameList.forEach(game => {
          let li = document.createElement('li');
          li.textContent = game;
          ul.appendChild(li)
        })
        let resultContainer = document.getElementById('game-list');
        resultContainer.innerHTML = '';
        resultContainer.appendChild(ul);
      };

      let filterGames = (gameList) => (event) => {
        let input = event.target.value.toLowerCase();
        let filteredGamesList = gameList.filter(game => {
          return game.toLowerCase().includes(input);
        })
        addGames(filteredGamesList);
      }
  }

    render() {
      return (
            <div className='gameList'>
              <input id="searchbar" className='searchBar' placeholder='Search Games' type='text'/>
              <div className='list-wrapper'>
                <p className='result'></p>
                <div id='game-list'></div>
              </div>
            </div>
        )
    }
}

export default SearchMenu




// <h2>Game List</h2>
// <input id="searchbar" className='searchBar' placeholder="SEARCH" type="text" value="" autocomplete="off" />
