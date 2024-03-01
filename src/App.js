import React from 'react'
import './App.css'
import Home from './Components/Home/Home'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'
import ListYourBusiness from './Components/ListYourBusiness/ListYourBusiness'
import NavBar from './Components/NavBar/Navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  return (
    <>
    <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/SignUp" element={ <SignUp /> }/>
        </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
