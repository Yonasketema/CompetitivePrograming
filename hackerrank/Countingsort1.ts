function countingSort(arr: number[]): number[] {
  let freqArr = new Array(100).fill(0);

for (let i of arr) {
  freqArr[i] += 1;
}

return freqArr;
}
