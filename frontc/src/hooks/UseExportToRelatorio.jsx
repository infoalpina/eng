import jsPDF from 'jspdf'
import 'jspdf-autotable'

const useExportToPDF = (dados) => {
  console.log(dados)
  const exportToPDF = () => {
    const pdf = new jsPDF()
    let startY = 10

    dados.forEach((item) => {
      Object.entries(item).forEach(([sectionTitle, sectionData]) => {
        pdf.text(sectionTitle, 10, startY)
        startY += 10

        Object.entries(sectionData).forEach(([subSectionTitle, subSectionData]) => {
          const tableHeaders = Object.keys(subSectionData)
          const tableData = tableHeaders.map((header) => [header, subSectionData[header]])

          pdf.text(subSectionTitle, 10, startY)
          startY += 10

          pdf.autoTable({
            head: [['Campo', 'Valor']],
            body: tableData,
            startY,
            theme: 'grid',
            didDrawCell: (data) => {
              if (data.row.index === 0) {
                data.cell.styles.lineWidth = 0.5
                data.cell.styles.lineColor = [100, 100, 100]
                data.cell.styles.textColor = [0, 0, 0]
                data.cell.styles.fillColor = [240, 240, 240]
              }
            },
            bodyStyles: {
              cellHeight: 8,
            },
          })

          startY = pdf.autoTable.previous.finalY + 10
        })
      })
    })

    pdf.save('dados.pdf')
  }

  return exportToPDF
}

export default useExportToPDF
