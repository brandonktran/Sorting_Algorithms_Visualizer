async function merge(arr, start, mid, end) {
  let bars = document.querySelectorAll('.bar');
  let start2 = mid+1;
  if (arr[mid]<= arr[start2]) {
    return;
  }
  while (start <= mid && start2 <= end) {
    if (arr[start] <= arr[start2]) {
      start++;
    } else {
      let value = arr[start2];
      let index = start2;

      while (index != start) {
        bars[index].style.backgroundColor = compColor;
        bars[index].children[0].innerHTML = arr[index - 1];
        bars[index].style.height = `${arr[index - 1] * 6}px`;
        await new Promise((resolve) => setTimeout(resolve, delay));
        bars[index].style.backgroundColor = mainColor;
        bars = document.querySelectorAll('.bar');
        arr[index] = arr[index - 1];
        index--;
      }
      bars[start].style.backgroundColor = compColor;
      bars[start].children[0].innerHTML = value;
      bars[start].style.height = `${value * 6}px`;
      bars = document.querySelectorAll('.bar');
      bars[start].style.backgroundColor = mainColor;
      arr[start] = value;
      start++;
      mid++;
      start2++;
    }
  }
}


async function mergeSort_inplace(arr, start, end) {
  let bars = document.querySelectorAll('.bar');
  disableButtons();
  if (start < end){
    let mid = Math.floor((start + end) / 2);;

    await Promise.all([mergeSort_inplace(arr, start, mid), mergeSort_inplace(arr, mid + 1, end)]);

    await merge(arr, start, mid, end);
    enableButtons();
  }

  // async function checkSort(arr) {
  //   var sorted = false;
  //   for (let i = 0; i < bars.length - 1; i++) {
  //     if (Number(bars[i].childNodes[0].innerHTML) < Number(bars[i + 1].childNodes[0].innerHTML)) {
  //       sorted = true;
  //     }
  //   }
  //   if (sorted) {
  //     enableButtons();
  //   }
  // }

  // await checkSort(arr);

}
