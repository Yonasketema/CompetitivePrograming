function compress(chars: string[]): number {
  let index = 0;
  let i = 0;
  while (i < chars.length) {
    let j = i;
    while (j < chars.length && chars[j] === chars[i]) {
      j++;
    }
    chars[index++] = chars[i];
    if (j - i > 1) {
      let count = j - i + "";
      for (let c in count.split("")) {
        chars[index++] = count[c];
      }
    }

    i = j;
  }
  return index;
}
