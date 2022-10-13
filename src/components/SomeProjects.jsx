import React, { useState } from 'react'
import LeftButton from './LeftButton'
import RightButton from './RightButton'
import Some1 from './Some1'
import Some2 from './Some2'
import Some3 from './Some3'
import Some4 from './Some4'
import './someProjects.css'

const SomeProjects = ({ darkModeBtn }) => {

    const [count, setCount] = useState(1)

    const [changeResponsive1, setChangeResponsive1] = useState(true)
    const [changeResponsive2, setChangeResponsive2] = useState(false)
    const [changeResponsive3, setChangeResponsive3] = useState(false)
    const [changeResponsive4, setChangeResponsive4] = useState(false)


    const rightFucntion = () => {
        if (count < 4) {
            setCount(count + 1)
        } else {
            if (count === 4) {
                setCount(1)
            }
        }
        if (count === 1) {
            setChangeResponsive1(false)
            setChangeResponsive2(true)
            setChangeResponsive3(false)
            setChangeResponsive4(false)
        } else {
            if (count === 2) {
                setChangeResponsive1(false)
                setChangeResponsive2(false)
                setChangeResponsive3(true)
                setChangeResponsive4(false)
            } else {
                if (count === 3) {
                    setChangeResponsive1(false)
                    setChangeResponsive2(false)
                    setChangeResponsive3(false)
                    setChangeResponsive4(true)
                } else {
                    if (count === 4) {
                        setChangeResponsive1(true)
                        setChangeResponsive2(false)
                        setChangeResponsive3(false)
                        setChangeResponsive3(false)
                        setChangeResponsive4(false)
                    }

                }
            }
        }
    }

    const leftFucntion = () => {
        if (count < 4) {
            setCount(count + 1)
        } else {
            if (count === 4) {
                setCount(1)
            }
        }
        if (count === 1) {
            setChangeResponsive1(false)
            setChangeResponsive2(true)
            setChangeResponsive3(false)
            setChangeResponsive4(false)
        } else {
            if (count === 2) {
                setChangeResponsive1(false)
                setChangeResponsive2(false)
                setChangeResponsive3(true)
                setChangeResponsive4(false)
            } else {
                if (count === 3) {
                    setChangeResponsive1(false)
                    setChangeResponsive2(false)
                    setChangeResponsive3(false)
                    setChangeResponsive4(true)
                } else {
                    if (count === 4) {
                        setChangeResponsive1(true)
                        setChangeResponsive2(false)
                        setChangeResponsive3(false)
                        setChangeResponsive3(false)
                        setChangeResponsive4(false)
                    }

                }
            }
        }
    }

    return (
        <article className={darkModeBtn ? "some-main dark" : "some-main"}>

            <h2 className={darkModeBtn ? 'some-main-h2 dark' : 'some-main-h2'}>Projects I've been involved with:</h2>

            <div className="some-description">
                <div className="some-center-img">
                    {changeResponsive1 ?
                        <Some1 darkModeBtn={darkModeBtn}/>
                        :
                        ''
                    }
                    {changeResponsive2 ?
                        <Some2 darkModeBtn={darkModeBtn}/>
                        :
                        ''
                    }
                    {changeResponsive3 ?
                        <Some3 darkModeBtn={darkModeBtn}/>
                        :
                        ''
                    }
                    {changeResponsive4 ?
                        <Some4 darkModeBtn={darkModeBtn}/>
                        :
                        ''
                    }
                </div>
                <div className="some-main-grid">
                    <div className="some-left-btn">
                        <LeftButton leftFucntion={leftFucntion} />
                    </div>
                    <div className="some-left-btn">
                        <RightButton rightFucntion={rightFucntion} />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default SomeProjects