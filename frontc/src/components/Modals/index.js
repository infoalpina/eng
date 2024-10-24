import React, { useState, useRef } from 'react'
import {
  CModal,
  CModalBody,
  CModalFooter,
  CButton,
  CModalHeader,
  CModalTitle,
  CRow,
  CCol,
  CLink,
} from '@coreui/react'
import PropTypes from 'prop-types'
import { Input, ButtomWebCam, Usuario } from '../index'
import { ButtomFile } from '../Button'
import torres from '../../assets/images/ventilador-torre.png'
import ventiladores from '../../assets/images/ventilador.png'
import { useUser } from 'src/userContext'
import { Submit } from '../Button'
import useCustomNavigate from '../../hooks/UseCustomNavigate'

export function ModalSelectCorpos({ descricao, texto, color, enviarRequisicao, setValor }) {
  const [visible, setVisible] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleSimClick = () => {
    // Chama a função de callback do componente pai com o valor selecionado
    setValor(selectedOption)
    setVisible(false)
  }

  return (
    <>
      <CButton className="mt-5 w-100" color={color} onClick={() => setVisible(!visible)}>
        {descricao}
      </CButton>
      <CModal backdrop="static" visible={visible} onClose={() => setVisible(false)}>
        <CModalTitle>Selecione o modelo de torre:</CModalTitle>
        <CModalBody>
          {texto.map((option) => (
            <div key={option} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id={option}
                name="radioOptions"
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
              />
              <label className="form-check-label" htmlFor={option}>
                {option}
              </label>
            </div>
          ))}
        </CModalBody>
        <CModalFooter>
          <CButton className="btn btn-danger" onClick={() => setVisible(false)}>
            Não
          </CButton>
          <CButton className="btn btn-success" onClick={handleSimClick}>
            Sim
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export function ModalFluidCooler({
  descricao,
  texto,
  settexto,
  color,
  enviarRequisicao,
  setValor,
  processarValorSelect,
}) {
  const [visible, setVisible] = useState(false)
  const [modelTower, setModelTower] = useState('')
  const [selectedOption, setSelectedOption] = useState(null)
  const { enviarDadosParaBackend } = useCustomNavigate()
  const { dominio } = useUser()
  const handleSimClick = () => {
    enviarRequisicao(setValor, selectedOption)
    processarValorSelect(selectedOption)
    setVisible(false)
  }
  const handleFilter = () => {
    console.log('modelTower', modelTower)
    const rota = `${dominio}backengenharia/calculoFCA/FilterTower/`
    const valores = enviarDadosParaBackend(rota, modelTower)
    console.log('valores', valores)
    valores.then((values) => {
      settexto(values['data'])
    })
    //settexto(valores)
  }
  console.log('texto', texto)

  return (
    <>
      <CButton className="mt-5 w-100" color={color} onClick={() => setVisible(!visible)}>
        {descricao}
      </CButton>
      <CModal backdrop="static" visible={visible} onClose={() => setVisible(false)}>
        <CModalTitle>Selecione o modelo de torre:</CModalTitle>
        <CModalBody>
          <Input
            etiqueta={'Filtrar Torres'}
            className="form-check-input"
            type="text"
            name="radioOptions"
            input={modelTower}
            setinput={setModelTower}
          />
          <Submit descricao={'Filtrar'} funcao={handleFilter} />
          {texto.map((option) => (
            <div key={option} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id={option}
                name="radioOptions"
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
              />
              <label className="form-check-label" htmlFor={option}>
                {option}
              </label>
            </div>
          ))}
        </CModalBody>
        <CModalFooter>
          <CButton className="btn btn-danger" onClick={() => setVisible(false)}>
            Não
          </CButton>
          <CButton className="btn btn-success" onClick={handleSimClick}>
            Sim
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export function ModalBomba({ descricao, texto, color, enviarRequisicao, setValor }) {
  const [visible, setVisible] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleSimClick = () => {
    enviarRequisicao(setValor, selectedOption)
    setVisible(false)
  }

  return (
    <>
      <CButton className="mt-5 w-100" color={color} onClick={() => setVisible(!visible)}>
        {descricao}
      </CButton>
      <CModal backdrop="static" visible={visible} onClose={() => setVisible(false)}>
        <CModalTitle>Selecione o modelo da bomba:</CModalTitle>
        <CModalBody>
          {texto.map((option) => {
            const combinedValue = `${option.id} - ${option.modelo} - ${option.vazao}`
            return (
              <div key={option.id} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id={option.modelo}
                  name="radioOptions"
                  value={combinedValue}
                  checked={selectedOption === combinedValue}
                  onChange={() => setSelectedOption(combinedValue)}
                />
                <label className="form-check-label" htmlFor={option.modelo}>
                  {combinedValue}
                </label>
              </div>
            )
          })}
        </CModalBody>
        <CModalFooter>
          <CButton className="btn btn-danger" onClick={() => setVisible(false)}>
            Não
          </CButton>
          <CButton className="btn btn-success" onClick={handleSimClick}>
            Sim
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export function ModalVentiladores({ descricao, texto, color, enviarRequisicao, setValor }) {
  const [visible, setVisible] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleSimClick = () => {
    enviarRequisicao(setValor, selectedOption)
    setVisible(false)
  }

  return (
    <>
      <CButton className="mt-5 w-100" color={color} onClick={() => setVisible(!visible)}>
        {descricao}
      </CButton>
      <CModal backdrop="static" visible={visible} onClose={() => setVisible(false)}>
        <CModalTitle>Selecione o modelo do ventilador:</CModalTitle>
        <CModalBody>
          {texto.map((option) => {
            const combinedValue = `${option.id} - ${option.modelo}`
            return (
              <div key={option.id} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id={option.modelo}
                  name="radioOptions"
                  value={combinedValue}
                  checked={selectedOption === combinedValue}
                  onChange={() => setSelectedOption(combinedValue)}
                />
                <label className="form-check-label" htmlFor={option.modelo}>
                  {combinedValue}
                </label>
              </div>
            )
          })}
        </CModalBody>
        <CModalFooter>
          <CButton className="btn btn-danger" onClick={() => setVisible(false)}>
            Não
          </CButton>
          <CButton className="btn btn-success" onClick={handleSimClick}>
            Sim
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
export function ModalAcio({ descricao, texto, color, enviarRequisicao, setValor }) {
  const [visible, setVisible] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleSimClick = () => {
    enviarRequisicao(setValor, selectedOption)
    setVisible(false)
  }

  const handleOptionChange = (optionId) => {
    console.log('optionId', optionId)
    setSelectedOption(optionId)
  }

  return (
    <>
      <CButton className="mt-5 w-100" color={color} onClick={() => setVisible(!visible)}>
        {descricao}
      </CButton>
      <CModal backdrop="static" visible={visible} onClose={() => setVisible(false)}>
        <CModalTitle>Selecione o modelo do acionamento:</CModalTitle>
        <CModalBody>
          {texto.map((option) => (
            <div
              key={`${option.id}-${option.potencia_do_motor}-${option.tipo_de_acionamento_de_transmissao}`}
              className="form-check"
            >
              <input
                className="form-check-input"
                type="radio"
                id={`${option.id}-${option.potencia_do_motor}-${option.tipo_de_acionamento_de_transmissao}`}
                name="radioOptions"
                value={`${option.id}-${option.potencia_do_motor}-${option.tipo_de_acionamento_de_transmissao}`}
                checked={
                  selectedOption ===
                  `${option.id}-${option.potencia_do_motor}-${option.tipo_de_acionamento_de_transmissao}`
                }
                onChange={() =>
                  handleOptionChange(
                    `${option.id}-${option.potencia_do_motor}-${option.tipo_de_acionamento_de_transmissao}`,
                  )
                }
              />
              <label
                className="form-check-label"
                htmlFor={`${option.id}-${option.potencia_do_motor}-${option.tipo_de_acionamento_de_transmissao}`}
              >
                {`${option.id}-${option.potencia_do_motor}-${option.tipo_de_acionamento_de_transmissao}`}
              </label>
            </div>
          ))}
        </CModalBody>
        <CModalFooter>
          <CButton className="btn btn-danger" onClick={() => setVisible(false)}>
            Não
          </CButton>
          <CButton className="btn btn-success" onClick={handleSimClick}>
            Sim
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
export function ModalTubos({ descricao, texto, color, enviarRequisicao, setValor }) {
  const [visible, setVisible] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleSimClick = () => {
    enviarRequisicao(setValor, selectedOption)
    setVisible(false)
  }

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId)
  }

  return (
    <>
      <CButton className="mt-5 w-100" color={color} onClick={() => setVisible(!visible)}>
        {descricao}
      </CButton>
      <CModal backdrop="static" visible={visible} onClose={() => setVisible(false)}>
        <CModalTitle>Selecione a quantidade de tubos:</CModalTitle>
        <CModalBody>
          {texto.map((option) => (
            <div key={option.id}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id={`id-${option.id}-6`}
                  name={`radioOptions-${option.id}`}
                  value={`id-${option.id}-6`}
                  checked={selectedOption === `id-${option.id}-6`}
                  onChange={() => handleOptionChange(`id-${option.id}-6`)}
                />
                <label className="form-check-label" htmlFor={`id-${option.id}-6`}>
                  {`id ${option.id} - N_de_tub_vert_6: ${option.N_de_tub_vert_6} unidades`}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id={`id-${option.id}-8`}
                  name={`radioOptions-${option.id}`}
                  value={`id-${option.id}-8`}
                  checked={selectedOption === `id-${option.id}-8`}
                  onChange={() => handleOptionChange(`id-${option.id}-8`)}
                />
                <label className="form-check-label" htmlFor={`id-${option.id}-8`}>
                  {`id ${option.id} - N_de_tub_vert_8: ${option.N_de_tub_vert_8} unidades`}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id={`id-${option.id}-10`}
                  name={`radioOptions-${option.id}`}
                  value={`id-${option.id}-10`}
                  checked={selectedOption === `id-${option.id}-10`}
                  onChange={() => handleOptionChange(`id-${option.id}-10`)}
                />
                <label className="form-check-label" htmlFor={`id-${option.id}-10`}>
                  {`id ${option.id} - N_de_tub_vert_10: ${option.N_de_tub_vert_10} unidades`}
                </label>
              </div>
            </div>
          ))}
        </CModalBody>
        <CModalFooter>
          <CButton className="btn btn-danger" onClick={() => setVisible(false)}>
            Não
          </CButton>
          <CButton className="btn btn-success" onClick={handleSimClick}>
            Sim
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export function ModalCalorEspecifico({
  descricao,
  texto,
  valor,
  setValor = null,
  enviarRequisicao = null,
}) {
  const [visible, setVisible] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  // Convertendo o objeto texto em uma lista de opções selecionáveis (radio buttons)
  const renderLista = () => {
    return Object.entries(texto).map(([key, value]) => (
      <div key={key} className="form-check">
        <input
          className="form-check-input"
          type="radio"
          id={key}
          name="radioOptions"
          value={`${key} - ${value}`}
          checked={selectedOption === `${key} - ${value}`}
          onChange={() => handleOptionChange(`${key} - ${value}`)}
        />
        <label className="form-check-label" htmlFor={key}>
          {key} - {value}
        </label>
      </div>
    ))
  }

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId)
  }

  const handleSimClick = () => {
    enviarRequisicao(setValor, selectedOption)
    setVisible(false)
  }

  return (
    <>
      <CButton className="mt-5 w-100" onClick={() => setVisible(!visible)}>
        {descricao}
      </CButton>
      <CModal backdrop="static" visible={visible} onClose={() => setVisible(false)}>
        <CModalTitle>Selecione o tipo de material e o calor específico:</CModalTitle>
        <CModalBody>{renderLista()}</CModalBody>
        <CModalFooter>
          <CButton className="btn btn-danger" onClick={() => setVisible(false)}>
            Não
          </CButton>
          <CButton className="btn btn-success" onClick={handleSimClick}>
            Sim
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export function ModalPrint({
  Observacoes,
  descricao,
  texto,
  color,
  enviarRequisicaoBasicoFCAAgua = null,
  enviarRequisicaoCompletoFCAAgua = null,
  enviarRequisicaoBasicoFCAOleo = null,
  enviarRequisicaoCompletoFCAOleo = null,
  enviarRequisicaoVentiladores = null,
  tipoDeFluido = 'óleo',
}) {
  const [visible, setVisible] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const { QuestionPrint } = useUser()

  const handleSelect = (option) => {
    setSelectedOption(option)
  }
  return (
    <>
      <CButton className="mt-5 w-100" color={color} onClick={() => setVisible(!visible)}>
        {descricao}
      </CButton>
      <CModal backdrop="static" visible={visible} onClose={() => setVisible(false)}>
        <CModalBody>{texto}</CModalBody>
        <CModalFooter>
          <CRow className="mb-3">
            <CCol>
              <CButton
                className="mb-2 w-100"
                color={selectedOption === 'FCA' ? 'primary' : 'success'}
                onClick={() => handleSelect('FCA')}
              >
                FCA
              </CButton>
              {enviarRequisicaoVentiladores != null && QuestionPrint && (
                <CButton
                  className="w-100"
                  color={selectedOption === 'Ventiladores' ? 'primary' : 'success'}
                  onClick={() => handleSelect('Ventiladores')}
                >
                  Ventiladores
                </CButton>
              )}
            </CCol>
          </CRow>
          {selectedOption === 'Ventiladores' && enviarRequisicaoVentiladores ? (
            <CRow className="mb-3">
              <CCol>
                <CLink
                  className="w-100 mb-2 btn btn-success"
                  href={`#/printVentiladores?Observacoes=${Observacoes}`}
                >
                  Básico
                </CLink>
              </CCol>
            </CRow>
          ) : (
            <CRow className="mb-3">
              <CCol>
                {enviarRequisicaoBasicoFCAAgua && (
                  <CLink
                    className="w-100 mb-2 btn btn-success"
                    href={`#/PrintFCA?Observacoes=${Observacoes}&fluido=${tipoDeFluido}&sorc=simples`}
                  >
                    Básico
                  </CLink>
                )}
                {enviarRequisicaoCompletoFCAAgua && (
                  <CLink
                    className="w-100 mb-2 btn btn-warning"
                    href={`#/PrintFCA?Observacoes=${Observacoes}&fluido=${tipoDeFluido}&sorc=completo`}
                  >
                    Completo
                  </CLink>
                )}
              </CCol>
            </CRow>
          )}
          <CRow>
            <CCol>
              <CButton className="w-100" color="danger" onClick={() => setVisible(false)}>
                Fechar
              </CButton>
            </CCol>
          </CRow>
        </CModalFooter>
      </CModal>
    </>
  )
}

ModalCalorEspecifico.propTypes = {
  descricao: PropTypes.string.isRequired,
  texto: PropTypes.object.isRequired, // O objeto contendo as opções de material e calor específico
  valor: PropTypes.string,
  setValor: PropTypes.func, // Função para armazenar o valor selecionado
  enviarRequisicao: PropTypes.func, // Função para enviar a requisição com o valor selecionado
}

ModalPrint.propTypes = {
  Observacoes: PropTypes.string,
  enviarRequisicaoBasicoFCAAgua: PropTypes.func,
  enviarRequisicaoCompletoFCAAgua: PropTypes.func,
  enviarRequisicaoBasicoFCAOleo: PropTypes.func,
  enviarRequisicaoCompletoFCAOleo: PropTypes.func,
  enviarRequisicaoVentiladores: PropTypes.func,
  tipoDeFluido: PropTypes.string,
  descricao: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

ModalPrint.defaultProps = {
  enviarRequisicaoCompleto: null,
  enviarRequisicaoBasico: null,
}

export function Modal({ descricao, texto, color, enviarRequisicao }) {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <CButton className="mt-5 w-100 " color={color} onClick={() => setVisible(!visible)}>
        {descricao}
      </CButton>
      <CModal backdrop="static" visible={visible} onClose={() => setVisible(false)}>
        <CModalBody>{texto}</CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => setVisible(false)}>
            Não
          </CButton>
          <CButton color="success" onClick={enviarRequisicao}>
            Sim
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export function ModalWebCam({ color, descricao, texto, foto, setfoto }) {
  const [visible, setVisible] = useState(false)
  const [cameramod, setcameramod] = useState(false)
  const [webCam, setWebCam] = useState(false)
  const [estadoinit, setestadoinit] = useState(false)
  const [usar, setusar] = useState(false)
  const [usarFoto, setUsarFoto] = useState(false)
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const fileRef = useRef(null)
  const openCam = () => {
    setcameramod(!cameramod)
    setestadoinit(!estadoinit)
    setWebCam(!webCam)
    if (!cameramod) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
        })
        .catch((error) => {
          console.error('Erro ao acessar a webcam:', error)
        })
    }
  }
  const captureImage = () => {
    if (webCam) {
      const canvas = canvasRef.current
      canvas.height = videoRef.current.videoHeight
      canvas.width = videoRef.current.videoWidth
      const context = canvas.getContext('2d')
      context.drawImage(videoRef.current, 0, 0)
      setcameramod(!cameramod)
      setusar(!usar)
    }
  }

  const usarFile = () => {
    if (webCam) {
      const canvas = canvasRef.current
      const imageDataURL = canvas.toDataURL('image/jpeg')
      setfoto(imageDataURL)
      setUsarFoto(true)
    }
  }
  return (
    <>
      <Usuario src={foto} />

      <button
        className="mt-5 w-100"
        style={{ background: color, border: 0, borderRadius: '10px', height: '5rem' }}
        onClick={() => {
          setVisible(true)
          setestadoinit(true)
        }}
      >
        {descricao}
      </button>
      <CModal backdrop="static" visible={visible} onClose={() => setVisible(false)}>
        <CModalBody>{texto}</CModalBody>
        <CModalFooter>
          {estadoinit && (
            <>
              <CButton color="danger" onClick={() => setVisible(false)}>
                Cancelar
              </CButton>
              <ButtomFile
                descricao={'Selecionar foto da galeria'}
                setfoto={setfoto}
                acceptedFileType="image/jpeg, image/png, image/JPEG, image/PNG "
              />
            </>
          )}
          <ButtomWebCam
            descricao={'Abrir camera'}
            funcao1={openCam}
            estado1={cameramod}
            estado2={estadoinit}
            videoRef={videoRef}
          />
          {cameramod && (
            <>
              <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ height: '100%' }}
              >
                <video autoPlay ref={videoRef} className="w-100"></video>
                <div className={'m-5'}>
                  <button onClick={captureImage} className="btn btn-primary m-2">
                    Fotografar
                  </button>
                </div>
              </div>
            </>
          )}
          <canvas ref={canvasRef} className="w-100"></canvas>
          {usar && (
            <>
              <button className="btn btn-success mt-2" ref={fileRef} onClick={usarFile}>
                Usar
              </button>
              <button
                onClick={() => {
                  setVisible(false)
                  setusar(false)
                  setcameramod(false)
                  setWebCam(false)
                }}
                className="btn btn-primary m-2"
              >
                Excluir
              </button>
            </>
          )}
        </CModalFooter>
      </CModal>
    </>
  )
}

export function ModalFilter({ Dados, filter, setfilter, callback, Programa2, setPrograma2 }) {
  const [visible, setVisible] = useState(false)
  console.log(Programa2)
  const TrocarSistemaToFCA = () => {
    setPrograma2('FCA')
  }

  const TrocarSistemaToSelecao = () => {
    setPrograma2('Selecao')
  }

  return (
    <>
      <CButton onClick={() => setVisible(!visible)} className="w-100">
        Filtro
      </CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Filtre as suas opções</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow className="w-100 d-flex justify-content-center">
            <CCol xs="4" className="d-flex justify-content-center">
              <CButton color="primary" className="mr-1" onClick={TrocarSistemaToFCA}>
                FCA
              </CButton>
            </CCol>
            <CCol xs="4" className="d-flex justify-content-center">
              <CButton color="primary" onClick={TrocarSistemaToSelecao}>
                Seleção
              </CButton>
            </CCol>
          </CRow>
          <CRow>
            <Input
              etiqueta={'Sistema'}
              desativado={true}
              input={Programa2}
              setinput={setPrograma2}
            />
          </CRow>
          <CRow>
            {Dados.map((etiqueta, index) => (
              <Input
                key={etiqueta}
                etiqueta={etiqueta}
                input={filter[index]} // Usa o índice para acessar o elemento correto em filter
                setinput={setfilter[index]} // Usa o índice para acessar o elemento correto em setfilter
              />
            ))}
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Fechar
          </CButton>
          <CButton color="primary" onClick={callback}>
            Filtrar
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

ModalFilter.propTypes = {
  Dados: PropTypes.arrayOf(PropTypes.string).isRequired, // Ajuste o tipo conforme necessário
  filter: PropTypes.arrayOf(PropTypes.any).isRequired, // Ajuste o tipo conforme necessário
  setfilter: PropTypes.arrayOf(PropTypes.func).isRequired, // Deve ser uma array de funções
  callback: PropTypes.func.isRequired,
  Programa2: PropTypes.string.isRequired, // Ajuste o tipo conforme necessário
  setPrograma2: PropTypes.func.isRequired,
}

ModalSelectCorpos.propTypes = {
  enviarRequisicao: PropTypes.func.isRequired,
  descricao: PropTypes.string.isRequired,
  texto: PropTypes.arrayOf(PropTypes.string).isRequired, // Correção aqui
  color: PropTypes.string.isRequired,
  setValor: PropTypes.func.isRequired, // Correção aqui
}
ModalFluidCooler.propTypes = {
  processarValorSelect: PropTypes.func,
  enviarRequisicao: PropTypes.func.isRequired,
  descricao: PropTypes.string.isRequired,
  texto: PropTypes.arrayOf(PropTypes.string).isRequired, // Correção aqui
  settexto: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  setValor: PropTypes.func.isRequired, // Correção aqui
}

ModalBomba.propTypes = {
  enviarRequisicao: PropTypes.func.isRequired,
  descricao: PropTypes.string.isRequired,
  texto: PropTypes.arrayOf(PropTypes.string).isRequired, // Correção aqui
  color: PropTypes.string.isRequired,
  setValor: PropTypes.func.isRequired, // Correção aqui
}

ModalVentiladores.propTypes = {
  enviarRequisicao: PropTypes.func.isRequired,
  descricao: PropTypes.string.isRequired,
  texto: PropTypes.arrayOf(PropTypes.string).isRequired, // Correção aqui
  color: PropTypes.string.isRequired,
  setValor: PropTypes.func.isRequired, // Correção aqui
}

ModalAcio.propTypes = {
  enviarRequisicao: PropTypes.func.isRequired,
  descricao: PropTypes.string.isRequired,
  texto: PropTypes.arrayOf(PropTypes.string).isRequired, // Correção aqui
  color: PropTypes.string.isRequired,
  setValor: PropTypes.func.isRequired, // Correção aqui
}

ModalTubos.propTypes = {
  enviarRequisicao: PropTypes.func.isRequired,
  descricao: PropTypes.string.isRequired,
  texto: PropTypes.arrayOf(PropTypes.string).isRequired, // Correção aqui
  color: PropTypes.string.isRequired,
  setValor: PropTypes.func.isRequired, // Correção aqui
}

Modal.propTypes = {
  enviarRequisicao: PropTypes.func.isRequired,
  descricao: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

ModalWebCam.propTypes = {
  descricao: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  foto: PropTypes.node.isRequired,
  setfoto: PropTypes.node.isRequired,
}
