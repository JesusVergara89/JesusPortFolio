import React from 'react'
import './dataSend.css'

const DataSend = ({ getData, setCheckData }) => {

    const checkFunction = () => {
        setCheckData(false)
    }
    return (
        <article className="data-send">

            <h2 className='data-send-h2'>Your comment has been received</h2>
            <h2 className='send-h2'>{`Name: ${getData.name}`}</h2>
            <h2 className='send-h2'>{`Email: ${getData.email}`}</h2>

            <div className='send-div-p'>
                <p>{`Comment: ${getData.recommendation}`}</p>
            </div>

            <button onClick={checkFunction} className='data-send-btn'> <i className='bx bx-comment-check'></i></button>

        </article>
    )
}

export default DataSend