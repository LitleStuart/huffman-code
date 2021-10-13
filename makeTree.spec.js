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

  it("Построение дерева", () => {
    const result = makeTree([
      { name: "d", count: 1, code: "" },
      { name: "e", count: 1, code: "" },
      { name: "c", count: 2, code: "" },
      { name: "b", count: 3, code: "" },
      { name: "a", count: 4, code: "" },
    ]);
    expect(result).toEqual([
      { name: "d", count: 1, code: "", parent: "de" },
      { name: "e", count: 1, code: "", parent: "de" },
      { name: "de", count: 2, code: "", parent: "dec" },
      { name: "c", count: 2, code: "", parent: "dec" },
      { name: "b", count: 3, code: "", parent: "bdec" },
      { name: "dec", count: 4, code: "", parent: "bdec" },
      { name: "a", count: 4, code: "", parent: "abdec" },
      { name: "bdec", count: 7, code: "", parent: "abdec" },
      { name: "abdec", count: 11, code: "" },
    ]);
  });
});
