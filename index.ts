import { Map } from "./map";
import { ReportMaker } from "./reportmaker";
import { ComplexReport } from "./complexreport";
import { SimpleReport } from "./simplereport";

async function main() {
    const map = await Map.build("data.json")/* something */
    map.printMap();
    console.log("---End of Map---")
    map.registerForShots();
    const report = new ReportMaker(new SimpleReport(map));
    report.printDetails();
    console.log("---End of Report---")
    const report2 = new ReportMaker(new ComplexReport(map));
    report2.printDetails();
    console.log("---End of Report---")
    map.printMap();
    console.log("---End of Map---")
  }
  
  main();