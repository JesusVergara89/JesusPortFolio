import React, { useState } from 'react'
import LeftButton from './LeftButton'
import ResponsiveComputer from './ResponsiveComputer'
import './responsiveDesing.css'
import ResponsiveIpad from './ResponsiveIpad'
import ResponsiveIphone from './ResponsiveIphone'
import RightButton from './RightButton'

const ResponsiveDesing = ({ darkModeBtn }) => {

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
        <article className={darkModeBtn ? "main-responsive dark" : "main-responsive"}>

            <h2 className='responsive-h2'>Responsive <span className={darkModeBtn ? 'responsive-web dark' : 'responsive-web'}>web</span> design</h2>

            <div className='responsive-grid'>
                <div className="responsive-grid1">
                    <LeftButton leftFucntion={leftFucntion} />
                </div>
                <div className="responsive-grid2">
                    {changeResponsive1 ?
                        <ResponsiveIphone />
                        :
                        ''
                    }
                    {changeResponsive2 ?
                        <ResponsiveIpad />
                        :
                        ''
                    }
                    {changeResponsive3 ?
                        <ResponsiveComputer />
                        :
                        ''
                    }


                </div>
                <div className="responsive-grid3">
                    <RightButton rightFucntion={rightFucntion} />
                </div>
            </div>



        </article>
    )
}

export default ResponsiveDesing