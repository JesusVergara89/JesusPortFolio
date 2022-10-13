import React from 'react'
import './iam.css'

const Iam = ({ darkModeBtn }) => {
  return (
    <article className={darkModeBtn ? "Iam dark" : "Iam"}>

      <div>
        <h1 className='iam-h1'>Hi. I'm Jesus.</h1>
        <h2 className='iam-h2'>A frond-End Developer.</h2>
      </div>

      <div className='iam-div-paragraph'>
        <p className='iam-paragraph-1'>
          I am a engineer based in Barranquilla, Colombia.
        </p>
        <p className={darkModeBtn ? 'iam-paragraph-2 dark' : 'iam-paragraph-2'}>
          Enjoy working with functional and incredible designs, always focused on creating digital experiences on the web, using technologies like <span className='iam_react'>REACT</span>, <span className='iam_html'>HTML</span>, <span className='iam_js'>JAVASCRIPT</span>, <span className='iam_redux'>REDUX</span>, <span className='iam_css'>CSS</span> amongst others to achieve planned goals.
        </p>
      </div>
    </article>
  )
}

export default Iam