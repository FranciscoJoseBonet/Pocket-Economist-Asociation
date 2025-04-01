import { showRecords } from "../components/cardsRegs.js";

export function updateRecordsView() {
	showRecords("income");
	showRecords("expense");
	showRecords("all");
}
