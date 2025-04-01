import { getRecords } from "../utils/recordsUtils.js";
import { getContainer } from "../utils/getContainerUtils.js";
import { renderRecords } from "./renderRecords.js";

export function showRecords(type = "all") {
	const records = getRecords(type);
	const container = getContainer(type);
	renderRecords(container, records);
}
