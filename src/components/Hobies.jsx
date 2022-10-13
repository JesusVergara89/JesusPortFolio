import React, { useState } from 'react'
import Cook from './Cook'
import './hobies.css'
import LeftButton from './LeftButton'
import Programing from './Programing'
import Read from './Read'
import RightButton from './RightButton'
import Teach from './Teach'
import Travel from './Travel'
import Write from './Write'

const Hobies = ({darkModeBtn}) => {

    const [count, setCount] = useState(1)

    const [changeResponsive1, setChangeResponsive1] = useState(true)
    const [changeResponsive2, setChangeResponsive2] = useState(false)
    const [changeResponsive3, setChangeResponsive3] = useState(false)
    const [changeResponsive4, setChangeResponsive4] = useState(false)
    const [changeResponsive5, setChangeResponsive5] = useState(false)
    const [changeResponsive6, setChangeResponsive6] = useState(false)


    const rightFucntion = () => {
        if (count < 6) {
            setCount(count + 1)
        } else {
            if (count === 6) {
                setCount(1)
            }
        }
        if (count === 1) {
            setChangeResponsive1(false)
            setChangeResponsive2(true)
            setChangeResponsive3(false)
            setChangeResponsive4(false)
            setChangeResponsive5(false)
            setChangeResponsive6(false)
        } else {
            if (count === 2) {
                setChangeResponsive1(false)
                setChangeResponsive2(false)
                setChangeResponsive3(true)
                setChangeResponsive4(false)
                setChangeResponsive5(false)
                setChangeResponsive6(false)
            } else {
                if (count === 3) {
                    setChangeResponsive1(false)
                    setChangeResponsive2(false)
                    setChangeResponsive3(false)
                    setChangeResponsive4(true)
                    setChangeResponsive5(false)
                    setChangeResponsive6(false)
                } else {
                    if (count === 4) {
                        setChangeResponsive1(false)
                        setChangeResponsive2(false)
                        setChangeResponsive3(false)
                        setChangeResponsive4(false)
                        setChangeResponsive5(true)
                        setChangeResponsive6(false)
                    } else {
                        if (count === 5) {
                            setChangeResponsive1(false)
                            setChangeResponsive2(false)
                            setChangeResponsive3(false)
                            setChangeResponsive4(false)
                            setChangeResponsive5(false)
                            setChangeResponsive6(true)
                        } else {
                            if (count === 6) {
                                setChangeResponsive1(true)
                                setChangeResponsive2(false)
                                setChangeResponsive3(false)
                                setChangeResponsive4(false)
                                setChangeResponsive5(false)
                                setChangeResponsive6(false)
                            }
                        }
                    }
                }
            }
        }
    }

    const leftFucntion = () => {
        if (count < 6) {
            setCount(count + 1)
        } else {
            if (count === 6) {
                setCount(1)
            }
        }
        if (count === 1) {
            setChangeResponsive1(false)
            setChangeResponsive2(true)
            setChangeResponsive3(false)
            setChangeResponsive4(false)
            setChangeResponsive5(false)
            setChangeResponsive6(false)
        } else {
            if (count === 2) {
                setChangeResponsive1(false)
                setChangeResponsive2(false)
                setChangeResponsive3(true)
                setChangeResponsive4(false)
                setChangeResponsive5(false)
                setChangeResponsive6(false)
            } else {
                if (count === 3) {
                    setChangeResponsive1(false)
                    setChangeResponsive2(false)
                    setChangeResponsive3(false)
                    setChangeResponsive4(true)
                    setChangeResponsive5(false)
                    setChangeResponsive6(false)
                } else {
                    if (count === 4) {
                        setChangeResponsive1(false)
                        setChangeResponsive2(false)
                        setChangeResponsive3(false)
                        setChangeResponsive4(false)
                        setChangeResponsive5(true)
                        setChangeResponsive6(false)
                    } else {
                        if (count === 5) {
                            setChangeResponsive1(false)
                            setChangeResponsive2(false)
                            setChangeResponsive3(false)
                            setChangeResponsive4(false)
                            setChangeResponsive5(false)
                            setChangeResponsive6(true)
                        } else {
                            if (count === 6) {
                                setChangeResponsive1(true)
                                setChangeResponsive2(false)
                                setChangeResponsive3(false)
                                setChangeResponsive4(false)
                                setChangeResponsive5(false)
                                setChangeResponsive6(false)
                            }
                        }
                    }
                }
            }
        }
    }


    return (
        <article className={darkModeBtn ? "hobies-main dark" : "hobies-main"}>

            <h2 className={darkModeBtn ? 'hobies-main-h2 dark' : 'hobies-main-h2'}>Hobbies</h2>

            <div className="hobies-description">
                <div className="hobies-center-img">
                    {changeResponsive1 ?
                        <Cook darkModeBtn={darkModeBtn}/>
                        :
                        ''
                    }

                    {changeResponsive2 ?
                        <Programing darkModeBtn={darkModeBtn} />
                        :
                        ''
                    }

                    {changeResponsive3 ?
                        <Travel darkModeBtn={darkModeBtn}/>
                        :
                        ''
                    }

                    {changeResponsive4 ?
                        <Teach darkModeBtn={darkModeBtn} />
                        :
                        ''
                    }

                    {changeResponsive5 ?
                        <Read darkModeBtn={darkModeBtn} />
                        :
                        ''
                    }

                    {changeResponsive6 ?
                        <Write darkModeBtn={darkModeBtn} />
                        :
                        ''
                    }

                </div>
                <div className="hobies-main-grid">
                    <div className="hobies-left-btn">
                        <LeftButton leftFucntion={leftFucntion} />
                    </div>
                    <div className="hobies-left-btn">
                        <RightButton rightFucntion={rightFucntion} />
                    </div>
                </div>
            </div>

        </article>
    )
}

export default Hobies