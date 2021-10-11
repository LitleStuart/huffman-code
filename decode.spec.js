const { decode } = require("./decode");
const { getCodes } = require("./getCodes");

describe("decode", () => {
  it("Декодирование", () => {
    const result = decode(
      "#a00##b01##c10##d11#00000000010101101011",
      getCodes("#a00##b01##c10##d11#00000000010101101011")
    );
    expect(result).toBe("aaaabbbccd");
  });
});
