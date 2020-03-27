let bars = document.querySelectorAll('.bar');

async function swap(a, b) {
	await new Promise((resolve) => setTimeout(resolve, delay));

	let value1 = Number(bars[a].childNodes[0].innerHTML);
	let value2 = Number(bars[b].childNodes[0].innerHTML);
	bars[a].children[0].innerHTML = value2;
	bars[b].children[0].innerHTML = value1;
	bars[a].style.height = `${value2 * 6}px`;
	bars[b].style.height = `${value1 * 6}px`;
	bars = document.querySelectorAll('.bar');
	bars[a].style.backgroundColor = mainColor;
	bars[b].style.backgroundColor = mainColor;
}

async function quickSort(start, end) {
	disableButtons(0);

	if (start >= end) {
		return;
	}

	let index = await partition(start, end);

	await Promise.all([ quickSort(start, index - 1), quickSort(index + 1, end) ]);

	enableButtons();
}

async function partition(start, end) {
	let bars = document.querySelectorAll('.bar');
	let pivotIndex = start;
	let pivotValue = Number(bars[end].childNodes[0].innerHTML);

	for (let i = start; i < end; i++) {
		let value1 = Number(bars[i].childNodes[0].innerHTML);
		if (value1 < pivotValue) {
			bars[i].style.backgroundColor = compColor;
			bars[pivotIndex].style.backgroundColor = compColor;
			await swap(i, pivotIndex);
			pivotIndex++;
		}
	}

	bars[pivotIndex].style.backgroundColor = compColor;
	bars[end].style.backgroundColor = compColor;
	await swap(pivotIndex, end);

	return pivotIndex;
}
