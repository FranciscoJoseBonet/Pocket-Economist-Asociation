//Plantilla de las cards de gastos e ingresos en el dashboard
import { montoFormateoPesos } from "../utils/formatUtils.js";

export function createRecordCard({
	tipo = "",
	monto = 0,
	descripcion = "",
	esMensual,
	categoria = "",
	fecha,
	id = 0,
}) {
	const div = document.createElement("div");
	const type = tipo === "ingreso" ? "income" : "expense";
	div.classList.add("card", type);

	const recurring = esMensual ? "Mensual" : "No mensual";
	const recurringColor = esMensual ? "primary" : "secondary";
	const icon = tipo === "ingreso" ? "+" : "-";

	div.innerHTML = `
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <h5 class="card-title mb-0">${categoria}</h5>
                <h5 class="card-title ${type}-text mb-0">${icon} ${montoFormateoPesos(
		Number(monto)
	)}</h5>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <span class="badge bg-${recurringColor} category-badge">${recurring}</span>
                    <small class="text-muted ms-2">${fecha}</small>
                </div>
            </div>
            <p class="card-text text-muted small mb-3">${descripcion}</p>
            <div class="d-flex justify-content-end">
                <button class="btn btn-sm btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#editRecordModal">
                    <i class="bi bi-pencil me-1"></i> Editar
                </button>
                <button class="btn btn-sm btn-outline-danger" data-id="${id}" data-tipo="${tipo}">
                    <i class="bi bi-trash me-1"></i> Eliminar
                </button>
            </div>
        </div>
    `;

	return div;
}
