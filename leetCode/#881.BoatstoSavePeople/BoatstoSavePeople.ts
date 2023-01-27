function numRescueBoats(people: number[], limit: number): number {
  let sortW = people.sort((a, b) => a - b);
  let start = 0;
  let end = people.length - 1;
  let boot = 0;

  while (start <= end) {
    if (sortW[start] + sortW[end] <= limit) {
      boot++;
      start++;
      end--;
    } else {
      boot++;
      end--;
    }
  }

  return boot;
}
