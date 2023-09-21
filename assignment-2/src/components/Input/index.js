import React from 'react';
import './Input.css';

function Input({label, placeholder,value , onChange}) {
  return (
    <label >{label}
      <input
        className='input'
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
        
        />
    </label>
  )
}

export default Input