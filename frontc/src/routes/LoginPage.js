import React, { Component, Suspense } from 'react'
import { HashRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from '../userContext'

const Loginpage = React.lazy(() => import('../views/pages/Loginpage'))

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

let ListloginPage = [{ path: '/', name: 'Login Page', element: <Loginpage /> }]

const LoginPage = () => {
  return (
    <UserProvider>
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            {ListloginPage.map((route) => (
              <Route key={route.path} path={route.path} name={route.name} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </HashRouter>
    </UserProvider>
  )
}

export default LoginPage
