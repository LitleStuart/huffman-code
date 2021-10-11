const { makeTree } = require("./makeTree");

describe("makeTree", () => {
  it("Построение дерева", () => {
    const result = makeTree([
      { name: "b", count: 3 },
      { name: "a", count: 4 },
    ]);
    expect(result).toEqual([
      { name: "b", count: 3, parent: "ba" },
      { name: "a", count: 4, parent: "ba" },
      { name: "ba", count: 7 },
    ]);
  });

  it("Построение дерева", () => {
    const result = makeTree([
      { name: "c", count: 2 },
      { name: "b", count: 3 },
      { name: "a", count: 4 },
    ]);
    expect(result).toEqual([
      { name: "c", count: 2, parent: "cb" },
      { name: "b", count: 3, parent: "cb" },
      { name: "a", count: 4, parent: "acb" },
      { name: "cb", count: 5, parent: "acb" },
      { name: "acb", count: 9 },
    ]);
  });
});
