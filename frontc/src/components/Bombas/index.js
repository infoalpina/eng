import React, { useState, useEffect } from 'react'
import { Input } from '../index'
import { useUser } from '../../userContext'
import PropTypes from 'prop-types'

const Bombas = ({
  dadosFormularios,
  setDadosFormularios,
  dadosFormulariosOld = null,
  setDadosFormulariosOld = null,
  msgBombas,
  dis,
  loading = null,
}) => {
  const [endIndex, setEndIndex] = useState('')

  useEffect(() => {
    if (dadosFormulariosOld.length > 0) {
      setEndIndex(dadosFormulariosOld.length)
    }
  }, [dadosFormulariosOld])

  const duplicarFormulario = (event) => {
    event.preventDefault()
    if (dadosFormulariosOld.length != 0) {
      const novoFormulario = {
        modelo: '',
        vazao: '',
        potencia: '',
        pressao: '',
        rotacao: '',
        modelo_padrao: false,
        status: true,
      }
      setDadosFormulariosOld([...dadosFormulariosOld, novoFormulario])
    } else {
      const novoFormulario = {
        modelo: '',
        vazao: '',
        potencia: '',
        pressao: '',
        rotacao: '',
        modelo_padrao: dadosFormularios.length === 0,
        status: true,
      }
      if (!loading) {
        setDadosFormularios([...dadosFormularios, novoFormulario])
      } else {
        setDadosFormulariosOld([...dadosFormulariosOld, novoFormulario])
      }
    }
  }

  const ativarFormulario = (event, index) => {
    event.preventDefault()
    const novosFormularios = dadosFormulariosOld.map((formulario, i) => ({
      ...formulario,
      status: i === index ? true : formulario.status,
    }))
    setDadosFormulariosOld(novosFormularios)
  }

  const desativarFormulario = (event, index) => {
    event.preventDefault()
    const novosFormularios = dadosFormulariosOld.map((formulario, i) => ({
      ...formulario,
      status: i === index ? false : formulario.status,
    }))
    setDadosFormulariosOld(novosFormularios)
  }

  const removerFormulario = (index) => {
    if (dadosFormulariosOld.length != 0) {
      const novosFormularios = [...dadosFormulariosOld]
      novosFormularios.splice(index, 1)
      setDadosFormulariosOld(novosFormularios)
    } else {
      const novosFormularios = [...dadosFormularios]
      novosFormularios.splice(index, 1)
      setDadosFormularios(novosFormularios)
    }
  }

  const handleInputChange = (index, field, value) => {
    if (dadosFormulariosOld.length != 0) {
      const novosFormularios = [...dadosFormulariosOld]
      novosFormularios[index][field] = value
      setDadosFormulariosOld(novosFormularios)
    } else {
      const novosFormularios = [...dadosFormularios]
      novosFormularios[index][field] = value
      setDadosFormularios(novosFormularios)
    }
  }

  const handleCheckboxChange = (index) => {
    if (dadosFormulariosOld.length != 0) {
      const novosFormularios = dadosFormulariosOld.map((formulario, i) => {
        if (i === index) {
          // Alterna o valor do checkbox clicado
          return {
            ...formulario,
            modelo_padrao: !formulario.modelo_padrao,
          }
        }
        return formulario
      })
      setDadosFormulariosOld(novosFormularios)
    } else {
      const novosFormularios = dadosFormularios.map((formulario, i) => {
        if (i === index) {
          // Alterna o valor do checkbox clicado
          return {
            ...formulario,
            modelo_padrao: !formulario.modelo_padrao,
          }
        }
        return formulario
      })
      setDadosFormularios(novosFormularios)
    }
  }

  return loading && !dis ? (
    <>
      {dadosFormulariosOld.map((value, index) => (
        <div key={index} className="container mt-3">
          <Input
            etiqueta={'Fabricante/ Modelo das bombas'}
            desativado={!value.status}
            input={value.modelo}
            setinput={(value) => handleInputChange(index, 'modelo', value)}
            tipo={'Text'}
          />
          <Input
            etiqueta={'Vazão (m³/h)'}
            desativado={!value.status}
            input={value.vazao}
            setinput={(value) => handleInputChange(index, 'vazao', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Potência (cv)'}
            desativado={!value.status}
            input={value.potencia}
            setinput={(value) => handleInputChange(index, 'potencia', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Pressão (mCA)'}
            desativado={!value.status}
            input={value.pressao}
            setinput={(value) => handleInputChange(index, 'pressao', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Rotação (rpm)'}
            desativado={!value.status}
            input={value.rotacao}
            setinput={(value) => handleInputChange(index, 'rotacao', value)}
            tipo={'number'}
          />
          <div className="form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id={`checkboxbomba-${index}`}
              checked={value.modelo_padrao}
              onChange={() => handleCheckboxChange(index)}
            />
            <label className="form-check-label" htmlFor={`checkboxbomba-${index}`}>
              Selecionar como padrão
            </label>
          </div>
          <div className="container mt-3" style={{ marginLeft: '-0.7rem' }}>
            {value.id ? (
              <button
                className={value.status ? 'btn btn-danger' : 'btn btn-success'}
                onClick={
                  value.status
                    ? (e) => desativarFormulario(e, index)
                    : (e) => ativarFormulario(e, index)
                }
              >
                {value.status ? 'Desativar Bomba' : 'Ativar Bomba'}
              </button>
            ) : (
              <button className="btn btn-danger" onClick={() => removerFormulario(index)}>
                Remover Bomba
              </button>
            )}
          </div>
        </div>
      ))}
      <div>
        <div className="container" style={{ marginTop: '-0.6rem' }}>
          <div className="mt-3">
            <button className="btn btn-primary" onClick={duplicarFormulario}>
              Adicionar Bombas
            </button>
          </div>
        </div>
      </div>
    </>
  ) : dis ? (
    dadosFormulariosOld.map((value, index) => (
      <div key={index} className="container mt-3">
        <Input
          etiqueta={'Modelo da bomba'}
          desativado={dis}
          input={value.modelo}
          setinput={(value) => handleInputChange(index, 'modelo', value)}
          tipo={'Text'}
        />
        <Input
          etiqueta={'Vazão (m³/h)'}
          desativado={dis}
          input={value.vazao}
          setinput={(value) => handleInputChange(index, 'vazao', value)}
          tipo={'number'}
        />
        <Input
          etiqueta={'Potência (cv)'}
          desativado={dis}
          input={value.potencia}
          setinput={(value) => handleInputChange(index, 'potencia', value)}
          tipo={'number'}
        />
        <Input
          etiqueta={'Pressão (mCA)'}
          desativado={dis}
          input={value.pressao}
          setinput={(value) => handleInputChange(index, 'pressao', value)}
          tipo={'number'}
        />
        <Input
          etiqueta={'Rotação (rpm)'}
          desativado={dis}
          input={value.rotacao}
          setinput={(value) => handleInputChange(index, 'rotacao', value)}
          tipo={'number'}
        />
        <div className="form-check mt-3">
          <input
            type="checkbox"
            className="form-check-input"
            id={`checkboxbomba-${index}`}
            checked={value.modelo_padrao}
            onChange={() => handleCheckboxChange(index)}
            disabled={true}
          />
          <label className="form-check-label" htmlFor={`checkboxbomba-${index}`}>
            Selecionar como padrão
          </label>
        </div>
      </div>
    ))
  ) : (
    <div>
      {dadosFormularios.map((formulario, index) => (
        <div key={index} className="container mt-3">
          <Input
            etiqueta={'Fabricante/ Modelo das bombas'}
            desativado={false}
            input={formulario.modelo}
            setinput={(value) => handleInputChange(index, 'modelo', value)}
            tipo={'Text'}
          />
          <Input
            etiqueta={'Vazão (m³/h)'}
            desativado={false}
            input={formulario.vazao}
            setinput={(value) => handleInputChange(index, 'vazao', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Potência (cv)'}
            desativado={false}
            input={formulario.potencia}
            setinput={(value) => handleInputChange(index, 'potencia', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Pressão (mCA)'}
            desativado={false}
            input={formulario.pressao}
            setinput={(value) => handleInputChange(index, 'pressao', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Rotação (rpm)'}
            desativado={false}
            input={formulario.rotacao}
            setinput={(value) => handleInputChange(index, 'rotacao', value)}
            tipo={'number'}
          />
          <div className="form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id={`checkboxbomba-${index}`}
              checked={formulario.modelo_padrao}
              onChange={() => handleCheckboxChange(index)}
            />
            <label className="form-check-label" htmlFor={`checkboxbomba-${index}`}>
              Selecionar como padrão
            </label>
          </div>
          <div className="container mt-3" style={{ marginLeft: '-0.7rem' }}>
            <button className="btn btn-danger" onClick={() => removerFormulario(index)}>
              Remover Bomba
            </button>
          </div>
          <div className="row mt-3">
            <div className="d-flex justify-content-center">
              {msgBombas && (
                <div style={{ color: 'red', marginTop: '0px', marginLeft: '-8rem' }}>
                  {msgBombas}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="container" style={{ marginTop: '-0.6rem' }}>
        <div className="mt-3">
          <button className="btn btn-primary" onClick={duplicarFormulario}>
            Adicionar Bombas
          </button>
        </div>
      </div>
    </div>
  )
}

Bombas.propTypes = {
  dadosFormulariosOld: PropTypes.arrayOf(
    PropTypes.shape({
      modeloDaBomba: PropTypes.string,
      vazao: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      potencia: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      pressao: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      rotacao: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      modelo_padrao: PropTypes.bool,
    }),
  ),
  dadosFormularios: PropTypes.arrayOf(
    PropTypes.shape({
      modeloDaBomba: PropTypes.string,
      vazao: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      potencia: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      pressao: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      rotacao: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      modelo_padrao: PropTypes.bool,
    }),
  ),
  setDadosFormularios: PropTypes.func,
  setDadosFormulariosOld: PropTypes.func,
  msgBombas: PropTypes.string,
  setMsgBombas: PropTypes.func.isRequired,
  dis: PropTypes.bool,
  loading: PropTypes.bool,
}

export default Bombas
