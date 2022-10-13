import React from 'react'
import './aboutmeHistory.css'

const Aboutmehistory = ({darkModeBtn}) => {
    return (
        <article className={darkModeBtn ? "about-history dark" : "about-history"}>
            <h2 className={darkModeBtn ? 'about-history-me dark' : 'about-history-me'}>
                By seeking for the integration of art, engineering and programming, I discovered the field of Front - End design and fell in love with it.
            </h2>
        </article>
    )
}

export default Aboutmehistory