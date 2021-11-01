const { getCodes } = require("./getCodes");

describe("getCodes", () => {
  it("Получение таблицы кодов для символов", () => {
    const result = getCodes("#a0#b1111#c1011#d1101# 1100");
    expect(Object.fromEntries(result)).toEqual({
      a: "0",
      b: "1111",
      c: "1011",
      d: "1101",
      " ": "1100",
    });
  });
});
