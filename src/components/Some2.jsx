import React from 'react'
import './some2.css'
import rick from './rick.png'

const Some2 = ({darkModeBtn}) => {
    return (
        <article className="some-2">
            <button className={darkModeBtn ? 'some-2-btn dark' : 'some-2-btn'}><a href="https://rick-and-morty-worlds.netlify.app/" target="_blank" rel="noopener noreferrer"><i className='bx bxs-paper-plane'></i></a></button>
            <img className= "some-2-img" src={rick} alt="rick" />
            <h3 className={darkModeBtn ? 'some-2-h3 dark' : 'some-2-h3'}>Router-Dom/React-Select</h3>
        </article>
    )
}

export default Some2