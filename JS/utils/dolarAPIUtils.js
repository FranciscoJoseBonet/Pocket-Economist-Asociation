let ultimaCompra = 0;
let ultimaVenta = 0;

export function traerDolar() {
	const statusElement = document.getElementById("dolar");
	const compraValor = document.getElementById("compra-valor");
	const ventaValor = document.getElementById("venta-valor");
	const compraCambio = document.getElementById("compra-cambio");
	const ventaCambio = document.getElementById("venta-cambio");
	const timestampElement = document.getElementById("timestamp");
	const statusAlert = document.getElementById("status-alert");

	statusElement.textContent = "Consultando API...";
	statusAlert.className = "alert alert-info d-flex align-items-center mb-3";

	// Realizar la consulta a la API
	fetch("https://dolarapi.com/v1/dolares/oficial")
		.then((res) => res.json())
		.then((data) => {
			compraValor.textContent = `$${data.compra.toFixed(2)}`;
			ventaValor.textContent = `$${data.venta.toFixed(2)}`;

			statusElement.textContent = `Cotización actualizada correctamente`;
			statusAlert.className = "alert alert-success d-flex align-items-center mb-3";

			// Actualizar timestamp
			const ahora = new Date();
			timestampElement.innerHTML = `<i class="bi bi-clock"></i> ${ahora.toLocaleTimeString()}`;

			// Mostrar cambios si hay valores anteriores
			if (ultimaCompra > 0) {
				const cambioPorcentajeCompra = (
					((data.compra - ultimaCompra) / ultimaCompra) *
					100
				).toFixed(2);
				if (cambioPorcentajeCompra != 0) {
					compraCambio.style.display = "inline-block";
					const iconoCompra = compraCambio.querySelector("i");
					const textoCompra = compraCambio.querySelector("span");

					if (cambioPorcentajeCompra > 0) {
						compraCambio.className = "badge bg-success bg-opacity-25";
						iconoCompra.className = "bi bi-arrow-up-short text-success";
						textoCompra.className = "text-success";
						textoCompra.textContent = `${Math.abs(cambioPorcentajeCompra)}%`;
					} else {
						compraCambio.className = "badge bg-danger bg-opacity-25";
						iconoCompra.className = "bi bi-arrow-down-short text-danger";
						textoCompra.className = "text-danger";
						textoCompra.textContent = `${Math.abs(cambioPorcentajeCompra)}%`;
					}
				} else {
					compraCambio.style.display = "none";
				}
			}

			if (ultimaVenta > 0) {
				const cambioPorcentajeVenta = (
					((data.venta - ultimaVenta) / ultimaVenta) *
					100
				).toFixed(2);
				if (cambioPorcentajeVenta != 0) {
					ventaCambio.style.display = "inline-block";
					const iconoVenta = ventaCambio.querySelector("i");
					const textoVenta = ventaCambio.querySelector("span");

					if (cambioPorcentajeVenta > 0) {
						ventaCambio.className = "badge bg-danger bg-opacity-25";
						iconoVenta.className = "bi bi-arrow-up-short text-danger";
						textoVenta.className = "text-danger";
						textoVenta.textContent = `${Math.abs(cambioPorcentajeVenta)}%`;
					} else {
						ventaCambio.className = "badge bg-success bg-opacity-25";
						iconoVenta.className = "bi bi-arrow-down-short text-success";
						textoVenta.className = "text-success";
						textoVenta.textContent = `${Math.abs(cambioPorcentajeVenta)}%`;
					}
				} else {
					ventaCambio.style.display = "none";
				}
			}

			ultimaCompra = data.compra;
			ultimaVenta = data.venta;
		})
		.catch((err) => {
			statusElement.textContent = "Error al consultar el dólar. Intente nuevamente.";
			statusAlert.className = "alert alert-danger d-flex align-items-center mb-3";
			console.error(err);
		});
}
