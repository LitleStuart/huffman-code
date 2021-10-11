function decode(str, codes) {
  let index = str.indexOf("#");
  while (index != -1) {
    str = str.substring(index + 1, str.length);
    index = str.indexOf("#");
  }
  let currentCode = "";
  for (let i = 0; i < str.length; i++) {
    currentCode += str[i];
    codes.forEach(({ char, code }) => {
      if (currentCode == code) {
        i = str.indexOf(code);
        str = str.replace(code, char);
        currentCode = "";
      }
    });
  }
  return str;
}
exports.decode = decode;
