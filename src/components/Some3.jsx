import React from 'react'
import './some3.css'
import ecommerce from './ecommerce.png'

const Some3 = ({darkModeBtn}) => {
    return (
        <article className="some-3">
            <button className={darkModeBtn ? 'some-3-btn dark' : 'some-3-btn'}><a href="https://e-commerce-v2.netlify.app/" target="_blank" rel="noopener noreferrer"><i className='bx bxs-paper-plane'></i></a></button>
            <img className={darkModeBtn ? "some-3-img dark" : "some-3-img"} src={ecommerce} alt="ecommerce" />
            <h3 className={darkModeBtn ? 'some-3-h3 dark' : 'some-3-h3'}>E-commerce</h3>
        </article>
    )
}

export default Some3