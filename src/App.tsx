import './App.css'
import { ChooseForm, Game, HomePage } from './components/exports'
import {Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'


function App() {
  console.log(useSelector((state: RootState) => state))
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/choose-form' element={<ChooseForm />} />
      <Route path='/in-game' element={<Game />}  />
    </Routes>
  )
}

export default App
