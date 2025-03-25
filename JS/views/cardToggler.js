//Para togglear las tarjetas de la pagina de funciones
document.addEventListener("DOMContentLoaded", function () {
	const functionHead = document.querySelectorAll(".function-header"); //Devuelcve el array con todos los header

	functionHead.forEach((header) => {
		header.addEventListener("click", function () {
			this.classList.toggle("active");

			const functionBody = this.nextElementSibling;
			functionBody.classList.toggle("show");

			const isExpanded = functionBody.classList.contains("show");
			this.setAttribute("aria-expanded", isExpanded);
		});

		header.addEventListener("keydown", function (e) {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				this.click();
			}
		});
	});
});
