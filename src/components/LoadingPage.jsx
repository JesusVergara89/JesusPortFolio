import React from 'react'
import './loadingPage.css'

const LoadingPage = () => {
    return (
        <article className="loading-page">
            <div className='loading-page-grid'>
                <div className='page-grid-1'>
                    <h3>J</h3> <h3>E</h3> <h3>S</h3> <h3>U</h3> <h3>S</h3>
                </div>
                <div className='page-grid-1'>
                    <h3>V</h3> <h3>E</h3> <h3>R</h3> <h3>G</h3> <h3>A</h3> <h3>R</h3> <h3>A</h3>
                </div>
                <div className='page-grid-2'>
                    <div className="loading1">1</div>
                    <div className="loading2">2</div>
                    <div className="loading3">3</div>
                </div>
            </div>
        </article>
    )
}

export default LoadingPage