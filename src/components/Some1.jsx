import React from 'react'
import './some1.css'
import crud from './crud.png'

const Some1 = ({ darkModeBtn }) => {
    return (
        <article className="some-1">
            <button className={darkModeBtn ? 'some-1-btn dark' : 'some-1-btn'}><a href="https://siteofcrud.netlify.app/" target="_blank" rel="noopener noreferrer"><i className='bx bxs-paper-plane'></i></a></button>
            <img className="some-1-img" src={crud} alt="crud" />
            <h3 className={darkModeBtn ? 'some-1-h3 dark' : 'some-1-h3'}>CRUD project</h3>
        </article>
    )
}

export default Some1