import React from 'react'
import ToggleButton from "../../components/ToggleButton"

function DarkMode() {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('theme', 'dark')
        localStorage.setItem("themeMode", "dark")
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute('theme', 'light')
        localStorage.removeItem("themeMode", "light")
    }

    const getTheme = localStorage.getItem("themeMode");
    
    if (getTheme === "dark") setDarkMode();

    const toggleTheme = e => e.target.checked ? setDarkMode() : setLightMode();

  return (
    <div className='dark_mode'>
        <ToggleButton onChange={toggleTheme} defaultChecked={getTheme === "dark"}/>
    </div>
  )
}

export default DarkMode