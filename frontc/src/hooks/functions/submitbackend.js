export const enviarDadosParaBackend = async (rotaback, dados) => {
  console.log('rotaback', rotaback)
  try {
    const response = await fetch(rotaback, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    })

    if (!response.ok) {
      let errorInfo = ''
      try {
        const errorData = await response.json()
        errorInfo = errorData.message || JSON.stringify(errorData)
      } catch (parseError) {
        errorInfo = response.statusText
      }
      throw new Error(`Erro na solicitação: ${response.status} - ${errorInfo}`)
    }

    return response.json()
  } catch (error) {
    if (!error.message.includes('Erro na solicitação:')) {
      error.message = `Erro na solicitação: ${error.message}`
    }

    console.error('Erro ao enviar dados para o backend:', error)
    throw error
  }
}

export default enviarDadosParaBackend
