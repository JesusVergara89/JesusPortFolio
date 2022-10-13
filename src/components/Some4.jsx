import React from 'react'
import './some4.css'
import pokemon from './pokemon.png'

const Some4 = ({darkModeBtn}) => {
    return (
        <article className="some-3">
            <button className={darkModeBtn ? 'some-4-btn dark' : 'some-4-btn'}><a href="https://pokedex-app-new.netlify.app/" target="_blank" rel="noopener noreferrer"><i className='bx bxs-paper-plane'></i></a></button>
            <img className={darkModeBtn ? "some-4-img dark" : "some-4-img"} src={pokemon} alt="ecommerce" />
            <h3 className={darkModeBtn ? 'some-4-h3 dark' : 'some-4-h3'}>Read/Redux/Router-Dom</h3>
        </article>
    )
}

export default Some4