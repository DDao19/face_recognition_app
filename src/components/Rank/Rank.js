import React from 'react'
import './Rank.css'

const Rank = ({ name, entries }) => {
  return (
    <div className="hero">
      <div className="white f3">
        {`${name}, your current entries is...`}
      </div>
      <div className="white">
        <h1>{entries}</h1>
      </div>
    </div>
  )
}


export default Rank