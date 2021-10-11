const { serializeString } = require("./serializeString");

describe("serializeString", () => {
  it("Сортированное представление строки вида {'char', 'count'}", () => {
    const result = serializeString("aaaabbbcc");
    expect(result).toEqual([
      { name: "c", count: 2, code: "" },
      { name: "b", count: 3, code: "" },
      { name: "a", count: 4, code: "" },
    ]);
  });

  it("Сортированное представление строки вида {'char', 'count'}", () => {
    const result = serializeString("aabbbcccc");
    expect(result).toEqual([
      { name: "a", count: 2, code: "" },
      { name: "b", count: 3, code: "" },
      { name: "c", count: 4, code: "" },
    ]);
  });
});
