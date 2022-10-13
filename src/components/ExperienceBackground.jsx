import React, { useState } from 'react'
import LeftButton from './LeftButton'
import RightButton from './RightButton'
import './experienceBackground.css'
import Expe1 from './Expe1'
import Expe2 from './Expe2'
import Expe3 from './Expe3'
import Expe4 from './Expe4'
import DownloadCV from './DownloadCV'

const ExperienceBackground = ({ darkModeBtn }) => {

    const [count, setCount] = useState(1)

    const [changeResponsive1, setChangeResponsive1] = useState(true)
    const [changeResponsive2, setChangeResponsive2] = useState(false)
    const [changeResponsive3, setChangeResponsive3] = useState(false)
    const [changeResponsive4, setChangeResponsive4] = useState(false)
    const [changeResponsive5, setChangeResponsive5] = useState(false)


    const rightFucntion = () => {
        if (count < 5) {
            setCount(count + 1)
        } else {
            if (count === 5) {
                setCount(1)
            }
        }
        if (count === 1) {
            setChangeResponsive1(false)
            setChangeResponsive2(true)
            setChangeResponsive3(false)
            setChangeResponsive4(false)
            setChangeResponsive5(false)
        } else {
            if (count === 2) {
                setChangeResponsive1(false)
                setChangeResponsive2(false)
                setChangeResponsive3(true)
                setChangeResponsive4(false)
                setChangeResponsive5(false)
            } else {
                if (count === 3) {
                    setChangeResponsive1(false)
                    setChangeResponsive2(false)
                    setChangeResponsive3(false)
                    setChangeResponsive4(true)
                    setChangeResponsive5(false)
                } else {
                    if (count === 4) {
                        setChangeResponsive1(false)
                        setChangeResponsive2(false)
                        setChangeResponsive3(false)
                        setChangeResponsive3(false)
                        setChangeResponsive4(false)
                        setChangeResponsive5(true)
                    } else {
                        if (count === 5) {
                            setChangeResponsive1(true)
                            setChangeResponsive2(false)
                            setChangeResponsive3(false)
                            setChangeResponsive3(false)
                            setChangeResponsive4(false)
                            setChangeResponsive5(false)
                        }
                    }
                }
            }
        }
    }

    const leftFucntion = () => {
        if (count < 5) {
            setCount(count + 1)
        } else {
            if (count === 5) {
                setCount(1)
            }
        }
        if (count === 1) {
            setChangeResponsive1(false)
            setChangeResponsive2(true)
            setChangeResponsive3(false)
            setChangeResponsive4(false)
            setChangeResponsive5(false)
        } else {
            if (count === 2) {
                setChangeResponsive1(false)
                setChangeResponsive2(false)
                setChangeResponsive3(true)
                setChangeResponsive4(false)
                setChangeResponsive5(false)
            } else {
                if (count === 3) {
                    setChangeResponsive1(false)
                    setChangeResponsive2(false)
                    setChangeResponsive3(false)
                    setChangeResponsive4(true)
                    setChangeResponsive5(false)
                } else {
                    if (count === 4) {
                        setChangeResponsive1(false)
                        setChangeResponsive2(false)
                        setChangeResponsive3(false)
                        setChangeResponsive3(false)
                        setChangeResponsive4(false)
                        setChangeResponsive5(true)
                    } else {
                        if (count === 5) {
                            setChangeResponsive1(true)
                            setChangeResponsive2(false)
                            setChangeResponsive3(false)
                            setChangeResponsive3(false)
                            setChangeResponsive4(false)
                            setChangeResponsive5(false)
                        }
                    }
                }
            }
        }
    }

    return (
        <article className={darkModeBtn ? "experience-main dark" : "experience-main"}>

            <h2 className={darkModeBtn ? 'experience-main-h2 dark' : 'experience-main-h2'}>Experience background</h2>

            <div className="experience-description">
                <div className="experience-center-img">
                    {changeResponsive1 ?
                        <Expe1 darkModeBtn={darkModeBtn} />
                        :
                        ''
                    }
                    {changeResponsive2 ?
                        <Expe2 darkModeBtn={darkModeBtn} />
                        :
                        ''
                    }
                    {changeResponsive3 ?
                        <Expe3 darkModeBtn={darkModeBtn} />
                        :
                        ''
                    }
                    {changeResponsive4 ?
                        <Expe4 darkModeBtn={darkModeBtn} />
                        :
                        ''
                    }
                    {changeResponsive5 ?
                        <DownloadCV darkModeBtn={darkModeBtn} />
                        :
                        ''
                    }
                </div>
                <div className="experience-main-grid">
                    <div className="experience-left-btn">
                        <LeftButton leftFucntion={leftFucntion} />
                    </div>
                    <div className="experience-left-btn">
                        <RightButton rightFucntion={rightFucntion} />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ExperienceBackground