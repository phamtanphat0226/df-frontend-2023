import React from 'react'
import "./ToggleButton.css";


function ToggleButton({ isToggled, onChange, defaultChecked}) {
  return (
    <label className='toggle'>
      <input
        type='checkbox'
        hecked={isToggled}
        onChange={onChange}
        defaultChecked={defaultChecked} 
        
       />
      <span className='slider'></span>
    </label>
  )
}

export default ToggleButton