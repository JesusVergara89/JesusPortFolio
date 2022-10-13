import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Aboutme from './components/Aboutme'
import Contactme from './components/Contactme'
import Education from './components/Education'
import Experience from './components/Experience'
import Header from './components/Header'
import LoadingPage from './components/LoadingPage'
import Photo from './components/Photo'
import Technologies from './components/Technologies'

function App() {

  const [LoadingPageState, setLoadingPageState] = useState(true)
  const [darkModeBtn, setDarkModeBtn] = useState(false)
 
  useEffect(() => {
    setTimeout(() => {
      setLoadingPageState(false)
    }, 2500)
  }, [])

  return (
    <div className={darkModeBtn ? "App dark" : "App"}>
      {LoadingPageState ?
        <LoadingPage />
        :
        ''
      }

      <Header setDarkModeBtn={setDarkModeBtn} darkModeBtn={darkModeBtn} />
      <Routes>
        <Route path='/'
          element={<Photo darkModeBtn={darkModeBtn} />}
        />
        <Route path='/aboutme'
          element={<Aboutme darkModeBtn={darkModeBtn} />}
        />
        <Route path='/education'
          element={<Education darkModeBtn={darkModeBtn} />}
        />
        <Route path='/technologies'
          element={<Technologies darkModeBtn={darkModeBtn} />}
        />
        <Route path='/experience'
          element={<Experience darkModeBtn={darkModeBtn} />}
        />
        <Route path='/contact'
          element={<Contactme darkModeBtn={darkModeBtn} />}
        />
      </Routes>
    </div>
  )
}

export default App
