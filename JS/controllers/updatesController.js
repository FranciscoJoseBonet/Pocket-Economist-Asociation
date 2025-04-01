import { showRecords } from "../views/showRecords.js";

export function updateRecordsView() {
	showRecords("income");
	showRecords("expense");
	showRecords("all");
}

export function updateAllElements() {
	updateRecordsView();
}
