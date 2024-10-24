import React, { Component, Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import './scss/style.scss'
import UserSpecificRoutes from './routes/UserSpecifcRoutes'
import { UserProvider } from './userContext'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

class App extends Component {
  render() {
    return (
      <UserProvider>
        <UserSpecificRoutes />
      </UserProvider>
    )
  }
}

export default App
