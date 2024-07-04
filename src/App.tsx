import './App.css'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { ChooseForm, Game } from './components/exports'


function App() {
  const currentForm = useSelector((state: RootState) => state.form.form)
  return (
    <>
      {
        currentForm === ''
          ? <ChooseForm />
          : <Game />
      }
    </>
  )
}

export default App
