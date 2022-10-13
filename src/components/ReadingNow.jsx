import React, { useState } from 'react'
import LeftButton from './LeftButton'
import Nature from './Nature'
import RightButton from './RightButton'
import Sapiens from './Sapiens'
import './readingNow.css'

const ReadingNow = ({darkModeBtn}) => {

    const [count, setCount] = useState(1)

    const [changeResponsive1, setChangeResponsive1] = useState(true)
    const [changeResponsive2, setChangeResponsive2] = useState(false)

    const rightFucntion = () => {
        if (count < 2) {
            setCount(count + 1)
        } else {
            if (count === 2) {
                setCount(1)
            }
        }
        if (count === 1) {
            setChangeResponsive1(false)
            setChangeResponsive2(true)
        } else {
            if (count === 2) {
                setChangeResponsive1(true)
                setChangeResponsive2(false)
            }
        }
    }

    const leftFucntion = () => {
        if (count < 2) {
            setCount(count + 1)
        } else {
            if (count === 2) {
                setCount(1)
            }
        }
        if (count === 1) {
            setChangeResponsive1(false)
            setChangeResponsive2(true)
        } else {
            if (count === 2) {
                setChangeResponsive1(true)
                setChangeResponsive2(false)
            }
        }
    }

    return (
        <article className={darkModeBtn ? "reading-now dark" : "reading-now"}>

            <h2 className={darkModeBtn ? 'reading-now-h2 dark' : 'reading-now-h2'}>Currently reading</h2>

            <div className="reading-description">
                <div className="reading-center-img">
                    {changeResponsive1 ?
                        <Sapiens />
                        :
                        ''
                    }

                    {changeResponsive2 ?
                        <Nature />
                        :
                        ''
                    }

                </div>
                <div className="reading-main-grid">
                    <div className="reading-left-btn">
                        <LeftButton leftFucntion={leftFucntion} />
                    </div>
                    <div className="reading-left-btn">
                        <RightButton rightFucntion={rightFucntion} />
                    </div>
                </div>
            </div>

        </article>
    )
}

export default ReadingNow