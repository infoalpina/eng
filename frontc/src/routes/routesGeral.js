import React, { Component, Suspense } from 'react'
import { HashRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from '../userContext'

const Loginpage = React.lazy(() => import('../views/pages/Loginpage'))
const FCA = React.lazy(() => import('../views/pages/MainFCA'))
const ResultadosFCA = React.lazy(() => import('../views/pages/resultadoFCA'))
const Selecao = React.lazy(() => import('../views/pages/Mainselecao'))
const Resultadosselecao = React.lazy(() => import('../views/pages/ResultadosSelecao'))
const Main = React.lazy(() => import('../views/pages/Main'))
const PrintFCA = React.lazy(() => import('../layout/printFCA'))
const Ventilador = React.lazy(() => import('../layout/printVentiladores'))
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

let routesGeral = [
  { path: '/', name: 'Login Page', element: <Loginpage /> },
  { path: '/Main', name: 'Main', element: <Main /> },
  { path: '/FCA', name: 'FCA', element: <FCA /> },
  { path: '/Selecao', name: 'Selecao', element: <Selecao /> },
  { path: '/ResultadosFCA', name: 'ResultadosFCA', element: <ResultadosFCA /> },
  { path: '/printFCA', name: 'printFCA', element: <PrintFCA /> },
  { path: '/Resultadosselecao', name: 'Resultadosselecao', element: <Resultadosselecao /> },
  { path: '/printVentiladores', name: 'printVentiladores', element: <Ventilador /> },
]

const GeralRoutes = () => {
  return (
    <UserProvider>
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            {routesGeral.map((route) => (
              <Route key={route.path} path={route.path} name={route.name} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </HashRouter>
    </UserProvider>
  )
}

export default GeralRoutes
