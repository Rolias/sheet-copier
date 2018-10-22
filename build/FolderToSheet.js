var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Code"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Helpers = __importStar(require("./Code"));
    /**
     * Takes the first file in the folder (the most recent one) and copies all the data from
     * the first sheet on that Spreadsheet to the first sheet on the destination spreadsheet
     * @param {string} srcFolderId - the id string of the folder that has the spreadsheet acting as the source
     * @param {string} destSheetId  - the id string of the spreadsheet that is the destination
     * @return {void}
     * exported copyDataFromSourceFolderToDestSheet
     */
    function copyDataFromSourceFolderToDestSheet(srcFolderId, destSheetId) {
        var file = Helpers.getMostRecentFileInFolder_(srcFolderId);
        var file_sheet = Helpers.getFirstSheetFromFile_(file);
        var data = Helpers.getDataFromSheet(file_sheet);
        var sheet = Helpers.getFirstSheetFromId_(destSheetId);
        // copyDataToDestSheet_(data, sheet);
        Helpers.copyDataToSheet(data, sheet);
    }
});
