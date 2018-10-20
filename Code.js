// @ts-check 

function getMostRecentFileInFolder_(folderId) {
  const folder = DriveApp.getFolderById(folderId);
  const files = folder.getFiles();
  const file = files.next();
  return file;
}

function getAllDataFromFirstSheet_(file) {
  const ss = SpreadsheetApp.open(file);
  const sheet = ss.getSheets()[0];
  const fullDataRange = sheet.getDataRange();
  const allData = fullDataRange.getValues();
  return allData;
}

function getSheetById_(id) {
  const ss = SpreadsheetApp.openById(id);
  const sheet = ss.getSheets()[0];
  return sheet;
}

function copyDataToDestSheet_(data, sheet) {
  const rows = data.length;
  const cols = data[0].length;
  sheet.getRange(1, 1, rows, cols).setValues(data);
}

/**
 * Takes the first file in the folder (the most recent one) and copies all the data from
 * the first sheet on that Spreadsheet to the first sheet on the destination spreadsheet
 * @param {*} srcFolderId - the folder that has the spreadsheet acting as the source
 * @param {*} destSheetId  - the id of the spreadsheet that is the destination
 * @return null
 * exported copyDataFromSourceFolderToDestSheet
 */
function copyDataFromSourceFolderToDestSheet(srcFolderId, destSheetId) { // eslint-disable-line no-unused-vars
  const file = getMostRecentFileInFolder_(srcFolderId);
  const data = getAllDataFromFirstSheet_(file);
  const sheet = getSheetById_(destSheetId);
  copyDataToDestSheet_(data, sheet);
  return null;
}

