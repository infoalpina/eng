import React, { useState, useEffect } from 'react'
import { Input } from '../index'
import PropTypes from 'prop-types'

const Feixes = ({
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
        diam_extern_ent_tub: 0.0254,
        diam_intern_ent_tub: '',
        n_de_tub_vert: '',
        dist_ent_tub: 110,
        exp_parede: '',
        condutib_termic_carbon: 45.349,
        condutib_termic_inox: 16.33,
        modelo_padrao: false,
        status: true,
        N_de_tub_vert_10: '',
        N_de_tub_vert_8: 16,
        N_de_tub_vert_6: '',
        N_de_tub_hor: '',
        N_de_tub_hor_compact: '',
        comprimento_dos_feixes: '',
        N_dos_feixes: '',
        modelo: 'Não compactado',
      }
      setDadosFormulariosOld([...dadosFormulariosOld, novoFormulario])
    } else {
      const novoFormulario = {
        diam_extern_ent_tub: 0.0254,
        diam_intern_ent_tub: '',
        n_de_tub_vert: '',
        dist_ent_tub: 110,
        exp_parede: '',
        condutib_termic_carbon: 45.349,
        condutib_termic_inox: 16.33,
        modelo_padrao: dadosFormularios.length == 0,
        status: true,
        N_de_tub_vert_10: '',
        N_de_tub_vert_8: 16,
        N_de_tub_vert_6: '',
        N_de_tub_hor: '',
        N_de_tub_hor_compact: '',
        comprimento_dos_feixes: '',
        N_dos_feixes: '',
        modelo: 'Não compactado',
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
      status: i == index ? true : formulario.status,
    }))
    setDadosFormulariosOld(novosFormularios)
  }
  const desativarFormulario = (event, index) => {
    event.preventDefault()
    const novosFormularios = dadosFormulariosOld.map((formulario, i) => ({
      ...formulario,
      status: i == index ? false : formulario.status,
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
        if (i == index) {
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
        if (i == index) {
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

  const handleRadioChange = (index, value) => {
    if (dadosFormulariosOld.length != 0) {
      console.log('teste 1')
      const novosFormularios = dadosFormulariosOld.map((formulario, i) => {
        console.log('dadosFormulariosOld[0]', dadosFormulariosOld[0])
        console.log('i', i)
        console.log('index', index)
        if (i == index) {
          if (value === 0.0254) {
            return {
              ...formulario,
              modelo: 'Não compactado',
              N_de_tub_vert_10: '',
              N_de_tub_vert_8: 16,
              N_de_tub_vert_6: '',
              diam_extern_ent_tub: value,
              dist_ent_tub: 110,
            }
          } else {
            return {
              ...formulario,
              N_de_tub_vert_10: 20,
              N_de_tub_vert_8: 16,
              N_de_tub_vert_6: 12,
              diam_extern_ent_tub: value,
              dist_ent_tub: 87,
            }
          }
        }
        return formulario
      })
      setDadosFormulariosOld(novosFormularios)
    } else {
      console.log('teste 2')
      const novosFormularios = dadosFormularios.map((formulario, i) => {
        console.log('dadosFormularios[0]', dadosFormularios[0])
        if (i === index) {
          if (value === 0.0254) {
            return {
              ...formulario,
              modelo: 'Não compactado',
              N_de_tub_vert_10: '',
              N_de_tub_vert_8: 16,
              N_de_tub_vert_6: '',
              diam_extern_ent_tub: value,
              dist_ent_tub: 110,
            }
          } else {
            return {
              ...formulario,
              N_de_tub_vert_10: 20,
              N_de_tub_vert_8: 16,
              N_de_tub_vert_6: 12,
              diam_extern_ent_tub: value,
              dist_ent_tub: 87,
            }
          }
        }
        return formulario
      })
      setDadosFormularios(novosFormularios)
    }
  }

  const handleCompactoChange = (index, value) => {
    if (dadosFormulariosOld.length != 0) {
      const novosFormularios = dadosFormulariosOld.map((formulario, i) => {
        if (i == index) {
          if (value == 'Compactado') {
            return {
              ...formulario,
              modelo: value,
              N_de_tub_hor: '',
            }
          } else {
            return {
              ...formulario,
              modelo: value,
              N_de_tub_hor_compact: '',
            }
          }
        }
        return formulario
      })
      setDadosFormulariosOld(novosFormularios)
    } else {
      const novosFormularios = dadosFormularios.map((formulario, i) => {
        if (i == index) {
          if (value == 'Compactado') {
            return {
              ...formulario,
              modelo: value,
              N_de_tub_hor: '',
            }
          } else {
            return {
              ...formulario,
              modelo: value,
              N_de_tub_hor_compact: '',
            }
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
              id={`checkRadio0.0254_${index}`}
              name={`checkRadio0.0254_${index}`}
              value={0.0254}
              checked={value.diam_extern_ent_tub == 0.0254}
              onChange={() => handleRadioChange(index, 0.0254)}
              disabled={!value.status}
            />
            <label className="form-check-label" htmlFor={`checkRadio0.0254_${index}`}>
              0,0254 - 1
            </label>
          </div>
          <div className="form-check mt-3">
            <input
              type="radio"
              className="form-check-input"
              id={`checkRadio0.01905_${index}`}
              name={`checkRadio0.01905_${index}`}
              value={0.01905}
              checked={value.diam_extern_ent_tub == 0.01905}
              onChange={() => handleRadioChange(index, 0.01905)}
              disabled={!value.status}
            />
            <label className="form-check-label" htmlFor={`checkRadio0.01905_${index}`}>
              0,01905 - 3/4
            </label>
          </div>
          {value.diam_extern_ent_tub == 0.0254 ? (
            <>
              <div className="form-check mt-3">
                <input
                  type="radio"
                  className="form-check-input"
                  id={`checkRadio2_${index}`}
                  name={`checkRadioCompact_${index}`}
                  value={'Não compactado'}
                  checked={value.modelo == 'Não compactado'}
                  onChange={() => handleCompactoChange(index, 'Não compactado')}
                  disabled={!value.status}
                />
                <label className="form-check-label" htmlFor={`checkRadio2_${index}`}>
                  Não compactado
                </label>
              </div>
            </>
          ) : (
            <>
              <div className="form-check mt-3">
                <input
                  type="radio"
                  className="form-check-input"
                  id={`checkRadioCompact_${index}`}
                  name={`checkRadioCompact_${index}`}
                  value={'Compactado'}
                  checked={value.modelo == 'Compactado'}
                  onChange={() => handleCompactoChange(index, 'Compactado')}
                  disabled={!value.status}
                />
                <label className="form-check-label" htmlFor={`checkRadioCompact_${index}`}>
                  Compactado
                </label>
              </div>
              <div className="form-check mt-3">
                <input
                  type="radio"
                  className="form-check-input"
                  id={`checkRadioNCompact_${index}`}
                  name={`checkRadioNCompact_${index}`}
                  value={'Não compactado'}
                  checked={value.modelo == 'Não compactado'}
                  onChange={() => handleCompactoChange(index, 'Não compactado')}
                  disabled={!value.status}
                />
                <label className="form-check-label" htmlFor={`checkRadioNCompact_${index}`}>
                  Não compactado
                </label>
              </div>
            </>
          )}
          <Input
            etiqueta={'Diâmetro externo dos tubos (m)'}
            desativado={true}
            input={value.diam_extern_ent_tub}
            setinput={(value) => handleInputChange(index, 'diam_extern_ent_tub', value)}
            tipo={'Text'}
          />
          <Input
            etiqueta={'Diâmetro interno dos tubos (m)'}
            desativado={!value.status}
            input={value.diam_intern_ent_tub}
            setinput={(value) => handleInputChange(index, 'diam_intern_ent_tub', value)}
            tipo={'Text'}
          />
          <Input
            etiqueta={'Expessura da parede (m)'}
            desativado={!value.status}
            input={value.exp_parede}
            setinput={(value) => handleInputChange(index, 'exp_parede', value)}
            tipo={'number'}
          />
          {value.modelo == 'Compactado' ? (
            <>
              <Input
                etiqueta={'Número de tubos horizontal não compactado(u)'}
                desativado={true}
                input={value.N_de_tub_hor}
                setinput={(value) => handleInputChange(index, 'N_de_tub_hor', value)}
                tipo={'number'}
              />
              <Input
                etiqueta={'Número de tubos horizontal compactado(u)'}
                desativado={!value.status}
                input={value.N_de_tub_hor_compact}
                setinput={(value) => handleInputChange(index, 'N_de_tub_hor_compact', value)}
                tipo={'number'}
              />
            </>
          ) : (
            <>
              <Input
                etiqueta={'Número de tubos horizontal não compactado(u)'}
                desativado={!value.status}
                input={value.N_de_tub_hor}
                setinput={(value) => handleInputChange(index, 'N_de_tub_hor', value)}
                tipo={'number'}
              />
              <Input
                etiqueta={'Número de tubos horizontal compactado(u)'}
                desativado={true}
                input={value.N_de_tub_hor_compact}
                setinput={(value) => handleInputChange(index, 'N_de_tub_hor_compact', value)}
                tipo={'number'}
              />
            </>
          )}
          {value.diam_extern_ent_tub == 0.0254 ? (
            <>
              <Input
                etiqueta={'Número de tubos vertical (u) 08 lados'}
                desativado={true}
                input={value.N_de_tub_vert_8}
                setinput={(value) => handleInputChange(index, 'N_de_tub_vert_8', value)}
                tipo={'number'}
              />
            </>
          ) : (
            <>
              <Input
                etiqueta={'Número de tubos vertical (u) 10 lados'}
                desativado={true}
                input={value.N_de_tub_vert_10}
                setinput={(value) => handleInputChange(index, 'N_de_tub_vert_10', value)}
                tipo={'number'}
              />
              <Input
                etiqueta={'Número de tubos vertical (u) 08 lados'}
                desativado={true}
                input={value.N_de_tub_vert_8}
                setinput={(value) => handleInputChange(index, 'N_de_tub_vert_8', value)}
                tipo={'number'}
              />
              <Input
                etiqueta={'Número de tubos vertical (u) 06 lados'}
                desativado={true}
                input={value.N_de_tub_vert_6}
                setinput={(value) => handleInputChange(index, 'N_de_tub_vert_6', value)}
                tipo={'number'}
              />
            </>
          )}
          <Input
            etiqueta={'Distância entre tubos (mm)'}
            desativado={true}
            input={value.dist_ent_tub}
            setinput={(value) => handleInputChange(index, 'dist_ent_tub', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Condutibilidade térmica do aço carbono (W/(mK))'}
            desativado={true}
            input={value.condutib_termic_carbon}
            setinput={(value) => handleInputChange(index, 'condutib_termic_carbon', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Condutibilidade térmica do aço inox (W/(mK))'}
            desativado={true}
            input={value.condutib_termic_inox}
            setinput={(value) => handleInputChange(index, 'condutib_termic_inox', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Comprimento dos feixes (m)'}
            desativado={!value.status}
            input={value.comprimento_dos_feixes}
            setinput={(value) => handleInputChange(index, 'comprimento_dos_feixes', value)}
            tipo={'number'}
          />
          <div className="form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id={`checkboxtubos-${index}`}
              checked={value.modelo_padrao}
              onChange={() => handleCheckboxChange(index)}
              disabled={!value.status}
            />
            <label className="form-check-label" htmlFor={`checkboxtubos-${index}`}>
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
                {value.status ? 'Desativar Feixes' : 'Ativar Feixes'}
              </button>
            ) : (
              <button className="btn btn-danger" onClick={() => removerFormulario(index)}>
                Remover Feixes
              </button>
            )}
          </div>
        </div>
      ))}
      <div>
        <div className="container" style={{ marginTop: '-0.6rem' }}>
          <div className="mt-3">
            <button className="btn btn-primary" onClick={duplicarFormulario} disabled={dis}>
              Adicionar Feixes
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
            id={`checkRadio0.0254_${index}`}
            name={`checkRadio0.0254_${index}`}
            value={0.0254}
            checked={value.diam_extern_ent_tub == 0.0254}
            onChange={() => handleRadioChange(index, 0.0254)}
            disabled={true}
          />
          <label className="form-check-label" htmlFor={`checkRadio0.0254_${index}`}>
            0,0254 - 1
          </label>
        </div>
        <div className="form-check mt-3">
          <input
            type="radio"
            className="form-check-input"
            id={`checkRadio0.01905_${index}`}
            name={`checkRadio0.01905_${index}`}
            value={0.01905}
            checked={value.diam_extern_ent_tub == 0.01905}
            onChange={() => handleRadioChange(index, 0.01905)}
            disabled={true}
          />
          <label className="form-check-label" htmlFor={`checkRadio0.01905_${index}`}>
            0,01905 - 3/4
          </label>
        </div>
        {value.diam_extern_ent_tub == 0.0254 ? (
          <>
            <div className="form-check mt-3">
              <input
                type="radio"
                className="form-check-input"
                id={`checkRadioNCompact_${index}`}
                name={`checkRadioNCompact_${index}`}
                value={'Não compactado'}
                checked={value.modelo == 'Não compactado'}
                onChange={() => handleCompactoChange(index, 'Não compactado')}
                disabled={true}
              />
              <label className="form-check-label" htmlFor={`checkRadioNCompact_${index}`}>
                Não compactado
              </label>
            </div>
          </>
        ) : (
          <>
            <div className="form-check mt-3">
              <input
                type="radio"
                className="form-check-input"
                id={`checkRadioCompact_${index}`}
                name={`checkRadioCompact_${index}`}
                value={'Compactado'}
                checked={value.modelo == 'Compactado'}
                onChange={() => handleCompactoChange(index, 'Compactado')}
                disabled={true}
              />
              <label className="form-check-label" htmlFor={`checkRadioCompact_${index}`}>
                Compactado
              </label>
            </div>
            <div className="form-check mt-3">
              <input
                type="radio"
                className="form-check-input"
                id={`checkRadioNCompact_${index}`}
                name={`checkRadioNCompact_${index}`}
                value={'Não compactado'}
                checked={value.modelo == 'Não compactado'}
                onChange={() => handleCompactoChange(index, 'Não compactado')}
                disabled={true}
              />
              <label className="form-check-label" htmlFor={`checkRadioNCompact_${index}`}>
                Não compactado
              </label>
            </div>
          </>
        )}
        <Input
          etiqueta={'Diâmetro externo dos tubos (m)'}
          desativado={true}
          input={value.diam_extern_ent_tub}
          setinput={(value) => handleInputChange(index, 'diam_extern_ent_tub', value)}
          tipo={'Text'}
        />
        <Input
          etiqueta={'Diâmetro interno dos tubos (m)'}
          desativado={true}
          input={value.diam_intern_ent_tub}
          setinput={(value) => handleInputChange(index, 'diam_intern_ent_tub', value)}
          tipo={'Text'}
        />
        <Input
          etiqueta={'Expessura da parede (m)'}
          desativado={true}
          input={value.exp_parede}
          setinput={(value) => handleInputChange(index, 'exp_parede', value)}
          tipo={'number'}
        />
        {value.modelo == 'Compactado' ? (
          <>
            <Input
              etiqueta={'Número de tubos horizontal não compactado(u)'}
              desativado={true}
              input={value.N_de_tub_hor}
              setinput={(value) => handleInputChange(index, 'N_de_tub_hor', value)}
              tipo={'number'}
            />
            <Input
              etiqueta={'Número de tubos horizontal compactado(u)'}
              desativado={true}
              input={value.N_de_tub_hor_compact}
              setinput={(value) => handleInputChange(index, 'N_de_tub_hor_compact', value)}
              tipo={'number'}
            />
          </>
        ) : (
          <>
            <Input
              etiqueta={'Número de tubos horizontal não compactado(u)'}
              desativado={true}
              input={value.N_de_tub_hor}
              setinput={(value) => handleInputChange(index, 'N_de_tub_hor', value)}
              tipo={'number'}
            />
            <Input
              etiqueta={'Número de tubos horizontal compactado(u)'}
              desativado={true}
              input={value.N_de_tub_hor_compact}
              setinput={(value) => handleInputChange(index, 'N_de_tub_hor_compact', value)}
              tipo={'number'}
            />
          </>
        )}

        {value.diam_extern_ent_tub == 0.0254 ? (
          <>
            <Input
              etiqueta={'Número de tubos vertical (u) 08 lados'}
              desativado={true}
              input={value.N_de_tub_vert_8}
              setinput={(value) => handleInputChange(index, 'N_de_tub_vert_8', value)}
              tipo={'number'}
            />
          </>
        ) : (
          <>
            <Input
              etiqueta={'Número de tubos vertical (u) 10 lados'}
              desativado={true}
              input={value.N_de_tub_vert_10}
              setinput={(value) => handleInputChange(index, 'N_de_tub_vert_10', value)}
              tipo={'number'}
            />
            <Input
              etiqueta={'Número de tubos vertical (u) 08 lados'}
              desativado={true}
              input={value.N_de_tub_vert_8}
              setinput={(value) => handleInputChange(index, 'N_de_tub_vert_8', value)}
              tipo={'number'}
            />
            <Input
              etiqueta={'Número de tubos vertical (u) 06 lados'}
              desativado={true}
              input={value.N_de_tub_vert_6}
              setinput={(value) => handleInputChange(index, 'N_de_tub_vert_6', value)}
              tipo={'number'}
            />
          </>
        )}
        <Input
          etiqueta={'Distância entre tubos (mm)'}
          desativado={true}
          input={value.dist_ent_tub}
          setinput={(value) => handleInputChange(index, 'dist_ent_tub', value)}
          tipo={'number'}
        />
        <Input
          etiqueta={'Condutibilidade térmica aço carbono (W/(mK))'}
          desativado={true}
          input={value.condutib_termic_carbon}
          setinput={(value) => handleInputChange(index, 'condutib_termic_carbon', value)}
          tipo={'number'}
        />
        <Input
          etiqueta={'Condutibilidade térmica aço inox (W/(mK))'}
          desativado={true}
          input={value.condutib_termic_inox}
          setinput={(value) => handleInputChange(index, 'condutib_termic_inox', value)}
          tipo={'number'}
        />
        <Input
          etiqueta={'Comprimento dos feixes (m)'}
          desativado={true}
          input={value.comprimento_dos_feixes}
          setinput={(value) => handleInputChange(index, 'comprimento_dos_feixes', value)}
          tipo={'number'}
        />
        <div className="form-check mt-3">
          <input
            type="checkbox"
            className="form-check-input"
            id={`checkboxtubos-${index}`}
            checked={value.modelo_padrao}
            onChange={() => handleCheckboxChange(index)}
            disabled={true} // Desabilitar se a prop "dis" estiver ativa
          />
          <label className="form-check-label" htmlFor={`checkboxtubos-${index}`}>
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
              id={`checkRadio0.0254_${index}`}
              name={`checkRadio0.0254_${index}`}
              value={0.0254}
              checked={formulario.diam_extern_ent_tub == 0.0254}
              onChange={() => handleRadioChange(index, 0.0254)}
              disabled={false}
            />
            <label className="form-check-label" htmlFor={`checkRadio1_${index}`}>
              0,0254 - 1
            </label>
          </div>
          <div className="form-check mt-3">
            <input
              type="radio"
              className="form-check-input"
              id={`checkRadio0.01905_${index}`}
              name={`checkRadio0.01905_${index}`}
              value={0.01905}
              checked={formulario.diam_extern_ent_tub == 0.01905}
              onChange={() => handleRadioChange(index, 0.01905)}
              disabled={false}
            />
            <label className="form-check-label" htmlFor={`checkRadio2_${index}`}>
              0,01905 - 3/4
            </label>
          </div>
          {formulario.diam_extern_ent_tub == 0.0254 ? (
            <>
              <div className="form-check mt-3">
                <input
                  type="radio"
                  className="form-check-input"
                  id={`checkRadioNCompact_${index}`}
                  name={`checkRadioNCompact_${index}`}
                  value={'Não compactado'}
                  checked={formulario.modelo == 'Não compactado'}
                  onChange={() => handleCompactoChange(index, 'Não compactado')}
                  disabled={!formulario.status}
                />
                <label className="form-check-label" htmlFor={`checkRadioNCompact_${index}`}>
                  Não compactado
                </label>
              </div>
            </>
          ) : (
            <>
              <div className="form-check mt-3">
                <input
                  type="radio"
                  className="form-check-input"
                  id={`checkRadioCompact_${index}`}
                  name={`checkRadioCompact_${index}`}
                  value={'Compactado'}
                  checked={formulario.modelo == 'Compactado'}
                  onChange={() => handleCompactoChange(index, 'Compactado')}
                  disabled={!formulario.status}
                />
                <label className="form-check-label" htmlFor={`checkRadioCompact_${index}`}>
                  Compactado
                </label>
              </div>
              <div className="form-check mt-3">
                <input
                  type="radio"
                  className="form-check-input"
                  id={`checkRadioNCompact_${index}`}
                  name={`checkRadioNCompact_${index}`}
                  value={'Não compactado'}
                  checked={formulario.modelo == 'Não compactado'}
                  onChange={() => handleCompactoChange(index, 'Não compactado')}
                  disabled={!formulario.status}
                />
                <label className="form-check-label" htmlFor={`checkRadioNCompact_${index}`}>
                  Não compactado
                </label>
              </div>
            </>
          )}
          <Input
            etiqueta={'Diâmetro externo dos tubos (m)'}
            desativado={true}
            input={formulario.diam_extern_ent_tub}
            setinput={(value) => handleInputChange(index, 'diam_extern_ent_tub', value)}
            tipo={'Text'}
          />
          <Input
            etiqueta={'Diâmetro interno dos tubos (m)'}
            desativado={false}
            input={formulario.diam_intern_ent_tub}
            setinput={(value) => handleInputChange(index, 'diam_intern_ent_tub', value)}
            tipo={'Text'}
          />
          <Input
            etiqueta={'Expessura da parede (m)'}
            desativado={false}
            input={formulario.exp_parede}
            setinput={(value) => handleInputChange(index, 'exp_parede', value)}
            tipo={'number'}
          />
          {formulario.modelo == 'Compactado' ? (
            <>
              <Input
                etiqueta={'Número de tubos horizontal não compactado(u)'}
                desativado={true}
                input={formulario.N_de_tub_hor}
                setinput={(value) => handleInputChange(index, 'N_de_tub_hor', value)}
                tipo={'number'}
              />
              <Input
                etiqueta={'Número de tubos horizontal compactado(u)'}
                desativado={false}
                input={formulario.N_de_tub_hor_compact}
                setinput={(value) => handleInputChange(index, 'N_de_tub_hor_compact', value)}
                tipo={'number'}
              />
            </>
          ) : (
            <>
              <Input
                etiqueta={'Número de tubos horizontal não compactado(u)'}
                desativado={false}
                input={formulario.N_de_tub_hor}
                setinput={(value) => handleInputChange(index, 'N_de_tub_hor', value)}
                tipo={'number'}
              />
              <Input
                etiqueta={'Número de tubos horizontal compactado(u)'}
                desativado={true}
                input={formulario.N_de_tub_hor_compact}
                setinput={(value) => handleInputChange(index, 'N_de_tub_hor_compact', value)}
                tipo={'number'}
              />
            </>
          )}
          {formulario.diam_extern_ent_tub == 0.0254 ? (
            <Input
              etiqueta={'Número de tubos vertical 08 (u)'}
              desativado={true}
              input={formulario.N_de_tub_vert_8}
              setinput={(value) => handleInputChange(index, 'N_de_tub_vert_8', value)}
              tipo={'number'}
            />
          ) : (
            <>
              <Input
                etiqueta={'Número de tubos vertical 10 (u)'}
                desativado={true}
                input={formulario.N_de_tub_vert_10}
                setinput={(value) => handleInputChange(index, 'N_de_tub_vert_10', value)}
                tipo={'number'}
              />
              <Input
                etiqueta={'Número de tubos vertical 08 (u)'}
                desativado={true}
                input={formulario.N_de_tub_vert_8}
                setinput={(value) => handleInputChange(index, 'N_de_tub_vert_8', value)}
                tipo={'number'}
              />
              <Input
                etiqueta={'Número de tubos vertical 06 (u)'}
                desativado={true}
                input={formulario.N_de_tub_vert_6}
                setinput={(value) => handleInputChange(index, 'N_de_tub_vert_6', value)}
                tipo={'number'}
              />
            </>
          )}
          <Input
            etiqueta={'Distância entre tubos (mm)'}
            desativado={true}
            input={formulario.dist_ent_tub}
            setinput={(value) => handleInputChange(index, 'dist_ent_tub', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Condutibilidade térmica aço carbono (W/(mK))'}
            desativado={true}
            input={formulario.condutib_termic_carbon}
            setinput={(value) => handleInputChange(index, 'condutib_termic_carbon', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Condutibilidade térmica aço inox (W/(mK))'}
            desativado={true}
            input={formulario.condutib_termic_inox}
            setinput={(value) => handleInputChange(index, 'condutib_termic_inox', value)}
            tipo={'number'}
          />
          <Input
            etiqueta={'Comprimento dos feixes (m)'}
            desativado={false}
            input={formulario.comprimento_dos_feixes}
            setinput={(value) => handleInputChange(index, 'comprimento_dos_feixes', value)}
            tipo={'number'}
          />
          <div className="form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id={`checkboxtubos-${index}`}
              checked={formulario.modelo_padrao}
              onChange={() => handleCheckboxChange(index)}
              disabled={dis} // Desabilitar se a prop "dis" estiver ativa
            />
            <label className="form-check-label" htmlFor={`checkboxtubos-${index}`}>
              Selecionar como padrão
            </label>
          </div>
          <div className="container mt-3" style={{ marginLeft: '-0.7rem' }}>
            <button
              className="btn btn-danger"
              onClick={() => removerFormulario(index)}
              disabled={dis}
            >
              Remover Feixes
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
            Adicionar Feixes
          </button>
        </div>
      </div>
    </div>
  )
}

Feixes.propTypes = {
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

export default Feixes
