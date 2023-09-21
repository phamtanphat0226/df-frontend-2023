import React from 'react'
import "./ToggleButton.css";


function ToggleButton({ isToggled, onChange}) {
  return (
    <label className='toggle'>
      <input type='checkbox' checked={isToggled} onChange={onChange} />
      <span className='slider'></span>
    </label>
  )
}

export default ToggleButton