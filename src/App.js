import React from 'react'
import './App.css'
import GlobalStyle from './config/globalStyle'
import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/signin/SignIn'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route exact path='/' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App
