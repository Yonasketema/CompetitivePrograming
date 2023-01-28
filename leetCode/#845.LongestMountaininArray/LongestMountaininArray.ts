function longestMountain(arr: number[]): number {
  let max = 0;

  for (let i = 1; i <= arr.length - 2; ) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      let l = i;
      let counter = 1;
      while (l > 0 && arr[l] > arr[l - 1]) {
        counter++;
        l--;
      }

      while (i < arr.length - 1 && arr[i] > arr[i + 1]) {
        i++;
        counter++;
      }

      max = Math.max(max, counter);
    } else {
      i++;
    }
  }

  return max;
}
