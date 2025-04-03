import { createSummaryElementIndex } from "../components/summaryIndex.js"
import { calcularTotal } from "../controllers/balanceController.js"
import { calcularSaldo } from "../controllers/balanceController.js"
import { gastos, ingresos } from "../data/db.js"
import { getContainer } from "../utils/getContainerUtils.js"

export function showSummaryElement (where){
    const totalIncome = calcularTotal(ingresos)
    const totalExpense = calcularTotal(gastos)
    const totalSaving = 0
    const total = calcularSaldo()
    
    const incomeCard = createSummaryElementIndex("income", totalIncome);
    const expenseCard = createSummaryElementIndex("expense", totalExpense);
    const totalCard = createSummaryElementIndex("balance", total);
    const savingCard = createSummaryElementIndex("savings", totalSaving);

    const nodes = [incomeCard, expenseCard, totalCard, savingCard]

    const container = getContainer(where)
    container.innerHTML = "";

    nodes.forEach(node => {
        container.appendChild(node)
    });

}