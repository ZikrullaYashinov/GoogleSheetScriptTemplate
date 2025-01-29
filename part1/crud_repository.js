class CRUDRepository {

  constructor(sheetName) {
    this.sheetName = sheetName
    this.configSheetName = 'config'
  }

  getValues() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(this.sheetName)
    return sheet.getDataRange().getValues()
  }

  readObj(id) {
    const values = this.getValues()
    const headers = values[0]

    for (let i = 0; i < values.length; i++) {
      
      if (values[i][0] == id) {
      
        var rowObject = {}
      
        for (let j = 0; j < headers.length; j++) {
      
          if (values[i][j] == "") {
            rowObject[headers[j]] = null
          } else {
            rowObject[headers[j]] = values[i][j]
          }
      
        }
      
        return rowObject;
      }
    }

    throw new Error('User not found');
  }

  readAllObj() {
    const values = this.getValues()
    const headers = values[0]

    var data = []

    for (let i = 1; i < values.length; i++) {

      var rowObject = {}

      for (let j = 0; j < headers.length; j++) {

        if (values[i][j] == "") {
          rowObject[headers[j]] = null
        } else {
          rowObject[headers[j]] = values[i][j]
        }

      }
      
      data.push(rowObject)
    }

    return data
  }

  where(value, fieldName) {
    const values = this.getValues()
    const headers = values[0]

    var fieldId = 0;
    for (let i = 0; i < headers.length; i++)
      if (headers[i] == fieldName)
        fieldId = i

    var data = []

    for (let i = 1; i < values.length; i++) {

      if (value == values[i][fieldId]) {
      
        var rowObject = {}
      
        for (let j = 0; j < headers.length; j++) {
      
          if (values[i][j] == "") {
            rowObject[headers[j]] = null
          } else {
            rowObject[headers[j]] = values[i][j]
          }
      
        }
      
        data.push(rowObject)
      }
    }

    return data
  }

  readObjsByPage(page, pageSize) {
    pageSize = (!pageSize || isNaN(pageSize)) ? 10 : pageSize
    
    const values = this.getValues()
    const headers = values[0]
    const totalItems = values.length - 1

    const startIndex = (page - 1) * pageSize + 1
    const endIndex = Math.min(startIndex + pageSize, totalItems + 1)
    const paginatedData = values.slice(startIndex, endIndex)

    const data = []

    for (let i = 0; i < paginatedData.length; i++) {
    
      var rowObject = {}
    
      for (let j = 0; j < headers.length; j++) {
    
        if (paginatedData[i][j] == "") {
          rowObject[headers[j]] = null
        } else {
          rowObject[headers[j]] = paginatedData[i][j]
        }
    
      }
    
      data.push(rowObject)
    }

    const result = {
      "currentPage": page,
      "pageSize": pageSize,
      "totalRecords": totalItems,
      "totalPages": Math.ceil(totalItems / pageSize),
      "data": data
    }

    return result
  }

  insertObj(objList) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(this.sheetName)
    const config = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(this.configSheetName)
    const tables = config.getDataRange().getValues()

    let newId = 1
    
    for (let i = 1; i < tables.length; i++) {
    
      if (tables[i][0] == this.sheetName) {
        newId = tables[i][1] + 1
        config.getRange(i + 1, 2).setValue(newId)
        break
      }
    }

    const rowId = sheet.getLastRow() + 1
    sheet.insertRowAfter(rowId - 1)
    sheet.getRange(rowId, 1).setValue(newId)
    
    for (let i = 1; i < objList.length; i++) {
      sheet.getRange(rowId, i + 1).setValue(objList[i])
    }

    return newId
  }

  updateObj(objList) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(this.sheetName)
    const range = sheet.getDataRange()
    const values = range.getValues()
    const headers = values[0]

    for (let i = 1; i < values.length; i++) {
      
      if (values[i][0] == objList[0]) {
      
        for (let j = 1; j < objList.length; j++) {
          sheet.getRange(i + 1, j + 1).setValue(objList[j])
        }
      
        var rowObject = {}
        
        for (let j = 0; j < headers.length; j++) {
          if (objList[j] == "") {
            rowObject[headers[j]] = null
          } else {
            rowObject[headers[j]] = objList[j]
          }
        }
        
        return rowObject
      }
    }
    
    throw new Error('User not found')
  }

  deleteObj(id) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(this.sheetName)
    const range = sheet.getDataRange()
    const values = range.getValues()

    for (let i = 1; i < values.length; i++) {
      if (values[i][0] == id) {
        sheet.deleteRow(i + 1)
        return `User with Id ${id} deleted successfully`
      }
    }
   
    throw new Error('User not found')
  }
}