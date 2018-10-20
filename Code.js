// @ts-check 

//====================
// PRIVATE FUNCTIONS
//====================
function getMostRecentFileInFolder_(folderId) {
  const folder = DriveApp.getFolderById(folderId);
  const files = folder.getFiles();
  const file = files.next();
  return file;
}

function getFirstSheetFromFile_(file) {
  const ss = SpreadsheetApp.open(file);
  return ss.getSheets()[0];
}

/**
 * Get the first sheet reference from the spreadsheet that has the passed id
 * @param {string} id spreadsheet's id 
 * @return a google sheet reference
 */
function getFirstSheetFromId_(id) {
  const ss = SpreadsheetApp.openById(id);
  return ss.getSheets()[0];
}

function copyDataToDestSheet_(data, sheet) {
  const rows = data.length;
  const cols = data[0].length;
  sheet.getRange(1, 1, rows, cols).setValues(data);
}

//====================
//PUBLIC FUNCTIONS 
//====================

/**
 * Get all the data from the passed sheet reference
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet reference to google sheet 
 * @return {Object[][]} the sheet's data
 */
function getDataFromSheet(sheet) {
  const fullDataRange = sheet.getDataRange();
  return fullDataRange.getValues();
}

/**
 * Using the active spreadsheet, return the named sheet
 * @param {string} sheetName the name of the sheet we want returned
 * @return {GoogleAppsScript.Spreadsheet.Sheet} 
 */
function getActiveSheetByName(sheetName) {// eslint-disable-line no-unused-vars
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(sheetName);
}

/**
 * Return a named sheet from a spreadsheet. 
 * @param {string} id of the spreadsheet 
 * @param {*} name of the sheet of interest
 * @return a google sheet reference
 */
function getNamedSheetFromId(id, name) {// eslint-disable-line no-unused-vars
  const ss = SpreadsheetApp.openById(id);
  return ss.getSheetByName(name);
}

/**
 * Copy data into sheet, using size of data to get proper range
 * @param {Object[][]} data double array from a google sheet 
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet - the destination sheet 
 * @return null
 */
function copyDataToSheet(data, sheet) {// eslint-disable-line no-unused-vars
  const rows = data.length;
  const cols = data[0].length;
  sheet.getRange(1, 1, rows, cols).setValues(data);
}

/**
 * Takes the first file in the folder (the most recent one) and copies all the data from
 * the first sheet on that Spreadsheet to the first sheet on the destination spreadsheet
 * @param {string} srcFolderId - the id string of the folder that has the spreadsheet acting as the source
 * @param {string} destSheetId  - the id string of the spreadsheet that is the destination
 * @return null
 * exported copyDataFromSourceFolderToDestSheet
 */
function copyDataFromSourceFolderToDestSheet(srcFolderId, destSheetId) { // eslint-disable-line no-unused-vars
  const file = getMostRecentFileInFolder_(srcFolderId);
  const file_sheet = getFirstSheetFromFile_(file);
  const data = getDataFromSheet(file_sheet);
  const sheet = getFirstSheetFromId_(destSheetId);
  copyDataToDestSheet_(data, sheet);
  return null;
}

