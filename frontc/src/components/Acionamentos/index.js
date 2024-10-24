import React, { useState, useEffect } from 'react'
import { Input } from '../index'
import { useUser } from '../../userContext'
import PropTypes from 'prop-types'

const Acionamentos = ({
  dadosFormularios,
  setDadosFormularios,
  dadosFormulariosOld = null,
  setDadosFormulariosOld = null,
  msgVentil,
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
        tipo_de_acionamento_de_transmissao: 'Direto',
        modelo: '',
        taxa_de_reducao: '',
        potencia_do_motor: '',
        rotacao_do_motor: '',
        rotacao_do_ventilador: '',
        motor_eletrico_tipo: 'TFVE, IPW55, CLASSE F',
        status: true,
        modelo_padrao: false,
        rendimento_do_redultor: '',
      }
      setDadosFormulariosOld([...dadosFormulariosOld, novoFormulario])
    } else {
      const novoFormulario = {
        tipo_de_acionamento_de_transmissao: 'Direto',
        modelo: '',
        taxa_de_reducao: '',
        potencia_do_motor: '',
        rotacao_do_motor: '',
        rotacao_do_ventilador: '',
        motor_eletrico_tipo: 'TFVE, IPW55, CLASSE F',
        status: true,
        modelo_padrao: dadosFormularios.length === 0,
        rendimento_do_redultor: '',
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
  console.log('dadosFormulariosOld', dadosFormulariosOld)

  const handleInputChangeRPMVentil = (index, value1, value2, value3) => {
    if (dadosFormulariosOld.length != 0) {
      if (value3 == 'Direto') {
        const novosFormularios = [...dadosFormulariosOld]
        novosFormularios[index]['rotacao_do_ventilador'] = parseFloat(value1).toFixed(1)
        setDadosFormulariosOld(novosFormularios)
      } else {
        if (value1 !== '' && value2 !== '' && !isNaN(value1) && !isNaN(value2)) {
          const novosFormularios = [...dadosFormulariosOld]
          novosFormularios[index]['rotacao_do_ventilador'] = (value1 / value2).toFixed(1)
          setDadosFormulariosOld(novosFormularios)
        }
      }
    } else {
      if (value3 == 'Direto') {
        const novosFormularios = [...dadosFormularios]
        novosFormularios[index]['rotacao_do_ventilador'] = parseFloat(value1).toFixed(1)
        setDadosFormularios(novosFormularios)
      } else {
        if (value1 !== '' && value2 !== '' && !isNaN(value1) && !isNaN(value2)) {
          const novosFormularios = [...dadosFormularios]
          novosFormularios[index]['rotacao_do_ventilador'] = (value1 / value2).toFixed(1)
          setDadosFormularios(novosFormularios)
        }
      }
    }
  }

  const handleRadioChange = (index, value, value2, value3) => {
    const atualizarFormulario = (formulario) => {
      return {
        ...formulario,
        rotacao_do_ventilador: value == 'Direto' ? value2 : value2 / value3,
        tipo_de_acionamento_de_transmissao: value == 'Direto' ? 'Direto' : 'Redutor engrenado',
      }
    }

    if (dadosFormulariosOld.length !== 0) {
      const novosFormularios = dadosFormulariosOld.map((formulario, i) =>
        i === index ? atualizarFormulario(formulario) : formulario,
      )
      setDadosFormulariosOld(novosFormularios)
    } else {
      const novosFormularios = dadosFormularios.map((formulario, i) =>
        i === index ? atualizarFormulario(formulario) : formulario,
      )
      setDadosFormularios(novosFormularios)
    }
  }

  const handleCheckboxChange = (index) => {
    if (dadosFormulariosOld.length != 0) {
      const novosFormularios = dadosFormulariosOld.map((formulario, i) => {
        if (i === index) {
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
          <div className="form-check mt-3">
            <input
              type="radio"
              className="form-check-input"
              id={`checkRadio1Direto_${index}`}
              name={`checkRadioDireto_${index}`}
              value={'Direto'}
              checked={value.tipo_de_acionamento_de_transmissao === 'Direto'}
              onChange={() =>
                handleRadioChange(index, 'Direto', value.rotacao_do_motor, value.taxa_de_reducao)
              }
              disabled={!value.status}
            />
            <label className="form-check-label" htmlFor={`checkRadio1Direto_${index}`}>
              Direto
            </label>
          </div>
          <div className="form-check mt-3">
            <input
              type="radio"
              className="form-check-input"
              id={`checkRadio2RedutorEngrenado_${index}`}
              name={`checkRadioRedutorEngrenado_${index}`}
              value={'Redutor engrenado'}
              checked={value.tipo_de_acionamento_de_transmissao === 'Redutor engrenado'}
              onChange={() =>
                handleRadioChange(
                  index,
                  'Redutor engrenado',
                  value.rotacao_do_motor,
                  value.taxa_de_reducao,
                )
              }
              disabled={!value.status}
            />
            <label className="form-check-label" htmlFor={`checkRadio2RedutorEngrenado_${index}`}>
              Redutor engrenado
            </label>
          </div>
          {value.tipo_de_acionamento_de_transmissao === 'Direto' ? (
            <></>
          ) : (
            <>
              <Input
                etiqueta={'Modelo'}
                desativado={!value.status}
                input={value.modelo}
                setinput={(value) => handleInputChange(index, 'modelo', value)}
                tipo={'text'}
              />
              <Input
                etiqueta={'Taxa de redução'}
                desativado={!value.status}
                input={value.taxa_de_reducao}
                setinput={(Specificvalue) => {
                  handleInputChange(index, 'taxa_de_reducao', Specificvalue)
                  handleInputChangeRPMVentil(
                    index,
                    value.rotacao_do_motor,
                    Specificvalue,
                    value.tipo_de_acionamento_de_transmissao,
                  )
                }}
                tipo={'number'}
              />
            </>
          )}
          <Input
            etiqueta={'Potência do motor (cv)'}
            desativado={!value.status}
            input={value.potencia_do_motor}
            setinput={(value) => handleInputChange(index, 'potencia_do_motor', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Rotação do motor (rpm)'}
            desativado={!value.status}
            input={value.rotacao_do_motor}
            setinput={(Specificvalue) => {
              handleInputChange(index, 'rotacao_do_motor', Specificvalue)
              handleInputChangeRPMVentil(
                index,
                Specificvalue,
                value.taxa_de_reducao,
                value.tipo_de_acionamento_de_transmissao,
              )
            }}
            tipo={'number'}
          />
          <Input
            etiqueta={'Rotação do ventilador (rpm)'}
            desativado={true}
            input={value.rotacao_do_ventilador}
            setinput={(value) => handleInputChange(index, 'rotacao_do_ventilador', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Motor elétrico tipo'}
            desativado={!value.status}
            input={value.motor_eletrico_tipo}
            setinput={(value) => handleInputChange(index, 'motor_eletrico_tipo', value)}
            tipo={'Text'}
          />
          <Input
            etiqueta={'Rendimento(%)'}
            desativado={!value.status}
            input={value.rendimento_do_redultor}
            setinput={(value) => handleInputChange(index, 'rendimento_do_redultor', value)}
            tipo={'number'}
          />
          <div className="form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id={`checkboxventilador-${index}`}
              checked={value.modelo_padrao}
              onChange={() => handleCheckboxChange(index)}
              disabled={!value.status}
            />
            <label className="form-check-label" htmlFor={`checkboxventilador-${index}`}>
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
                {value.status ? 'Desativar Acionamento' : 'Ativar Acionamento'}
              </button>
            ) : (
              <button className="btn btn-danger" onClick={() => removerFormulario(index)}>
                Remover Acionamentos
              </button>
            )}
          </div>
        </div>
      ))}
      <div>
        <div className="container" style={{ marginTop: '-0.6rem' }}>
          <div className="mt-3">
            <button className="btn btn-primary" onClick={duplicarFormulario} disabled={dis}>
              Adicionar Acionamentos
            </button>
          </div>
        </div>
      </div>
    </>
  ) : dis ? (
    dadosFormulariosOld.map((value, index) => (
      <div key={index} className="container mt-3">
        <div className="form-check mt-3">
          <input
            type="radio"
            className="form-check-input"
            id={`checkRadio1Direto_${index}`}
            name={`checkRadioDireto_${index}`}
            value={'Direto'}
            checked={value.tipo_de_acionamento_de_transmissao === 'Direto'}
            onChange={() =>
              handleRadioChange(index, 'Direto', value.rotacao_do_motor, value.taxa_de_reducao)
            }
            disabled={true}
          />
          <label className="form-check-label" htmlFor={`checkRadio1Direto_${index}`}>
            Direto
          </label>
        </div>
        <div className="form-check mt-3">
          <input
            type="radio"
            className="form-check-input"
            id={`checkRadio2RedutorEngrenado_${index}`}
            name={`checkRadioRedutorEngrenado_${index}`}
            value={'Redutor engrenado'}
            checked={value.tipo_de_acionamento_de_transmissao === 'Redutor engrenado'}
            onChange={() =>
              handleRadioChange(
                index,
                'Redutor engrenado',
                value.rotacao_do_motor,
                value.taxa_de_reducao,
              )
            }
            disabled={true}
          />
          <label className="form-check-label" htmlFor={`checkRadio2RedutorEngrenado_${index}`}>
            Redutor engrenado
          </label>
        </div>
        {value.tipo_de_acionamento_de_transmissao === 'Direto' ? (
          <></>
        ) : (
          <>
            <Input
              etiqueta={'Modelo'}
              desativado={true}
              input={value.modelo}
              setinput={(value) => handleInputChange(index, 'modelo', value)}
              tipo={'text'}
            />
            <Input
              etiqueta={'Taxa de redução'}
              desativado={true}
              input={value.taxa_de_reducao}
              setinput={(Specificvalue) => {
                handleInputChange(index, 'taxa_de_reducao', Specificvalue)
                handleInputChangeRPMVentil(
                  index,
                  value.rotacao_do_motor,
                  Specificvalue,
                  value.tipo_de_acionamento_de_transmissao,
                )
              }}
              tipo={'number'}
            />
          </>
        )}
        <Input
          etiqueta={'Potência do motor (cv)'}
          desativado={true}
          input={value.potencia_do_motor}
          setinput={(value) => handleInputChange(index, 'potencia_do_motor', value)}
          tipo={'number'}
        />
        <Input
          etiqueta={'Rotação do motor (rpm)'}
          desativado={true}
          input={value.rotacao_do_motor}
          setinput={(Specificvalue) => {
            handleInputChange(index, 'rotacao_do_motor', Specificvalue)
            handleInputChangeRPMVentil(
              index,
              Specificvalue,
              value.taxa_de_reducao,
              value.tipo_de_acionamento_de_transmissao,
            )
          }}
          tipo={'number'}
        />
        <Input
          etiqueta={'Rotação do ventilador (rpm)'}
          desativado={true}
          input={value.rotacao_do_ventilador}
          setinput={(value) => handleInputChange(index, 'rotacao_do_ventilador', value)}
          tipo={'number'}
        />
        <Input
          etiqueta={'Motor éltrico tipo'}
          desativado={true}
          input={value.motor_eletrico_tipo}
          setinput={(value) => handleInputChange(index, 'motor_eletrico_tipo', value)}
          tipo={'Text'}
        />
        <Input
          etiqueta={'Rendimento(%)'}
          desativado={true}
          input={value.rendimento_do_redultor}
          setinput={(value) => handleInputChange(index, 'rendimento_do_redultor', value)}
          tipo={'number'}
        />
        <div className="form-check mt-3">
          <input
            type="checkbox"
            className="form-check-input"
            id={`checkboxventilador-${index}`}
            checked={value.modelo_padrao}
            onChange={() => handleCheckboxChange(index)}
            disabled={true} // Desabilitar se a prop "dis" estiver ativa
          />
          <label className="form-check-label" htmlFor={`checkboxventilador-${index}`}>
            Selecionar como padrão
          </label>
        </div>
      </div>
    ))
  ) : (
    <div>
      {dadosFormularios.map((formulario, index) => (
        <div key={index} className="container mt-3">
          <div className="form-check mt-3">
            <input
              type="radio"
              className="form-check-input"
              id={`checkRadio1Direto_${index}`}
              name={`checkRadioDireto_${index}`}
              value={'Direto'}
              checked={formulario.tipo_de_acionamento_de_transmissao === 'Direto'}
              onChange={() =>
                handleRadioChange(
                  index,
                  'Direto',
                  formulario.rotacao_do_motor,
                  formulario.taxa_de_reducao,
                )
              }
              disabled={!formulario.status}
            />
            <label className="form-check-label" htmlFor={`checkRadio1Direto_${index}`}>
              Direto
            </label>
          </div>
          <div className="form-check mt-3">
            <input
              type="radio"
              className="form-check-input"
              id={`checkRadio2RedutorEngrenado_${index}`}
              name={`checkRadioRedutorEngrenado_${index}`}
              value={'Redutor engrenado'}
              checked={formulario.tipo_de_acionamento_de_transmissao === 'Redutor engrenado'}
              onChange={() =>
                handleRadioChange(
                  index,
                  'Redutor engrenado',
                  formulario.rotacao_do_motor,
                  formulario.taxa_de_reducao,
                )
              }
              disabled={!formulario.status}
            />
            <label className="form-check-label" htmlFor={`checkRadio2RedutorEngrenado_${index}`}>
              Redutor engrenado
            </label>
          </div>
          {formulario.tipo_de_acionamento_de_transmissao === 'Direto' ? (
            <></>
          ) : (
            <>
              <Input
                etiqueta={'Modelo'}
                desativado={false}
                input={formulario.modelo}
                setinput={(value) => handleInputChange(index, 'modelo', value)}
                tipo={'text'}
              />
              <Input
                etiqueta={'Taxa de redução'}
                desativado={false}
                input={formulario.taxa_de_reducao}
                setinput={(Specificvalue) => {
                  handleInputChange(index, 'taxa_de_reducao', Specificvalue)
                  handleInputChangeRPMVentil(
                    index,
                    formulario.rotacao_do_motor,
                    Specificvalue,
                    formulario.tipo_de_acionamento_de_transmissao,
                  )
                }}
                tipo={'number'}
              />
            </>
          )}
          <Input
            etiqueta={'Potência do motor (cv)'}
            desativado={false}
            input={formulario.potencia_do_motor}
            setinput={(value) => handleInputChange(index, 'potencia_do_motor', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Rotação do motor (rpm)'}
            desativado={!formulario.status}
            input={formulario.rotacao_do_motor}
            setinput={(Specificvalue) => {
              handleInputChange(index, 'rotacao_do_motor', Specificvalue)
              handleInputChangeRPMVentil(
                index,
                Specificvalue,
                formulario.taxa_de_reducao,
                formulario.tipo_de_acionamento_de_transmissao,
              )
            }}
            tipo={'number'}
          />
          <Input
            etiqueta={'Rotação do ventilador (rpm)'}
            desativado={true}
            input={formulario.rotacao_do_ventilador}
            setinput={(value) => handleInputChange(index, 'rotacao_do_ventilador', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Motor éltrico tipo'}
            desativado={false}
            input={formulario.motor_eletrico_tipo}
            setinput={(value) => handleInputChange(index, 'motor_eletrico_tipo', value)}
            tipo={'Text'}
          />
          <Input
            etiqueta={'Rendimento(%)'}
            desativado={false}
            input={formulario.rendimento_do_redultor}
            setinput={(value) => handleInputChange(index, 'rendimento_do_redultor', value)}
            tipo={'number'}
          />
          <div className="form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id={`checkboxventilador-${index}`}
              checked={formulario.modelo_padrao}
              onChange={() => handleCheckboxChange(index)}
              disabled={dis}
            />
            <label className="form-check-label" htmlFor={`checkboxventilador-${index}`}>
              Selecionar como padrão
            </label>
          </div>
          <div className="container mt-3" style={{ marginLeft: '-0.7rem' }}>
            <button
              className="btn btn-danger"
              onClick={() => removerFormulario(index)}
              disabled={dis}
            >
              Remover Acionamentos
            </button>
          </div>
          <div className="row mt-3">
            <div className="d-flex justify-content-center">
              {msgVentil && (
                <div style={{ color: 'red', marginTop: '0px', marginLeft: '-8rem' }}>
                  {msgVentil}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="container" style={{ marginTop: '-0.6rem' }}>
        <div className="mt-3">
          <button className="btn btn-primary" onClick={duplicarFormulario} disabled={dis}>
            Adicionar Acionamentos
          </button>
        </div>
      </div>
    </div>
  )
}

Acionamentos.propTypes = {
  dadosFormularios: PropTypes.arrayOf(
    PropTypes.shape({
      modeloDoVentilador: PropTypes.string,
      Serie: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      DiametroDosVentiladores: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      DiametroDasPas: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      rotacao: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      numeroDePas: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      rendimentoRedultor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      potenciaDoMotor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      diametro: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      ventilador_padrao: PropTypes.bool,
    }),
  ),
  dadosFormulariosOld: PropTypes.arrayOf(
    PropTypes.shape({
      modeloDoVentilador: PropTypes.string,
      Serie: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      DiametroDosVentiladores: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      DiametroDasPas: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      rotacao: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      numeroDePas: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      rendimentoRedultor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      potenciaDoMotor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      diametro: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      ventilador_padrao: PropTypes.bool,
    }),
  ),
  setDadosFormularios: PropTypes.func.isRequired,
  setDadosFormulariosOld: PropTypes.func.isRequired,
  msgVentil: PropTypes.string,
  setMsgVentil: PropTypes.func.isRequired,
  dis: PropTypes.bool,
  loading: PropTypes.bool,
}

export default Acionamentos
