function isValid(s: string): boolean {
  let stack = [];
  for (var i = 0; i < s.length; i++) {
    let l = stack.length - 1;
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      stack.push(s[i]);
    } else if (s[i] === "}" && stack[l] === "{") {
      stack.pop();
    } else if (s[i] === ")" && stack[l] === "(") {
      stack.pop();
    } else if (s[i] === "]" && stack[l] === "[") {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length > 0 ? false : true;
}
