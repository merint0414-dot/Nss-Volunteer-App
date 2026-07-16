import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddVolunteer from './components/AddVolunteer'
import ViewVolunteer from './components/ViewVolunteer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<AddVolunteer/>}/>
        <Route path='/view' element={<ViewVolunteer/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
