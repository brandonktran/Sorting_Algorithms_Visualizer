async function insertionSort() {
	disableButtons();

	let bars = document.querySelectorAll('.bar');
	for (let i = 0; i < bars.length; i++) {
		let key = bars[i];
		let keynum = Number(key.childNodes[0].innerHTML);
		let j;

		await new Promise((resolve) => setTimeout(resolve, delay));

		for (j = i - 1; j >= 0 && Number(bars[j].childNodes[0].innerHTML) > keynum; j--) {
			const value1 = Number(bars[j].childNodes[0].innerHTML);
			const value2 = Number(bars[j + 1].childNodes[0].innerHTML);
			bars[i].style.backgroundColor = compColor;
			bars[j + 1].style.backgroundColor = compColor;
			//Number(bars[j+1].childNodes[0].innerHTML) = Number(bars[j].childNodes[0].innerHTML);
			bars[j].children[0].innerHTML = value2;
			bars[j + 1].children[0].innerHTML = value1;
			bars[j].style.height = `${value2 * 6}px`;
			bars[j + 1].style.height = `${value1 * 6}px`;
			bars = document.querySelectorAll('.bar');

			await new Promise((resolve) => setTimeout(resolve, delay));

			bars[i].style.backgroundColor = mainColor;
			bars[j + 1].style.backgroundColor = mainColor;
		}
		bars[j + 1] = key;
		//bars = document.querySelectorAll(".bar");
	}

	for (let i = 0; i < bars.length; i++) {
		await new Promise((resolve) =>
			setTimeout(() => {
				bars[i].style.backgroundColor = finColor;
				resolve();
			}, delay)
		);
	}

	//return arr;
	enableButtons();
}
