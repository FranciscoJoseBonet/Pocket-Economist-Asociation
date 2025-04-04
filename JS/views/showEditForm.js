import { createEditForm } from "../components/editForm.js";

document.addEventListener("click", (event) => {
	const btnEditar = event.target.closest("button[data-id]");
	if (!btnEditar) return;

	const id = Number(btnEditar.dataset.id);
	const tipo = btnEditar.dataset.tipo;
	const monto = btnEditar.dataset.monto;
	const categoria = btnEditar.dataset.categoria;
	const descripcion = btnEditar.dataset.descripcion;
	const fecha = btnEditar.dataset.fecha;
	const esMensual = btnEditar.dataset.esmensual;

	console.log(fecha);

	const modalContainer = document.getElementById("editModalBody");

	const form = createEditForm({
		tipo,
		monto,
		descripcion,
		esMensual,
		categoria,
		fecha,
		id,
	});

	modalContainer.innerHTML = ``;
	modalContainer.appendChild(form);
});
