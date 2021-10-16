function getCodes(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let code = "";
    if (char == "#") {
      for (let j = i + 2; j < str.length; j++) {
        const digit = str[j];
        if (digit != "#") {
          code += digit;
        } else break;
      }
      result.push({ char: str[i + 1], code: code });
      i += code.length + 1;
    } else break;
  }
  return result;
}
exports.getCodes = getCodes;
