import React from 'react'
import ToggleButton from "../../components/ToggleButton"

function DarkMode() {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('theme', 'dark')
        
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute('theme', 'light')
        
    }

    const toggleTheme = e => {
        e.target.checked ? setDarkMode() : setLightMode()
    }
    
  return (
    <div className='dark_mode'>
        <ToggleButton onChange={toggleTheme}/>
    </div>
  )
}

export default DarkMode