import React from 'react'
import './App.css'
import GlobalStyle from './config/globalStyle'
import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/signin/SignIn'
import Feed from './pages/feed/Feed'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route exact path='/' element={<SignIn />} />
        <Route exact path='/feed' element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App
