import React, { useEffect } from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import { ProjetoFCA, Steppers3passos } from 'src/components'
import { useUser } from 'src/userContext'
import useEncaminhar from '../../../hooks/functions/useEncaminhar'
import UseEnviarRoutes from '../../../hooks/UseEnviarRoutes'
import { useCookies } from 'react-cookie'

const Mainprojeto = () => {
  const { checkUserExpiration } = UseEnviarRoutes()
  const encaminhar = useEncaminhar()

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
          titulo={'FCA'}
          cabecalhoSecundario={
            <Steppers3passos
              rota1={'/FCA'}
              rota2={'/ResultadosFCA'}
              rota3={'/ResultadosFCAVentiladores'}
              ativo1={true}
              ativo2={false}
              ativo3={false}
            />
          }
          conteudoPrimario={<ProjetoFCA />}
          userType={user}
        />
      </>
    </div>
  )
}

export default Mainprojeto
