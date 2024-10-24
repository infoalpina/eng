import React, { useState, useEffect } from 'react'
import { ModalFilter, Table, TableFilter } from '../index'
import { CRow, CCol, CButton } from '@coreui/react'
import useCreateFCA from '../../hooks/UseCreateFCA'
import PropTypes from 'prop-types'
import { useUser } from 'src/userContext'

const ProcurarTorres = ({ ValuesBool }) => {
  const Labels = ['ID', 'Nome da torre']
  const [Programa, setPrograma] = useState('FCA')
  const [Programa2, setPrograma2] = useState('FCA')
  const [id, setID] = useState('')
  const [nde, setnde] = useState(0)
  const [nate, setnate] = useState(10)
  const [nomeDaTorre, setNomeDaTorre] = useState('')
  const [data, setData] = useState([])
  const [tabela, setTabela] = useState(null)
  const filter = [id, nomeDaTorre]
  const setfilter = [setID, setNomeDaTorre]
  const { encaminharPara, enviarDadosParaBackend } = useCreateFCA()
  const { dominio } = useUser()

  const handleFilterValues = async (event) => {
    event.preventDefault()

    let sistema = Programa === 'FCA' ? 'calculoFCA' : 'Selecao'

    const values = {
      id: id,
      nomeDaTorre: nomeDaTorre,
      nde: nde,
      nate: nate,
    }

    const rota = `${dominio}backengenharia/${sistema}/filterTowers/`
    try {
      const data = await enviarDadosParaBackend(rota, values)
      setData(data.data)
    } catch (error) {
      console.error('Erro ao enviar dados para o backend:', error)
    }

    encaminharPara(`../Gerenciamentodetorres/false`)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = `?nde=${nde}&nate=${nate}`
        let rota

        if (Programa === 'FCA') {
          rota = `${dominio}backengenharia/calculoFCA/ReadMain/${queryParams}`
        } else {
          rota = `${dominio}backengenharia/Selecao/Read/${queryParams}`
        }

        const response = await fetch(rota)

        if (!response.ok) {
          const errorMessage = await response.text()
          throw new Error(`Solicitação falhou: ${errorMessage}`)
        }

        const data = await response.json()
        const dataArray = Object.values(data)
        setData(dataArray)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    fetchData()
  }, [nde, nate, Programa])

  useEffect(() => {
    if (ValuesBool) {
      setTabela(<Table Programa={Programa} Dados={data} Name={'Nome'} />)
    } else {
      setTabela(<TableFilter Programa={Programa} Dados={data} Name={'Nome'} />)
    }
  }, [data])

  const incrementar = () => {
    setnde((prevNde) => prevNde + 10)
    setnate((prevNate) => prevNate + 10)
  }

  const decrementar = () => {
    if (nde >= 10) {
      setnde((prevNde) => prevNde - 10)
      setnate((prevNate) => prevNate - 10)
    }
  }

  const TrocarSistemaToFCA = () => {
    setPrograma('FCA')
  }

  const TrocarSistemaToSelecao = () => {
    setPrograma('Selecao')
  }

  return (
    <form className="d-flex justify-content-around align-items-center w-100 mt-5 p-5">
      <CRow className="w-100 justify-content-around align-items-center">
        <CRow className="w-100 mb-3">
          <CCol xs="4" className="d-flex justify-content-center">
            <CButton color="primary" className="mx-3" onClick={TrocarSistemaToFCA}>
              FCA
            </CButton>
          </CCol>
          <CCol xs="4" className="d-flex justify-content-center"></CCol>
          <CCol xs="4" className="d-flex justify-content-center">
            <CButton color="primary" className="mx-3" onClick={TrocarSistemaToSelecao}>
              Seleção
            </CButton>
          </CCol>
        </CRow>
        <CRow className="w-100">
          <CCol xs="4" className="d-flex justify-content-center">
            <CButton color="primary" className="mr-1" onClick={decrementar}>
              Anterior
            </CButton>
          </CCol>
          <CCol xs="4" className="d-flex justify-content-center">
            <ModalFilter
              Dados={Labels}
              filter={filter}
              setfilter={setfilter}
              callback={handleFilterValues}
              Programa2={Programa}
              setPrograma2={setPrograma}
            />
          </CCol>
          <CCol xs="4" className="d-flex justify-content-center">
            <CButton color="primary" onClick={incrementar}>
              Próximo
            </CButton>
          </CCol>
        </CRow>
        <CRow className="w-100 justify-content-center mt-3"> {tabela} </CRow>
      </CRow>
    </form>
  )
}

ProcurarTorres.propTypes = {
  ValuesBool: PropTypes.bool.isRequired,
}

export default ProcurarTorres
