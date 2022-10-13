import React, { useState } from 'react'
import Education1 from './Education1'
import Education2 from './Education2'
import Education3 from './Education3'
import './educationBackground.css'
import LeftButton from './LeftButton'
import RightButton from './RightButton'

const EducationBackground = ({darkModeBtn}) => {

    const [count, setCount] = useState(1)

    const [changeResponsive1, setChangeResponsive1] = useState(true)
    const [changeResponsive2, setChangeResponsive2] = useState(false)
    const [changeResponsive3, setChangeResponsive3] = useState(false)


    const rightFucntion = () => {
        if (count < 3) {
            setCount(count + 1)
        } else {
            if (count === 3) {
                setCount(1)
            }
        }
        if (count === 1) {
            setChangeResponsive1(false)
            setChangeResponsive2(true)
            setChangeResponsive3(false)
        } else {
            if (count === 2) {
                setChangeResponsive1(false)
                setChangeResponsive2(false)
                setChangeResponsive3(true)
            } else {
                if (count === 3) {
                    setChangeResponsive1(true)
                    setChangeResponsive2(false)
                    setChangeResponsive3(false)
                }
            }
        }
    }

    const leftFucntion = () => {
        if (count < 3) {
            setCount(count + 1)
        } else {
            if (count === 3) {
                setCount(1)
            }
        }
        if (count === 1) {
            setChangeResponsive1(false)
            setChangeResponsive2(true)
            setChangeResponsive3(false)
        } else {
            if (count === 2) {
                setChangeResponsive1(false)
                setChangeResponsive2(false)
                setChangeResponsive3(true)
            } else {
                if (count === 3) {
                    setChangeResponsive1(true)
                    setChangeResponsive2(false)
                    setChangeResponsive3(false)
                }
            }
        }
    }


    return (
        <article className={darkModeBtn ? "education-main dark" : "education-main"}>

            <h2 className={darkModeBtn ? 'education-main-h2 dark' : 'education-main-h2'}>Education background</h2>

            <div className="education-description">
                <div className="education-center-img">
                    {changeResponsive1 ?
                        <Education1 darkModeBtn={darkModeBtn} />
                        :
                        ''
                    }
                    {changeResponsive2 ?
                        <Education2 darkModeBtn={darkModeBtn} />
                        :
                        ''
                    }
                    {changeResponsive3 ?
                        <Education3 darkModeBtn={darkModeBtn} />
                        :
                        ''
                    }
                </div>
                <div className="education-main-grid">
                    <div className="education-left-btn">
                        <LeftButton leftFucntion={leftFucntion} />
                    </div>
                    <div className="education-left-btn">
                        <RightButton rightFucntion={rightFucntion} />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default EducationBackground