# SheetCopier Library

## Reference

Project Key: MCikUgqcje7R4TUtqII0qaYpW_xOSVt-H
This key is needed by any script that wants to reference this library. This library is only shared with Pluralsight email adddresses.

## Purpose

This library is designed to abstract away a lot of the functionality needed from Google Sheets for copying data from one sheet to another. It includes finding the most recent sheet in a library, getting a sheet on an active spreadsheet, getting a sheet by an ID and related functionality.

## 2020 Notes

Trying to remember how all this works. If I got to File->Project Properties there is a `Project key(Deprecated)` field that has the above project key. There is also a `Script ID` field with the value `1R8GMaKsT1fDeTVsjHbrV9-Ij1zOKOZJc2r0vbK0QHZpa-npJU8TnFgIy` - not sure if that is what is supposed to be used.

Use the `File->Manage versions...` option after `clasp push`. In the top, enter a reason for the new version and then click `Save new version`. Then need to go to any projects that are using this library and select the new version number that is created.

Had to do a `clasp login` to get things working. I suspect 10/2018 was the last time I used CLASP, so that's not too suprising. The big consumer of this lib is the `copy-nightly-snapshot` project. So in google for that project I used `Resources->Libraries` and used the dropdown to select the newly created version of this lib.
