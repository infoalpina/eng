import React from 'react'
import { CCard, CCardImage, CCardTitle } from '@coreui/react'
import PropTypes from 'prop-types'
import { ModalWebCam, ButtomWebCam } from '../index'

const Photos = ({ nome, fotografia, foto, setfoto }) => {
  return (
    <div>
      <CCard className="bg-white w-25 h-75">
        <CCardTitle className="d-flex justify-content-center">{nome}</CCardTitle>
        <CCardImage src={fotografia} />
        <ModalWebCam
          foto={foto}
          setfoto={setfoto}
          descricao={'Adicionar foto'}
          color={'green'}
          texto={'Selecione uma foto'}
          buttom1={<ButtomWebCam />}
          buttom2={''}
        />
      </CCard>
    </div>
  )
}

Photos.propTypes = {
  nome: PropTypes.string.isRequired,
  fotografia: PropTypes.node.isRequired,
  foto: PropTypes.node.isRequired,
  setfoto: PropTypes.node.isRequired,
}

export default Photos
