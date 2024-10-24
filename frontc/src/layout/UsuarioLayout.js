import React, { useState } from 'react'
import { Dropdown, Imagens, Input, Photos } from '../components/index'
import { CCol, CRow } from '@coreui/react'
import propTypes from 'prop-types'

const Usuarios = ({
  botao1,
  botao2,
  fotografia,
  desativado,
  foto,
  setfoto,
  id,
  setid,
  typeuser,
  settypeuser,
  user,
  setuser,
  password,
  setpassword,
  nameuser,
  setnameuser,
}) => {
  return (
    <form
      className="border rounded m-3 p-3"
      style={{ border: '1px solid black', borderRadius: '10px' }}
    >
      <CRow>
        <Photos fotografia={fotografia} foto={foto} setfoto={setfoto} />
      </CRow>
      <CRow
        className="border rounded m-3 p-3"
        style={{ border: '1px solid black', borderRadius: '10px' }}
      ></CRow>
      <CCol
        className="border rounded m-3 p-3"
        style={{ border: '1px solid black', borderRadius: '10px' }}
        typeuser={''}
        settypeuser={''}
      >
        <CCol>
          <Input etiqueta={'ID'} desativado={true} input={id} setinput={setid} />
        </CCol>
        <CCol>
          <Dropdown
            etiqueta={typeuser}
            desativado={desativado}
            valores={['ti', 'engenharia', 'geral']}
            setValor={settypeuser}
            titulo={'tipo de usuário'}
          />
        </CCol>
        <CCol>
          <Input etiqueta={'Usuário'} desativado={desativado} input={user} setinput={setuser} />
        </CCol>
        <CCol>
          <Input
            etiqueta={'Senha'}
            desativado={desativado}
            input={password}
            setinput={setpassword}
          />
        </CCol>
        <CCol>
          <Input
            etiqueta={'Nome do Usuário'}
            desativado={desativado}
            input={nameuser}
            setinput={setnameuser}
          />
        </CCol>
      </CCol>
      <CCol
        className="border rounded m-3 p-3"
        style={{ border: '1px solid black', borderRadius: '10px' }}
      >
        <CRow> {botao1} </CRow>
        <CRow> {botao2} </CRow>
      </CCol>
    </form>
  )
}

Usuarios.propTypes = {
  desativado: propTypes.bool.isRequired,
  imprimir: propTypes.node.isRequired,
  fotografia: propTypes.node.isRequired,
  botao1: propTypes.node.isRequired,
  botao2: propTypes.node.isRequired,
  foto: propTypes.string.isRequired,
  setfoto: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  setid: propTypes.string.isRequired,
  typeuser: propTypes.string.isRequired,
  settypeuser: propTypes.string.isRequired,
  user: propTypes.string.isRequired,
  setuser: propTypes.string.isRequired,
  password: propTypes.string.isRequired,
  setpassword: propTypes.string.isRequired,
  nameuser: propTypes.string.isRequired,
  setnameuser: propTypes.string.isRequired,
}

export default Usuarios
