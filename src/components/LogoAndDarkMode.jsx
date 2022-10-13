import React from 'react'
import logo from './mylogov2.png'
import './logoAndDark.css'

const LogoAndDarkMode = ({ darkModeFunction, darkModeBtn }) => {
    return (
        <article className='logo'>
            <div className='logo-logo'>
                <img src={logo} alt="mylogo" />
            </div>
            <div className="dark-mode">
                <button onClick={darkModeFunction} className={darkModeBtn ? "dark-btn dark" : "dark-btn"}>{darkModeBtn ? <i className='bx bxs-sun' ></i> : <i className='bx bxs-moon'></i>}</button>
            </div>
        </article>
    )
}

export default LogoAndDarkMode