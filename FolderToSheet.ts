import { DriveFile, SheetCopier } from "./SheetCopierTypes";

declare var exports: SheetCopier;

/**
 * Takes the first file in the folder (the most recent one) and copies all the data from
 * the first sheet on that Spreadsheet to the first sheet on the destination spreadsheet
 * @param {string} srcFolderId - the id string of the folder that has the spreadsheet acting as the source
 * @param {string} destSheetId  - the id string of the spreadsheet that is the destination
 * @return {void}
 */
export function copyDataFromSourceFolderToDestSheet(srcFolderId: string, destSheetId: string): void {
  const file = getMostRecentFileInFolder_(srcFolderId);
  const fileSheet = exports.getFirstSheetFromFile_(file);
  const data = exports.getDataFromSheet(fileSheet);
  const sheet = exports.getFirstSheetFromId_(destSheetId);
  exports.copyDataToSheet(data, sheet);
}

export function getMostRecentFileInFolder_(folderId: string): DriveFile {
  const folder = DriveApp.getFolderById(folderId);
  const files = folder.getFiles();
  const file = files.next();
  return file;
}
