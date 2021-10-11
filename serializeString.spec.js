const { serializeString } = require("./serializeString");

describe("serializeString", () => {
  it("Сортированное представление строки вида {'char', 'count'}", () => {
    const result = serializeString("aaaabbbcc");
    expect(result).toEqual([
      { name: "c", count: 2 },
      { name: "b", count: 3 },
      { name: "a", count: 4 },
    ]);
  });

  it("Сортированное представление строки вида {'char', 'count'}", () => {
    const result = serializeString("aabbbcccc");
    expect(result).toEqual([
      { name: "a", count: 2 },
      { name: "b", count: 3 },
      { name: "c", count: 4 },
    ]);
  });
});
