import React, { useEffect } from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import { Componentesdosmodelos, Steppers3passos, Modal } from 'src/components'
import { useUser } from 'src/userContext'
import { useParams } from 'react-router-dom'
import useEncaminhar from '../../../hooks/functions/useEncaminhar'
import UseEnviarRoutes from '../../../hooks/UseEnviarRoutes'
import { useCookies } from 'react-cookie'

const Vizualizacaodetorres3 = () => {
  const { checkUserExpiration } = UseEnviarRoutes()
  const encaminhar = useEncaminhar()
  const { torreData } = useParams()
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
  if (!torreData) {
    // Lidar com a situação em que dados é nulo
    return <p>Dados da torre não disponíveis</p>
  }
  return (
    <div>
      <>
        <DefaultLayout
          titulo={'Vizualizar torres'}
          cabecalhoSecundario={
            <Steppers3passos
              rota1={`/vizualizartorres1/${encodeURIComponent(
                JSON.stringify(parseInt(torreData)),
              )}`}
              rota2={`/vizualizartorres2/${encodeURIComponent(
                JSON.stringify(parseInt(torreData)),
              )}`}
              rota3={`/vizualizartorres3/${encodeURIComponent(
                JSON.stringify(parseInt(torreData)),
              )}`}
              ativo1={false}
              ativo2={false}
              ativo3={true}
              userType={user}
            />
          }
          conteudoPrimario={<Componentesdosmodelos dados={torreData} desativado={true} />}
        />
      </>
    </div>
  )
}

export default Vizualizacaodetorres3