async function bubbleSort() {
	disableButtons();

	let bars = document.querySelectorAll('.bar');

	for (let i = 0; i < bars.length - 1; i++) {
		for (let j = 0; j < bars.length - i - 1; j++) {
			bars[j].style.backgroundColor = compColor;
			bars[j + 1].style.backgroundColor = compColor;

			await new Promise((resolve) => setTimeout(resolve, delay));

			// const value1 = parseInt(bars[j].style.height);
			// const value2 = parseInt(bars[j+1].style.height);
			const value1 = Number(bars[j].childNodes[0].innerHTML);
			const value2 = Number(bars[j + 1].childNodes[0].innerHTML);

			if (value1 > value2) {
				bars[j].children[0].innerHTML = value2;
				bars[j + 1].children[0].innerHTML = value1;
				bars[j].style.height = `${value2 * 6}px`;
				bars[j + 1].style.height = `${value1 * 6}px`;
				bars = document.querySelectorAll('.bar');
			}

			await new Promise((resolve) => setTimeout(resolve, delay));

			bars[j].style.backgroundColor = mainColor;
			bars[j + 1].style.backgroundColor = mainColor;
		}

		bars[bars.length - i - 1].style.backgroundColor = finColor;
	}
	bars[0].style.backgroundColor = finColor;

	enableButtons();
}
