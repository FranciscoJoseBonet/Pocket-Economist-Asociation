export function montoFormateoPesos(monto) {
	return monto.toLocaleString("es-AR", {
		style: "currency",
		currency: "ARS",
	});
}

export function montoFormateoFloat(montoConFormato) {
	return parseFloat(montoConFormato.replace(/[^0-9,-]/g, "").replace(",", "."));
}
