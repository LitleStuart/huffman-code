function getCodes(str) {
  const result = new Map();
  for (let i = 0; i < str.length; i++) {
    let code = "";
    for (let j = i + 2; j < str.length; j++) {
      const digit = str[j];
      if (digit !== "#") {
        code += digit;
      } else break;
    }
    result.set(str[i + 1], code);
    i += code.length + 1;
  }
  return result;
}
exports.getCodes = getCodes;
