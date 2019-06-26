import React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group'
import './App.scss'

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      openMenu: false
    }
    this.timer = this.timer.bind(this)
    this.menuCall = this.menuCall.bind(this)
  }
  componentDidMount() {
    let intervalId = setInterval(this.timer, 6000);
    this.setState({ intervalId: intervalId });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer() {
    this.state.count >= 3 ? this.setState({ count: 1 }) : this.setState({ count: this.state.count +1 })
  }

  menuCall() {
    this.setState(prevState => {
      return {
        openMenu: !prevState.openMenu
      }
    })
  }


    render() {

      const slide = (idx) => this.state.count === idx ? 'active' : 'inActive'
      const state = this.state.openMenu ? 'on' : 'off'
      return (
            <section className='carousel'>
              <div className='slider'>
              <i class="fas fa-bars" className={`nav ${state}`} onClick={this.menuCall}></i>
                <span className='logo'></span>
                <div className={`slide1 ${slide(1)}`}>
                  <div className='overlay'></div>
                  <h1>Full Service<br />Gaming Lounge</h1>
                  <p>A premier cyber lounge, featuring 68 custom spec'd PC's</p>
                </div>
                <div className={`slide2 ${slide(2)}`}>
                  <div className='overlay'></div>
                  <h1>What makes<br />us different</h1>
                  <p>A unique social environment & high end gaming stations</p>
                  <button className='btn'>see more</button>
                </div>
                <div className={`slide3 ${slide(3)}`}>
                  <div className='overlay'></div>
                  <h1>Over 120 games<br />to choose from!</h1>
                  <p>League of Legends, Overwatch, Battlefield V, World of Warcraft, Rainbow six siege, etc</p>
                </div>
              </div>
              <div className='dots-wrapper'>

              </div>
            </section>
        )
    }
}

export default Carousel
