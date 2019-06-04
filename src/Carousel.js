import React, { Component } from 'react'
import './App.scss'

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
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
    this.state.count >= 2 ? this.setState({ count: 0 }) : this.setState({ count: this.state.count +1 })
  }


    render() {

      return (
            <section className='carousel'>
              <div className='slider'>
                {this.state.count}
              </div>
              <div className='dots-wrapper'></div>
            </section>
        )
    }
}

export default Carousel
