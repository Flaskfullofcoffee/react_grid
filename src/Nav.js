import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import './App.scss'

function Nav() {

  const [state, setState] = useState(false);
  const show = state ? 'inActive' : 'active'
  const hide = !state ? 'inActive' : 'active'
  const menu = <FontAwesomeIcon icon={faBars} />
  const backtrack = <FontAwesomeIcon icon={faBackward} />
  return (
    <div>
      <span className={`hamburger ${show}`} onClick={() => setState(true)}>{menu}</span>

          <div className={`navMenu ${hide}`}>
            <span className='returnBtn' onClick={() => setState(false)}>{backtrack}</span>
            <a className="nav-link" href="index.html">Home</a>
            <a className="nav-link" href="#games_section">Games</a>
            <a className="nav-link" href="#rates_section">Pricing</a>
            <a className="nav-link" href="#reservation_section">RSVP</a>
            <a className="nav-link" href="#location_section">Contact</a>
          </div>
    </div>
  )
}

export default Nav
