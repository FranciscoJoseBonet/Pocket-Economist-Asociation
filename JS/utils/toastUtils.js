export function mostrarToast(duration = 3, msg = "", err = false) {
	Toastify({
		text: msg,
		duration: duration * 1000,
		close: true,
		gravity: "top",
		position: "center",
		style: err
			? { background: "linear-gradient(to right,rgba(138, 38, 7, 0.76),rgb(124, 7, 7))" }
			: { background: "linear-gradient(to right,rgb(32, 139, 68),rgb(16, 102, 27))" },
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
