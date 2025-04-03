import { montoFormateoPesos } from "../utils/formatUtils.js";
import { iconTypeSymbol } from "../utils/typeIconSymbol.js";

// Ejemplo de los 
export function createSummaryElementIndex (type = "", value = 0){
    const icon = iconTypeSymbol(type)[0]
    const trad = iconTypeSymbol(type)[1]

    const div = document.createElement("div");

    div.innerHTML = `
                <div class="summary-card ${type}-card">
                    <div class="summary-icon">
                        <i class="bi ${icon}"></i>
                    </div>

                    <h3 class="summary-title">${trad} Total</h3>
                    <p class="summary-value">${montoFormateoPesos(value)}</p>
                    <p class="summary-subtitle">Este mes</p>
                </div>`;
    return div;
}