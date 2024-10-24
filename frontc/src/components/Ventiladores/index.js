import React, { useState, useEffect } from 'react'
import { Input } from '../index'
import { useUser } from '../../userContext'
import PropTypes from 'prop-types'

const Ventiladores = ({
  dadosFormularios,
  setDadosFormularios,
  dadosFormulariosOld = null,
  setDadosFormulariosOld = null,
  msgVentil,
  dis,
  loading = null,
}) => {
  console.log('Acionamentos', dadosFormularios)
  console.log('AcionamentosOld', dadosFormulariosOld)
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
        serie: '',
        diametro_do_ventilador: '',
        comprimento_das_pas: '',
        material_das_pas: '',
        modelo_das_pas: '',
        material_dos_cubos: '',
        material_dos_parafusos: '',
        numero_de_pas: '',
        area_livre_do_ventilador: '',
        diametro: '',
        n_de_ventilador_por_celula: '1',
        modelo_padrao: false,
        status: true,
        A0: '',
        A1: '',
        A2: '',
        A3: '',
      }
      setDadosFormulariosOld([...dadosFormulariosOld, novoFormulario])
    } else {
      const novoFormulario = {
        modelo: '',
        serie: '',
        diametro_do_ventilador: '',
        modelo_das_pas: '',
        numero_de_pas: '',
        diametro: '',
        n_de_ventilador_por_celula: '1',
        comprimento_das_pas: '',
        material_das_pas: '',
        material_dos_cubos: '',
        material_dos_parafusos: '',
        modelo_padrao: dadosFormularios.length === 0,
        status: true,
        area_livre_do_ventilador: '',
        A0: '',
        A1: '',
        A2: '',
        A3: '',
      }
      if (!loading) {
        setDadosFormularios([...dadosFormularios, novoFormulario])
      } else {
        setDadosFormulariosOld([...dadosFormulariosOld, novoFormulario])
      }
    }
  }

  const handleRadioChange = (index, value) => {
    const atualizarFormulario = (formulario) => {
      return {
        ...formulario,
        n_de_ventilador_por_celula: value,
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
          <Input
            etiqueta={'Modelo do ventilador'}
            desativado={!value.status}
            input={value.modelo}
            setinput={(value) => handleInputChange(index, 'modelo', value)}
            tipo={'Text'}
          />
          <div className="form-group">
            <label htmlFor="serieSelect" className="form-label">
              Série
            </label>
            <select
              id="serieSelect"
              className="form-control"
              disabled={!value.status}
              value={value.serie}
              onChange={(e) => handleInputChange(index, 'serie', e.target.value)}
            >
              <option value="VAP">VAP</option>
              <option value="MW">MW</option>
              <option value="8E">8E</option>
              <option value="9EM2">9EM2</option>
            </select>
            {!value.status && <small className="text-muted">Este campo está desativado.</small>}
          </div>

          <Input
            etiqueta={'Diâmetro dos ventiladores (m)'}
            desativado={!value.status}
            input={value.diametro_do_ventilador}
            setinput={(value) => {
              handleInputChange(index, 'diametro_do_ventilador', value)
              handleInputChange(index, 'diametro', value * 1000)
            }}
            tipo={'number'}
          />
          <Input
            etiqueta={'Diâmetro das pás do ventilador (m)'}
            desativado={!value.status}
            input={value.modelo_das_pas}
            setinput={(value) => handleInputChange(index, 'modelo_das_pas', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Comprimento das pás (mm)'}
            desativado={!value.status}
            input={value.comprimento_das_pas}
            setinput={(value) => handleInputChange(index, 'comprimento_das_pas', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Material das pás'}
            desativado={!value.status}
            input={value.material_das_pas}
            setinput={(value) => handleInputChange(index, 'material_das_pas', value)}
            tipo={'Text'}
          />
          <Input
            etiqueta={'Material dos cubos'}
            desativado={!value.status}
            input={value.material_dos_cubos}
            setinput={(value) => handleInputChange(index, 'material_dos_cubos', value)}
            tipo={'Text'}
          />
          <Input
            etiqueta={'Número de pás'}
            desativado={!value.status}
            input={value.numero_de_pas}
            setinput={(value) => handleInputChange(index, 'numero_de_pas', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'A0'}
            desativado={!value.status}
            input={value.A0}
            setinput={(value) => handleInputChange(index, 'A0', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'A1'}
            desativado={!value.status}
            input={value.A1}
            setinput={(value) => handleInputChange(index, 'A1', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'A2'}
            desativado={!value.status}
            input={value.A2}
            setinput={(value) => handleInputChange(index, 'A2', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'A3'}
            desativado={!value.status}
            input={value.A3}
            setinput={(value) => handleInputChange(index, 'A3', value)}
            tipo={'number'}
          />
          <span className="badge bg-primary mt-2">Quantidade de ventiladores por torre</span>
          <div className="form-check mt-3">
            <input
              type="radio"
              className="form-check-input"
              id={`check1_${index}`}
              name={`check1_${index}`}
              value={'1'}
              checked={value.n_de_ventilador_por_celula == '1'}
              onChange={() => handleRadioChange(index, '1')}
              disabled={!value.status}
            />
            <label className="form-check-label" htmlFor={`check1_${index}`}>
              1
            </label>
          </div>
          <div className="form-check mt-3">
            <input
              type="radio"
              className="form-check-input"
              id={`check2_${index}`}
              name={`check2_${index}`}
              value={'2'}
              checked={value.n_de_ventilador_por_celula == '2'}
              onChange={() => handleRadioChange(index, '2')}
              disabled={!value.status}
            />
            <label className="form-check-label" htmlFor={`check2_${index}`}>
              2
            </label>
          </div>
          <div className="form-check mt-3">
            <input
              type="radio"
              className="form-check-input"
              id={`check3_${index}`}
              name={`check3_${index}`}
              value={'3'}
              checked={value.n_de_ventilador_por_celula == '3'}
              onChange={() => handleRadioChange(index, '3')}
              disabled={!value.status}
            />
            <label className="form-check-label" htmlFor={`check3_${index}`}>
              3
            </label>
          </div>
          <div className="form-check mt-3">
            <input
              type="radio"
              className="form-check-input"
              id={`check4_${index}`}
              name={`check4_${index}`}
              value={'4'}
              checked={value.n_de_ventilador_por_celula == '4'}
              onChange={() => handleRadioChange(index, '4')}
              disabled={!value.status}
            />
            <label className="form-check-label" htmlFor={`check4_${index}`}>
              4
            </label>
          </div>
          <div className="form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id={`checkRadioNdeVentil_-${index}`}
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
                {value.status ? 'Desativar Ventilador' : 'Ativar Ventilador'}
              </button>
            ) : (
              <button className="btn btn-danger" onClick={() => removerFormulario(index)}>
                Remover Ventilador
              </button>
            )}
          </div>
        </div>
      ))}
      <div>
        <div className="container" style={{ marginTop: '-0.6rem' }}>
          <div className="mt-3">
            <button className="btn btn-primary" onClick={duplicarFormulario} disabled={dis}>
              Adicionar Ventiladores
            </button>
          </div>
        </div>
      </div>
    </>
  ) : dis ? (
    dadosFormulariosOld.map((value, index) => (
      <div key={index} className="container mt-3">
        <Input
          etiqueta={'Modelo do ventilador'}
          desativado={dis}
          input={value.modelo}
          setinput={(value) => handleInputChange(index, 'modelo', value)}
          tipo={'Text'}
        />
        <div className="form-group">
          <label htmlFor="serieSelect" className="form-label">
            Série
          </label>
          <select
            id="serieSelect"
            className="form-control"
            disabled={dis}
            value={value.serie}
            onChange={(e) => handleInputChange(index, 'serie', e.target.value)}
          >
            <option value="VAP">VAP</option>
            <option value="MW">MW</option>
            <option value="8E">8E</option>
            <option value="9EM2">9EM2</option>
          </select>
          {dis && <small className="text-muted">Este campo está desativado.</small>}
        </div>
        <Input
          etiqueta={'Diâmetro dos ventiladores (m)'}
          desativado={dis}
          input={value.diametro_do_ventilador}
          setinput={(value) => {
            handleInputChange(index, 'diametro_do_ventilador', value)
            handleInputChange(index, 'diametro', value * 1000)
          }}
          tipo={'number'}
        />
        <Input
          etiqueta={'Diâmetro das pás do ventilador (m)'}
          desativado={dis}
          input={value.modelo_das_pas}
          setinput={(value) => handleInputChange(index, 'DiametroDasPas', value)}
          tipo={'number'}
        />
        <Input
          etiqueta={'Comprimento das pás (mm)'}
          desativado={dis}
          input={value.comprimento_das_pas}
          setinput={(value) => handleInputChange(index, 'comprimento_das_pas', value)}
          tipo={'number'}
        />
        <Input
          etiqueta={'Material das pás'}
          desativado={dis}
          input={value.material_das_pas}
          setinput={(value) => handleInputChange(index, 'material_das_pas', value)}
          tipo={'Text'}
        />
        <Input
          etiqueta={'Material dos cubos'}
          desativado={dis}
          input={value.material_dos_cubos}
          setinput={(value) => handleInputChange(index, 'material_dos_cubos', value)}
          tipo={'Text'}
        />
        <Input
          etiqueta={'Número De pás(u)'}
          desativado={dis}
          input={value.numero_de_pas}
          setinput={(value) => handleInputChange(index, 'numeroDePas', value)}
          tipo={'number'}
        />
        <Input
          etiqueta={'A0'}
          desativado={dis}
          input={value.A0}
          setinput={(value) => handleInputChange(index, 'A0', value)}
          tipo={'number'}
        />
        <Input
          etiqueta={'A1'}
          desativado={dis}
          input={value.A1}
          setinput={(value) => handleInputChange(index, 'A1', value)}
          tipo={'number'}
        />
        <Input
          etiqueta={'A2'}
          desativado={dis}
          input={value.A2}
          setinput={(value) => handleInputChange(index, 'A2', value)}
          tipo={'number'}
        />
        <Input
          etiqueta={'A3'}
          desativado={dis}
          input={value.A3}
          setinput={(value) => handleInputChange(index, 'A3', value)}
          tipo={'number'}
        />
        <span className="badge bg-primary mt-2">Quantidade de ventiladores por torre</span>
        <div className="form-check mt-3">
          <input
            type="radio"
            className="form-check-input"
            id={`check1_${index}`}
            name={`check1_${index}`}
            value={'1'}
            checked={value.n_de_ventilador_por_celula == '1'}
            onChange={() => handleRadioChange(index, '1')}
            disabled={!value.status}
          />
          <label className="form-check-label" htmlFor={`check1_${index}`}>
            1
          </label>
        </div>
        <div className="form-check mt-3">
          <input
            type="radio"
            className="form-check-input"
            id={`check2_${index}`}
            name={`check2_${index}`}
            value={'2'}
            checked={value.n_de_ventilador_por_celula == '2'}
            onChange={() => handleRadioChange(index, '2')}
            disabled={!value.status}
          />
          <label className="form-check-label" htmlFor={`check2_${index}`}>
            2
          </label>
        </div>
        <div className="form-check mt-3">
          <input
            type="radio"
            className="form-check-input"
            id={`check3_${index}`}
            name={`check3_${index}`}
            value={'3'}
            checked={value.n_de_ventilador_por_celula == '3'}
            onChange={() => handleRadioChange(index, '3')}
            disabled={!value.status}
          />
          <label className="form-check-label" htmlFor={`check3_${index}`}>
            3
          </label>
        </div>
        <div className="form-check mt-3">
          <input
            type="radio"
            className="form-check-input"
            id={`check4_${index}`}
            name={`check4_${index}`}
            value={'4'}
            checked={value.n_de_ventilador_por_celula == '4'}
            onChange={() => handleRadioChange(index, '4')}
            disabled={!value.status}
          />
          <label className="form-check-label" htmlFor={`check4_${index}`}>
            4
          </label>
        </div>
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
      </div>
    ))
  ) : (
    <div>
      {dadosFormularios.map((formulario, index) => (
        <div key={index} className="container mt-3">
          <Input
            etiqueta={'Modelo do ventilador'}
            desativado={!formulario.status}
            input={formulario.modelo}
            setinput={(value) => handleInputChange(index, 'modelo', value)}
            tipo={'Text'}
          />
          <div className="form-group">
            <label htmlFor="serieSelect" className="form-label">
              Série
            </label>
            <select
              id="serieSelect"
              className="form-control"
              disabled={!formulario.status}
              value={formulario.serie}
              onChange={(e) => handleInputChange(index, 'serie', e.target.value)}
            >
              <option value="VAP">VAP</option>
              <option value="MW">MW</option>
              <option value="8E">8E</option>
              <option value="9EM2">9EM2</option>
            </select>
            {false && <small className="text-muted">Este campo está desativado.</small>}
          </div>

          <Input
            etiqueta={'Diâmetro dos ventiladores (m)'}
            desativado={!formulario.status}
            input={formulario.diametro_do_ventilador}
            setinput={(value) => {
              handleInputChange(index, 'diametro_do_ventilador', value)
              handleInputChange(index, 'diametro', value * 1000)
            }}
            tipo={'number'}
          />
          <Input
            etiqueta={'Diâmetro das pás do ventilador (m)'}
            desativado={!formulario.status}
            input={formulario.modelo_das_pas}
            setinput={(value) => handleInputChange(index, 'modelo_das_pas', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Comprimento das pás (mm)'}
            desativado={!formulario.status}
            input={formulario.comprimento_das_pas}
            setinput={(value) => handleInputChange(index, 'comprimento_das_pas', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Material das pás'}
            desativado={!formulario.status}
            input={formulario.material_das_pas}
            setinput={(value) => handleInputChange(index, 'material_das_pas', value)}
            tipo={'Text'}
          />
          <Input
            etiqueta={'Material dos cubos'}
            desativado={!formulario.status}
            input={formulario.material_dos_cubos}
            setinput={(value) => handleInputChange(index, 'material_dos_cubos', value)}
            tipo={'Text'}
          />
          <Input
            etiqueta={'Número de pás(u)'}
            desativado={false}
            input={formulario.numero_de_pas}
            setinput={(value) => handleInputChange(index, 'numero_de_pas', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'A0'}
            desativado={false}
            input={formulario.A0}
            setinput={(value) => handleInputChange(index, 'A0', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'A1'}
            desativado={false}
            input={formulario.A1}
            setinput={(value) => handleInputChange(index, 'A1', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'A2'}
            desativado={false}
            input={formulario.A2}
            setinput={(value) => handleInputChange(index, 'A2', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'A3'}
            desativado={false}
            input={formulario.A3}
            setinput={(value) => handleInputChange(index, 'A3', value)}
            tipo={'number'}
          />
          <span className="badge bg-primary mt-2">Quantidade de ventiladores por torre</span>
          <div className="form-check mt-3">
            <input
              type="radio"
              className="form-check-input"
              id={`check1_${index}`}
              name={`check1_${index}`}
              value={'1'}
              checked={formulario.n_de_ventilador_por_celula == '1'}
              onChange={() => handleRadioChange(index, '1')}
              disabled={!formulario.status}
            />
            <label className="form-check-label" htmlFor={`check1_${index}`}>
              1
            </label>
          </div>
          <div className="form-check mt-3">
            <input
              type="radio"
              className="form-check-input"
              id={`check2_${index}`}
              name={`check2_${index}`}
              value={'2'}
              checked={formulario.n_de_ventilador_por_celula == '2'}
              onChange={() => handleRadioChange(index, '2')}
              disabled={!formulario.status}
            />
            <label className="form-check-label" htmlFor={`check2_${index}`}>
              2
            </label>
          </div>
          <div className="form-check mt-3">
            <input
              type="radio"
              className="form-check-input"
              id={`check3_${index}`}
              name={`check3_${index}`}
              value={'3'}
              checked={formulario.n_de_ventilador_por_celula == '3'}
              onChange={() => handleRadioChange(index, '3')}
              disabled={!formulario.status}
            />
            <label className="form-check-label" htmlFor={`check3_${index}`}>
              3
            </label>
          </div>
          <div className="form-check mt-3">
            <input
              type="radio"
              className="form-check-input"
              id={`check4_${index}`}
              name={`check4_${index}`}
              value={'4'}
              checked={formulario.n_de_ventilador_por_celula == '4'}
              onChange={() => handleRadioChange(index, '4')}
              disabled={!formulario.status}
            />
            <label className="form-check-label" htmlFor={`check4_${index}`}>
              4
            </label>
          </div>
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
              Remover Ventilador
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
            Adicionar Ventiladores
          </button>
        </div>
      </div>
    </div>
  )
}

Ventiladores.propTypes = {
  dadosFormularios: PropTypes.arrayOf(
    PropTypes.shape({
      modeloDoVentilador: PropTypes.string,
      Serie: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      DiametroDosVentiladores: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      DiametroDasPas: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      numeroDePas: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
      numeroDePas: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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

export default Ventiladores
