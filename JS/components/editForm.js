function esEsto(value = "", compareWith = "") {
	// Para seleccionar la opcion que sea correcta en los select
	return value === compareWith ? "selected" : "";
}

function checked(value) {
	return String(value).toLowerCase() === "true" ? "checked" : "";
}

export function createEditForm({
	tipo = "",
	monto = 0,
	descripcion = "",
	esMensual,
	categoria = "",
	fecha,
	id = 0,
}) {
	const div = document.createElement("div");

	div.innerHTML = `<form id="editRecordForm" method="post">
                            <div class="mb-3">
                                <label for="recordCategory" class="form-label">Categoria</label>
                                <select class="form-select" id="recordCategory">
                                    <option value="Varios" ${esEsto(
																			categoria,
																			"Varios"
																		)}>Varios</option>
                                    <option value="Salario" ${esEsto(
																			categoria,
																			"Salario"
																		)}>Salario</option>
                                    <option value="Freelance" ${esEsto(
																			categoria,
																			"Freelance"
																		)}>Freelance</option>
                                    <option value="Ahorro" ${esEsto(
																			categoria,
																			"Ahorro"
																		)}>Ahorro</option>
                                    <option value="Inversiones" ${esEsto(
																			categoria,
																			"Inversiones"
																		)}>Inversiones</option>
                                    <option value="Regalos" ${esEsto(
																			categoria,
																			"Regalos"
																		)}>Regalos</option>
                                    <option value="Salud" ${esEsto(
																			categoria,
																			"Salud"
																		)}>Salud</option>
                                    <option value="Entretenimiento" ${esEsto(
																			categoria,
																			"Entretenimiento"
																		)}>Entretenimiento</option>
                                    <option value="Transporte" ${esEsto(
																			categoria,
																			"Transporte"
																		)}>Transporte</option>
                                    <option value="Alimentos" ${esEsto(
																			categoria,
																			"Alimentos"
																		)}>Alimentos</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="recordAmount" class="form-label">Monto</label>
                                <div class="input-group">
                                    <span class="input-group-text">$</span>
                                    <input type="number" class="form-control" id="recordAmount" placeholder="0.00"
                                        step="0.01" min="0" value="${monto}">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="recordDate" class="form-label">Fecha</label>
                                <input type="date" class="form-control" id="recordDate" value="${fecha}">
                            </div>
                            <div class="mb-3">
                                <label for="recordDescription" class="form-label">Descripción</label>
                                <textarea class="form-control" id="recordDescription" rows="3"
                                    >${descripcion}</textarea>
                            </div>
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input" type="checkbox" id="recordRecurring" ${checked(
																	esMensual
																)}>
                                <label class="form-check-label" for="recordRecurring">Mensual</label>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary"
                                    data-bs-dismiss="modal">Cancelar</button>
                                <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                            </div>
                        </form>`;

	return div;
}
