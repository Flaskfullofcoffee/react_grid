import React, { Component } from 'react'
import './App.scss'

class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIdx: 0
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(idx) {
    return () => this.setState({ currentIdx: idx });
  }

    render() {

      const selector = (idx) => this.state.currentIdx === idx ? 'active' : 'inActive';
      const highlight = (idx) => this.state.currentIdx === idx ? 'current' : null;
      return (
          <section className='location'>
            <div className='location-wrapper'>
              <div className='location-info'>
              <span className='logo'></span>
                <div className='locations'>
                  <button className={`btn tempeBtn ${highlight(0)}`} onClick={this.handleClick(0)}>Tempe</button>
                  <button className={`btn phoenixBtn ${highlight(1)}`} onClick={this.handleClick(1)}>Phoenix</button>
                </div>
                <div className={`${selector(0)} address`}>
                  <ul>
                    <li> 1840 E Warner Rd Tempe,<br /> AZ 85284 STE 116</li>
                    <li>480.378.6005</li>
                    <li>info@thegridcl.com</li>
                  </ul>
                </div>
                <div className={`${selector(1)} address`}>
                  <ul>
                    <li>4925 W Bell Rd. Phoenix,<br /> AZ 85308 STE C109</li>
                    <li>480.378.6005</li>
                    <li>info@thegridcl.com</li>
                  </ul>
                </div>
                <div className='socialBar'>
                  <ul>
                    <a href="https://www.instagram.com/explore/locations/278418879264888/the-grid-cyber-lounge-tempe?hl=en" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://www.facebook.com/TheGridTempe/" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                    <a href="https://twitter.com/thegridcl?lang=en" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                    <a href="https://www.yelp.com/biz/the-grid-cyber-lounge-tempe" target="_blank"><i class="fa fa-yelp" aria-hidden="true"></i></a>
                  </ul>
                </div>
              </div>
              <div className='location-map'>
                <div className={`map ${selector(0)}`}>
                  <iframe class="embed-responsive-item" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1840%20E.%20Warner%20rd%20Tempe%2CAZ%2085284+(The%20grid%20cyber%20lounge)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
                <div className={`map ${selector(1)}`}>
                  <iframe class="embed-responsive-item" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=33.637893, -112.166495&amp;q=4925%20W%20Bell%20Rd%2C%20Glendale%2C%20AZ%2085308+(The%20Grid%20Cyber%20Lounge)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
              </div>
            </div>
            <footer>
              <span>made by Zachary Dobbs 2019</span>
            </footer>
          </section>
        )
    }
}

export default Location
