import React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group'
import './App.scss'

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
    this.timer = this.timer.bind(this)
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




    render() {

      return (
            <section className='carousel'>
              <div className='slider'>
                <div className={`slide img${this.state.count}`}></div>
              </div>
              <div className='dots-wrapper'></div>
            </section>
        )
    }
}

export default Carousel
