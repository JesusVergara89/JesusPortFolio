import React from 'react'
import './music.css'
import jesusMusic from './jesusmusic.png'
import musicReading from './musicreading.png'
import thinksmart from './jesusthink.png'
import mentorimg from './mentor.png'

const Music = ({darkModeBtn}) => {
    return (
        <article className={darkModeBtn ? "my-music dark" : "my-music"}>

            <h2 className={darkModeBtn ? 'my-music-h2 dark' : 'my-music-h2'}>What do I hear?</h2>

            <div className='my-music-div'>
                <img src={jesusMusic} alt="mymusic" />
                <button><a href="https://open.spotify.com/playlist/6z8hCW2rPmUEAUXoa2ZSdY" target="_blank" rel="noopener noreferrer"><i className='bx bxl-spotify'></i></a></button>
            </div>

            <div className='my-music-div-1'>
                <img src={musicReading} alt="readingmusic" />
                <button><a href="https://open.spotify.com/playlist/6z7S5naH7mXGq80QzTbAAn" target="_blank" rel="noopener noreferrer"><i className='bx bxl-spotify'></i></a></button>
            </div>

            <div className='my-music-div-2'>
                <img src={thinksmart} alt="thinkmusic" />
                <button><a href="https://open.spotify.com/show/6ll0MwobDt1JW9gYaOONEo" target="_blank" rel="noopener noreferrer"><i className='bx bxl-spotify'></i></a></button>
            </div>

            <div className='my-music-div-3'>
                <img src={mentorimg} alt="mentormusic" />
                <button><a href="https://open.spotify.com/show/1qgLzy6x7XT5QSbvjuBRqp" target="_blank" rel="noopener noreferrer"><i className='bx bxl-spotify'></i></a></button>
            </div>


        </article>
    )
}

export default Music