import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home.jsx'
import About from './About.jsx';
import { 
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
function App() {

  return (
		<BrowserRouter>
    <Link to='/'>Home </Link>
    <Link to='/about'>About </Link>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      </Routes>
		</BrowserRouter>    
  )
}

export default App
