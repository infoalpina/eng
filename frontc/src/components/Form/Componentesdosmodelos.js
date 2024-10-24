import React, { useState, useEffect } from 'react'
import { Dropdown, Input, Modal } from '../index'
import { CRow, CCol, CAlert } from '@coreui/react'
import PropTypes from 'prop-types'
import { useUser } from 'src/userContext'
import useEncaminhar from '../../hooks/functions/useEncaminhar'

const Componentesdosmodelos = ({ botao1, botao2, desativado, dados, msg = [] }) => {
  const encaminhar = useEncaminhar()
  const {
    dominio,

    //tela 3
    PressaoMaximaDeEntrada,
    setPressaoMaximaDeEntrada,
    TipoDeCuboDeVentilador,
    setTipoDeCuboDeVentilador,
    LarguraDaCelula,
    setLarguraDaCelula,
    ComprimentoDaCelula,
    setComprimentoDaCelula,
    TipoDeEstrutura,
    setTipoDeEstrutura,
    RevestimentoLateral,
    setRevestimentoLateral,
    TipoDeDistribuicao,
    setTipoDeDistribuicao,

    paraTorresComAr,
    setparaTorresComAr,
    paraTorresComAr2SG2l,
    setparaTorresComAr2SG2l,
    paraTorresComAr3SG2l,
    setparaTorresComAr3SG2l,
    paraTorresComAr4SG2l,
    setparaTorresComAr4SG2l,
    paraTorresComAr2SG3l,
    setparaTorresComAr2SG3l,
    paraTorresComAr3SG3l,
    setparaTorresComAr3SG3l,
    paraTorresComAr4SG3l,
    setparaTorresComAr4SG3l,
    paraTorresComAr2SG4l,
    setparaTorresComAr2SG4l,
    paraTorresComAr3SG4l,
    setparaTorresComAr3SG4l,
    paraTorresComAr4SG4l,
    setparaTorresComAr4SG4l,

    Classes,
    setClasses,
    TipoDeVentiladorc1,
    setTipoDeVentiladorc1,
    DescricaoDoMotorEletricoc1,
    setDescricaoDoMotorEletricoc1,
    TipoDePasDoVentladorc1,
    setTipoDePasDoVentladorc1,
    TipoDeTransmissaoc1,
    setTipoDeTransmissaoc1,
    RendimentoDeTransmissaoc1,
    setRendimentoDeTransmissaoc1,
    TipoDeVentiladorc2,
    setTipoDeVentiladorc2,
    DescricaoDoMotorEletricoc2,
    setDescricaoDoMotorEletricoc2,
    TipoDePasDoVentladorc2,
    setTipoDePasDoVentladorc2,
    TipoDeTransmissaoc2,
    setTipoDeTransmissaoc2,
    RendimentoDeTransmissaoc2,
    setRendimentoDeTransmissaoc2,
    Status,
    setStatus,
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
          <Input
            input={PressaoMaximaDeEntrada}
            setinput={setPressaoMaximaDeEntrada}
            etiqueta={'Pressão máxima de entrada'}
            desativado={desativado}
            tipo={'number'}
            step={'1'}
          />
        </CRow>
        <CRow>
          <Input
            input={TipoDeCuboDeVentilador}
            setinput={setTipoDeCuboDeVentilador}
            etiqueta={'Tipo de cubo de ventilador'}
            desativado={desativado}
            tipo={'Text'}
          />
        </CRow>
        <CRow>
          <Input
            input={LarguraDaCelula}
            setinput={setLarguraDaCelula}
            etiqueta={'Largura da célula (mm)'}
            desativado={desativado}
            tipo={'number'}
            step={'1'}
          />
        </CRow>
        <CRow>
          <Input
            input={ComprimentoDaCelula}
            setinput={setComprimentoDaCelula}
            etiqueta={'Comprimento da célula (mm)'}
            desativado={desativado}
            tipo={'number'}
            step={'1'}
          />
        </CRow>
        <CRow>
          <Input
            input={TipoDeEstrutura}
            setinput={setTipoDeEstrutura}
            etiqueta={'Tipo de estrtura'}
            desativado={desativado}
          />
        </CRow>
        <CRow>
          <Input
            input={RevestimentoLateral}
            setinput={setRevestimentoLateral}
            etiqueta={'Revestimento lateral'}
            desativado={desativado}
          />
        </CRow>
        <CRow>
          <Input
            input={TipoDeDistribuicao}
            setinput={setTipoDeDistribuicao}
            etiqueta={'Tipo de distribuição'}
            desativado={desativado}
          />
        </CRow>
      </CRow>
      <CRow
        className="border rounded m-3 p-3 d-flex justify-content-center align-itens-center"
        style={{ border: '1px solid black', borderRadius: '10px' }}
      >
        <CRow>
          <Dropdown
            titulo={'Para torres com ar'}
            etiqueta={paraTorresComAr}
            setValor={setparaTorresComAr}
            desativado={false}
            valores={['por 2 lados', 'por 3 lados', 'por 4 lados']}
            onChange={(primeirovalor) => {
              if (primeirovalor === 'por 2 lados') {
                setparaTorresComAr2SG2l(['por 2 lados', ...paraTorresComAr2SG2l.slice(1)])
                setparaTorresComAr3SG2l(['por 2 lados', ...paraTorresComAr3SG2l.slice(1)])
                setparaTorresComAr4SG2l(['por 2 lados', ...paraTorresComAr4SG2l.slice(1)])
              }
              if (primeirovalor === 'por 3 lados') {
                setparaTorresComAr2SG3l(['por 3 lados', ...paraTorresComAr2SG3l.slice(1)])
                setparaTorresComAr3SG3l(['por 3 lados', ...paraTorresComAr3SG3l.slice(1)])
                setparaTorresComAr4SG3l(['por 3 lados', ...paraTorresComAr4SG3l.slice(1)])
              }
              if (primeirovalor === 'por 4 lados') {
                console.log('teste2')
                setparaTorresComAr2SG4l(['por 4 lados', ...paraTorresComAr2SG4l.slice(1)])
                setparaTorresComAr3SG4l(['por 4 lados', ...paraTorresComAr3SG4l.slice(1)])
                setparaTorresComAr4SG4l(['por 4 lados', ...paraTorresComAr4SG4l.slice(1)])
              }
            }}
          />
        </CRow>
        <CRow>
          <Input
            tipo={'number'}
            input={
              paraTorresComAr === 'por 2 lados'
                ? paraTorresComAr2SG2l[1]
                : paraTorresComAr === 'por 3 lados'
                ? paraTorresComAr2SG3l[1]
                : paraTorresComAr === 'por 4 lados'
                ? paraTorresComAr2SG4l[1]
                : null
            }
            etiqueta={'2-SG(W20), /2 ou /3-A19'}
            desativado={desativado}
            onChange={(valor) => {
              if (paraTorresComAr === 'por 2 lados') {
                setparaTorresComAr2SG2l(['por 2 lados', valor])
              } else if (paraTorresComAr === 'por 3 lados') {
                setparaTorresComAr2SG3l(['por 3 lados', valor])
              } else if (paraTorresComAr === 'por 4 lados') {
                setparaTorresComAr2SG4l(['por 4 lados', valor])
              }
            }}
          />
        </CRow>
        <CRow>
          <Input
            tipo={'number'}
            input={
              paraTorresComAr === 'por 2 lados'
                ? paraTorresComAr3SG2l[1]
                : paraTorresComAr === 'por 3 lados'
                ? paraTorresComAr3SG3l[1]
                : paraTorresComAr === 'por 4 lados'
                ? paraTorresComAr3SG4l[1]
                : null
            }
            etiqueta={'3-SG(W20), /4-A19'}
            desativado={desativado}
            onChange={(valor) => {
              if (paraTorresComAr === 'por 2 lados') {
                setparaTorresComAr3SG2l(['por 2 lados', valor])
              } else if (paraTorresComAr === 'por 3 lados') {
                setparaTorresComAr3SG3l(['por 3 lados', valor])
              } else if (paraTorresComAr === 'por 4 lados') {
                setparaTorresComAr3SG4l(['por 4 lados', valor])
              }
            }}
          />
        </CRow>
        <CRow>
          <Input
            tipo={'number'}
            input={
              paraTorresComAr === 'por 2 lados'
                ? paraTorresComAr4SG2l[1]
                : paraTorresComAr === 'por 3 lados'
                ? paraTorresComAr4SG3l[1]
                : paraTorresComAr === 'por 4 lados'
                ? paraTorresComAr4SG4l[1]
                : null
            }
            etiqueta={'/4 ou /5 SG(W20) ou /5-A19'}
            desativado={desativado}
            onChange={(valor) => {
              if (paraTorresComAr === 'por 2 lados') {
                setparaTorresComAr4SG2l(['por 2 lados', valor])
              } else if (paraTorresComAr === 'por 3 lados') {
                setparaTorresComAr4SG3l(['por 3 lados', valor])
              } else if (paraTorresComAr === 'por 4 lados') {
                setparaTorresComAr4SG4l(['por 4 lados', valor])
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
          <Dropdown
            titulo={'Classes'}
            etiqueta={Classes}
            setValor={setClasses}
            desativado={false}
            valores={['Classe 1', 'Classe 2']}
            onChange={(primeirovalor) => {
              if (primeirovalor === 'Classe 1') {
                setTipoDeVentiladorc1(['Classe 1', ...TipoDeVentiladorc1.slice(1)])
                setDescricaoDoMotorEletricoc1(['Classe 1', ...DescricaoDoMotorEletricoc1.slice(1)])
                setTipoDePasDoVentladorc1(['Classe 1', ...TipoDePasDoVentladorc1.slice(1)])
                setTipoDeTransmissaoc1(['Classe 1', ...TipoDeTransmissaoc1.slice(1)])
                setRendimentoDeTransmissaoc1(['Classe 1', ...RendimentoDeTransmissaoc1.slice(1)])
              }
              if (primeirovalor === 'Classe 2') {
                setTipoDeVentiladorc2(['Classe 2', ...TipoDeVentiladorc2.slice(1)])
                setDescricaoDoMotorEletricoc2(['Classe 2', ...DescricaoDoMotorEletricoc2.slice(1)])
                setTipoDePasDoVentladorc2(['Classe 2', ...TipoDePasDoVentladorc2.slice(1)])
                setTipoDeTransmissaoc2(['Classe 2', ...TipoDeTransmissaoc2.slice(1)])
                setRendimentoDeTransmissaoc2(['Classe 2', ...RendimentoDeTransmissaoc2.slice(1)])
              }
            }}
          />
        </CRow>
        <CRow>
          <Input
            input={
              Classes === 'Classe 1'
                ? TipoDeVentiladorc1[1]
                : Classes === 'Classe 2'
                ? TipoDeVentiladorc2[1]
                : null
            }
            etiqueta={'Tipo de ventilador'}
            desativado={desativado}
            onChange={(valor) => {
              if (Classes === 'Classe 1') {
                setTipoDeVentiladorc1(['Classe 1', valor])
              } else if (Classes === 'Classe 2') {
                setTipoDeVentiladorc2(['Classe 2', valor])
              }
            }}
          />
        </CRow>
        <CRow>
          <Input
            input={
              Classes === 'Classe 1'
                ? DescricaoDoMotorEletricoc1[1]
                : Classes === 'Classe 2'
                ? DescricaoDoMotorEletricoc2[1]
                : null
            }
            etiqueta={'Descrição do motor elétrico'}
            desativado={desativado}
            onChange={(valor) => {
              if (Classes === 'Classe 1') {
                setDescricaoDoMotorEletricoc1(['Classe 1', valor])
              } else if (Classes === 'Classe 2') {
                setDescricaoDoMotorEletricoc2(['Classe 2', valor])
              }
            }}
          />
        </CRow>
        <CRow>
          <Input
            input={
              Classes === 'Classe 1'
                ? TipoDePasDoVentladorc1[1]
                : Classes === 'Classe 2'
                ? TipoDePasDoVentladorc2[1]
                : null
            }
            etiqueta={'Tipo de pás do ventilador'}
            desativado={desativado}
            onChange={(valor) => {
              if (Classes === 'Classe 1') {
                setTipoDePasDoVentladorc1(['Classe 1', valor])
              } else if (Classes === 'Classe 2') {
                setTipoDePasDoVentladorc2(['Classe 2', valor])
              }
            }}
          />
        </CRow>
        <CRow>
          <Input
            input={
              Classes === 'Classe 1'
                ? TipoDeTransmissaoc1[1]
                : Classes === 'Classe 2'
                ? TipoDeTransmissaoc2[1]
                : null
            }
            etiqueta={'Tipo de transmissão'}
            desativado={desativado}
            onChange={(valor) => {
              if (Classes === 'Classe 1') {
                setTipoDeTransmissaoc1(['Classe 1', valor])
              } else if (Classes === 'Classe 2') {
                setTipoDeTransmissaoc2(['Classe 2', valor])
              }
            }}
          />
        </CRow>
        <CRow>
          <Input
            tipo={'number'}
            input={
              Classes === 'Classe 1'
                ? RendimentoDeTransmissaoc1[1]
                : Classes === 'Classe 2'
                ? RendimentoDeTransmissaoc2[1]
                : null
            }
            etiqueta={'Rendimento de transmissão'}
            desativado={desativado}
            onChange={(valor) => {
              if (Classes === 'Classe 1') {
                setRendimentoDeTransmissaoc1(['Classe 1', valor])
              } else if (Classes === 'Classe 2') {
                setRendimentoDeTransmissaoc2(['Classe 2', valor])
              }
            }}
          />
        </CRow>
        {msg.map((message, index) => (
          <CRow key={index} className="mb-2 mt-4">
            <CCol>
              <CAlert color="danger"> {message} </CAlert>
            </CCol>
          </CRow>
        ))}
        <CRow>
          <CRow>{botao1}</CRow>
          {botao2 ? <CRow> {botao2} </CRow> : null}
        </CRow>
      </CRow>
    </form>
  )
}

Componentesdosmodelos.propTypes = {
  botao1: PropTypes.node.isRequired,
  desativado: PropTypes.bool.isRequired,
  dados: PropTypes.number.isRequired,
  msg: PropTypes.node,
  botao2: PropTypes.node,
}

export default Componentesdosmodelos
