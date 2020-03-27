const box = document.querySelector('.data-box');
let array;

function createBars(num) {
	// const num = Math.floor(Math.random() * (50 - 10)) + 10;
	const myNode = document.getElementById('box-data');
	myNode.innerHTML = '';

	for (let i = 0; i < num; i++) {
		const value = Math.floor(Math.random() * 100) + 1;

		const bar = document.createElement('div');
		bar.classList.add('bar');
		bar.style.height = `${value * 6}px`;
		//bar.style.transform = `translateX(${i * 800/num}px)`;
		let width = 60.51295 + (1.322553 - 60.51295) / (1 + (num / 155.6546) ** 2.583344);
		bar.style.width = 100 / (num + width) + '%';
		// bar.style.transform = `translateX(${i * 1200/num + 2}px)`;
		bar.style.transform = `translateX(${2+i * (100 + 7)}%)`;

		// const barLabel = document.createElement("label");
		let barLabel = document.createElement('label');
		barLabel.classList.add('bar_id');
		barLabel.innerHTML = value;
		barLabel.innerHTML.fontsize = "50px";

		bar.appendChild(barLabel);
		box.appendChild(bar);
	}

	// change bar label wid
	let bars = document.querySelectorAll('.bar');
	// for (i = 0; i < document.querySelectorAll(".bar").length; i++) {
	//   bars[i].childNodes[0].style.fontSize = `${800/num-4}px`;
	// }

	// for (i = 0; i < document.querySelectorAll(".bar").length; i++) {
	//   bars[i].removeChild(bars[i].children[0]);
	//   //children[0].innerHTML = newHeight;
	// }
	array = createArrayofValues();
	return bars;
}

// original color
const mainColor = '#de5d83';

// color when compared
const compColor = '#94a8b3'; //#222c3c '#FF4949'

// color when in place (or done) '#58ffee'
const finColor = '#222c3c';

createBars(40);

function createArrayofValues() {
	let array = [];
	let bars = document.querySelectorAll('.bar');
	for (let i = 0; i < bars.length; i++) {
		array.push(Number(bars[i].childNodes[0].innerHTML));
	}
	return array;
}

array = createArrayofValues();
let array2 = createArrayofValues();
let delay = 10;
array2 = array2.sort((a, b) => a - b);

function disableButtons() {
	document.getElementById('bSort').disabled = true;
	document.getElementById('sSort').disabled = true;
	document.getElementById('iSort').disabled = true;
	document.getElementById('cSort').disabled = true;
	document.getElementById('mSort').disabled = true;
	document.getElementById('hSort').disabled = true;
	document.getElementById('qSort').disabled = true;
	document.getElementById('generate').disabled = true;
	document.getElementById('sliderRange').disabled = true;
}

function enableButtons() {
	document.getElementById('bSort').disabled = false;
	document.getElementById('sSort').disabled = false;
	document.getElementById('iSort').disabled = false;
	document.getElementById('cSort').disabled = false;
	document.getElementById('mSort').disabled = false;
	document.getElementById('hSort').disabled = false;
	document.getElementById('qSort').disabled = false;
	document.getElementById('generate').disabled = false;
	document.getElementById('sliderRange').disabled = false;
}

// function arraysAreEqual(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) return false;
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// }

//slider- change number of bars
let rangeslider = document.getElementById('sliderRange');
let output = document.getElementById('demo');
output.innerHTML = rangeslider.value;

rangeslider.oninput = function() {
	output.innerHTML = this.value;
	createBars(parseInt(this.value));
	// createArrayofValues();
	// let array=createArrayofValues();
	// getMergeSortframes(array);
};

//speed slider- change how fast
let speedslider = document.getElementById('speedRange');
let output2 = document.getElementById('demo2');
output2.innerHTML = speedslider.value;

speedslider.oninput = function() {
	output2.innerHTML = this.value;
	delay = parseInt(this.value);
};

let current = function currentValue() {
	return parseInt(output.innerHTML);
};

// when click generate new bars and then sort, it sorts the previous array of values, need to fix
// also only sorts the first 20, need to update current array
// input fields for speed, maybe give own array values

// let rangeslider = document.getElementById("sliderRange");
// let output = document.getElementById("demo");
// output.innerHTML = rangeslider.value;

// rangeslider.oninput = function () {
//   output.innerHTML = this.value;
//   console.log(typeof this.value);
//   createBars(parseInt(this.value));
// }
