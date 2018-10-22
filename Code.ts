//====================
//PUBLIC FUNCTIONS 
//====================

/**
 * Copy data into sheet, using size of data to get proper range
 * @param {Object[][]} data double array from a google sheet 
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet - the destination sheet 
 * @return {void}
 */
export function copyDataToSheet(data: object[][], sheet: GoogleAppsScript.Spreadsheet.Sheet): void {// eslint-disable-line no-unused-vars
  const rows = data.length;
  const cols = data[0].length;
  sheet.getRange(1, 1, rows, cols).setValues(data);
}

/**
 * Get all the data from the passed sheet reference
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet reference to google sheet 
 * @return {Object[][]} the sheet's data
 */
export function getDataFromSheet(sheet: GoogleAppsScript.Spreadsheet.Sheet): DataValues {
  const fullDataRange = sheet.getDataRange();
  return fullDataRange.getValues();
}

/**
 * Using the active spreadsheet, return the named sheet
 * @param {string} sheetName the name of the sheet we want returned
 * @return {Sheet} 
 */
function getActiveSheetByName(sheetName: string): Sheet {// eslint-disable-line no-unused-vars
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(sheetName);
}

/**
 * Return a named sheet from a spreadsheet. 
 * @param {string} spreadsheetId of the spreadsheet 
 * @param {*} sheetName of the sheet of interest
 * @return {Sheet} a google sheet reference
 */
function getNamedSheetFromId(spreadsheetId: string, sheetName: string): Sheet {// eslint-disable-line no-unused-vars
  const ss = SpreadsheetApp.openById(id);
  return ss.getSheetByName(name);
}

//==============================
//PRIVATE GOOGLE LIB FUNCTIONS 
//==============================
/**
 * PRIVATE
 * Get the first sheet reference from the spreadsheet that has the passed Google Drive File reference
 * @param {DriveFile} file spreadsheet's google drive file reference
 * @return {Sheet} a google sheet reference to the first sheet ([0]) in that file
 */
export function getFirstSheetFromFile_(file: DriveFile): Sheet {
  const ss = SpreadsheetApp.open(file);
  return ss.getSheets()[0];
}

/**
 * PRIVATE
 * Get the first sheet reference from the spreadsheet that has the passed id
 * @param {string} id spreadsheet's id 
 * @return {Sheet} a google sheet reference
 */
export function getFirstSheetFromId_(id: string): Sheet {
  const ss = SpreadsheetApp.openById(id);
  return ss.getSheets()[0];
}




