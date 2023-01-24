function reverseWords(s: string): string {
  let wordi = 0;
  let lastSpacei = 0;

  let reverseWord = "";

  for (let i = 0; i <= s.length; i++) {
    if (s[i] === " " || i === s.length) {
      wordi = i - 1;

      while (wordi >= lastSpacei) {
        reverseWord += s[wordi];

        wordi--;
      }

      if (i !== s.length) {
        reverseWord += " ";
      }
      lastSpacei = i + 1;
    } else {
      wordi++;
    }
  }

  return reverseWord;
}
