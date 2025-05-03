export function mostrarToast(duration = 3, msg = "") {
	Toastify({
		text: msg,
		duration: duration * 1000,
		close: true,
		gravity: "top",
		position: "right",
		style: {
			background: "linear-gradient(to right,rgb(118, 167, 55),rgb(20, 165, 40))",
		},
	}).showToast();

	setTimeout(() => {
		const lastToast = document.querySelector(".toastify.on");
		if (lastToast) {
			const bar = document.createElement("div");
			bar.className = "toastify-progress-bar";
			bar.style.animationDuration = `${duration}s`;
			lastToast.appendChild(bar);
		}
	}, duration * 10);
}
