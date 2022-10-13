import React, { useState } from 'react'
import './nature.css'
import natureImg from './ideanature.jpg'
import Glimpse2 from './Glimpse2'

const Nature = () => {

  const [show, setShow] = useState(false)

  const showFunction = () => setShow(!show)

  return (
    <article className="nature">
      {show ?
        <Glimpse2 showFunction={showFunction} />
        :
        ''
      }
      <button onClick={showFunction}><i className='bx bx-search-alt'></i></button>
      <img className="nature-img" src={natureImg} alt="imgcook" />
    </article>
  )
}

export default Nature