import { createRecordCard } from "../components/cardsRegs.js";

export function renderRecords(container, records) {
	container.innerHTML = "";
	records.forEach((record) => {
		container.appendChild(createRecordCard(record));
	});
}
