
type Sheet = GoogleAppsScript.Spreadsheet.Sheet;
type DataValues = object[][];
type DriveFile = GoogleAppsScript.Drive.File;

export interface SheetCopier {
  getDataFromSheet(sheet: Sheet): object[][];
  getNamedSheetFromId(id: string, name: string): Sheet;
  getActiveSheetByName(sheetName: string): Sheet;
  copyDataToSheet(data: Object[][], sheet: Sheet): void;
  copyDataFromSourceFolderToDestSheet(srcFolderId: string, destSheetId: string): void;
  //Google Lib private functions
  getFirstSheetFromFile_(file: DriveFile): Sheet;
  getFirstSheetFromId_(id: string): Sheet;
  getMostRecentFileInFolder_(folderId: string): DriveFile;
}