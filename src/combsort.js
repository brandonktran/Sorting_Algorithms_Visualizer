async function combSort() {
	disableButtons();

	let bars = document.querySelectorAll('.bar');
	function checkSort(bars) {
		let sorted = true;
		for (let i = 0; i < bars.length - 1; i++) {
			if (Number(bars[i].childNodes[0].innerHTML) > Number(bars[i + 1].childNodes[0].innerHTML)) {
				sorted = false;
				break;
			}
		}
		return sorted;
	}

	let gap = bars.length;
	const shrinkFactor = 1.3;

	// Repeat iterations Until array is not sorted

	while (!checkSort(bars)) {
		// If not first gap  Calculate gap
		// if (counter > 0) gap = gap == 1 ? gap : Math.floor(gap / shrinkFactor);
		if (gap > 1) {
			gap = Math.floor(gap / shrinkFactor);
		}
		// Set front and back elements and increment to a gap
		let front = 0;
		let back = gap;

		while (back <= bars.length - 1) {
			let value1 = Number(bars[front].childNodes[0].innerHTML);
			let value2 = Number(bars[back].childNodes[0].innerHTML);
			if (value1 > value2) {
				bars[front].style.backgroundColor = compColor;
				bars[back].style.backgroundColor = compColor;
				bars[front].children[0].innerHTML = value2;
				bars[front].style.height = `${value2 * 6}px`;
				bars[back].children[0].innerHTML = value1;
				bars[back].style.height = `${value1 * 6}px`;
				bars = document.querySelectorAll('.bar');

				await new Promise((resolve) => setTimeout(resolve, delay));
			}

			bars[front].style.backgroundColor = mainColor;
			bars[back].style.backgroundColor = mainColor;

			// Increment and re-run swapping

			front++;
			back++;
		}
	}

	for (let i = 0; i < bars.length; i++) {
		await new Promise((resolve) =>
			setTimeout(() => {
				bars[i].style.backgroundColor = finColor;
				resolve();
			}, 10)
		);
	}
	enableButtons();
}
