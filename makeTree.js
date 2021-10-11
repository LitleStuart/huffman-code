function makeTree(nodes) {
  const result = [];
  for (let i = 1; i < nodes.length; ) {
    const a = nodes[0];
    const b = nodes[1];
    const newNode = {
      name: a.name + b.name,
      count: a.count + b.count,
    };
    a.parent = newNode.name;
    b.parent = newNode.name;
    nodes.push(newNode);
    result.push(nodes.shift(), nodes.shift());
    nodes.sort((a, b) => {
      return a.count - b.count;
    });
  }
  result.push(nodes[0]);
  return result;
}

exports.makeTree = makeTree;
