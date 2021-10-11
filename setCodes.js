function setCodes(tree) {
  for (let i = tree.length - 1; i >= 0; i--) {
    const parent = tree[i];
    let code = 0;
    for (let j = i - 1; j >= 0; j--) {
      const child = tree[j];
      if (child.parent == parent.name) {
        child.code += parent.code + code;
        code++;
        if (code == 2) {
          tree.splice(i, 1);
          break;
        }
      }
    }
  }
  const result = [];
  tree.forEach((element) => {
    const code = element.code;
    const char = element.name;
    result.push({ char: char, code: code });
  });
  return result;
}

exports.setCodes = setCodes;
