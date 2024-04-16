import { IReport } from "./IReport";

export class ReportMaker {
    private _report: IReport

    constructor (report: IReport) {
        this._report = report;
    }

    get report() {
        return this._report;
    }

    async printDetails() {
        const report = await this._report.printDetails()
    }
}