export function montoFormateoPesos(monto) {
	return monto.toLocaleString("us-US", {
		style: "currency",
		currency: "ARS",
	});
}

export function montoFormateoFloat(montoConFormato) {
	return parseFloat(montoConFormato.replace(/[^0-9,-]/g, "").replace(",", "."));
}

export function formatearFechaParaInput(fechaOriginal) {
	if (!fechaOriginal) return "";
	const date = new Date(fechaOriginal);
	if (isNaN(date)) return "";

	const yyyy = date.getFullYear();
	const mm = String(date.getMonth() + 1).padStart(2, "0");
	const dd = String(date.getDate()).padStart(2, "0");
	return `${yyyy}-${mm}-${dd}`;
}
