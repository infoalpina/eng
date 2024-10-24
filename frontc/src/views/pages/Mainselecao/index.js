import React, { useEffect } from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import { ProjetoSelecao, Steppers2passos } from 'src/components'
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
          titulo={'Seleção'}
          cabecalhoSecundario={
            <Steppers2passos
              rota1={'/Selecao'}
              rota2={'/Resultadosselecao'}
              ativo1={true}
              ativo2={false}
            />
          }
          conteudoPrimario={<ProjetoSelecao />}
          userType={user}
        />
      </>
    </div>
  )
}

export default Mainprojeto
