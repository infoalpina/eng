import React, { useEffect } from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import { PilaretesCamEnchimento, Steppers3passos } from 'src/components'
import { useUser } from 'src/userContext'
import useEncaminhar from '../../../hooks/functions/useEncaminhar'
import UseEnviarRoutes from '../../../hooks/UseEnviarRoutes'
import { useCookies } from 'react-cookie'
import { useParams } from 'react-router-dom'

const Edicaodetorres2 = () => {
  const { checkUserExpiration } = UseEnviarRoutes()
  const encaminhar = useEncaminhar()
  const { torreData } = useParams()
  const [cookies] = useCookies(['name', 'user', 'timeOut'])
  const name = cookies.name
  const user = cookies.user
  const timeOut = cookies.timeOut
  const { Status } = useUser()

  console.log('Status', Status)
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
          titulo={'Editar torres'}
          cabecalhoSecundario={
            <Steppers3passos
              rota1={`/editartorres1/${encodeURIComponent(JSON.stringify(parseInt(torreData)))}`}
              rota2={`/editartorres2/${encodeURIComponent(JSON.stringify(parseInt(torreData)))}`}
              rota3={`/editartorres3/${encodeURIComponent(JSON.stringify(parseInt(torreData)))}`}
              ativo1={false}
              ativo2={true}
              ativo3={false}
              userType={user}
            />
          }
          conteudoPrimario={<PilaretesCamEnchimento desativado={!Status} />}
        />
      </>
    </div>
  )
}
export default Edicaodetorres2
