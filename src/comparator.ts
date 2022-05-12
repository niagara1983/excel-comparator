import IllegalStateException from "./exceptions/illegal-state-exception"
import {Locator} from "./locator";
const xl = require('excel4node');

/**
 * Utility to compare Excel File Contents cell by cell for all sheets.
 *
 * <p>This utility will be used to compare Excel File Contents cell by cell for all sheets programmatically.</p>
 *
 * <p>Below are the list of Attribute comparison supported in this version.</p>
 *
 * <ul>
 * <li>Cell Alignment</li>
 * <li>Cell Border Attributes</li>
 * <li>Cell Data</li>
 * <li>Cell Data-Type</li>
 * <li>Cell Fill Color</li>
 * <li>Cell Fill pattern</li>
 * <li>Cell Font Attributes</li>
 * <li>Cell Font Family</li>
 * <li>Cell Font Size</li>
 * <li>Cell Protection</li>
 * <li>Name of the sheets</li>
 * <li>Number of Columns</li>
 * <li>Number of Rows</li>
 * <li>Number of Sheet</li>
 * </ul>
 *
 * <p>(Some of the above attribute comparison only work for *.xlsx format currently. In future it can be enhanced.)</p>
 *
 * <p><b>Usage:</b></p>
 *
 * <pre>
 * {@code
 *  Workbook wb1 = WorkbookFactory.create(new File("workBook1.xls"));
 *  Workbook wb2 = WorkbookFactory.create(new File("workBook2.xls"));
 *  List<String> listOfDifferences = export.ExcelComparator.compare(wb1, wb2);
 *  for (String differences : listOfDifferences)
 *      System.out.println(differences);
 *  System.out.println("DifferenceFound = "+ excelFileDifference.isDifferenceFound);
 *  }
 * </pre>
 */

export default class ExcelComparator {
    static CELL_HYPERLINK_DOES_NOT_MATCH: string = "Cell Hyperlink does not Match ::"
    static CELL_DATA_DOES_NOT_MATCH: string = "Cell Data does not Match ::"
    static CELL_FONT_ATTRIBUTES_DOES_NOT_MATCH: string = "Cell Font Attributes does not Match ::"

    private listOfDifferences: Array<string>
    private workbook1: any;
    private workbook2: any;

    /**
     * Utility to compare Excel File Contents cell by cell for all sheets.
     *
     * @param wb1 the workbook1
     * @param wb2 the workbook2
     * @return the Excel file difference containing a flag and a list of differences
     */
    public compare(file1, file2): number {
        if (this.listOfDifferences != null) {
            throw new IllegalStateException("ExcelComparators are stateful and can only be used once");
        }

        this.listOfDifferences = new Array<string>();

        this.workbook1 = new xl.WorkBook();
        this.workbook2 = new xl.WorkBook();

        let loc1: Locator = new Locator(this.workbook1, file1);
        let loc2: Locator = new Locator(this.workbook1, file2);

        this.compareNumberOfSheets(loc1, loc2 )
        this.compareSheetNames(loc1, loc2)
        this.compareSheetData(loc1, loc2)

        return this.listOfDifferences.length;
    }

    /**
     * Compare number of sheets.
     */
    public compareNumberOfSheets(loc1: Locator, loc: Locator): void {}

    /**
     * Compare sheet names.
     */
    public compareSheetNames(loc1: Locator, loc: Locator): void {}

    /**
     * Compare sheet data.
     */
    public compareSheetData(loc1: Locator, loc: Locator): void {}

}