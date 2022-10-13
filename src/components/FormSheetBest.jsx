import React, { useState } from 'react'
import './formSheetBest.css'
import { useForm } from "react-hook-form"
import hookform from './reactHook.png'
import sheetb from './sheetLogo.png'
import axiosLogo from './axiosLogo.png'
import axios from 'axios'
import DataSend from './DataSend'

const FormSheetBest = ({darkModeBtn}) => {

    const URL = 'https://sheet.best/api/sheets/b65b5f58-2bfb-4995-b467-6086f1fb1045'

    const defaultData = {
        name: 'Empty data',
        email: 'Empty data',
        recommendation: 'Empty data'
    }

    const defaultReset = {
        name: '',
        email: '',
        recommendation: ''
    }

    const { register, handleSubmit, reset } = useForm()
    const [getData, setGetData] = useState(defaultData)
    const [checkData, setCheckData] = useState(false)

    const submit = (data) => {
        setGetData(data)
        axios.post(URL, data)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
        reset(defaultReset)
        setCheckData(true)
    }


    return (
        <article className={darkModeBtn ? "main-form dark" : "main-form"}>
            {checkData ?
                <DataSend getData={getData} setCheckData={setCheckData} />
                :
                ''
            }
            <h2 className={darkModeBtn ? 'form-h2 dark' : 'form-h2'}> <span className={darkModeBtn ? 'form-h2-span dark' : 'form-h2-span'}>In this section you can leave comments about this design; it will be sent to a google sheet, as soon as I see your comment I will reply. </span>Thank you!</h2>
            <form onSubmit={handleSubmit(submit)}>

                <div className='form-name'>
                    <input type="text" autoComplete='off' placeholder='Name' {...register('name')} />
                </div>
                <div className='form-email'>
                    <input type="text" autoComplete='off' placeholder='Email' {...register('email')} />
                </div>
                <div className='form-recomendation'>
                    <textarea type="text" autoComplete='off' placeholder='Write your comment here ' {...register('recommendation')} />
                </div>
                <button className={darkModeBtn ? 'form-btn dark' : 'form-btn'}>Send</button>
            </form>
            <div className='main-form-logo'>
                <h3 className={darkModeBtn ? 'main-form-h3 dark' : 'main-form-h3'}>Power by</h3>
                <div className="form-div-row">
                    <img className='form-hook' src={hookform} alt="hookFLogo" />
                    <img className='form-sheet' src={axiosLogo} alt="sheetBFLogo" />
                    <img className='form-sheet' src={sheetb} alt="sheetBFLogo" />
                </div>
                <h3 className={darkModeBtn ? 'main-form-h3 dark' : 'main-form-h3'}>React Hook Form</h3>
                <h3 className={darkModeBtn ? 'main-form-h3 dark' : 'main-form-h3'}>Axios</h3>
                <h3 className={darkModeBtn ? 'main-form-h3 dark' : 'main-form-h3'}>Sheet Best</h3>
            </div>
        </article>
    )
}

export default FormSheetBest