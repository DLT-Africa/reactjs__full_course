import React from 'react'
import './hero.css'

const Hero = () => {

    const handleClick = () => {
        console.log('I was clicked!!!')
    }

  return (
    <div className='hero'>
      <p>Zainab must be a hero</p>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default Hero
