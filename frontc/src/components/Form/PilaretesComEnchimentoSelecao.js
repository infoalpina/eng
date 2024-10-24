import React, { useState, useEffect } from 'react'
import { Dropdown, Input } from '../index'
import { CRow } from '@coreui/react'
import PropTypes from 'prop-types'
import { useUser } from 'src/userContext'

const DadosPrincipais = ({ desativado, dados }) => {
  const {
    dominio,
    TipoDeAlturaDePilarete,
    setTipoDeAlturaDePilarete,
    A19C4W202Lados,
    setA19C4W202Lados,
    A19C4W203Lados,
    setA19C4W203Lados,
    A19C4W204Lados,
    setA19C4W204Lados,
    A19C5W202Lados,
    setA19C5W202Lados,
    A19C5W203Lados,
    setA19C5W203Lados,
    A19C5W204Lados,
    setA19C5W204Lados,
    TipoDeTorres,
    setTipoDeTorres,
    A19NMax,
    setA19NMax,
    A19NMin,
    setA19NMin,
    SGW20NMax,
    setSGW20NMax,
    SGW20NMin,
    setSGW20NMin,
    RTNMax,
    setRTNMax,
    RTNMin,
    setRTNMin,
    SGCNMax,
    setSGCNMax,
    SGCNMin,
    setSGCNMin,
  } = useUser()
  const [dadosRec, setDadosRec] = useState('')

  useEffect(() => {
    if (dados) {
      setDadosRec(dados)
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rota = `${dominio}backengenharia/Selecao/ReadAll/` // Certifique-se de que a URL está completa
        const response = await fetch(rota)

        if (!response.ok) {
          throw new Error(`Erro HTTP! status: ${response.status}`)
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }
  }, [setDadosRec, dadosRec])

  return (
    <form
      className="border rounded m-3 p-3 w-100"
      style={{ border: '1px solid black', borderRadius: '10px' }}
    >
      <CRow
        className="border rounded m-3 p-3"
        style={{ border: '1px solid black', borderRadius: '10px' }}
      >
        <CRow>
          <p>Pilaretes</p>
        </CRow>
        <CRow>
          <Dropdown
            titulo={'Tipo de altura de pilarete'}
            setValor={setTipoDeAlturaDePilarete}
            etiqueta={TipoDeAlturaDePilarete}
            desativado={false}
            valores={[
              'Altura do pilarete adicional (m) para torre com A19, com até /4-W20 e /4-SG',
              'Altura do pilarete Adicional (m) com /5-W20 e /5-SG',
            ]}
            onChange={(primeirovalor) => {
              console.log('primeirovalor ', primeirovalor)
              if (
                primeirovalor ===
                'Altura do pilarete adicional (m) para torre com A19, com até /4-W20 e /4-SG'
              ) {
                console.log('teste1')
                setA19C4W202Lados([
                  'Altura do pilarete adicional (m) para torre com A19, com até /4-W20 e /4-SG',
                  ...A19C4W202Lados.slice(1),
                ])
                setA19C4W203Lados([
                  'Altura do pilarete adicional (m) para torre com A19, com até /4-W20 e /4-SG',
                  ...A19C4W203Lados.slice(1),
                ])
                setA19C4W204Lados([
                  'Altura do pilarete adicional (m) para torre com A19, com até /4-W20 e /4-SG',
                  ...A19C4W204Lados.slice(1),
                ])
              }
              if (primeirovalor === 'Altura do pilarete Adicional (m) com /5-W20 e /5-SG') {
                console.log('teste2')
                setA19C5W202Lados([
                  'Altura do pilarete Adicional (m) com /5-W20 e /5-SG',
                  ...A19C5W202Lados.slice(1),
                ])
                setA19C5W203Lados([
                  'Altura do pilarete Adicional (m) com /5-W20 e /5-SG',
                  ...A19C5W203Lados.slice(1),
                ])
                setA19C5W204Lados([
                  'Altura do pilarete Adicional (m) com /5-W20 e /5-SG',
                  ...A19C5W204Lados.slice(1),
                ])
              }
            }}
          />
        </CRow>
        <CRow>
          <Input
            tipo={'number'}
            input={
              TipoDeAlturaDePilarete ===
              'Altura do pilarete adicional (m) para torre com A19, com até /4-W20 e /4-SG'
                ? A19C4W202Lados[1]
                : TipoDeAlturaDePilarete === 'Altura do pilarete Adicional (m) com /5-W20 e /5-SG'
                ? A19C5W202Lados[1]
                : null
            }
            etiqueta={'Ar por 2 lados'}
            desativado={desativado}
            onChange={(valor) => {
              if (
                TipoDeAlturaDePilarete ===
                'Altura do pilarete adicional (m) para torre com A19, com até /4-W20 e /4-SG'
              ) {
                setA19C4W202Lados([
                  'Altura do pilarete adicional (m) para torre com A19, com até /4-W20 e /4-SG',
                  valor,
                ])
              } else if (
                TipoDeAlturaDePilarete === 'Altura do pilarete Adicional (m) com /5-W20 e /5-SG'
              ) {
                setA19C5W202Lados(['Altura do pilarete Adicional (m) com /5-W20 e /5-SG', valor])
              }
            }}
          />
        </CRow>
        <CRow>
          <Input
            tipo={'number'}
            input={
              TipoDeAlturaDePilarete ===
              'Altura do pilarete adicional (m) para torre com A19, com até /4-W20 e /4-SG'
                ? A19C4W203Lados[1]
                : TipoDeAlturaDePilarete === 'Altura do pilarete Adicional (m) com /5-W20 e /5-SG'
                ? A19C5W203Lados[1]
                : null
            }
            etiqueta={'Ar por 3 lados'}
            desativado={desativado}
            onChange={(valor) => {
              if (
                TipoDeAlturaDePilarete ===
                'Altura do pilarete adicional (m) para torre com A19, com até /4-W20 e /4-SG'
              ) {
                setA19C4W203Lados([
                  'Altura do pilarete adicional (m) para torre com A19, com até /4-W20 e /4-SG',
                  valor,
                ])
              } else if (
                TipoDeAlturaDePilarete === 'Altura do pilarete Adicional (m) com /5-W20 e /5-SG'
              ) {
                setA19C5W203Lados(['Altura do pilarete Adicional (m) com /5-W20 e /5-SG', valor])
              }
            }}
          />
        </CRow>
        <CRow>
          <Input
            tipo={'number'}
            input={
              TipoDeAlturaDePilarete ===
              'Altura do pilarete adicional (m) para torre com A19, com até /4-W20 e /4-SG'
                ? A19C4W204Lados[1]
                : TipoDeAlturaDePilarete === 'Altura do pilarete Adicional (m) com /5-W20 e /5-SG'
                ? A19C5W204Lados[1]
                : null
            }
            etiqueta={'Ar por 4 lados'}
            desativado={desativado}
            onChange={(valor) => {
              if (
                TipoDeAlturaDePilarete ===
                'Altura do pilarete adicional (m) para torre com A19, com até /4-W20 e /4-SG'
              ) {
                setA19C4W204Lados([
                  'Altura do pilarete adicional (m) para torre com A19, com até /4-W20 e /4-SG',
                  valor,
                ])
              } else if (
                TipoDeAlturaDePilarete === 'Altura do pilarete Adicional (m) com /5-W20 e /5-SG'
              ) {
                setA19C5W204Lados(['Altura do pilarete Adicional (m) com /5-W20 e /5-SG', valor])
              }
            }}
          />
        </CRow>
      </CRow>
      <CRow
        className="border rounded m-3 p-3"
        style={{ border: '1px solid black', borderRadius: '10px' }}
      >
        <CRow>
          <p>Camadas de enchimento</p>
        </CRow>
        <CRow>
          <Dropdown
            titulo={'Tipo de torres'}
            setValor={setTipoDeTorres}
            etiqueta={TipoDeTorres}
            desativado={false}
            valores={['Torres com A19', 'Torres com SG e W20', 'Torres com RT', 'Torres com SGC']}
            onChange={(primeirovalor) => {
              if (primeirovalor === 'Torres com A19') {
                setA19NMax(['Torres com A19', ...A19NMax.slice(1)])
                setA19NMin(['Torres com A19', ...A19NMin.slice(1)])
              }
              if (primeirovalor === 'Torres com SG e W20') {
                setSGW20NMax(['Torres com SG e W20', ...SGW20NMax.slice(1)])
                setSGW20NMin(['Torres com SG e W20', ...SGW20NMin.slice(1)])
              }
              if (primeirovalor === 'Torres com RT') {
                setRTNMax(['Torres com RT', ...RTNMax.slice(1)])
                setRTNMin(['Torres com RT', ...RTNMin.slice(1)])
              }
              if (primeirovalor === 'Torres com SGC') {
                setSGCNMax(['Torres com SGC', ...SGCNMax.slice(1)])
                setSGCNMin(['Torres com SGC', ...SGCNMin.slice(1)])
              }
            }}
          />
        </CRow>
        <CRow>
          <Input
            tipo={'number'}
            input={
              TipoDeTorres === 'Torres com A19'
                ? A19NMax[1]
                : TipoDeTorres === 'Torres com SG e W20'
                ? SGW20NMax[1]
                : TipoDeTorres === 'Torres com RT'
                ? RTNMax[1]
                : TipoDeTorres === 'Torres com SGC'
                ? SGCNMax[1]
                : null
            }
            etiqueta={'Número máximo'}
            desativado={desativado}
            onChange={(valor) => {
              if (TipoDeTorres === 'Torres com A19') {
                setA19NMax(['Torres com A19', valor])
              } else if (TipoDeTorres === 'Torres com SG e W20') {
                setSGW20NMax(['Torres com SG e W20', valor])
              } else if (TipoDeTorres === 'Torres com RT') {
                setRTNMax(['Torres com RT', valor])
              } else if (TipoDeTorres === 'Torres com SGC') {
                setSGCNMax(['Torres com SGC', valor])
              }
            }}
          />
        </CRow>
        <CRow>
          <Input
            tipo={'number'}
            input={
              TipoDeTorres === 'Torres com A19'
                ? A19NMin[1]
                : TipoDeTorres === 'Torres com SG e W20'
                ? SGW20NMin[1]
                : TipoDeTorres === 'Torres com RT'
                ? RTNMin[1]
                : TipoDeTorres === 'Torres com SGC'
                ? SGCNMin[1]
                : null
            }
            etiqueta={'Número mínimo'}
            desativado={desativado}
            onChange={(valor) => {
              if (TipoDeTorres === 'Torres com A19') {
                setA19NMin(['Torres com A19', valor])
              } else if (TipoDeTorres === 'Torres com SG e W20') {
                setSGW20NMin(['Torres com SG e W20', valor])
              } else if (TipoDeTorres === 'Torres com RT') {
                setRTNMin(['Torres com RT', valor])
              } else if (TipoDeTorres === 'Torres com SGC') {
                setSGCNMin(['Torres com SGC', valor])
              }
            }}
          />
        </CRow>
      </CRow>
    </form>
  )
}

DadosPrincipais.propTypes = {
  desativado: PropTypes.bool.isRequired, // Adicione a propriedade setCampo
  dados: PropTypes.number.isRequired,
}

export default DadosPrincipais
