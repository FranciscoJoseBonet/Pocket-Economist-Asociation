// Esta es la estructura de objetos para guardar los datos del usuario

export class DatosUsuario {
	constructor(
		GastosList = [],
		IngresosList = [],
		GastosCategList = [],
		IngresosCategList = [],
		conteoIdGastos = 0,
		conteoIdIngresos = 0
	) {
		this.GastosList = GastosList;
		this.IdTotalesGastos = conteoIdGastos;
		this.IngresosList = IngresosList;
		this.IdTotalesIngresos = conteoIdIngresos;
		this.GastosCategList = GastosCategList;
		this.IngresosCategList = IngresosCategList;
	}
}
