import React, { useEffect } from 'react'
import useEncaminhar from '../../../hooks/functions/useEncaminhar'
import DefaultLayout from '../../../layout/DefaultLayout'
import { DadosPrincipaisSelecao, Steppers3passos } from 'src/components'
import { useUser } from 'src/userContext'
import UseEnviarRoutes from '../../../hooks/UseEnviarRoutes'
import { useCookies } from 'react-cookie'

const Gerenciamentodetorres1 = () => {
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
          titulo={'Cadastro de Torres Seleção'}
          cabecalhoSecundario={
            <Steppers3passos
              rota1={'/CriarTorresSelecao1'}
              rota2={'/CriarTorresSelecao2'}
              rota3={'/CriarTorresSelecao3'}
              ativo1={true}
              ativo2={false}
              ativo3={false}
              userType={user}
            />
          }
          conteudoPrimario={<DadosPrincipaisSelecao dis={false} />}
        />
      </>
    </div>
  )
}

export default Gerenciamentodetorres1
