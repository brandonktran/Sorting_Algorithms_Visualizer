async function heapify(arr, length, i) {
	let largest = i;
	let left = i * 2 + 1;
	let right = left + 1;
	let bars = document.querySelectorAll('.bar');

	if (left < length && arr[left] > arr[largest]) {
		largest = left;
	}

	if (right < length && arr[right] > arr[largest]) {
		largest = right;
	}

	await new Promise((resolve) => setTimeout(resolve, delay));

	if (largest != i) {
		bars[i].style.backgroundColor = compColor;
		bars[largest].style.backgroundColor = compColor;
		bars[i].children[0].innerHTML = arr[largest];
		bars[largest].children[0].innerHTML = arr[i];
		bars[i].style.height = `${arr[largest] * 6}px`;
		bars[largest].style.height = `${arr[i] * 6}px`;
		bars = document.querySelectorAll('.bar');

		await new Promise((resolve) => setTimeout(resolve, delay));

		bars[i].style.backgroundColor = mainColor;
		bars[largest].style.backgroundColor = mainColor;
		[ arr[i], arr[largest] ] = [ arr[largest], arr[i] ];

		await heapify(arr, length, largest);
	}
}

async function heapSort(arr) {
	disableButtons();
	let bars = document.querySelectorAll('.bar');
	let length = arr.length;
	let i = Math.floor(length / 2 - 1);
	let k = length - 1;

	while (i >= 0) {
		await heapify(arr, length, i);
		i--;
	}
	await new Promise((resolve) => setTimeout(resolve, delay));

	while (k >= 0) {
		bars[0].style.backgroundColor = compColor;
		bars[k].style.backgroundColor = compColor;
		bars[0].children[0].innerHTML = arr[k];
		bars[k].children[0].innerHTML = arr[0];
		bars[0].style.height = `${arr[k] * 6}px`;
		bars[k].style.height = `${arr[0] * 6}px`;
		bars = document.querySelectorAll('.bar');

		await new Promise((resolve) => setTimeout(resolve, delay));

		bars[0].style.backgroundColor = mainColor;
		bars[k].style.backgroundColor = finColor;
		[ arr[0], arr[k] ] = [ arr[k], arr[0] ];

		await heapify(arr, k, 0);
		k--;
	}
	enableButtons();
	return arr;
}
