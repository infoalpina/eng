import React, { useEffect } from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import { PilaretesCamEnchimento, Steppers3passos } from 'src/components'
import { useUser } from 'src/userContext'
import useEncaminhar from '../../../hooks/functions/useEncaminhar'
import UseEnviarRoutes from '../../../hooks/UseEnviarRoutes'
import { useCookies } from 'react-cookie'

const Gerenciamentodetorres2 = () => {
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

  if (user.length > 0) {
    return (
      <div>
        <>
          <DefaultLayout
            titulo={'Criar torres'}
            cabecalhoSecundario={
              <Steppers3passos
                rota1={'/CriarTorresSelecao1'}
                rota2={'/CriarTorresSelecao2'}
                rota3={'/CriarTorresSelecao3'}
                ativo1={false}
                ativo2={true}
                ativo3={false}
                userType={user}
              />
            }
            conteudoPrimario={<PilaretesCamEnchimento desativado={false} />}
          />
        </>
      </div>
    )
  }
}
export default Gerenciamentodetorres2
