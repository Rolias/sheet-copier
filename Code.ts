//====================
//PUBLIC FUNCTIONS 
//====================

/**
 * Takes the first file in the folder (the most recent one) and copies all the data from
 * the first sheet on that Spreadsheet to the first sheet on the destination spreadsheet
 * @param {string} srcFolderId - the id string of the folder that has the spreadsheet acting as the source
 * @param {string} destSheetId  - the id string of the spreadsheet that is the destination
 * @return {void}
 * exported copyDataFromSourceFolderToDestSheet
 */
function copyDataFromSourceFolderToDestSheet(srcFolderId: string, destSheetId: string): void { // eslint-disable-line no-unused-vars
  const file = getMostRecentFileInFolder_(srcFolderId);
  const file_sheet = getFirstSheetFromFile_(file);
  const data = getDataFromSheet(file_sheet);
  const sheet = getFirstSheetFromId_(destSheetId);
  // copyDataToDestSheet_(data, sheet);
  copyDataToSheet(data, sheet);
}
/**
 * Get all the data from the passed sheet reference
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet reference to google sheet 
 * @return {Object[][]} the sheet's data
 */
function getDataFromSheet(sheet: GoogleAppsScript.Spreadsheet.Sheet): DataValues {
  const fullDataRange = sheet.getDataRange();
  return fullDataRange.getValues();
}

function getFirstSheetFromFile_(file: DriveFile): Sheet {
  const ss = SpreadsheetApp.open(file);
  return ss.getSheets()[0];
}

/**
 * Get the first sheet reference from the spreadsheet that has the passed id
 * @param {string} id spreadsheet's id 
 * @return {Sheet} a google sheet reference
 */
function getFirstSheetFromId_(id: string): Sheet {
  const ss = SpreadsheetApp.openById(id);
  return ss.getSheets()[0];
}

function getMostRecentFileInFolder_(folderId: string): DriveFile {
  const folder = DriveApp.getFolderById(folderId);
  const files = folder.getFiles();
  const file = files.next();
  return file;
}

/**
 * Copy data into sheet, using size of data to get proper range
 * @param {Object[][]} data double array from a google sheet 
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet - the destination sheet 
 * @return {void}
 */
function copyDataToSheet(data: object[][], sheet: GoogleAppsScript.Spreadsheet.Sheet): void {// eslint-disable-line no-unused-vars
  const rows = data.length;
  const cols = data[0].length;
  sheet.getRange(1, 1, rows, cols).setValues(data);
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
 * @param {string} id of the spreadsheet 
 * @param {*} name of the sheet of interest
 * @return {Sheet} a google sheet reference
 */
function getNamedSheetFromId(id: string, name: string): Sheet {// eslint-disable-line no-unused-vars
  const ss = SpreadsheetApp.openById(id);
  return ss.getSheetByName(name);
}



