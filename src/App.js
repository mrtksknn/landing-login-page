import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import LoginPage from './Components/LoginPage/LoginPage'
import Register from './Components/Register/Register'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  )
}
