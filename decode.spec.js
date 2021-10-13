const { decode } = require("./decode");
const { getCodes } = require("./getCodes");

describe("decode", () => {
  it("Декодирование", () => {
    const result = decode(
      "#a1##b01##c000##d0011##e0010#111101010100000000110010",
      getCodes("#a1##b01##c000##d0011##e0010#111101010100000000110010")
    );
    expect(result).toBe("aaaabbbccde");
  });
});
