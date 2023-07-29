import React, { useContext } from 'react'
import ThemeContext from '../store/ThemeContext'
import {BsSunFill,BsFillMoonFill} from 'react-icons/bs'
const Toggle = () => {
   
    const {theme,setTheme} = useContext(ThemeContext)
    
    const handleToggle = ()=> {
        setTheme(!theme)
        localStorage.setItem("theme",!theme)
        if(theme) {
          document.querySelector('.container').classList.remove('light')
          document.querySelector('.toggle').classList.remove('switch')
        } else {
          document.querySelector('.container').classList.add('light')
          document.querySelector('.toggle').classList.add('switch')
        }
        
    }
  return (
    <div className={`toggle ${theme ? 'switch' : ''}`} onClick={handleToggle}>
        
            {
                theme ? <BsFillMoonFill /> : <BsSunFill />
            }    
        
       
    </div>
  )
}

export default Toggle