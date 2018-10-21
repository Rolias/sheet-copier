//declare function getNamedSheetFromId(id: string, name: string);
export interface SheetCopier {
  getDataFromSheet(sheet: Sheet): object[][];
  getNamedSheetFromId(id: string, name: string): Sheet;
  getActiveSheetByName(sheetName: string): Sheet;
  copyDataToSheet(data: Object[][], sheet: Sheet): void;
  copyDataFromSourceFolderToDestSheet(srcFolderId: string, destSheetId: string): void;
}