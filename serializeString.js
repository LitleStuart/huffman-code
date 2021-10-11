function serializeString(str) {
  const chars = new Set();
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (chars.has(char)) {
      result.forEach((element) => {
        if (element.name == char) {
          element.count += 1;
        }
      });
    } else {
      result.push({ name: char, count: 1, code: "" });
      chars.add(char);
    }
  }
  return result.sort((a, b) => a.count - b.count);
}
exports.serializeString = serializeString;
