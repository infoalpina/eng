import jsPDF from 'jspdf'
import 'jspdf-autotable'

const useExportToPDF = (dados) => {
  const exportToPDF = (content) => {
    const pdf = new jsPDF()

    const tableHeaders = Object.keys(dados[0])
    const tableData = dados.map((item) => Object.values(item))
    pdf.autoTable({
      head: [tableHeaders],
      body: tableData,
    })
    const emptyPDF = pdf.save('tabela.pdf')
    return emptyPDF
  }
  return exportToPDF // Retornar o PDF em branco como uma string base64
}

export default useExportToPDF
