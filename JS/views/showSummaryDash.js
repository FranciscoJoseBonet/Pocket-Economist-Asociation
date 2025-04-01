import { createSummaryCardDashboard } from "../components/summaryDash.js";
import { calcularTotal } from "../controllers/balanceController.js";
import { gastos, ingresos } from "../data/db.js";
import { getContainer } from "../utils/getContainerUtils.js";

export function showSummaryDash(where) {
	const totalIncome = calcularTotal(ingresos);
	const totalExpense = calcularTotal(gastos);
	const container = getContainer(where);
	container.innerHTML = "";
	container.appendChild(createSummaryCardDashboard(totalIncome, totalExpense));
}
