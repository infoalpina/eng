import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody } from '@coreui/react'
import PropTypes from 'prop-types'
import Editar from '../../assets/images/editar.png'
import Visualizar from '../../assets/images/lupa.png'
import Imagens from '../Imagens'

function TableFilter({ Programa, Dados, Name }) {
  const TorresComponent = () => {
    const [HeightWidght, setHeightWidght] = useState('Desktop')

    return (
      <>
        {Dados[0].map((torre, index) => (
          <CTableRow
            key={index}
            className={`d-flex justify-content-around align-items-center w-100 ${
              Programa === 'FCA'
                ? torre.dadosPrincipais.status
                  ? ''
                  : 'bg-danger'
                : torre.dadosPrincipais.status
                ? ''
                : 'bg-danger'
            }`}
            style={{ fontSize: '1vw' }}
          >
            <CTableHeaderCell
              scope="row"
              className="d-flex justify-content-around align-items-center w-25"
              style={{ fontSize: '1vw' }}
            >
              {torre.dadosPrincipais.id}
            </CTableHeaderCell>
            <CTableHeaderCell
              className="d-flex justify-content-around align-items-center w-25"
              style={{ fontSize: '1vw' }}
            >
              {torre.dadosPrincipais.nome}
            </CTableHeaderCell>
            <CTableHeaderCell className="d-flex justify-content-around align-items-center w-25">
              <Link
                to={
                  Programa === 'FCA'
                    ? `/vizualizartorresFCA/${encodeURIComponent(
                        JSON.stringify(torre.dadosPrincipais.id),
                      )}`
                    : `/vizualizartorres1/${encodeURIComponent(
                        JSON.stringify(torre.dadosPrincipais.id),
                      )}`
                }
              >
                <Imagens src={Visualizar} altura={'1vw'} />
              </Link>
            </CTableHeaderCell>
            <CTableHeaderCell className="d-flex justify-content-around align-items-center w-25">
              <Link
                to={
                  Programa === 'FCA'
                    ? `/editartorresFCA/${encodeURIComponent(
                        JSON.stringify(torre.dadosPrincipais.id),
                      )}`
                    : `/editartorres1/${encodeURIComponent(
                        JSON.stringify(torre.dadosPrincipais.id),
                      )}`
                }
              >
                <Imagens src={Editar} altura={'1vw'} />
              </Link>
            </CTableHeaderCell>
          </CTableRow>
        ))}
      </>
    )
  }

  return (
    <div
      className="table-responsive mt-5"
      style={{
        border: '1px solid black',
        borderRadius: '10px',
        width: '100%',
        maxHeight: '400px',
        overflowY: 'auto',
      }}
    >
      <CTable
        className="table-responsive mt-3"
        style={{ border: '1px solid black', borderRadius: '10px', width: '100%' }}
      >
        <CTableHead>
          <CTableRow className="d-flex justify-content-around align-items-center w-100">
            <CTableHeaderCell
              className="d-flex justify-content-around align-items-center w-25"
              scope="col"
              style={{ fontSize: '1vw' }}
            >
              ID
            </CTableHeaderCell>
            <CTableHeaderCell
              className="d-flex justify-content-around align-items-center w-25"
              scope="col"
              style={{ fontSize: '1vw' }}
            >
              {Name}
            </CTableHeaderCell>
            <CTableHeaderCell
              className="d-flex justify-content-around align-items-center w-25"
              scope="col"
              style={{ fontSize: '1vw' }}
            >
              Visualizar
            </CTableHeaderCell>
            <CTableHeaderCell
              className="d-flex justify-content-around align-items-center w-25"
              scope="col"
              style={{ fontSize: '1vw' }}
            >
              Editar
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody className="d-flex flex-wrap">
          {Dados.length > 0 ? (
            <TorresComponent />
          ) : (
            // Renderiza algo quando Dados não é um objeto válido ou não contém torres
            <p>Nenhum dado de torre disponível</p>
          )}
        </CTableBody>
      </CTable>
    </div>
  )
}

