// Esta es la estructura de objetos para guardar los datos del usuario

export class DatosUsuario {
	constructor(
		GastosList = [],
		IngresosList = [],
		GastosCategList = [],
		IngresosCategList = []
	) {
		this.GastosList = GastosList;
		this.IngresosList = IngresosList;
		this.GastosCategList = GastosCategList;
		this.IngresosCategList = IngresosCategList;
	}
}
