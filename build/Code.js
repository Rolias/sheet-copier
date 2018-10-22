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
     * Get all the data from the passed sheet reference
     * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet reference to google sheet
     * @return {Object[][]} the sheet's data
     */
    function getDataFromSheet(sheet) {
        var fullDataRange = sheet.getDataRange();
        return fullDataRange.getValues();
    }
    exports.getDataFromSheet = getDataFromSheet;
    function getFirstSheetFromFile_(file) {
        var ss = SpreadsheetApp.open(file);
        return ss.getSheets()[0];
    }
    exports.getFirstSheetFromFile_ = getFirstSheetFromFile_;
    /**
     * Get the first sheet reference from the spreadsheet that has the passed id
     * @param {string} id spreadsheet's id
     * @return {Sheet} a google sheet reference
     */
    function getFirstSheetFromId_(id) {
        var ss = SpreadsheetApp.openById(id);
        return ss.getSheets()[0];
    }
    exports.getFirstSheetFromId_ = getFirstSheetFromId_;
    function getMostRecentFileInFolder_(folderId) {
        var folder = DriveApp.getFolderById(folderId);
        var files = folder.getFiles();
        var file = files.next();
        return file;
    }
    exports.getMostRecentFileInFolder_ = getMostRecentFileInFolder_;
    /**
     * Copy data into sheet, using size of data to get proper range
     * @param {Object[][]} data double array from a google sheet
     * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet - the destination sheet
     * @return {void}
     */
    function copyDataToSheet(data, sheet) {
        var rows = data.length;
        var cols = data[0].length;
        sheet.getRange(1, 1, rows, cols).setValues(data);
    }
    exports.copyDataToSheet = copyDataToSheet;
    /**
     * Using the active spreadsheet, return the named sheet
     * @param {string} sheetName the name of the sheet we want returned
     * @return {Sheet}
     */
    function getActiveSheetByName(sheetName) {
        var ss = SpreadsheetApp.getActiveSpreadsheet();
        return ss.getSheetByName(sheetName);
    }
    /**
     * Return a named sheet from a spreadsheet.
     * @param {string} id of the spreadsheet
     * @param {*} name of the sheet of interest
     * @return {Sheet} a google sheet reference
     */
    function getNamedSheetFromId(id, name) {
        var ss = SpreadsheetApp.openById(id);
        return ss.getSheetByName(name);
    }
});
