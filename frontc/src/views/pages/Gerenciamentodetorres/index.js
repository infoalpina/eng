import React, { useEffect } from 'react'
import { ProcurarTorres } from 'src/components/index'
import DefaultLayout from 'src/layout/DefaultLayout'
import { useUser } from 'src/userContext'
import { useParams } from 'react-router-dom'
import useEncaminhar from '../../../hooks/functions/useEncaminhar'
import UseEnviarRoutes from '../../../hooks/UseEnviarRoutes'
import { useCookies } from 'react-cookie'

const VerTodosOsUsuários = () => {
  const { checkUserExpiration } = UseEnviarRoutes()
  const { parametro } = useParams()
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
  let table
  if (parametro === 'false' || parametro === 'False') {
    table = false
  } else {
    table = true
  }
  return (
    <DefaultLayout
      titulo="Gerenciamento"
      conteudoPrimario={<ProcurarTorres ValuesBool={table} />}
      userType={user}
    />
  )
}

export default VerTodosOsUsuários
