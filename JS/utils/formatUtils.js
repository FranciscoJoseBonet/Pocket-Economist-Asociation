export function montoFormateoPesos(monto) {
	return monto.toLocaleString("us-US", {
		style: "currency",
		currency: "ARS",
	});
}

export function montoFormateoFloat(montoConFormato) {
	return parseFloat(montoConFormato.replace(/[^0-9,-]/g, "").replace(",", "."));
}
