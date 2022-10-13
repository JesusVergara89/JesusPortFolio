import React from 'react'
import { Link } from 'react-router-dom'
import LogoAndDarkMode from './LogoAndDarkMode'
import './header.css'


const Header = ({setDarkModeBtn,darkModeBtn}) => {

    const darkModeFunction = () => setDarkModeBtn(!darkModeBtn)

    return (
        <header className="header">
            <nav className={darkModeBtn ? "header-nav dark"  :"header-nav"}>
                <button className={darkModeBtn ? "header-nav-btn dark" :"header-nav-btn"}><Link className='link-header' to='/'><i className='bx bxs-home-alt-2'></i></Link></button>
                <button className={darkModeBtn ? "header-nav-btn dark" :"header-nav-btn"}><Link className='link-header' to='aboutme'><i className='bx bxs-user'></i></Link></button>
                <button className={darkModeBtn ? "header-nav-btn dark" :"header-nav-btn"}><Link className='link-header' to='education'><i className='bx bxs-graduation'></i></Link></button>
                <button className={darkModeBtn ? "header-nav-btn dark" :"header-nav-btn"}><Link className='link-header' to='technologies'><i className='bx bx-sitemap'></i></Link></button>
                <button className={darkModeBtn ? "header-nav-btn dark" :"header-nav-btn"}><Link className='link-header' to='experience'><i className='bx bxs-briefcase-alt-2'></i></Link></button>
                <button className={darkModeBtn ? "header-nav-btn dark" :"header-nav-btn"}><Link className='link-header' to='contact'><i className='bx bxs-contact'></i></Link></button>
            </nav>
            <LogoAndDarkMode darkModeFunction={darkModeFunction} darkModeBtn={darkModeBtn}  />
        </header>
    )
}

export default Header