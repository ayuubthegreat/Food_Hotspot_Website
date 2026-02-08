import { useState } from 'react'
import './App.css'
import { STATIC_INFO } from '../Website/STATIC_INFO'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from './pages/home';
import { Footer, Navbar } from './components/navbar_footer';
import { Form_Page } from './pages/form_page';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Router>
        <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/food" element={<Form_Page />} />
           <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
