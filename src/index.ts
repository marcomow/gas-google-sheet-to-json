import { DatabaseEntry, SheetDatabase } from "./types/Models";
import { reduceSheetToDatabase } from "./utilities/reduceSheetToDatabase";

const doGet: (event: GoogleAppsScript.Events.DoGet) => GoogleAppsScript.Content.TextOutput = () => {
    const scriptProperties: GoogleAppsScript.Properties.ScriptProperties = PropertiesService.getScriptProperties();
    const spreadsheetId: string = scriptProperties.getProperty('spreadsheetId');
    const spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheetName: string = scriptProperties.getProperty('sheetName');
    const sheet: GoogleAppsScript.Spreadsheet.Sheet = spreadsheet.getSheetByName(sheetName);
    const database: SheetDatabase = reduceSheetToDatabase(sheet);
    const entries: DatabaseEntry[] = database.buffer;
    return ContentService.createTextOutput(JSON.stringify(entries)).setMimeType(ContentService.MimeType.JSON);
}

export { doGet };