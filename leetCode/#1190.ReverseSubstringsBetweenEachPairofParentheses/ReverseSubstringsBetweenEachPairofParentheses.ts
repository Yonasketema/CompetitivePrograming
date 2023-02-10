function reverseParentheses(s: string): string {
  const reverse = (str) => {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr;
  };
  const stack = [];
  let current = "";
  for (const c of s) {
    if (c === "(") {
      if (current !== "") {
        stack.push(current);
        current = "";
      }
      stack.push(c);
    } else if (c === ")") {
      while (stack[stack.length - 1] !== "(") {
        current = stack.pop() + current;
      }
      stack.pop();
      if (current !== "") {
        stack.push(reverse(current));
        current = "";
      }
    } else {
      current += c;
    }
  }
  if (current !== "") {
    stack.push(current);
  }
  return stack.join("");
}
