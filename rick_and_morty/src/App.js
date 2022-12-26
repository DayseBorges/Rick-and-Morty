import './App.css'
import { Route, Routes } from 'react-router-dom'
import Form from './components/Form/Form'
import Home from './components/Home/Home.jsx'
import LandingPage from './components/Landing Page/LandingPage'
import Details from './components/Details/Details'


function App () {

  return (
    <div className='App'>
      <Routes>
        <Route exact path = '/' element={<LandingPage />} />
        <Route exact path = '/home' element={<Home />} />
        <Route exact path = '/details/:id' element={<Details />} />
        <Route exact path = '/form' element={<Form />} /> 
      </Routes>
    </div>
  )
}

export default App
