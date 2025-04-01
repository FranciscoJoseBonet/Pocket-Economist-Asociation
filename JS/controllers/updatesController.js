import { showRecords } from "../views/showRecords.js";
import { showSummaryDash } from "../views/showSummaryDash.js";
import { showTotalLabel } from "../views/showTotalLabel.js";

export function updateRecordsView() {
	showRecords("income");
	showRecords("expense");
	showRecords("all");
}

export function updateTotals() {
	showTotalLabel("totalLabelDashboard");
}

export function updateSummaries() {
	showSummaryDash("summaryContainerDashboard");
}

export function updateAllElements() {
	updateRecordsView();
	updateTotals();
	updateSummaries();
}
