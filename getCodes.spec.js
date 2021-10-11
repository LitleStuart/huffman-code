const { getCodes } = require("./getCodes");

describe("getCodes", () => {
  it("Получение таблицы кодов для символов", () => {
    const result = getCodes("#a00##b01##c10##d11#00000000010101101011");
    expect(result).toEqual([
      { char: "a", code: "00" },
      { char: "b", code: "01" },
      { char: "c", code: "10" },
      { char: "d", code: "11" },
    ]);
  });
});
