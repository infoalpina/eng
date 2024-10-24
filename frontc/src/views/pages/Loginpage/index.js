import React, { useState, useEffect } from 'react'
import LoginLayout from 'src/layout/LoginLayout'
import LoginLayout2 from 'src/layout/LoginLayout2'
import { useUser } from 'src/userContext'
import useEncaminhar from '../../../hooks/functions/useEncaminhar'

const Login = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)
  const { setUser } = useUser() // Use o hook useUser para acessar o setter setUser
  const encaminhar = useEncaminhar()
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <> {isDesktop ? <LoginLayout setUser={setUser} /> : <LoginLayout2 setUser={setUser} />}</>
}

export default Login
