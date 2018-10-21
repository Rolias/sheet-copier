"use strict";
// @ts-check 
//====================
// PRIVATE FUNCTIONS
//====================
function getMostRecentFileInFolder_(folderId) {
    var folder = DriveApp.getFolderById(folderId);
    var files = folder.getFiles();
    var file = files.next();
    return file;
}
function getFirstSheetFromFile_(file) {
    var ss = SpreadsheetApp.open(file);
    return ss.getSheets()[0];
}
/**
 * Get the first sheet reference from the spreadsheet that has the passed id
 * @param {string} id spreadsheet's id
 * @return {Sheet} a google sheet reference
 */
function getFirstSheetFromId_(id) {
    var ss = SpreadsheetApp.openById(id);
    return ss.getSheets()[0];
}
function copyDataToDestSheet_(data, sheet) {
    var rows = data.length;
    var cols = data[0].length;
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
    var fullDataRange = sheet.getDataRange();
    return fullDataRange.getValues();
}
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
/**
 * Takes the first file in the folder (the most recent one) and copies all the data from
 * the first sheet on that Spreadsheet to the first sheet on the destination spreadsheet
 * @param {string} srcFolderId - the id string of the folder that has the spreadsheet acting as the source
 * @param {string} destSheetId  - the id string of the spreadsheet that is the destination
 * @return {void}
 * exported copyDataFromSourceFolderToDestSheet
 */
function copyDataFromSourceFolderToDestSheet(srcFolderId, destSheetId) {
    var file = getMostRecentFileInFolder_(srcFolderId);
    var file_sheet = getFirstSheetFromFile_(file);
    var data = getDataFromSheet(file_sheet);
    var sheet = getFirstSheetFromId_(destSheetId);
    copyDataToDestSheet_(data, sheet);
}
