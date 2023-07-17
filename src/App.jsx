import { Routes, Route } from 'react-router-dom'
import './App.css'

import Nav from './components/Nav'
import Home from './components/Home'
function App() {

  return (
    <div className="nc-news">
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Nav />
    </div>
  )
}

export default App
