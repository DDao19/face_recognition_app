import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div className="hero1">
      <p className="f3">
        {'This Magic Brain will detect faces in your pictures. Give it a try'}
      </p>
      <p>Enter an image URL</p>
      <div className="textBox">
        <input 
          className="textBox2" 
          type="text" 
          size="50"
          onChange={onInputChange}
        />
        <button 
          className="button grow link dib white"
          onClick={onSubmit}
        >Detect
        </button>
      </div>
    </div>
  )
}


export default ImageLinkForm