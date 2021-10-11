function encode(str, codes) {
  let result = "";
  codes.forEach(({ char, code }) => (result += `#${char}${code}#`));
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    codes.forEach((element) => {
      if (element.char == char) {
        result += element.code;
      }
    });
  }
  return result;
}
exports.encode = encode;
