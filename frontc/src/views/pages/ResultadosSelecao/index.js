import React, { useEffect } from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import { ResultadosProjeto, Steppers2passos } from 'src/components'
import { useUser } from 'src/userContext'
import useEncaminhar from '../../../hooks/functions/useEncaminhar'
import UseEnviarRoutes from '../../../hooks/UseEnviarRoutes'
import { useCookies } from 'react-cookie'

const Resultados = () => {
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
              ativo1={false}
              ativo2={true}
              userType={user}
            />
          }
          conteudoPrimario={<ResultadosProjeto />}
        />
      </>
    </div>
  )
}

export default Resultados
