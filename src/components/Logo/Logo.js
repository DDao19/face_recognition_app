import React from 'react'
import Tilt from 'react-tilt'
import anime from './anime.png'
import './Logo.css'

const Logo = () => {
  return (
    <div className="logo ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max : 40 }} style={{ height: 220, width: 220 }} >
        <div className="Tilt-inner">
          <img src={anime} alt="logo"/>
        </div>
      </Tilt>
    </div>
  )
}


export default Logo