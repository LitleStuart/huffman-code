const { encode } = require("./encode");

describe("encode", () => {
  it("Кодирование строки", () => {
    const result = encode("aaaabbbccd", [
      { char: "a", code: "00" },
      { char: "b", code: "01" },
      { char: "c", code: "10" },
      { char: "d", code: "11" },
    ]);
    expect(result).toBe("#a00##b01##c10##d11#00000000010101101011");
  });
});
