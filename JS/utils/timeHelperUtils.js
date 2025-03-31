export function setDayToday() {
	let hoy = new Date().toISOString().split("T")[0];
	let recordDateElement = document.getElementById("recordDate");
	if (recordDateElement) {
		recordDateElement.value = hoy;
	}
}
