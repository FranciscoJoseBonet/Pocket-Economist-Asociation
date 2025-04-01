import { showRecords } from "../views/showRecords.js";
import { showTotalLabel } from "../views/showTotalLabel.js";

export function updateRecordsView() {
	showRecords("income");
	showRecords("expense");
	showRecords("all");
}

export function updateTotals() {
	showTotalLabel("totalLabelDashboard");
}

export function updateAllElements() {
	updateRecordsView();
	showTotalLabel("totalLabelDashboard");
}
