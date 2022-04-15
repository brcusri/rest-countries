import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

function ThemeChanger(props){
    const [themeState,setThemeState]=useState(false)
    const handleChange = () =>{
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark-mode');
    }
 }
 useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') 
    return  document.body.classList.add('dark-mode');
  })
 return(
    <div>
    <button className ="btn-mid" onClick={handleChange}><FontAwesomeIcon icon={faMoon}/>{themeState ?  ' Dark Mode' : ' Light Mode'}</button>
  </div>
    
 );
}
export default ThemeChanger;