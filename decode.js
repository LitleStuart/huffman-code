function decode(str, codes) {
  let currentCode = "";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    currentCode += str[i];
    const values = new Set(codes.values());
    if (values.has(currentCode))
      codes.forEach((value, key) => {
        if (currentCode === value) {
          result += key;
          currentCode = "";
        }
      });
  }
  if (currentCode != "") {
    console.log("Error decoding");
  }
  return result;
}
exports.decode = decode;
