const { encode } = require("./encode");

describe("encode", () => {
  it("Кодирование строки", () => {
    const result = encode("aaaabbbccde", [
      { char: "a", code: "1" },
      { char: "b", code: "01" },
      { char: "c", code: "000" },
      { char: "d", code: "0011" },
      { char: "e", code: "0010" },
    ]);
    expect(result).toBe(
      "#a1##b01##c000##d0011##e0010#111101010100000000110010"
    );
  });
});
