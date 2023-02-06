function chalkReplacer(chalk: number[], k: number): number {
  let total = 0;
  for (let i = 0; i < chalk.length; i++) {
    total += chalk[i];
  }

  if (k % total === 0) {
    return 0;
  }

  let left = k % total;

  for (let i = 0; i < chalk.length; i++) {
    left -= chalk[i];
    if (left < 0) return i;
  }
}
