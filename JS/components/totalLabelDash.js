import { montoFormateoPesos } from "../utils/formatUtils.js";

export function createTotalLabel(total) {
	const div = document.createElement("div");
	div.innerText = `${montoFormateoPesos(total)}`;
	return div;
}
