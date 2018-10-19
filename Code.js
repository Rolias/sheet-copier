// @ts-check 

function getMostRecentFileInFolder(folderId) {
  const folder = DriveApp.getFolderById(folderId);
  const files = folder.getFiles();
  const file = files.next();
  return file;
}

function getAllDataFromFirstSheet(file) {
  const ss = SpreadsheetApp.open(file);
  const sheet = ss.getSheets()[0];
  const fullDataRange = sheet.getDataRange();
  const allData = fullDataRange.getValues();
  return allData;
}

function getSheetById(id) {
  const ss = SpreadsheetApp.openById(id);
  const sheet = ss.getSheets()[0];
  return sheet;
}

function copyDataToDestSheet(data, sheet) {
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
  const file = getMostRecentFileInFolder(srcFolderId);
  const data = getAllDataFromFirstSheet(file);
  const sheet = getSheetById(destSheetId);
  copyDataToDestSheet(data, sheet);
  return null;
}

  // function copyMostRecentSnapshot() {
  //   copyDataToMostRecentSnapshotFile(SRC_SNAPSHOT_FOLDER_ID, DEST_SNAPSHOT_SHEET_ID);
  // }
  // function copyMostRecentAugmentedSnapshot() {
  //   copyDataToMostRecentSnapshotFile(SRC_AUGMENTED_FOLDER_ID, DEST_AUGMENTED_SHEET_DEST_ID);
  // }
  // function copyMostRecentPathSnapshot() {
  //   copyDataToMostRecentSnapshotFile(SRC_PATH_FOLDER_ID, DEST_PATH_SHEET_ID);
  // }




