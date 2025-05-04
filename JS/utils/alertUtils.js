const bgdark = "#3C434B";
const light = "#ffffff";

export async function deleteAlert() {
	const result = await Swal.fire({
		title: "¿Estás seguro de eliminar este registro?",
		text: "¡Esta acción no se puede revertir!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#e74c3c",
		cancelButtonColor: "#7f8c8d",
		confirmButtonText: "Eliminar",
		background: bgdark,
		color: light,
	});
	return result.isConfirmed;
}

export async function editAlert() {
	const result = await Swal.fire({
		title: "¿Estás seguro de modificar este registro?",
		showDenyButton: true,
		confirmButtonText: "Sí, guardar",
		denyButtonText: "Cancelar",
		confirmButtonColor: "#27ae60",
		denyButtonColor: "#7f8c8d",
		background: bgdark,
		color: light,
	});
	return result.isConfirmed;
}
