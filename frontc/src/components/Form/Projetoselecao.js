import React, { useState, useEffect } from 'react'
import {
  Input,
  Radio,
  Checkbox,
  Checkbox2,
  Success,
  Cancel,
  Dropdown,
  Date,
  ModalFluidCooler,
} from '../index'

import { CRow, CCol, CCard, CCardImage, CCardBody, CCardText } from '@coreui/react'
import useCustomNavigate from '../../hooks/UseCustomNavigate'
import { useUser } from 'src/userContext'

const ProjetoSelecao = () => {
  const [NumeroDeLadosLivresEntradaDeAr, setNumeroDeLadosLivresEntradaDeAr] = useState(
    'Número de lados com livre entrada de ar',
  )
  const { validarSelecao, encaminharPara, enviarDadosParaBackend } = useCustomNavigate()
  const { dominio } = useUser()
  const [VazaoDaAgua, setVazaoDaAgua] = useState()
  const [TemperaturaDaAguaQuente, setTemperaturaDaAguaQuente] = useState()
  const [TemperaturaDaAguaFria, setTemperaturaDaAguaFria] = useState()
  const [TemperaturaDoBulboUmido, setTemperaturaDoBulboUmido] = useState()
  const [PerdaDePressaoEstaticaAdicional, setPerdaDePressaoEstaticaAdicional] = useState()
  const [AltitudeLocal, setAltitudeLocal] = useState()
  const [NumeroDeCelulasMinimo, setNumeroDeCelulasMinimo] = useState()
  const [NumeroDeCelulasMaximo, setNumeroDeCelulasMaximo] = useState()
  const [pilaretesNome, setPilaretesNome] = useState([])
  const [Bacia, setBacia] = useState()
  const [Motorizacao, setMotorizacao] = useState()
  const [checkedItems, setCheckedItems] = useState({})
  const [checkedItemsMateriais, setCheckedItemsMateriais] = useState({
    Rev: false,
    Enc: false,
    Elim: false,
  })

  const handleChangeMateriais = (id, isChecked) => {
    setCheckedItemsMateriais({
      ...checkedItemsMateriais,
      [id]: isChecked,
    })
  }

  const CalculaSelecao = (event) => {
    event.preventDefault()
    var rota = `${dominio}backengenharia/Selecao/CalculoSelecao/`
    var dados = {
      VazaoDaAgua: VazaoDaAgua,
      NumeroDeLadosLivresEntradaDeAr: NumeroDeLadosLivresEntradaDeAr,
      TemperaturaDaAguaQuente: TemperaturaDaAguaQuente,
      TemperaturaDaAguaFria: TemperaturaDaAguaFria,
      TemperaturaDoBulboUmido: TemperaturaDoBulboUmido,
      PerdaDePressaoEstaticaAdicional: PerdaDePressaoEstaticaAdicional,
      AltitudeLocal: AltitudeLocal,
      NumeroDeCelulasMinimo: NumeroDeCelulasMinimo,
      NumeroDeCelulasMaximo: NumeroDeCelulasMaximo,
      Bacia: Bacia,
      Motorizacao: Motorizacao,
      checkedItemsMateriais: checkedItemsMateriais,
      pilaretesNome: pilaretesNome,
      checkedItems: checkedItems,
    }
    var recoveryDatas = validarSelecao(dados)
    console.log('recoveryDatas', recoveryDatas)
    if (recoveryDatas.length === 0) {
      console.log('testando')
      var response = enviarDadosParaBackend(rota, dados)
      console.log(response)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dados = {} // Se precisar enviar parâmetros na URL, ajuste aqui
        const rota = `${dominio}backengenharia/Selecao/ReadEnchimento/`

        // Função para enviar dados para o backend via GET
        const dadosEnchimentos = async (url) => {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          if (!response.ok) {
            throw new Error(`Erro: ${response.statusText}`)
          }
          return response.json()
        }

        const response = await dadosEnchimentos(rota)
        console.log('response', response.data)
        setPilaretesNome(response.data)
        let arrayCheckedItems = {}
        response.data.forEach((element, id) => {
          arrayCheckedItems[id] = false
        })
        setCheckedItems(arrayCheckedItems)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }
    fetchData()
  }, [])

  const handleChange = (id, isChecked) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: isChecked,
    }))
  }

  return (
    <form className="w-100 mt-3 ms-3" style={{ border: '1px solid black', borderRadius: '10px' }}>
      <CRow
        className="border rounded m-3 p-3"
        style={{ border: '1px solid black', borderRadius: '10px' }}
      >
        <p>Cliente</p>
        <CRow>
          <Input etiqueta={'Vazão da água'} input={VazaoDaAgua} setinput={setVazaoDaAgua} />
        </CRow>
        <CRow>
          <Input
            etiqueta={'Temperatura da água quente'}
            input={TemperaturaDaAguaQuente}
            setinput={setTemperaturaDaAguaQuente}
          />
        </CRow>
        <CRow>
          <Input
            etiqueta={'Temperatura da água fria'}
            input={TemperaturaDaAguaFria}
            setinput={setTemperaturaDaAguaFria}
          />
        </CRow>
        <CRow>
          <Input
            etiqueta={'Temperatura do bulbo úmido'}
            input={TemperaturaDoBulboUmido}
            setinput={setTemperaturaDoBulboUmido}
          />
        </CRow>
        <CRow>
          <Input
            etiqueta={'Perda de pressão estatica adicional'}
            input={PerdaDePressaoEstaticaAdicional}
            setinput={setPerdaDePressaoEstaticaAdicional}
          />
        </CRow>
        <CRow>
          <Dropdown
            titulo={'Número de lados com livre entrada de ar'}
            etiqueta={NumeroDeLadosLivresEntradaDeAr}
            valores={['1', '2', '3', '4']}
            setValor={setNumeroDeLadosLivresEntradaDeAr}
          />
        </CRow>
        <CRow>
          <Input etiqueta={'Altitude local'} input={AltitudeLocal} setinput={setAltitudeLocal} />
        </CRow>
        <CRow>
          <Input
            etiqueta={'Número de células mínimo'}
            input={NumeroDeCelulasMinimo}
            setinput={setNumeroDeCelulasMinimo}
          />
        </CRow>
        <CRow>
          <Input
            etiqueta={'Número de células máxima'}
            input={NumeroDeCelulasMaximo}
            setinput={setNumeroDeCelulasMaximo}
          />
        </CRow>
      </CRow>
      <CRow>
        <CRow
          className="border rounded m-3 w-50 p-3"
          style={{ border: '1px solid black', borderRadius: '10px' }}
        >
          <CRow>
            <p>Bacia</p>
          </CRow>
          <CRow>
            <CCol>
              <Radio
                etiqueta={'PRF'}
                nome={'Bacia'}
                ativo={Bacia === 'PRF'}
                desativado={false}
                onChange={() => setBacia('PRF')}
              />
            </CCol>
            <CCol>
              <Radio
                etiqueta={'Concreto'}
                nome={'Bacia'}
                ativo={Bacia === 'Concreto'}
                desativado={false}
                onChange={() => setBacia('Concreto')}
              />
            </CCol>
            <CCol>
              <Radio
                etiqueta={'BE'}
                nome={'Bacia'}
                ativo={Bacia === 'BE'}
                desativado={false}
                onChange={() => setBacia('BE')}
              />
            </CCol>
          </CRow>
        </CRow>
        <CCol
          className="border rounded m-3 w-50 p-3"
          style={{ border: '1px solid black', borderRadius: '10px' }}
        >
          <CRow>
            <p>Motorização</p>
          </CRow>
          <CRow>
            <CCol>
              <Radio
                etiqueta={'Classe 1'}
                nome={'Motorizacao'}
                ativo={Motorizacao === 'Classe 1'}
                desativado={false}
                onChange={() => setMotorizacao('Classe 1')}
              />
            </CCol>
            <CCol>
              <Radio
                etiqueta={'Classe 2'}
                nome={'Motorizacao'}
                ativo={Motorizacao === 'Classe 2'}
                desativado={false}
                onChange={() => setMotorizacao('Classe 2')}
              />
            </CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow
        className="border rounded m-3 p-3"
        style={{ border: '1px solid black', borderRadius: '10px' }}
      >
        <p>Materiais AE</p>
        <CCol>
          <Checkbox
            id="Rev"
            value="Revestimento"
            etiqueta="Revestimento"
            checked={checkedItemsMateriais['Rev']}
            onChange={(isChecked) => handleChangeMateriais('Rev', isChecked)}
          />
        </CCol>
        <CCol>
          <Checkbox
            id="Enc"
            value="Enchimento"
            etiqueta="Enchimento"
            checked={checkedItemsMateriais['Enc']}
            onChange={(isChecked) => handleChangeMateriais('Enc', isChecked)}
          />
        </CCol>
        <CCol>
          <Checkbox
            id="Elim"
            value="Elimina gotas"
            etiqueta="Elimina gotas"
            checked={checkedItemsMateriais['Elim']}
            onChange={(isChecked) => handleChangeMateriais('Elim', isChecked)}
          />
        </CCol>
      </CRow>
      <CRow
        className="border rounded m-3 p-3"
        style={{ border: '1px solid black', borderRadius: '10px' }}
      >
        <p>Enchimento</p>
        {pilaretesNome.map((value, id) => (
          <CCol key={id}>
            <Checkbox2
              id={id}
              value={value}
              etiqueta={value}
              checked={checkedItems[id] || false}
              onChange={(isChecked) => handleChange(id, isChecked)}
            />
          </CCol>
        ))}
      </CRow>
      <CRow
        className="border rounded m-3 p-3"
        style={{ border: '1px solid black', borderRadius: '10px' }}
      >
        <CCol>
          <Success descricao={'Processar'} funcao={CalculaSelecao} />
        </CCol>
        <CCol>
          <Cancel descricao={'Limpar dados'} />
        </CCol>
      </CRow>
    </form>
  )
}

export default ProjetoSelecao
