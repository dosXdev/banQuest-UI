import React from 'react'
import './App.css'
import Home from './Components/Home/Home'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'
import ListYourBusiness from './Components/ListYourBusiness/ListYourBusiness'
import NavBar from './Components/NavBar/Navbar'

const App = () => {
  return (
      <div>
      <NavBar/>
      <ListYourBusiness/>
      <Home/>
      <SignIn/>
      <SignUp/>
      </div>
  )
}

export default App
