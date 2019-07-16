import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import Alpha from './Alpha'
import Bravo from './Bravo'
import Charlie from './Charlie'
import Nav from './Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import './App.scss'

const pages = [
  ({ style }) => <animated.div className='slide' style={{ ...style }}><Alpha /></animated.div>,
  ({ style }) => <animated.div className='slide' style={{ ...style }}><Bravo /></animated.div>,
  ({ style }) => <animated.div className='slide' style={{ ...style }}><Charlie /></animated.div>,
]

export default function Carousel() {
  const [count, setCount] = useState(0)
  useEffect(() => void setInterval(() => setCount(count => (count + 1) % 3), 8000), [])
  const transitions = useTransition(count, p => p, {
    from: { opacity: 0, transform: 'translate3d(50%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <section className="slides">
    <Nav />
    <span className='logo'></span>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </section>
  )
}
