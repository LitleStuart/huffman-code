const { setCodes } = require("./setCodes");

describe("setCodes", () => {
  it("Определение кода для символа", () => {
    const result = setCodes([
      { name: "b", count: 3, parent: "ba", code: "" },
      { name: "a", count: 4, parent: "ba", code: "" },
      { name: "ba", count: 7, code: "" },
    ]);
    expect(result).toEqual([
      { char: "b", code: "1" },
      { char: "a", code: "0" },
    ]);
  });

  it("Определение кода для символа", () => {
    const result = setCodes([
      { name: "c", count: 2, code: "", parent: "cb" },
      { name: "b", count: 3, code: "", parent: "cb" },
      { name: "a", count: 4, code: "", parent: "acb" },
      { name: "cb", count: 5, code: "", parent: "acb" },
      { name: "acb", count: 9, code: "" },
    ]);
    expect(result).toEqual([
      { char: "c", code: "01" },
      { char: "b", code: "00" },
      { char: "a", code: "1" },
    ]);
  });

  it("Определение кода для символа", () => {
    const result = setCodes([
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
    expect(result).toEqual([
      { char: "d", code: "0011" },
      { char: "e", code: "0010" },
      { char: "c", code: "000" },
      { char: "b", code: "01" },
      { char: "a", code: "1" },
    ]);
  });
});
