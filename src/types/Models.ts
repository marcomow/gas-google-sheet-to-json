export type CellValue =
    | string
    | number
    | boolean
    | Date
    | GoogleAppsScript.Sheets.Schema.ErrorValue;
export type DatabaseId = { id: string; _column: string };
export type DatabaseEntry = { [id: string]: CellValue };
export type SheetDatabase = { ids: DatabaseId[]; buffer: DatabaseEntry[] };