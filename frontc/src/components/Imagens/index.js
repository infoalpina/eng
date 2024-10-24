import React from 'react'
import PropTypes from 'prop-types'
import grafico01 from '../../assets/images/diagrama_de_pizza.jpg'

const Imagens = ({ src, altura, largura }) => {
  return <img src={src} style={{ width: largura, height: altura }} />
}

Imagens.propTypes = {
  src: PropTypes.string.isRequired,
  altura: PropTypes.number.isRequired,
  largura: PropTypes.number.isRequired,
}

export default Imagens