function Table({ Dados, Name, Programa }) {
  console.log('Dados', Dados)
  const TorresComponent = () => {
    const [itsVersionament, setItsVersionament] = useState()
    const [HeightWidght, setHeightWidght] = useState('Desktop')

    useEffect(() => {
      function handleResize() {
        const { innerWidth } = window
        if (innerWidth < 768) {
          setItsVersionament('Celular')
        } else if (innerWidth >= 768 && innerWidth < 992) {
          setItsVersionament('Tablet')
        } else {
          setItsVersionament('Desktop')
        }
      }

      window.addEventListener('resize', handleResize)
      handleResize()

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])

    useEffect(() => {
      if (itsVersionament === 'Desktop') {
        setHeightWidght('1vw')
      } else if (itsVersionament === 'Tablet') {
        setHeightWidght('3vw')
      } else {
        setHeightWidght('5vw')
      }
    }, [itsVersionament])

    return (
      <>
        {Dados[0].map((torre, index) => (
          <CTableRow
            key={index}
            className={`d-flex justify-content-around align-items-center w-100 ${
              Programa === 'FCA'
                ? torre.dadosPrincipais.status
                  ? ''
                  : 'bg-danger'
                : torre.dadosPrincipais.status
                ? ''
                : 'bg-danger'
            }`}
            style={{ fontSize: HeightWidght }}
          >
            <CTableHeaderCell
              scope="row"
              className="d-flex justify-content-around align-items-center w-25"
              style={{ fontSize: HeightWidght }}
            >
              {torre.dadosPrincipais.id}
            </CTableHeaderCell>
            <CTableHeaderCell
              className="d-flex justify-content-around align-items-center w-25"
              style={{ fontSize: HeightWidght }}
            >
              {Programa === 'FCA' ? torre.dadosPrincipais.nome : torre.dadosPrincipais.nome}
            </CTableHeaderCell>
            <CTableHeaderCell className="d-flex justify-content-around align-items-center w-25">
              {Programa === 'FCA' ? (
                <Link
                  to={
                    Programa === 'FCA'
                      ? `/vizualizartorresFCA/${encodeURIComponent(
                          JSON.stringify(torre.dadosPrincipais.id),
                        )}`
                      : `/vizualizartorres1/${encodeURIComponent(
                          JSON.stringify(torre.dadosPrincipais.id),
                        )}`
                  }
                >
                  <Imagens src={Visualizar} altura={HeightWidght} />
                </Link>
              ) : (
                <Link
                  to={
                    Programa === 'FCA'
                      ? `/vizualizartorresFCA/${encodeURIComponent(
                          JSON.stringify(torre.dadosPrincipais.id),
                        )}`
                      : `/vizualizartorres1/${encodeURIComponent(
                          JSON.stringify(torre.dadosPrincipais.id),
                        )}`
                  }
                >
                  <Imagens src={Visualizar} altura={HeightWidght} />
                </Link>
              )}
            </CTableHeaderCell>
            <CTableHeaderCell className="d-flex justify-content-around align-items-center w-25">
              {Programa === 'FCA' ? (
                <Link
                  to={`/editartorresFCA/${encodeURIComponent(
                    JSON.stringify(torre.dadosPrincipais.id),
                  )}`}
                >
                  <Imagens src={Editar} altura={HeightWidght} />
                </Link>
              ) : (
                <Link
                  to={`/editartorres1/${encodeURIComponent(
                    JSON.stringify(torre.dadosPrincipais.id),
                  )}`}
                >
                  <Imagens src={Editar} altura={HeightWidght} />
                </Link>
              )}
            </CTableHeaderCell>
          </CTableRow>
        ))}
      </>
    )
  }

  const [itsVersionament, setItsVersionament] = useState()
  const [HeightWidght, setHeightWidght] = useState('Desktop')

  useEffect(() => {
    function handleResize() {
      const { innerWidth } = window
      if (innerWidth < 768) {
        setItsVersionament('Celular')
      } else if (innerWidth >= 768 && innerWidth < 992) {
        setItsVersionament('Tablet')
      } else {
        setItsVersionament('Desktop')
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  useEffect(() => {
    if (itsVersionament === 'Desktop') {
      setHeightWidght('1vw')
    } else if (itsVersionament === 'Tablet') {
      setHeightWidght('2vw')
    } else {
      setHeightWidght('3vw')
    }
  }, [itsVersionament])

  return (
    <div
      className="table-responsive mt-5"
      style={{
        border: '1px solid black',
        borderRadius: '10px',
        width: '100%',
        maxHeight: '400px',
        overflowY: 'auto',
      }}
    >
      <CTable
        className="table-responsive mt-3"
        style={{ border: '1px solid black', borderRadius: '10px', width: '100%' }}
      >
        <CTableHead>
          <CTableRow className="d-flex justify-content-around align-items-center w-100">
            <CTableHeaderCell
              className="d-flex justify-content-around align-items-center w-25"
              scope="col"
              style={{ fontSize: HeightWidght }}
            >
              ID
            </CTableHeaderCell>
            <CTableHeaderCell
              className="d-flex justify-content-around align-items-center w-25"
              scope="col"
              style={{ fontSize: HeightWidght }}
            >
              {Name}
            </CTableHeaderCell>
            <CTableHeaderCell
              className="d-flex justify-content-around align-items-center w-25"
              scope="col"
              style={{ fontSize: HeightWidght }}
            >
              Visualizar
            </CTableHeaderCell>
            <CTableHeaderCell
              className="d-flex justify-content-around align-items-center w-25"
              scope="col"
              style={{ fontSize: HeightWidght }}
            >
              Editar
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody className="d-flex flex-wrap">
          {Dados && Dados.length > 0 ? (
            <TorresComponent />
          ) : (
            // Renderiza algo quando Dados não é um objeto válido ou não contém torres
            <p>Nenhum dado de torre disponível</p>
          )}
        </CTableBody>
      </CTable>
    </div>
  )
}

function Table1({ Dados, Name }) {
  // Chame a função exportToExcel quando quiser exportar os dados para Excel

  return (
    <div
      className="table-responsive"
      style={{ border: '1px solid black', borderRadius: '10px', width: '100%' }}
    >
      <CTable
        className="mt-5 table"
        style={{ border: '1px solid black', borderRadius: '10px', width: '100%' }}
      >
        <CTableHead>
          <CTableRow className="d-flex justify-content-around align-items-center w-100">
            <CTableHeaderCell scope="col" className="w-50" style={{ fontSize: '1.5vw' }}>
              ID
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="w-50" style={{ fontSize: '1.5vw' }}>
              {Name}
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {Dados.map((item) => (
            <CTableRow
              className="d-flex justify-content-around align-items-center w-100"
              key={item.id}
              style={{ fontSize: '1.5vw' }}
            >
              <CTableHeaderCell scope="row" className="w-75" style={{ fontSize: '1.5vw' }}>
                {item.id}
              </CTableHeaderCell>
              <CTableHeaderCell className="w-75">{item.nome}</CTableHeaderCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

Table.propTypes = {
  Dados: PropTypes.node.isRequired,
  Name: PropTypes.string.isRequired,
  Rota1: PropTypes.string.isRequired,
  Rota2: PropTypes.string.isRequired,
  Programa: PropTypes.string.isRequired,
}

TableFilter.propTypes = {
  Dados: PropTypes.node.isRequired,
  Name: PropTypes.string.isRequired,
  Rota1: PropTypes.string.isRequired,
  Rota2: PropTypes.string.isRequired,
  Programa: PropTypes.string.isRequired,
}

Table1.propTypes = {
  Dados: PropTypes.node.isRequired,
  Name: PropTypes.string.isRequired,
  Rota1: PropTypes.string.isRequired,
  Rota2: PropTypes.string.isRequired,
}

export { Table, Table1, TableFilter }
