import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'
import Card6 from './Card6'
import Card7 from './Card7'
import './screenDisplay.css'

const ScreenDisplay = ({ darkModeBtn, social1, social2, social3, social4, social5, social6, auxScreen1 }) => {
  return (
    <article className={darkModeBtn ? "screen-main dark" : "screen-main"}>

      {auxScreen1 ?
        ''
        :
        <Card7 darkModeBtn={darkModeBtn} />
      }

      {social1 ?
        <Card1 darkModeBtn={darkModeBtn} />
        :
        ''
      }

      {social2 ?
        <Card2 darkModeBtn={darkModeBtn} />
        :
        ''
      }

      {social3 ?
        <Card3 darkModeBtn={darkModeBtn} />
        :
        ''
      }

      {social4 ?
        <Card4 darkModeBtn={darkModeBtn} />
        :
        ''
      }

      {social5 ?
        <Card5 darkModeBtn={darkModeBtn} />
        :
        ''
      }

      {social6 ?
        <Card6 darkModeBtn={darkModeBtn} />
        :
        ''
      }

    </article>
  )
}

export default ScreenDisplay