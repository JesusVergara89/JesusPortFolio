import React from 'react'
import './logos.css'
import htmlLogo from './htmlLogov1.jpg'
import cssLogo from './cssLogo.svg'
import jsLogo from './jscLogo.jpg'
import reactLogo from './reactLogo.png'
import reduxLogo from './reduxLogo.svg'
import githublogo from './githubLogo.png'
import gitLogo from './gitLogo.png'
import reactRouterLogo from './reactRouterLogo.png'
import axiosLogo from './axiosLogo.png'
import projectLogo from './projectLogo.png'
import bestsheetLogo from './sheetLogo.png'
import wordpressLogo from './WordpressLogo.png'

const Logos = () => {
    return (
        <article className="main-logos">
            <div className="main-logos-div">
                <h4 className='main-logos-h4'>HTML</h4>
                <img className='main-logos-div-img-html' src={htmlLogo} alt="htmllogo" />
            </div>
            <div className="main-logos-div">
                <h4 className='main-logos-h4'>CSS</h4>
                <img className='main-logos-div-img-css' src={cssLogo} alt="csslogo" />
            </div>
            <div className="main-logos-div">
                <h4 className='main-logos-h4'>JAVASCRIPT</h4>
                <img className='main-logos-div-img' src={jsLogo} alt="jslogo" />
            </div>
            <div className="main-logos-div">
                <h4 className='main-logos-h4'>REACT</h4>
                <img className='main-logos-div-img-react' src={reactLogo} alt="reactlogo" />
            </div>
            <div className="main-logos-div">
                <h4 className='main-logos-h4'>REDUX</h4>
                <img className='main-logos-div-img-react' src={reduxLogo} alt="reduxtlogo" />
            </div>
            <div className="main-logos-div">
                <h4 className='main-logos-h4'>GITHUB</h4>
                <img className='main-logos-div-img-hub' src={githublogo} alt="githublogo" />
            </div>
            <div className="main-logos-div">
                <h4 className='main-logos-h4'>GIT</h4>
                <img className='main-logos-div-img-hub' src={gitLogo} alt="gitlogo" />
            </div>
            <div className="main-logos-div">
                <h4 className='main-logos-h4'>ROUTER</h4>
                <img className='main-logos-div-img-hub' src={reactRouterLogo} alt="routerlogo" />
            </div>
            <div className="main-logos-div">
                <h4 className='main-logos-h4'>PROJECT</h4>
                <img className='main-logos-div-img-hub' src={projectLogo} alt="projectlogo" />
            </div>
            <div className="main-logos-div">
                <h4 className='main-logos-h4'>AXIOS</h4>
                <img className='main-logos-div-img-hub' src={axiosLogo} alt="axioslogo" />
            </div>
            <div className="main-logos-div">
                <h4 className='main-logos-h4'>WORDPRESS</h4>
                <img className='main-logos-div-img-hub' src={wordpressLogo} alt="wplogo" />
            </div>
            <div className="main-logos-div">
                <h4 className='main-logos-h4'>SHEET</h4>
                <img className='main-logos-div-img-best' src={bestsheetLogo} alt="bestsheetlogo" />
                <h4 className='main-logos-h4'>BEST</h4>
            </div>
        </article>
    )
}

export default Logos