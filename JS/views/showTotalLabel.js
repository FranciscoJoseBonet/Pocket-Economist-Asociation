import { createTotalLabel } from "../components/totalLabelDash.js";
import { getContainer } from "../utils/getContainerUtils.js";
import { calcularSaldo } from "../controllers/balanceController.js";

export function showTotalLabel(where) {
	const saldo = calcularSaldo();
	const container = getContainer(where);
	container.innerHTML = "";
	container.appendChild(createTotalLabel(saldo));
}
