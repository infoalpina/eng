import React, { Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from '../userContext'

// Lazy loading of components
const Loginpage = React.lazy(() => import('../views/pages/Loginpage'))
const Gerenciamentodetorres = React.lazy(() => import('../views/pages/Gerenciamentodetorres'))
const CriarTorresSelecao1 = React.lazy(() => import('../views/pages/CriarTorresSelecao1'))
const CriarTorresSelecao2 = React.lazy(() => import('../views/pages/CriarTorresSelecao2'))
const CriarTorresSelecao3 = React.lazy(() => import('../views/pages/CriarTorresSelecao3'))
const CriarTorresFCA1 = React.lazy(() => import('../views/pages/CriarTorresFCA1'))
const TorreCadastradaComSucesso = React.lazy(() =>
  import('../views/pages/TorreCadastradaComSucesso'),
)
const TorreAtualizadaComSucesso = React.lazy(() =>
  import('../views/pages/TorreAtualizadaComSucesso'),
)
const TorreDeletadaComSucesso = React.lazy(() => import('../views/pages/TorreDeletadaComSucesso'))
const Ediatrtorres1 = React.lazy(() => import('../views/pages/Editartorres1'))
const Ediatrtorres2 = React.lazy(() => import('../views/pages/Editartorres2'))
const Ediatrtorres3 = React.lazy(() => import('../views/pages/Editartorres3'))
const Vizualizartorres1 = React.lazy(() => import('../views/pages/Vizualizartorres1'))
const Vizualizartorres2 = React.lazy(() => import('../views/pages/Vizualizartorres2'))
const Vizualizartorres3 = React.lazy(() => import('../views/pages/Vizualizartorres3'))
const VizualizartorresFCA = React.lazy(() => import('../views/pages/VizualizartorresFCA'))
const EditartorresFCA = React.lazy(() => import('../views/pages/EditartorresFCA'))
const FCA = React.lazy(() => import('../views/pages/MainFCA'))
const ResultadosFCA = React.lazy(() => import('../views/pages/resultadoFCA'))
const ResultadosFCAVentiladores = React.lazy(() =>
  import('../views/pages/ResultadosFCAsVentiladores'),
)
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

let routesEngenharia = [
  { path: '/', name: 'Login Page', element: <Loginpage /> },
  { path: '/Main', name: 'Main', element: <Main /> },
  { path: '/FCA', name: 'FCA', element: <FCA /> },
  { path: '/Selecao', name: 'Selecao', element: <Selecao /> },
  { path: '/ResultadosFCA', name: 'ResultadosFCA', element: <ResultadosFCA /> },
  { path: '/printFCA', name: 'printFCA', element: <PrintFCA /> },
  { path: '/printVentiladores', name: 'printVentiladores', element: <Ventilador /> },
  {
    path: '/ResultadosFCAVentiladores',
    name: 'ResultadosFCA',
    element: <ResultadosFCAVentiladores />,
  },
  { path: '/Resultadosselecao', name: 'Resultadosselecao', element: <Resultadosselecao /> },
  {
    path: '/Gerenciamentodetorres/:parametro',
    name: 'Gerenciamentodetorres',
    element: <Gerenciamentodetorres />,
  },
  { path: '/CriarTorresSelecao1', name: 'CriarTorres1', element: <CriarTorresSelecao1 /> },
  { path: '/CriarTorresSelecao2', name: 'CriarTorres2', element: <CriarTorresSelecao2 /> },
  { path: '/CriarTorresSelecao3', name: 'CriarTorres3', element: <CriarTorresSelecao3 /> },
  { path: '/CriarTorresFCA1', name: 'CriarTorres1', element: <CriarTorresFCA1 /> },
  {
    path: '/TorreCadastradaComSucesso/:torreData',
    name: 'TorreCadastradaComSucesso',
    element: <TorreCadastradaComSucesso />,
  },
  {
    path: '/TorreAtualizadaComSucesso/:torreData',
    name: 'TorreAtualizadaComSucesso',
    element: <TorreAtualizadaComSucesso />,
  },
  {
    path: '/TorreDeletadaComSucesso/:torreData',
    name: 'TorreDeletadaComSucesso',
    element: <TorreDeletadaComSucesso />,
  },
  {
    path: '/vizualizartorres1/:torreData',
    name: 'Visualizar Torres 1',
    element: <Vizualizartorres1 />,
  },
  {
    path: '/vizualizartorres2/:torreData',
    name: 'Visualizar Torres 2',
    element: <Vizualizartorres2 />,
  },
  {
    path: '/vizualizartorres3/:torreData',
    name: 'Visualizar Torres 3',
    element: <Vizualizartorres3 />,
  },
  { path: '/editartorres1/:torreData', name: 'Editar torres1', element: <Ediatrtorres1 /> },
  { path: '/editartorres2/:torreData', name: 'Editar torres2', element: <Ediatrtorres2 /> },
  { path: '/editartorres3/:torreData', name: 'Editar torres3', element: <Ediatrtorres3 /> },
  {
    path: '/vizualizartorresFCA/:torreData',
    name: 'Visualizar Torres FCA',
    element: <VizualizartorresFCA />,
  },
  { path: '/editartorresFCA/:torreData', name: 'Editar Torres FCA', element: <EditartorresFCA /> },
]

const EngenhariaRoutes = () => {
  return (
    <UserProvider>
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            {routesEngenharia.map((route) => (
              <Route key={route.path} path={route.path} name={route.name} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </HashRouter>
    </UserProvider>
  )
}

export default EngenhariaRoutes
