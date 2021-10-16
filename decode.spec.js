const { decode } = require("./decode");
const { getCodes } = require("./getCodes");

describe("decode", () => {
  it("Декодирование", () => {
    const result = decode(
      "111101010100000000110010",
      getCodes("#a1#b01#c000#d0011#e0010")
    );
    expect(result).toBe("aaaabbbccde");
  });

  it("Декодирование", () => {
    const result = decode(
      "1111000001010100000000110010",
      getCodes("#a1#b01#c000#d0011#e0010")
    );
    expect(result).toBe("aaaaceabccde");
  });

  it("Декодирование", () => {
    const result = decode(
      "11110200001010100000000110010",
      getCodes("#a1#b01#c000#d0011#e0010")
    );
    expect(result).toBe("aaaa");
  });

  it("Декодирование", () => {
    const result = decode("0000", getCodes("#a0"));
    expect(result).toBe("aaaa");
  });
});
