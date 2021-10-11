const { makeTree } = require("./makeTree");

describe("makeTree", () => {
  it("Построение дерева", () => {
    const result = makeTree([
      { name: "b", count: 3, code: "" },
      { name: "a", count: 4, code: "" },
    ]);
    expect(result).toEqual([
      { name: "b", count: 3, code: "", parent: "ba" },
      { name: "a", count: 4, code: "", parent: "ba" },
      { name: "ba", count: 7, code: "" },
    ]);
  });

  it("Построение дерева", () => {
    const result = makeTree([
      { name: "c", count: 2, code: "" },
      { name: "b", count: 3, code: "" },
      { name: "a", count: 4, code: "" },
    ]);
    expect(result).toEqual([
      { name: "c", count: 2, code: "", parent: "cb" },
      { name: "b", count: 3, code: "", parent: "cb" },
      { name: "a", count: 4, code: "", parent: "acb" },
      { name: "cb", count: 5, code: "", parent: "acb" },
      { name: "acb", count: 9, code: "" },
    ]);
  });
});
