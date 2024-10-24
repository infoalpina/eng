import React, { useEffect } from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import { ResultadosFCAVentiladores, Steppers3passos } from 'src/components'
import { useUser } from 'src/userContext'
import useEncaminhar from '../../../hooks/functions/useEncaminhar'
import UseEnviarRoutes from '../../../hooks/UseEnviarRoutes'
import { useCookies } from 'react-cookie'
import useCustomNavigate from '../../../hooks/UseCustomNavigate'

const Resultados = () => {
  const { checkUserExpiration } = UseEnviarRoutes()
  const encaminhar = useEncaminhar()
  const { validarFCA, encaminharPara, enviarDadosParaBackend } = useCustomNavigate()

  const [cookies] = useCookies(['name', 'user', 'timeOut'])
  const name = cookies.name
  const user = cookies.user
  const timeOut = cookies.timeOut

  useEffect(() => {
    checkUserExpiration()
    if (!user || !name || !timeOut) {
      encaminhar('/')
    }
  }, [user, name, timeOut])

  return (
    <div>
      <>
        <DefaultLayout
          titulo={'Ventiladores'}
          cabecalhoSecundario={
            <Steppers3passos
              rota1={'/FCA'}
              rota2={'/ResultadosFCA'}
              rota3={'/ResultadosFCAVentiladores'}
              ativo1={false}
              ativo2={false}
              ativo3={true}
            />
          }
          conteudoPrimario={<ResultadosFCAVentiladores />}
          userType={user}
        />
      </>
    </div>
  )
}
export default Resultados
