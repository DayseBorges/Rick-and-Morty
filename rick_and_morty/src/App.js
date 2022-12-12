import './App.css'
import NavBar from './components/NavBar.jsx'
import { Route, Routes } from 'react-router-dom'
import Form from './components/Form.jsx'
import Home from './components/Home.jsx'
// import SearchBar from './components/SearchBar'
import SearchHome from './components/SearchHome'




function App (props) {

  return (
    <div className='App' style={{ padding: '25px' }}>
      <NavBar />
      <Routes>
        <Route exact path = '/' element={<Home />} />
        <Route exact path = '/form' element={<Form />} /> 
        <Route exact path = '/search' element={<SearchHome onSearch = {props.onSearch} />} />   
      </Routes>
    </div>
  )
}

export default App
