function encode(str, codes) {
  let codeString = (result = "");
  codes.forEach(({ char, code }) => (codeString += `#${char}${code}`));
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    codes.forEach((element) => {
      if (element.char == char) {
        result += element.code;
      }
    });
  }
  return [result, codeString];
}
exports.encode = encode;
