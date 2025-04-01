import { montoFormateoPesos } from "../utils/formatUtils.js";

export function createSummaryCardDashboard(totalIncome, totalExpense) {
	const div = document.createElement("div");
	div.innerHTML = `<div class=" summary-card-dashboard">
                        <h2 class="h4 mb-3">Resumen del Mes</h2>
                        <div class="d-flex justify-content-between mb-3">
                            <div>
                                <p class="mb-1 text-muted">Ingreso Total</p>
                                <h3 class="h4 income-text">${montoFormateoPesos(
																	totalIncome
																)}</h3>
                            </div>
                            <div>
                                <p class="mb-1 text-muted">Gasto Total</p>
                                <h3 class="h4 expense-text">${montoFormateoPesos(
																	totalExpense
																)}</h3>
                            </div>
                        </div>
                        <hr class="border-secondary">
                    </div>`;

	return div;
}
