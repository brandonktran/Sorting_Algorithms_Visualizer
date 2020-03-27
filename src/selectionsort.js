async function selectionSort() {
	disableButtons();

	let bars = document.querySelectorAll('.bar');
	let array = createArrayofValues();
	let min;
	for (let i = 0; i < bars.length; i++) {
		min = i;
		bars[min].style.backgroundColor = compColor;
		for (let j = i + 1; j < bars.length; j++) {
			const value1 = Number(bars[j].childNodes[0].innerHTML);
			const value2 = Number(bars[min].childNodes[0].innerHTML);

			if (value1 < value2) {
				min = j;
			}
		}

		if (i != min) {
			let bars = document.querySelectorAll('.bar');

			await new Promise((resolve) => setTimeout(resolve, delay));

			bars[i].style.backgroundColor = compColor;
			bars[min].style.backgroundColor = compColor;
			bars[i].children[0].innerHTML = array[min];
			bars[min].children[0].innerHTML = array[i];
			bars[i].style.height = `${array[min] * 6}px`;
			bars[min].style.height = `${array[i] * 6}px`;
			[ array[i], array[min] ] = [ array[min], array[i] ];
			bars = document.querySelectorAll('.bar');
		}

		await new Promise((resolve) => setTimeout(resolve, delay));

		bars[min].style.backgroundColor = mainColor;
		bars[i].style.backgroundColor = finColor;
	}
	bars[bars.length - 1].style.backgroundColor = finColor;
	enableButtons();
}
