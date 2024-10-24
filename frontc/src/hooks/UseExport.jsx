import useExportToExcel from './UseExportToExcel' // 'U' maiúsculo no início
import useExportToPDF from './UseExportToRelatorio'
import ExcelJS from 'exceljs'
import { saveAs } from 'file-saver'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function useExport() {
  const exportToExcel = useExportToExcel()
  const exportToPDF = useExportToPDF()

  function exportExcelBasico(dados) {
    console.log(dados)
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
    //exportToExcel(dados)
  }

  function generateUniqueSheetName(workbook, baseName) {
    let suffix = 1
    let sheetName = `${baseName}_${suffix}`

    while (workbook.getWorksheet(sheetName)) {
      suffix++
      sheetName = `${baseName}_${suffix}`
    }

    return sheetName
  }

  function exportExcelCompleto(dados) {
    console.log(dados)
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
    //exportToExcel(dados)
  }

  pdfMake.vfs = pdfFonts.pdfMake.vfs
  function exportPDFBasico(dados) {
    const docDefinition = {
      content: [],
    }

    dados.forEach((section) => {
      Object.keys(section).forEach((subsection) => {
        // Adiciona apenas os valores internos ao PDF
        const tableData = Object.entries(section[subsection]).map(([key, value]) => [key, value])

        docDefinition.content.push({
          table: {
            headerRows: 1,
            widths: ['*', '*'],
            body: tableData,
            layout: 'lightHorizontalLines',
            // Remova a borda e defina a cor da borda para branco
            border: [false, false, false, false], // ou border: [0, 0, 0, 0]
          },
          margin: [0, 0, 0, 0],
          fontSize: 10,
        })
      })
    })
    // Gera o PDF e o salva
    pdfMake.createPdf(docDefinition).download('relatorio_basico.pdf')
  }

  function exportPDFCompleto(dados) {
    const docDefinition = {
      content: [],
    }

    dados.forEach((section) => {
      Object.keys(section).forEach((subsection) => {
        // Adiciona apenas os valores internos ao PDF
        const tableData = Object.entries(section[subsection]).map(([key, value]) => [key, value])

        docDefinition.content.push({
          table: {
            headerRows: 1,
            widths: ['*', '*'],
            body: tableData,
            layout: 'lightHorizontalLines',
            // Remova a borda e defina a cor da borda para branco
            border: [false, false, false, false], // ou border: [0, 0, 0, 0]
          },
          margin: [0, 0, 0, 0],
          fontSize: 8,
        })
      })
    })
    // Gera o PDF e o salva
    pdfMake.createPdf(docDefinition).download('relatorio_completo.pdf')
  }

  return {
    exportExcelBasico,
    exportExcelCompleto,
    exportPDFBasico,
    exportPDFCompleto,
  }
}

export default useExport
