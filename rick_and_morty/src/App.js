import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import { Route, Routes } from 'react-router-dom'
import Form from './components/Form.jsx'
import Home from './components/Home/Home.jsx'
// import SearchBar from './components/SearchBar'
import SearchHome from './components/SearchHome'
import LandingPage from './components/Landing Page/LandingPage'




function App (props) {

  return (
    <div className='App'>
      <Routes>
        <Route exact path = '/' element={<LandingPage />} />
        <Route exact path = '/home' element={<Home />} />
        <Route exact path = '/form' element={<Form />} /> 
        <Route exact path = '/home' element={<SearchHome onSearch = {props.onSearch} />} />
      </Routes>
    </div>
  )
}

export default App
