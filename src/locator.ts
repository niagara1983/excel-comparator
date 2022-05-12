import {ChartInfo} from "./chart-info";
// const xl = require('excel4node');

export class Locator {
    workbook
    sheet
    row
    cell
    drawing
    fileName: string
    chart
    chartInfo = new ChartInfo();

    constructor(wb, name) {
        this.workbook = wb;
        this.fileName = name
    }
}