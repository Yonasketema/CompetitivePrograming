function partitionLabels(s: string): number[] {
  let lastIndex = {};
  for (let i in s.split("")) {
    lastIndex[s[i]] = i;
  }

  let res = [];
  let size = 0;
  let end = 0;

  for (let i in s.split("")) {
    size += 1;
    end = Math.max(end, lastIndex[s[i]]);

    if (Number(i) === end) {
      res.push(size);
      size = 0;
    }
  }

  return res;
}
