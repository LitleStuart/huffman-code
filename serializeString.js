function serializeString(str) {
  const chars = new Set();
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (chars.has(char)) {
      result.forEach((element) => {
        if (element.char == char) {
          element.count += 1;
        }
      });
    } else {
      result.push({ char: char, count: 1 });
      chars.add(char);
    }
  }
  return result;
}
exports.serializeString = serializeString;
