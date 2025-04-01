import { ingresos, gastos } from "../data/db.js";

export function getRecords(type) {
	switch (type) {
		case "income":
			return [...ingresos];
		case "expense":
			return [...gastos];
		case "all":
			return [...ingresos, ...gastos];
		default:
			return [];
	}
}
