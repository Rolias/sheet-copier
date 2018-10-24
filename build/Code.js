//====================
//PUBLIC FUNCTIONS 
//====================
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Copy data into sheet, using size of data to get proper range
     * @param {Object[][]} data double array from a google sheet
     * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet - the destination sheet
     * @return {void}
     */
    function copyDataToSheet(data, sheet) {
        const rows = data.length;
        const cols = data[0].length;
        sheet.getRange(1, 1, rows, cols).setValues(data);
    }
    exports.copyDataToSheet = copyDataToSheet;
    /**
     * Get all the data from the passed sheet reference
     * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet reference to google sheet
     * @return {Object[][]} the sheet's data
     */
    function getDataFromSheet(sheet) {
        const fullDataRange = sheet.getDataRange();
        return fullDataRange.getValues();
    }
    exports.getDataFromSheet = getDataFromSheet;
    /**
     * Using the active spreadsheet, return the named sheet
     * @param {string} sheetName the name of the sheet we want returned
     * @return {Sheet}
     */
    function getActiveSheetByName(sheetName) {
        let ss = SpreadsheetApp.getActiveSpreadsheet();
        return ss.getSheetByName(sheetName);
    }
    /**
     * Return a named sheet from a spreadsheet.
     * @param {string} spreadsheetId of the spreadsheet
     * @param {*} sheetName of the sheet of interest
     * @return {Sheet} a google sheet reference
     */
    function getNamedSheetFromId(spreadsheetId, sheetName) {
        const ss = SpreadsheetApp.openById(spreadsheetId);
        return ss.getSheetByName(sheetName);
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
    function getFirstSheetFromFile_(file) {
        const ss = SpreadsheetApp.open(file);
        return ss.getSheets()[0];
    }
    exports.getFirstSheetFromFile_ = getFirstSheetFromFile_;
    /**
     * PRIVATE
     * Get the first sheet reference from the spreadsheet that has the passed id
     * @param {string} id spreadsheet's id
     * @return {Sheet} a google sheet reference
     */
    function getFirstSheetFromId_(id) {
        const ss = SpreadsheetApp.openById(id);
        return ss.getSheets()[0];
    }
    exports.getFirstSheetFromId_ = getFirstSheetFromId_;
});
