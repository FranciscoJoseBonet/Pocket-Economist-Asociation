import { getRecords } from "../utils/recordsUtils.js";
import { getContainer } from "../utils/getContainerUtils.js";
import { createRecordCard } from "../components/cardsRegs.js";

export function renderRecords(container, records) {
	container.innerHTML = "";
	records.forEach((record) => {
		container.appendChild(createRecordCard(record));
	});
}

export function showRecords(type = "all") {
	const records = getRecords(type);
	const container = getContainer(type);
	renderRecords(container, records);
}
