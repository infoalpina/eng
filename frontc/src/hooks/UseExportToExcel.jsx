import ExcelJS from 'exceljs'
import { saveAs } from 'file-saver'

const useExportToExcel = (dados) => {
  console.log(dados)
  const exportToExcel = () => {
    const workbook = new ExcelJS.Workbook()

    for (let i = 0; i < dados.length; i++) {
      const tableKeys = Object.keys(dados[i])
      tableKeys.forEach((tableName) => {
        const tableData = dados[i][tableName]
        const keys = Object.keys(tableData)
        const values = Object.values(tableData)
        const numeroDeLinhas = keys.length

        const worksheet = workbook.addWorksheet(`Tabela ${tableName}`)

        worksheet.addRow(['Campo', 'Valor'])

        worksheet.autoFilter = {
          from: { row: 1, column: 1 },
          to: { row: 1, column: 2 },
        }

        const headerRow = worksheet.getRow(1)
        headerRow.height = 40

        for (let colIdx = 1; colIdx <= 2; colIdx++) {
          const headerCell = headerRow.getCell(colIdx)
          headerCell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'F0F8FF' }, // Azul
          }
          headerCell.border = {
            top: { style: 'thin', color: { argb: '000000' } },
            bottom: { style: 'thin', color: { argb: '000000' } },
            left: { style: 'thin', color: { argb: '000000' } },
            right: { style: 'thin', color: { argb: '000000' } },
          }
        }

        for (let rowIdx = 0; rowIdx < numeroDeLinhas; rowIdx++) {
          const key = keys[rowIdx]
          const value = values[rowIdx]
          const row = worksheet.addRow([key, value])
          row.height = 25 // Altura das linhas de dados
          row.eachCell((cell) => {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'FFFFFF' }, // Branco
            }
            cell.border = {
              top: { style: 'thin', color: { argb: '000000' } },
              bottom: { style: 'thin', color: { argb: '000000' } },
              left: { style: 'thin', color: { argb: '000000' } },
              right: { style: 'thin', color: { argb: '000000' } },
            }
            cell.alignment = { horizontal: 'left' } // Alinhar à esquerda
          })
        }

        worksheet.columns.forEach((column) => {
          column.width = 15 // Defina a largura mínima desejada para a coluna
          column.eachCell((cell) => {
            if (cell.value) {
              const cellLength = String(cell.value).length
              if (cellLength > column.width - 2) {
                column.width = cellLength + 2 // Defina a largura da coluna conforme o conteúdo
              }
            }
          })
        })
      })
    }

    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      })

      saveAs(blob, 'dados_adquiridos.xlsx')
    })
  }

  return exportToExcel
}

export default useExportToExcel
