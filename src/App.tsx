import './App.css'
import { ChooseForm, Game, HomePage } from './components/exports'
import {Routes, Route, Link } from 'react-router-dom'


function App() {
  
  return (
    <>

    <Link to='/'>Home</Link>
    <Link to='/choose-form'>Choose form</Link>
    <Link to='/in-game'>Game</Link>
    
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/choose-form' element={<ChooseForm />} />
      <Route path='/in-game' element={<Game />}  />
    </Routes>

    </>
  )
}

export default App
